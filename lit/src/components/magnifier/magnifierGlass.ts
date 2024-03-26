import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";

export class ImageMagnifierGlass extends LinkedItemMixin(LitElement) {
	static styles = [
		css`
			:host {
				display: contents;
			}

			.magnifier-glass {
				all: inherit;
				display: revert;
				position: absolute;
				border-radius: 50%;
				background-repeat: no-repeat;
			}
		`
	];

	protected getUid() {
		return "magnifier-glass";
	}

	render() {
		return html`<div class="magnifier-glass" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</div>`;
	}
}
