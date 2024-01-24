import type { TableFilteringComponent } from "lit/src/components/table-filtering/tableFiltering";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import tableFilteringIcon from "../../../../../assets/svg/filter-icon.svg";

import("../header");
import("../sidebar");
import("../../../components/table-filtering/tableFiltering")
	.then(({ TableFilteringComponent }) => {
		window.customElements.define("table-filtering-component", TableFilteringComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

@customElement("table-filtering-application-example-1")
export class TableFilteringApplicationExample1 extends LitElement {
	static styles = css`
		.table-wrap {
			display: block;
			width: 400px;
		}

		.table {
			width: 100%;
		}

		.table-head {
			background-color: #e2e2e2;
			color: #333;
			cursor: pointer;
		}

		.table-head__heading::after {
			display: inline-block;
			width: 15px;
			height: 15px;
			margin-left: 5px;
			background-image: var(--filteringIcon);
			background-repeat: no-repeat;
			background-size: cover;
			transform: translateY(12.5%);
			content: "";
		}

		.table-body-row:nth-child(even) {
			background-color: #e6e6e6;
			color: #333;
		}

		.table-body-row:nth-child(odd) {
			background-color: #555;
		}

		.table-body-row__cell {
			text-align: center;
		}
	`;

	render() {
		return html`
			<table-filtering-component class="table-wrap" filterableHeaders="1,2,3">
				<table class="table" style="--filteringIcon: url(${tableFilteringIcon})">
					<thead class="table-head">
						<th class="table-head__heading">Name</th>
						<th class="table-head__heading">Country</th>
						<th class="table-head__heading">Specialty</th>
					</thead>
					<tbody class="table-body">
						<tr class="table-body-row">
							<td class="table-body-row__cell">John</td>
							<td class="table-body-row__cell">Austria</td>
							<td class="table-body-row__cell">Designer</td>
						</tr>
						<tr class="table-body-row">
							<td class="table-body-row__cell">Mary</td>
							<td class="table-body-row__cell">Ireland</td>
							<td class="table-body-row__cell">Architect</td>
						</tr>
						<tr class="table-body-row">
							<td class="table-body-row__cell">Jane</td>
							<td class="table-body-row__cell">Australia</td>
							<td class="table-body-row__cell">QA Tester</td>
						</tr>
						<tr class="table-body-row">
							<td class="table-body-row__cell">Mark</td>
							<td class="table-body-row__cell">Russia</td>
							<td class="table-body-row__cell">Game Developer</td>
						</tr>
						<tr class="table-body-row">
							<td class="table-body-row__cell">Paul</td>
							<td class="table-body-row__cell">France</td>
							<td class="table-body-row__cell">Backend Developer</td>
						</tr>
					</tbody>
				</table>
			</table-filtering-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"table-filtering-component": TableFilteringComponent;
		"table-filtering-application-example-1": TableFilteringApplicationExample1;
	}
}
