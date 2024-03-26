import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { AccordionListConfiguration } from "shared/component/accordion";
import { provide } from "@lit/context";
import { AccordionItemComponent } from "./accordionItem";
import { AccordionContext, accordionContext } from "./context";

export class AccordionComponent extends LitElement implements AccordionListConfiguration {
	static styles = css`
		:host {
			display: block;
		}
	`;

	@property({ type: Boolean })
	multiple = false;
	@provide({ context: accordionContext })
	_accordionContext: AccordionContext = {
		expandedIndex: "",
		setExpandedIndex: (newIndex: string) => {
			const newContext = { ...this._accordionContext };
			if (!this.multiple) {
				newContext.expandedIndex = newContext.expandedIndex === newIndex ? "" : newIndex;
			} else {
				if (typeof newContext.expandedIndex === "string") newContext.expandedIndex = [];
				if (newContext.expandedIndex.includes(newIndex)) {
					newContext.expandedIndex = newContext.expandedIndex.filter((id) => id !== newIndex);
				} else newContext.expandedIndex = [...newContext.expandedIndex, newIndex];
			}

			this._accordionContext = newContext;
		}
	};

	render() {
		return html`<slot></slot>`;
	}
}

export { AccordionItemComponent };
