import { LitElement, css, html } from "lit";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";
import { styleMap } from "lit/directives/style-map.js";

export class BackfaceCarouselItem extends LinkedItemMixin(LitElement) {
	static styles = css`
		:host {
			display: contents;
		}

		.backface-carousel-item {
			all: inherit;
			display: revert;
			position: relative;
			width: 100%;
			height: auto;
			padding: 0;
			opacity: 0.9999;
			backface-visibility: hidden;
		}

		:host(:not(:first-of-type)) .backface-carousel-item {
			position: absolute;
			left: 0;
			top: 0;
			margin: 0 auto;
			padding: 0 auto;
		}
	`;

	render() {
		return html`<li class="backface-carousel-item" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</li>`;
	}
}
