import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";

export class StickyHeaderElement extends LinkedItemMixin(LitElement) {
    static styles = css`
        :host {
            display: contents;
        }

		.sticky-header {
			transition: all 0.3s ease-in-out;
		}
    `;

	protected getUid() {
		return "sticky-header";
	}

	render() {
		return html`<div class="sticky-header" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</div>`;
	}
}
