import type { ParallaxComponent } from "lit/src/components/parallax/parallax";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/parallax/parallax")
	.then(({ ParallaxComponent }) => {
		window.customElements.define("parallax-component", ParallaxComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"parallax-component": ParallaxComponent;
	}
}
