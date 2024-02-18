import type { BackfaceCarouselComponent } from "lit/src/components/backface-carousel/backfaceCarousel";
import "../../../components/litEntry";
import "../../../global.css";

import slide0 from "../../../../../assets/img/slide0.png";
import slide1 from "../../../../../assets/img/slide1.png";
import slide2 from "../../../../../assets/img/slide2.png";
import slide3 from "../../../../../assets/img/slide3.png";
import slide4 from "../../../../../assets/img/slide4.png";
import slide5 from "../../../../../assets/img/slide5.png";

import { customElement } from "lit/decorators.js";
import { LitElement, html } from "lit";

import("../header");
import("../sidebar");
import("../../../components/backface-carousel/backfaceCarousel")
	.then(({ BackfaceCarouselComponent }) => {
		window.customElements.define("backface-carousel-component", BackfaceCarouselComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

@customElement("backface-carousel-application-example-1")
class BackfaceCarouselApplicationExample1 extends LitElement {
	render() {
		return html`<backface-carousel-component>
			<img src=${slide1} alt="Example Image" />
			<img src=${slide0} alt="Example Image" />
			<img src=${slide2} alt="Example Image" />
			<img src=${slide3} alt="Example Image" />
			<img src=${slide4} alt="Example Image" />
			<img src=${slide5} alt="Example Image" />
			<img src=${slide0} alt="Example Image" />
			<img src=${slide1} alt="Example Image" />
			<img src=${slide2} alt="Example Image" />
			<img src=${slide3} alt="Example Image" />
			<img src=${slide4} alt="Example Image" />
			<img src=${slide5} alt="Example Image" />
		</backface-carousel-component>`;
	}
}

@customElement("backface-carousel-application-example-2")
class BackfaceCarouselApplicationExample2 extends LitElement {
	render() {
		return html`<backface-carousel-component ?ishorizontal=${false}>
			<img src=${slide1} alt="Example Image" />
			<img src=${slide0} alt="Example Image" />
			<img src=${slide2} alt="Example Image" />
			<img src=${slide3} alt="Example Image" />
			<img src=${slide4} alt="Example Image" />
			<img src=${slide5} alt="Example Image" />
			<img src=${slide0} alt="Example Image" />
			<img src=${slide1} alt="Example Image" />
			<img src=${slide2} alt="Example Image" />
			<img src=${slide3} alt="Example Image" />
			<img src=${slide4} alt="Example Image" />
			<img src=${slide5} alt="Example Image" />
		</backface-carousel-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"backface-carousel-component": BackfaceCarouselComponent;
		"backface-carousel-application-example-1": BackfaceCarouselApplicationExample1;
		"backface-carousel-application-example-2": BackfaceCarouselApplicationExample2;
	}
}
