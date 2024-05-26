import { LitElement, PropertyValues, TemplateResult, css, html, render } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";
import { LinkedHashMap } from "../../utils/linkedHashMap";

declare global {
	interface HTMLElementTagNameMap {
		"transition-group-component": TransitionGroup;
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
