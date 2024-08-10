import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";

export class GalleryCarouselItem extends LinkedItemMixin(LitElement) {
	static styles = css`
		:host {
			display: contents;
		}

		.gallery-carousel-item {
			all: inherit;
			display: inline-block;
			min-width: 100%;
			height: 100%;
		}

		::slotted(*) {
			width: 100%;
			height: 100%;
		}
	`;

	render() {
		return html`<li class="gallery-carousel-item" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</li>`;
	}
}
