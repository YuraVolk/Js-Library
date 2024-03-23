import type { ZoomComponent } from "lit/src/components/zooming-image/zoomingImage";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import slide0 from "../../../../../assets/img/slide0.png";

import("../header");
import("../sidebar");
import("../../../components/zooming-image/zoomingImage")
	.then(({ ZoomComponent }) => {
		window.customElements.define("zooming-image-component", ZoomComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("zooming-image-application-example-1")
export class ZoomingImageApplicationExample1 extends LitElement {
	static styles = css`
		.zoom-wrap {
			display: block;
			width: 370px;
			height: 220px;
		}

		.zoom-image {
			width: 100%;
			box-sizing: border-box;
			border: 16px solid #333;
			height: auto;
		}

		.zoom-glass {
			width: 60px;
			height: 60px;
			pointer-events: none;
			z-index: 99;
			transform: scale(1.5);
			transition: opacity 0.2s;
			box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
			opacity: 0;
		}

		.zoom-image:hover + .zoom-glass {
			opacity: 1;
		}
	`;

	render() {
		return html`
			<zooming-image-component class="zoom-wrap" autoConfigureGlassSource>
				<img src=${slide0} alt="Zoom Image" class="zoom-image" slot="image" />
				<div class="zoom-glass" slot="glass"></div>
			</zooming-image-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"zooming-image-component": ZoomComponent;
		"zooming-image-application-example-1": ZoomingImageApplicationExample1;
	}
}
