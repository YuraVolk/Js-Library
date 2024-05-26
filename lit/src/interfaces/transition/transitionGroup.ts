import { LitElement, PropertyValues, TemplateResult, css, html, render } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { assertNonUndefined, assertNonUndefinedDevOnly } from "shared/utils/utils";

declare global {
	interface HTMLElementTagNameMap {
		"transition-group-component": TransitionGroup;
	}
}

class Node<K, V> {
	prev?: Node<K, V>;
	next?: Node<K, V>;
	constructor(
		public key: K,
		public value: V
	) {}
}

class LinkedHashMap<K, V> {
	private map = new Map<K, Node<K, V>>();
	private head?: Node<K, V>;
	private tail?: Node<K, V>;

	set(key: K, value: V) {
		if (this.map.has(key)) {
			const node = this.map.get(key);
			assertNonUndefinedDevOnly(node);
			node.value = value;
		} else {
			const newNode = new Node(key, value);
			if (this.tail) {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			} else this.head = this.tail = newNode;

			this.map.set(key, newNode);
		}
	}

	has(key: K): boolean {
		return this.map.has(key);
	}

	get(key: K): V {
		const node = this.map.get(key);
		assertNonUndefined(node);
		return node.value;
	}

	delete(key: K) {
		if (this.map.has(key)) {
			const node = this.map.get(key);
			assertNonUndefinedDevOnly(node);
			if (node.prev) node.prev.next = node.next;
			if (node.next) node.next.prev = node.prev;
			if (node === this.head) this.head = node.next;
			if (node === this.tail) this.tail = node.prev;
			this.map.delete(key);
		}
	}

	insertAt(index: number, key: K, value: V) {
		if (index < 0 || index > this.map.size) {
			throw new Error("Index out ouf bounds");
		} else if (this.map.has(key)) {
			throw new Error("Key already exists");
		}

		const newNode = new Node(key, value);
		if (index === this.map.size) {
			if (this.tail) {
				this.tail.next = newNode;
				newNode.prev = this.tail;
				this.tail = newNode;
			} else this.head = this.tail = newNode;
		} else {
			let current = this.head;
			for (let i = 0; i < index; i++) current = current?.next;
			assertNonUndefined(current);

			newNode.next = current;
			newNode.prev = current.prev;
			if (current.prev) {
				current.prev.next = newNode;
			} else this.head = newNode;
			current.prev = newNode;
		}

		this.map.set(key, newNode);
	}

	copy(): LinkedHashMap<K, V> {
		const newMap = new LinkedHashMap<K, V>();
		let current = this.head;
		while (current) {
			newMap.set(current.key, current.value);
			current = current.next;
		}

		return newMap;
	}

	[Symbol.iterator](): Iterator<[K, V], undefined> {
		let current = this.head;
		return {
			next() {
				if (current) {
					const value: [K, V] = [current.key, current.value];
					current = current.next;
					return { value, done: false };
				} else {
					return { done: true };
				}
			}
		};
	}
}

type OnExitedFunction = (child: TransitionGroupRenderer) => void;
export interface TransitionGroupRenderer {
	key: string;
	isActive: boolean;
	onExited: OnExitedFunction;
	render: (props: Omit<this, "render" | "key">) => TemplateResult<1>;
}

type ChildMapping = LinkedHashMap<string, TransitionGroupRenderer>;

const getChildMapping = (children: TransitionGroupRenderer[], factory?: (renderer: TransitionGroupRenderer) => TransitionGroupRenderer) => {
	const mapper = (renderer: TransitionGroupRenderer) => (factory ? factory(renderer) : renderer);
	const result: ChildMapping = new LinkedHashMap();
	for (const child of children) result.set(child.key, mapper(child));
	return result;
};

const mergeChildMappings = (prev: ChildMapping = new LinkedHashMap(), next: ChildMapping = new LinkedHashMap()): ChildMapping => {
	const getValueForKey = (key: string) => (next.has(key) ? next.get(key) : prev.get(key));
	const nextKeysPending: Record<string, string[]> = {};

	let pendingKeys: string[] = [];
	for (const [prevKey] of prev) {
		if (next.has(prevKey)) {
			if (pendingKeys.length) {
				nextKeysPending[prevKey] = pendingKeys;
				pendingKeys = [];
			}
		} else pendingKeys.push(prevKey);
	}

	const childMapping: ChildMapping = new LinkedHashMap();
	for (const [nextKey] of next) {
		if (nextKey in nextKeysPending) {
			for (const nextKeyPending of nextKeysPending[nextKey]) {
				childMapping.set(nextKeyPending, getValueForKey(nextKeyPending));
			}
		}

		childMapping.set(nextKey, getValueForKey(nextKey));
	}

	for (const key of pendingKeys) {
		childMapping.set(key, getValueForKey(key));
	}

	return childMapping;
};

const getInitialChildMapping = (children: TransitionGroupRenderer[], handleExited: OnExitedFunction) => {
	return getChildMapping(children, (renderer) => ({
		...renderer,
		isActive: true,
		onExited: handleExited
	}));
};

const getNextChildMapping = (nextChildren: TransitionGroupRenderer[], prevChildMapping: ChildMapping, handleExited: OnExitedFunction) => {
	const nextChildMapping = getChildMapping(nextChildren);
	const children = mergeChildMappings(prevChildMapping, nextChildMapping);

	for (const [key, child] of children) {
		const hasPrev = prevChildMapping.has(key);
		const hasNext = nextChildMapping.has(key);
		const prevChild = hasPrev ? prevChildMapping.get(key) : undefined;
		const isLeaving = hasPrev && !prevChild?.isActive;

		if (hasNext && (!hasPrev || isLeaving)) {
			children.set(key, {
				...child,
				isActive: true,
				onExited: () => {
					handleExited(child);
				}
			});
		} else if (!hasNext && hasPrev && !isLeaving) {
			children.set(key, {
				...child,
				isActive: false,
				onExited: () => {
					handleExited(child);
				}
			});
		} else if (prevChild) {
			children.set(key, {
				...child,
				isActive: prevChild.isActive,
				onExited: () => {
					handleExited(child);
				}
			});
		}
	}

	return children;
};

@customElement("transition-group-component")
export class TransitionGroup extends LitElement {
	static styles = css`
		:host {
			display: block;
		}
	`;

	@property({ type: Array })
	renderElements: TransitionGroupRenderer[] = [];

	@state()
	private _children: ChildMapping = new LinkedHashMap();
	private _firstRender = true;
	private _deletedKeys: string[] = [];

	private handleExited(child: TransitionGroupRenderer) {
		const currentChildMapping = getChildMapping(this.renderElements);
		if (currentChildMapping.has(child.key)) return;

		if (this.isConnected) {
			this._deletedKeys.push(child.key);
			this._children.delete(child.key);
			this.requestUpdate();
		}
	}

	protected willUpdate(_changedProperties: PropertyValues): void {
		const handleExited = this.handleExited.bind(this);
		for (const [property] of _changedProperties) {
			if (property === "renderElements") {
				if (this._firstRender) {
					this._children = getInitialChildMapping(this.renderElements, handleExited);
					this._firstRender = false;
				} else {
					this._children = getNextChildMapping(this.renderElements, this._children.copy(), handleExited);
				}

				break;
			}
		}
	}

	protected render(): unknown {
		const values = [...this._children].map(([, { render, onExited, isActive, key }]) => {
			return [key, render({ onExited, isActive })] as const;
		});

		render(
			repeat(
				values,
				([key]) => key,
				([, value]) => value
			),
			this
		);
		
		return html`<slot></slot>`;
	}
}
