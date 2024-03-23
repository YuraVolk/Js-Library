import type { GalleryCarouselComponent, GalleryCarouselItem } from "lit/src/components/gallery-carousel/galleryCarousel";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import slide0 from "../../../../../assets/img/slide0.png";
import slide1 from "../../../../../assets/img/slide1.png";
import slide2 from "../../../../../assets/img/slide2.png";
import slide3 from "../../../../../assets/img/slide3.png";
import slide4 from "../../../../../assets/img/slide4.png";
import slide5 from "../../../../../assets/img/slide5.png";

import("../header");
import("../sidebar");
import("../../../components/gallery-carousel/galleryCarousel")
	.then(({ GalleryCarouselComponent, GalleryCarouselItem }) => {
		window.customElements.define("gallery-carousel-component", GalleryCarouselComponent);
		window.customElements.define("gallery-carousel-item-component", GalleryCarouselItem);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

const styles = css`
	.gallery-wrap {
		display: block;
		width: 370px;
		height: 220px;
		margin: 0 auto 40px;
	}
`;

@customElement("gallery-carousel-application-example-1")
export class GalleryCarouselApplicationExample1 extends LitElement {
	static styles = styles;

	render() {
		return html`
			<gallery-carousel-component class="gallery-wrap" showArrows showToggles smoothDiametralTransition>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide0} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide1} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide2} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide3} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide4} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide5} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide0} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide1} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide2} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide3} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide4} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide5} alt="Example Image" />
				</gallery-carousel-item-component>
			</gallery-carousel-component>
		`;
	}
}

@customElement("gallery-carousel-application-example-2")
export class GalleryCarouselApplicationExample2 extends LitElement {
	static styles = styles;

	render() {
		return html`
			<gallery-carousel-component class="gallery-wrap" showArrows>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide0} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide1} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide2} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide3} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide4} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide5} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide0} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide1} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide2} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide3} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide4} alt="Example Image" />
				</gallery-carousel-item-component>
				<gallery-carousel-item-component>
					<img class="gallery-item" src=${slide5} alt="Example Image" />
				</gallery-carousel-item-component>
			</gallery-carousel-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"gallery-carousel-component": GalleryCarouselComponent;
		"gallery-carousel-item-component": GalleryCarouselItem;
		"gallery-carousel-application-example-1": GalleryCarouselApplicationExample1;
		"gallery-carousel-application-example-2": GalleryCarouselApplicationExample2;
	}
}
