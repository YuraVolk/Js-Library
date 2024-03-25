import { LitElement, css, html } from "lit";
import { styleMap } from "lit/directives/style-map.js";
import { LinkedItemMixin } from "../../interfaces/hooks/linkedItems";

export class TableFilteringRow extends LinkedItemMixin(LitElement) {
    static styles = css`
        :host {
            display: contents;
        }

        .table-row {
            all: inherit;
            display: table-row;
            vertical-align: inherit;
            unicode-bidi: isolate;
            border-color: inherit;
        }

        ::slotted(*) {
            display: table-cell;
            vertical-align: inherit;
            text-align: -internal-center;
            unicode-bidi: isolate;
        }
    `;

	protected getUid() {
		return "table-row-" + super.getUid();
	}

	render() {
		return html`<div class="table-row" style=${styleMap(this.linkedItemStyles)}>
			<slot></slot>
		</div>`;
	}
}
