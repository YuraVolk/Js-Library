import type { StickyHeaderComponent } from "lit/src/components/sticky-header/stickyHeader";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/sticky-header/stickyHeader")
	.then(({ StickyHeaderComponent }) => {
		window.customElements.define("sticky-header-component", StickyHeaderComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"sticky-header-component": StickyHeaderComponent;
	}
}
