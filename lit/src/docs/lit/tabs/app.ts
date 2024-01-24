import type { TabsComponent } from "lit/src/components/tabs/tabs";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/tabs/tabs")
	.then(({ TabsComponent }) => {
		window.customElements.define("tabs-component", TabsComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"tabs-component": TabsComponent;
	}
}
