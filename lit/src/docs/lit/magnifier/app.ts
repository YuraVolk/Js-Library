import type { ImageMagnifierComponent } from "lit/src/components/magnifier/magnifier";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import slide0 from "../../../../../assets/img/slide0.png";
import slide0webp from "../../../../../assets/img/slide0.webp";

import("../header");
import("../sidebar");
import("../../../components/magnifier/magnifier")
	.then(({ ImageMagnifierComponent }) => {
		window.customElements.define("image-magnifier-component", ImageMagnifierComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

@customElement("magnifier-application-example-1")
export class MagnifierApplicationExample1 extends LitElement {
	static styles = css`
		.magnifier {
			position: relative;
			display: block;
			border: 3px solid #333333;
			width: 370px;
			height: 220px;
		}

		.magnifier__glass {
			position: absolute;
			top: -25px;
			left: -25px;
			width: 70px;
			height: 70px;
			border: 2px solid #222;
			border-radius: 50%;
			cursor: zoom-in;
			background-repeat: no-repeat;
		}
	`;

	render() {
		return html`
			<image-magnifier-component class="magnifier" autoConfigureGlassSource>
				<picture>
					<source type="image/webp" srcset=${slide0webp} />
					<img data-magnifier-content src=${slide0} alt="Image Example" />
				</picture>
				<div class="magnifier__glass" data-magnifier-glass></div>
			</image-magnifier-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"magnifier-component": ImageMagnifierComponent;
		"magnifier-application-example-1": MagnifierApplicationExample1;
	}
}
