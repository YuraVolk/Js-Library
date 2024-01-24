import type { ScrollingAdComponent } from "lit/src/components/scrolling-ad/scrollingAd";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/scrolling-ad/scrollingAd")
	.then(({ ScrollingAdComponent }) => {
		window.customElements.define("scrolling-ad-component", ScrollingAdComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"scrolling-ad-component": ScrollingAdComponent;
	}
}
