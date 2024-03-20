import type { CarouselItem, MenuCarouselComponent } from "lit/src/components/menu-carousel/menuCarousel";
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
import("../../../components/menu-carousel/menuCarousel")
	.then(({ MenuCarouselComponent, CarouselItem }) => {
		window.customElements.define("menu-carousel-component", MenuCarouselComponent);
		window.customElements.define("carousel-item-component", CarouselItem);
	})
	.catch((e) => {
		console.trace(e);
	});

@customElement("menu-carousel-application-example-1")
export class MenuCarouselApplicationExample1 extends LitElement {
	static styles = css`
		.carousel {
			width: 100%;
			height: 60vh;
		}

		carousel-item-component {
			width: 18vw;
		}

		.carousel-item {
			width: 100%;
			height: 100%;
		}
	`;

	render() {
		return html`
			<menu-carousel-component farScale="0.6" class="carousel">
				<carousel-item-component>
					<img class="carousel-item" src=${slide0} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide1} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide2} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide3} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide4} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide5} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide0} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide1} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide2} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide3} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide4} alt="Example Image" />
				</carousel-item-component>
				<carousel-item-component>
					<img class="carousel-item" src=${slide5} alt="Example Image" />
				</carousel-item-component>
			</menu-carousel-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"menu-carousel-component": MenuCarouselComponent;
		"carousel-item-component": CarouselItem;
		"menu-carousel-application-example-1": MenuCarouselApplicationExample1;
	}
}
