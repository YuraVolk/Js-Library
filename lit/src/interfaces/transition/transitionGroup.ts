import { LitElement, PropertyValues, TemplateResult, css, html, render } from "lit";
import { customElement, property } from "lit/decorators.js";
import { repeat } from "lit/directives/repeat.js";

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

type ChildMapping = Record<string, TransitionGroupRenderer>;

const getChildMapping = (children: TransitionGroupRenderer[], factory?: (renderer: TransitionGroupRenderer) => TransitionGroupRenderer) => {
	const mapper = (renderer: TransitionGroupRenderer) => (factory ? factory(renderer) : renderer);
	const result: ChildMapping = {};
	for (const child of children) result[child.key] = mapper(child);
	return result;
};

const mergeChildMappings = (prev: ChildMapping = {}, next: ChildMapping = {}): ChildMapping => {
	const getValueForKey = (key: string) => (key in next ? next[key] : prev[key]);
	const nextKeysPending: Record<string, string[]> = {};

	let pendingKeys: string[] = [];
	for (const prevKey in prev) {
		if (prevKey in next) {
			if (pendingKeys.length) {
				nextKeysPending[prevKey] = pendingKeys;
				pendingKeys = [];
			}
		} else pendingKeys.push(prevKey);
	}

	const childMapping: ChildMapping = {};
	for (const nextKey in next) {
		if (nextKey in nextKeysPending) {
			for (const nextKeyPending of nextKeysPending[nextKey]) {
				childMapping[nextKeyPending] = getValueForKey(nextKeyPending);
			}
		}

		childMapping[nextKey] = getValueForKey(nextKey);
	}

	for (const key of pendingKeys) {
		childMapping[key] = getValueForKey(key);
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

	Object.keys(children).forEach((key) => {
		const child = children[key];
		if (typeof child === "undefined") return;

		const hasPrev = key in prevChildMapping;
		const hasNext = key in nextChildMapping;
		const prevChild = prevChildMapping[key];
		const isLeaving = hasPrev && !prevChild.isActive;

		if (hasNext && (!hasPrev || isLeaving)) {
			children[key] = {
				...child,
				isActive: true,
				onExited: () => {
					handleExited(child);
				}
			};
		} else if (!hasNext && hasPrev && !isLeaving) {
			children[key] = {
				...child,
				isActive: false,
				onExited: () => {
					handleExited(child);
				}
			};
		} else {
			children[key] = {
				...child,
				isActive: prevChild.isActive,
				onExited: () => {
					handleExited(child);
				}
			};
		}
	});

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

	private _firstRender = true;
	private _children: ChildMapping = {};

	protected createRenderRoot(): HTMLElement | DocumentFragment {
		return this;
	}

	private triggerRerender() {
		this.requestUpdate();
		/*render(
			repeat(
				values,
				(_, i) => childrenValues[i].key,
				(value) => value
			),
			this
		);*/
	}

	private handleExited(child: TransitionGroupRenderer) {
		const currentChildMapping = getChildMapping(this.renderElements);
		if (child.key in currentChildMapping) return;

		if (this.isConnected) {
			const children = { ...this._children };
			delete children[child.key];
			this._children = children;
			this.triggerRerender();
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
					this._children = getNextChildMapping(this.renderElements, { ...this._children }, handleExited);
				}

				this.triggerRerender();
				break;
			}
		}
	}

	protected firstUpdated() {
		this.triggerRerender();
	}

	protected render(): unknown {
		const childrenValues = Object.values(this._children);
		const values = childrenValues.map(({ render, onExited, isActive }) => {
			return render({ onExited, isActive });
		});

		console.log(values.map((value) => value.values[3]).join(""));
		return values;
	}
}
