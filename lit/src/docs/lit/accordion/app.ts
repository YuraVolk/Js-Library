import type { AccordionComponent } from "lit/src/components/accordion/accordion";
import "../../../components/litEntry";
import "../../../global.css";

import("../header");
import("../sidebar");
import("../../../components/accordion/accordion")
	.then(({ AccordionComponent }) => {
		window.customElements.define("accordion-component", AccordionComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"accordion-component": AccordionComponent;
	}
}
