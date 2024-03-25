import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";

export class TableFilteringHeader extends LinkedItemMixin(LitElement) {
    static styles = css`
        :host {
            display: contents;
        }

        .table-header {
            all: inherit;
            display: table-cell;
            font-weight: 700;
            vertical-align: inherit;
            text-align: -internal-center;
            unicode-bidi: isolate;
        }
    `;

	protected getUid() {
		return "table-header-" + super.getUid();
	}

	render() {
		return html`<div class="table-header" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</div>`;
	}
}
