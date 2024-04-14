import type { ZoomingImage, ZoomingImageGlass } from "lit/src/components/zooming-image/zoomingImage";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html, unsafeCSS } from "lit";
import { customElement } from "lit/decorators.js";

import slide0 from "../../../../../assets/img/slide0.png";
import { createRef, ref } from "lit/directives/ref.js";
import { GlassMoveEvent } from "lit/src/components/zooming-image/events";

import("../header");
import("../sidebar");
import("../../../components/zooming-image/zoomingImage")
	.then(({ ZoomingImage, ZoomingImageGlass }) => {
		window.customElements.define("zooming-image-component", ZoomingImage);
		window.customElements.define("zooming-image-glass-component", ZoomingImageGlass);
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
			background-image: ${unsafeCSS(`url("${slide0}")`)};
			opacity: 0;
		}

		.zoom-image:hover + .zoom-glass {
			opacity: 1;
		}
	`;

	private _zoomingImage = createRef<ZoomingImage>();

	render() {
		return html`
			<zooming-image-component class="zoom-wrap" ${ref(this._zoomingImage)}>
				<img class="zoom-image" src=${slide0} alt="Example image" slot="image" />
				<zooming-image-glass-component
					class="zoom-glass"
					@glass-move=${(e: GlassMoveEvent) => {
						this._zoomingImage.value?.onMouseMove(e.event);
					}}
					slot="glass"
				></zooming-image-glass-component>
			</zooming-image-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"zooming-image-component": ZoomingImage;
		"zooming-image-glass-component": ZoomingImageGlass;
		"zooming-image-application-example-1": ZoomingImageApplicationExample1;
	}
}
