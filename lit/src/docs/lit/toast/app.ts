import type { ToastComponent } from "lit/src/components/toast/toast";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/toast/toast")
	.then(({ ToastComponent }) => {
		window.customElements.define("toast-component", ToastComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"toast-component": ToastComponent;
	}
}
