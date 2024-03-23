import type { AccordionComponent } from "lit/src/components/accordion/accordion";
import type { AccordionItemComponent } from "lit/src/components/accordion/accordionItem";
import "../../../components/litEntry";
import "../../../global.css";
import "./styles.css";

import("../header");
import("../sidebar");
import("../../../components/accordion/accordion")
	.then(({ AccordionComponent, AccordionItemComponent }) => {
		window.customElements.define("accordion-component", AccordionComponent);
		window.customElements.define("accordion-item-component", AccordionItemComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"accordion-component": AccordionComponent;
		"accordion-item-component": AccordionItemComponent;
	}
}
