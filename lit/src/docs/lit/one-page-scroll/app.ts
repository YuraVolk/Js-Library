import type { OnePageScrollComponent } from "lit/src/components/one-page-scroll/onePageScroll";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";

import("../header");
import("../sidebar");
import("../../../components/one-page-scroll/onePageScroll")
	.then(({ OnePageScrollComponent }) => {
		window.customElements.define("one-page-scroll-component", OnePageScrollComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

declare global {
	interface HTMLElementTagNameMap {
		"one-page-scroll-component": OnePageScrollComponent;
	}
}
