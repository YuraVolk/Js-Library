import { LitElement, css, html } from "lit";
import { state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { repeat } from "lit/directives/repeat.js";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { LinkedCarouselMixin, LinkedItem } from "../../interfaces/hooks/linkedItems";
import { TableSelectInformation } from "shared/component/tableFiltering";
import { assertNonUndefined } from "shared/utils/utils";
import { TableFilteringHeader } from "./tableFilteringHeader";
import { TableFilteringRow } from "./tableFilteringRow";

export class TableFilteringComponent extends LinkedCarouselMixin(LitElement) {
	static styles = css`
		:host {
			position: relative;
			display: block;
		}

		.wrap-select {
			position: absolute;
		}

		.wrap-select__option {
			background-color: #333;
			height: inherit;
			cursor: pointer;
		}

		.wrap-select__option--crossed {
			text-decoration: line-through;
		}

		::slotted(*) {
			display: table;
			border-collapse: separate;
			box-sizing: border-box;
			text-indent: initial;
			unicode-bidi: isolate;
			border-spacing: 2px;
			border-color: gray;
		}
	`;

	@state()
	_openSelect?: TableSelectInformation;
	@state()
	_excludedCriteria: Array<string | null>[] = [];

	protected get elementAccessors() {
		const headers: LinkedItem[] = [],
			rows: LinkedItem[] = [];
		for (const [key, value] of this.itemEntries) {
			if (key.startsWith("table-header-")) {
				headers.push(value);
			} else if (key.startsWith("table-row")) rows.push(value);
		}

		return { headers, rows };
	}

	protected firstUpdated() {
		this._excludedCriteria = Array.from({ length: this.elementAccessors.headers.length }, () => []);
	}

	toggleCriterion(option: string) {
		assertNonUndefined(this._openSelect);
		const index = this._openSelect.index;
		const newExcludedCriteria = [...this._excludedCriteria];
		if (newExcludedCriteria[index].includes(option)) {
			newExcludedCriteria[index].splice(newExcludedCriteria[index].indexOf(option), 1);
		} else newExcludedCriteria[index].push(option);

		this._excludedCriteria = newExcludedCriteria;
		this.updateExcludedRows();
	}

	private updateExcludedRows() {
		for (const row of this.elementAccessors.rows) {
			if (
				Array.from(row.element.getElementsByTagName("slot")[0].assignedElements()).some((element, i) =>
					this._excludedCriteria[i].includes((element as HTMLElement).textContent ?? "")
				)
			) {
				row.styles = {
					display: "none"
				};
			} else {
				row.styles = {};
			}
		}
	}

	onHeaderClicked(index: number) {
		const elementAccessors = this.elementAccessors;
		const headerRect = elementAccessors.headers[index].element.getBoundingClientRect();
		const wrapRect = this.getBoundingClientRect();
		const top = headerRect.top - wrapRect.top,
			left = headerRect.left - wrapRect.left;

		this._openSelect = {
			index,
			top,
			left,
			width: headerRect.width,
			height: headerRect.height,
			options: [
				...new Set(
					elementAccessors.rows.map(({ element }) => {
						return element.getElementsByTagName("slot")[0].assignedElements()[index].textContent ?? "";
					})
				)
			]
		};
	}

	closeSelect() {
		this._openSelect = undefined;
	}

	render() {
		return html`
			<slot></slot>
			${when(this._openSelect, () => {
				assertNonUndefined(this._openSelect);
				return html`<div
					class="wrap-select"
					style=${styleMap({
						top: `${String(this._openSelect.top)}px`,
						left: `${String(this._openSelect.left)}px`,
						width: `${String(this._openSelect.width)}px`,
						height: `${String(this._openSelect.height)}px`
					})}
				>
					${repeat(
						this._openSelect.options,
						(option) => option,
						(option) => {
							assertNonUndefined(this._openSelect);
							return html`<div
								class="wrap-select__option ${classMap({
									"wrap-select__option--crossed": this._excludedCriteria[this._openSelect.index].includes(option)
								})}"
								@click=${() => {
									this.toggleCriterion(option);
								}}
							>
								${option}
							</div>`;
						}
					)}
				</div>`;
			})}
		`;
	}
}

export { TableFilteringRow, TableFilteringHeader };
