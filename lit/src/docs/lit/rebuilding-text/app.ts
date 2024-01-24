import type { RebuildingTextComponent } from "lit/src/components/rebuilding-text/rebuildingText";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/rebuilding-text/rebuildingText")
	.then(({ RebuildingTextComponent }) => {
		window.customElements.define("rebuilding-text-component", RebuildingTextComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"rebuilding-text-component": RebuildingTextComponent;
	}
}
