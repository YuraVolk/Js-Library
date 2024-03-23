import type { ImageMagnifierComponent, ImageMagnifierGlass } from "lit/src/components/magnifier/magnifier";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import slide0 from "../../../../../assets/img/slide0.png";

import("../header");
import("../sidebar");
import("../../../components/magnifier/magnifier")
	.then(({ ImageMagnifierComponent, ImageMagnifierGlass }) => {
		window.customElements.define("image-magnifier-component", ImageMagnifierComponent);
		window.customElements.define(
			"image-magnifier-glass",
			class extends ImageMagnifierGlass {
				static styles = [
					...ImageMagnifierGlass.styles,
					css`
						.magnifier-glass {
							top: -25px;
							left: -25px;
							width: 70px;
							height: 70px;
							border: 2px solid #222;
							cursor: zoom-in;
							background-repeat: no-repeat;
						}
					`
				];
			}
		);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("magnifier-application-example-1")
export class MagnifierApplicationExample1 extends LitElement {
	static styles = css`
		.magnifier {
			border: 3px solid #333333;
			width: 370px;
			height: 220px;
		}
	`;

	render() {
		return html`
			<image-magnifier-component class="magnifier" imageSource="${slide0}">
				<img src="${slide0}" alt="Example image" slot="image" />
				<image-magnifier-glass slot="glass"></image-magnifier-glass>
			</image-magnifier-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"image-magnifier-component": ImageMagnifierComponent;
		"image-magnifier-glass": ImageMagnifierGlass;
		"magnifier-application-example-1": MagnifierApplicationExample1;
	}
}
