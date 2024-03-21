import { consume, createContext, provide } from "@lit/context";
import { LitElement, css, html } from "lit";
import { query } from "lit/decorators.js";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";
import { LinkedRegistryRecord, CSSProperty } from "shared/hooks/useLinkedItem";
import { uid } from "shared/utils/utils";

type FilteredCSSStyleDeclaration = {
	[K in keyof CSSStyleDeclaration as CSSStyleDeclaration[K] extends CSSProperty
		? K extends string
			? K
			: never
		: never]: CSSStyleDeclaration[K];
};

export const linkedItemsContext = createContext<LinkedItems>(Symbol());
export type LinkedItems = LinkedRegistryRecord<keyof FilteredCSSStyleDeclaration, FilteredCSSStyleDeclaration>;
export type LinkedItem = LinkedItems[string];

type Constructor<T = {}> = new (...args: any[]) => T;

export declare class LinkedItemMixinInterface {
	readonly linkedUid: string;
	linkedItemsContext: LinkedItems;
	linkedItemStyles: StyleInfo;
	protected getUid(): string;
}

export const LinkedItemMixin = <T extends Constructor<LitElement>>(superClass: T) => {
	class Mixin extends superClass {
		readonly linkedUid: string;

		protected getUid() {
			return uid();
		}

		constructor(...args: any[]) {
			super(...args);
			this.linkedUid = this.getUid();
		}

		@query("*")
		_rootElement?: HTMLElement;

		@consume({ context: linkedItemsContext, subscribe: true })
		linkedItemsContext!: LinkedItems;

		get linkedItemStyles() {
			return this.linkedItemsContext[this.linkedUid].styles;
		}

		connectedCallback(): void {
			super.connectedCallback();

			if (!(this.linkedUid in this.linkedItemsContext)) {
				this.linkedItemsContext[this.linkedUid] = {
					element: this,
					styles: {}
				};
			}
		}

		protected firstUpdated(): void {
			if (this.linkedUid in this.linkedItemsContext) {
				this.linkedItemsContext[this.linkedUid].element = this._rootElement ?? this;
			}
		}

		disconnectedCallback(): void {
			super.disconnectedCallback();
			if (this.linkedUid in this.linkedItemsContext) delete this.linkedItemsContext[this.linkedUid];
		}
	}

	return Mixin as unknown as Constructor<LinkedItemMixinInterface> & T;
};

export declare class LinkedCarouselMixinInterface {
	linkedItemsContext: LinkedItems;
	protected get itemValues(): LinkedItem[];
	protected get itemKeys(): string[];
	protected itemEntries: Array<[string, LinkedItem]>;
}

export const LinkedCarouselMixin = <T extends Constructor<LitElement>>(superClass: T) => {
	class Mixin extends superClass {
		@provide({ context: linkedItemsContext })
		linkedItemsContext: LinkedItems = new Proxy<LinkedItems>({}, {
			set: (target, p, newValue: LinkedItem, receiver) => {		
				let styles = newValue.styles,
					element = newValue.element;

				const self = this;
				return Reflect.set(target, p, {
					get styles() {
						return styles;
					},
					set styles(newStyles: Partial<FilteredCSSStyleDeclaration>) {
						self.scheduleContextUpdate();
						styles = newStyles;
					},
					get element() {
						return element;
					},
					set element(newElement: HTMLElement) {
						element = newElement;
					}
				}, receiver);
			},
		});

		private async scheduleContextUpdate() {
			this.linkedItemsContext = { ...this.linkedItemsContext };
		}

		protected get itemValues() {
			return Object.values(this.linkedItemsContext);
		}

		protected get itemKeys() {
			return Object.keys(this.linkedItemsContext);
		}

		protected get itemEntries() {
			return Object.entries(this.linkedItemsContext);
		}

		protected set itemEntries(itemEntries: Array<[string, LinkedItem]>) {
			this.linkedItemsContext = Object.fromEntries(itemEntries);
		}
	}

	return Mixin as unknown as Constructor<LinkedCarouselMixinInterface> & T;
};

export class CarouselItem extends LinkedItemMixin(LitElement) {
	static styles = [
		css`
			:host {
				display: flex;
			}
		`
	];

	render() {
		return html`<div class="carousel-item" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</div>`;
	}
}
