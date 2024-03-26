import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";

export class ImageComparatorItem extends LinkedItemMixin(LitElement) {
	static styles = css`
		:host {
			display: contents;
		}

		.image-comparator-item {
			all: inherit;
			display: revert;
			position: absolute;
			width: auto;
			height: auto;
			overflow: hidden;
		}
	`;

	render() {
		return html`<div class="image-comparator-item" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</div>`;
	}
}
