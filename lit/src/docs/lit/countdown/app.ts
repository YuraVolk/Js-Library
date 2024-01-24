import type { CountdownComponent } from "lit/src/components/countdown/countdown";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/countdown/countdown")
	.then(({ CountdownComponent }) => {
		window.customElements.define("countdown-component", CountdownComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"countdown-component": CountdownComponent;
	}
}
