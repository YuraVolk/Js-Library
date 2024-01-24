import type { RangeInputComponent } from "lit/src/components/range-input/rangeInput";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/range-input/rangeInput")
	.then(({ RangeInputComponent }) => {
		window.customElements.define("range-input-component", RangeInputComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"range-input-component": RangeInputComponent;
	}
}
