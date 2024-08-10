import { customElement } from "lit/decorators.js";
import { LitElement, css, html } from "lit";

import type { BackfaceCarousel } from "lit/src/components/backface-carousel/backfaceCarousel";
import type { BackfaceCarouselItem } from "lit/src/components/backface-carousel/backfaceCarouselItem";
import "../../../components/litEntry";
import "../../../global.css";

import slide0 from "../../../../../assets/img/slide0.png";
import slide1 from "../../../../../assets/img/slide1.png";
import slide2 from "../../../../../assets/img/slide2.png";
import slide3 from "../../../../../assets/img/slide3.png";
import slide4 from "../../../../../assets/img/slide4.png";
import slide5 from "../../../../../assets/img/slide5.png";

import("../header");
import("../sidebar");
import("../../../components/backface-carousel/backfaceCarousel")
	.then(({ BackfaceCarousel, BackfaceCarouselItem }) => {
		window.customElements.define("backface-carousel-component", BackfaceCarousel);
		window.customElements.define("backface-carousel-item-component", BackfaceCarouselItem);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

const styles = css`
	img {
		width: 100%;
		height: 100%;
	}
`;

@customElement("backface-carousel-application-example-1")
class BackfaceCarouselApplicationExample1 extends LitElement {
	static styles = styles;

	render() {
		return html`<backface-carousel-component showArrows showToggles allowSwitchingOrientation>
			<backface-carousel-item-component>
				<img src=${slide1} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide0} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide2} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide3} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide4} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide5} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide0} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide1} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide2} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide3} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide4} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide5} alt="Example Image" />
			</backface-carousel-item-component>
		</backface-carousel-component>`;
	}
}

@customElement("backface-carousel-application-example-2")
class BackfaceCarouselApplicationExample2 extends LitElement {
	static styles = styles;

	render() {
		return html`<backface-carousel-component isVertical showArrows allowSwitchingOrientation>
			<backface-carousel-item-component>
				<img src=${slide1} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide0} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide2} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide3} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide4} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide5} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide0} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide1} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide2} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide3} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide4} alt="Example Image" />
			</backface-carousel-item-component>
			<backface-carousel-item-component>
				<img src=${slide5} alt="Example Image" />
			</backface-carousel-item-component>
		</backface-carousel-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"backface-carousel-component": BackfaceCarousel;
		"backface-carousel-item-component": BackfaceCarouselItem;
		"backface-carousel-application-example-1": BackfaceCarouselApplicationExample1;
		"backface-carousel-application-example-2": BackfaceCarouselApplicationExample2;
	}
}
