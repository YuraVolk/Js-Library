import type { MarqueeCarouselComponent } from "lit/src/components/marquee-carousel/marqueeCarousel";
import "../../../components/litEntry";
import "../../../global.css";

import { LitElement, html } from "lit";
import { customElement, state } from "lit/decorators.js";

import("../header");
import("../sidebar");
import("../../../components/marquee-carousel/marqueeCarousel")
	.then(({ MarqueeCarouselComponent }) => {
		window.customElements.define("marquee-carousel-component", MarqueeCarouselComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("marquee-carousel-application-example-1")
export class MarqueeCarouselApplicationExample1 extends LitElement {
	render() {
		return html`
			<marquee-carousel-component
				repetitions=${3}
				.renderItem=${(i: number) =>
					html`<span slot=${i}
						>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua.&nbsp;</span
					>`}
			>
			</marquee-carousel-component>
		`;
	}
}

@customElement("marquee-carousel-application-example-2")
export class MarqueeCarouselApplicationExample2 extends LitElement {
	render() {
		return html`
			<marquee-carousel-component
				repetitions=${3}
				isReversed
				.renderItem=${(i: number) =>
					html`<span slot=${i}
						>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua.&nbsp;</span
					>`}
			>
			</marquee-carousel-component>
		`;
	}
}

@customElement("marquee-carousel-application-example-3")
export class MarqueeCarouselApplicationExample3 extends LitElement {
	@state()
	private _isPaused = false;

	render() {
		return html`
			<marquee-carousel-component
				repetitions=${3}
				?isPaused=${this._isPaused}
				@mouseover=${() => {
					this._isPaused = true;
				}}
				@mouseleave=${() => {
					this._isPaused = false;
				}}
				.renderItem=${(i: number) =>
					html`<span slot=${i}
						>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
						aliquyam erat, sed diam voluptua.&nbsp;</span
					>`}
			>
			</marquee-carousel-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"marquee-carousel-component": MarqueeCarouselComponent;
		"marquee-carousel-application-example-1": MarqueeCarouselApplicationExample1;
		"marquee-carousel-application-example-2": MarqueeCarouselApplicationExample2;
		"marquee-carousel-application-example-3": MarqueeCarouselApplicationExample3;
	}
}
