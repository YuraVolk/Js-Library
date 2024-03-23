import type { PerspectiveCarouselComponent, CarouselItem } from "lit/src/components/perspective-carousel/perspectiveCarousel";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

import slide0 from "../../../../../assets/img/slide0.png";
import slide1 from "../../../../../assets/img/slide1.png";
import slide2 from "../../../../../assets/img/slide2.png";
import slide3 from "../../../../../assets/img/slide3.png";
import slide4 from "../../../../../assets/img/slide4.png";
import slide5 from "../../../../../assets/img/slide5.png";

import("../header");
import("../sidebar");
import("../../../components/perspective-carousel/perspectiveCarousel")
	.then(({ PerspectiveCarouselComponent, CarouselItem }) => {
		window.customElements.define("perspective-carousel-component", PerspectiveCarouselComponent);
		window.customElements.define("carousel-item-component", CarouselItem);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("perspective-carousel-application-example-1")
export class PerspectiveCarouselApplicationExample1 extends LitElement {
	render() {
		return html`
			<perspective-carousel-component allowSwitchingOrientation>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide0} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide1} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide2} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide3} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide4} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide5} alt="Example Image" />
				</carousel-item-component hasTransition>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide0} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide1} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide2} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide3} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide4} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component hasTransition>
					<img class="carousel-item" src=${slide5} alt="Example Image" />
				</carousel-item-component>
			</perspective-carousel-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"perspective-carousel-component": PerspectiveCarouselComponent;
		"carousel-item-component": CarouselItem;
		"perspective-carousel-application-example-1": PerspectiveCarouselApplicationExample1;
	}
}
