import type { CustomSelectComponent } from "lit/src/components/custom-select/customSelect";
import "../../../components/litEntry";
import "../../../global.css";

import("../header");
import("../sidebar");
import("../../../components/custom-select/customSelect")
	.then(({ CustomSelectComponent }) => {
		window.customElements.define("custom-select-component", CustomSelectComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"custom-select-component": CustomSelectComponent;
	}
}
