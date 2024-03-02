import { consume, createContext } from "@lit/context";
import { LitElement, PropertyValueMap } from "lit";
import { query, state } from "lit/decorators.js";
import { StyleInfo } from "lit/directives/style-map.js";
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
}

export const LinkedItemMixin = <T extends Constructor<LitElement>>(superClass: T) => {
	class Mixin extends superClass {
		@query("*")
		_rootElement?: HTMLElement;

		readonly linkedUid = uid();
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

	return Mixin as Constructor<LinkedItemMixinInterface> & T;
};
