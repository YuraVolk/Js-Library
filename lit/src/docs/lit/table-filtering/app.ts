import type { TableFilteringComponent, TableFilteringHeader, TableFilteringRow } from "lit/src/components/table-filtering/tableFiltering";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement, query } from "lit/decorators.js";

import tableFilteringIcon from "../../../../../assets/svg/filter-icon.svg";

import("../header");
import("../sidebar");
import("../../../components/table-filtering/tableFiltering")
	.then(({ TableFilteringComponent, TableFilteringHeader, TableFilteringRow }) => {
		window.customElements.define("table-filtering-component", TableFilteringComponent);
		window.customElements.define("table-filtering-row-component", TableFilteringRow);
		window.customElements.define("table-filtering-header-component", TableFilteringHeader);
	})
	.catch((e: unknown) => {
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
			display: table-header-group;
			background-color: #e2e2e2;
			color: #333;
			cursor: pointer;
			vertical-align: middle;
			unicode-bidi: isolate;
			border-color: inherit;
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

		.table-head__wrap {
			text-align: center;
		}

		.table-body {
			display: table-row-group;
			vertical-align: middle;
			unicode-bidi: isolate;
			border-color: inherit;
		}

		.table-head-row {
			display: table-row;
			vertical-align: inherit;
			unicode-bidi: isolate;
			border-color: inherit;
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

	@query(".table-wrap")
	_tableWrap!: TableFilteringComponent;

	render() {
		return html`
			<table-filtering-component class="table-wrap">
				<article class="table" style="--filteringIcon: url(${tableFilteringIcon})">
					<header class="table-head">
						<div class="table-head-row">
							<table-filtering-header-component
								class="table-head__wrap"
								@click=${() => {
									this._tableWrap.onHeaderClicked(0);
								}}
							>
								<span class="table-head__heading">Name</span>
							</table-filtering-header-component>
							<table-filtering-header-component
								class="table-head__wrap"
								@click=${() => {
									this._tableWrap.onHeaderClicked(1);
								}}
							>
								<span class="table-head__heading">Country</span>
							</table-filtering-header-component>
							<table-filtering-header-component
								class="table-head__wrap"
								@click=${() => {
									this._tableWrap.onHeaderClicked(2);
								}}
							>
								<span class="table-head__heading">Specialty</span>
							</table-filtering-header-component>
						</div>
					</header>
					<main
						class="table-body"
						@click=${() => {
							this._tableWrap.closeSelect();
						}}
					>
						<table-filtering-row-component class="table-body-row">
							<div class="table-body-row__cell"><span>John</span></div>
							<div class="table-body-row__cell"><span>Austria</span></div>
							<div class="table-body-row__cell"><span>Designer</span></div>
						</table-filtering-row-component>
						<table-filtering-row-component class="table-body-row">
							<div class="table-body-row__cell"><span>Mary</span></div>
							<div class="table-body-row__cell"><span>Ireland</span></div>
							<div class="table-body-row__cell"><span>Architect</span></div>
						</table-filtering-row-component>
						<table-filtering-row-component class="table-body-row">
							<div class="table-body-row__cell"><span>Jane</span></div>
							<div class="table-body-row__cell"><span>Australia</span></div>
							<div class="table-body-row__cell"><span>QA Tester</span></div>
						</table-filtering-row-component>
						<table-filtering-row-component class="table-body-row">
							<div class="table-body-row__cell"><span>Mark</span></div>
							<div class="table-body-row__cell"><span>Russia</span></div>
							<div class="table-body-row__cell"><span>Game Developer</span></div>
						</table-filtering-row-component>
						<table-filtering-row-component class="table-body-row">
							<div class="table-body-row__cell"><span>Paul</span></div>
							<div class="table-body-row__cell"><span>France</span></div>
							<div class="table-body-row__cell"><span>Backend Developer</span></div>
						</table-filtering-row-component>
					</main>
				</article>
			</table-filtering-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"table-filtering-component": TableFilteringComponent;
		"table-filtering-header-component": TableFilteringHeader;
		"table-filtering-row-component": TableFilteringRow;
		"table-filtering-application-example-1": TableFilteringApplicationExample1;
	}
}
