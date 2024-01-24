import type { FloatingPanelComponent } from "lit/src/components/floating-panel/floatingPanel";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/floating-panel/floatingPanel")
	.then(({ FloatingPanelComponent }) => {
		window.customElements.define("floating-panel-component", FloatingPanelComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"floating-panel-component": FloatingPanelComponent;
	}
}
