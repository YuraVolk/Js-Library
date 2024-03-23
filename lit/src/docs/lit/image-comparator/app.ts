import type { ImageComparatorComponent, ImageComparatorItem } from "lit/src/components/image-comparator/imageComparator";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import slide0 from "../../../../../assets/img/slide0.png";
import slide1 from "../../../../../assets/img/slide1.png";
import slide2 from "../../../../../assets/img/slide2.png";
import slide3 from "../../../../../assets/img/slide3.png";
import slide0webp from "../../../../../assets/img/slide0.webp";
import slide1webp from "../../../../../assets/img/slide1.webp";
import slide2webp from "../../../../../assets/img/slide2.webp";
import slide3webp from "../../../../../assets/img/slide3.webp";

import("../header");
import("../sidebar");
import("../../../components/image-comparator/imageComparator")
	.then(({ ImageComparatorComponent, ImageComparatorItem }) => {
		window.customElements.define("image-comparator-component", ImageComparatorComponent);
		window.customElements.define("image-comparator-item-component", ImageComparatorItem);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("image-comparator-application-example-1")
export class ImageComparatorApplicationExample1 extends LitElement {
	static styles = css`
		.comparator {
			display: block;
			width: 350px;
			height: 200px;
			border: 4px solid #333;
			background-size: cover;
			background-repeat: no-repeat;
		}

		.comparator-element__image {
			display: block;
			width: 350px;
			height: 200px;
			box-sizing: border-box;
		}
	`;

	render() {
		return html`
			<image-comparator-component class="comparator">
				<image-comparator-item-component class="comparator-element">
					<picture class="comparator-element__image">
						<source type="image/webp" srcset=${slide0webp} />
						<img class="comparator-element__image" src=${slide0} alt="Comparison Slide" />
					</picture>
				</image-comparator-item-component>
				<image-comparator-item-component class="comparator-element">
					<picture class="comparator-element__image">
						<source type="image/webp" srcset=${slide1webp} />
						<img class="comparator-element__image" src=${slide1} alt="Comparison Slide" />
					</picture>
				</image-comparator-item-component>
				<image-comparator-item-component class="comparator-element">
					<picture class="comparator-element__image">
						<source type="image/webp" srcset=${slide2webp} />
						<img class="comparator-element__image" src=${slide2} alt="Comparison Slide" />
					</picture>
				</image-comparator-item-component>
				<image-comparator-item-component class="comparator-element">
					<picture class="comparator-element__image">
						<source type="image/webp" srcset=${slide3webp} />
						<img class="comparator-element__image" src=${slide3} alt="Comparison Slide" />
					</picture>
				</image-comparator-item-component>
			</image-comparator-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"image-comparator-component": ImageComparatorComponent;
		"image-comparator-item-component": ImageComparatorItem;
		"image-comparator-application-example-1": ImageComparatorApplicationExample1;
	}
}
