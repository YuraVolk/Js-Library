import { LitElement, css, html } from "lit";
import { customElement, property, query, queryAssignedElements, state } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { assertNonUndefined } from "shared/utils/utils";
import { TableSelectInformation } from "shared/component/tableFiltering";

declare global {
	interface HTMLElementTagNameMap {
		"table-filtering-component": TableFilteringComponent;
	}
}

interface TabularData {
	headers: HTMLTableCellElement[];
	rows: HTMLTableCellElement[][];
	excludedCriteria: Array<string | null>[];
}

@customElement("table-filtering-component")
export class TableFilteringComponent extends LitElement {
	static styles = css`
		.wrap {
			position: relative;
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
	`;

	@property({
		type: Array,
		converter: {
			fromAttribute: (value) => (value ? value.split(",").map(Number) : []),
			toAttribute: (value: number[]) => value.join(",")
		}
	})
	filterableHeaders: number[] = [];

	@queryAssignedElements({ selector: "table" })
	_table!: HTMLTableElement[];
	@query(".wrap")
	_wrap!: HTMLDivElement;

	@state()
	protected tabularData: TabularData = { headers: [], rows: [], excludedCriteria: [] };
	@state()
	private openSelect?: TableSelectInformation;

	private clickListener!: EventListener;

	protected displaySelect(header: HTMLTableCellElement, index: number) {
		if (!this.filterableHeaders.includes(index + 1)) return;
		const headerRect = header.getBoundingClientRect(),
			wrap = this._wrap,
			wrapRect = wrap.getBoundingClientRect();
		const top = headerRect.top - wrapRect.top,
			left = headerRect.left - wrapRect.left;
		this.openSelect = {
			index,
			top,
			left,
			width: headerRect.width,
			height: headerRect.height,
			options: [...new Set(this.tabularData.rows.map((row) => row[index].textContent ?? ""))]
		};
	}

	protected firstUpdated() {
		const [table] = this._table;
		Object.assign(this.tabularData, {
			headers: Array.from(table.querySelectorAll("th")),
			rows: Array.from(table.querySelectorAll("tbody > tr")).map((row) =>
				Array.from(row.children).filter<HTMLTableCellElement>((e): e is HTMLTableCellElement => e instanceof HTMLTableCellElement)
			)
		});
		this.tabularData.excludedCriteria = Array.from({ length: this.tabularData.headers.length }, () => []);

		this._wrap.addEventListener(
			"click",
			(this.clickListener = (event) => {
				if (event.target instanceof HTMLTableCellElement && event.target.parentNode && event.target.tagName === "TH") {
					this.displaySelect(event.target, Array.from(event.target.parentNode.children).indexOf(event.target));
				} else if (!(event.target instanceof HTMLDivElement && event.target.classList.contains("wrap-select__option"))) {
					this.openSelect = undefined;
				} 
			})
		);
	}

	toggleCriterion(option: string) {
		assertNonUndefined(this.openSelect);
		const { index } = this.openSelect;
		const newExcludedCriteria = [...this.tabularData.excludedCriteria];
		if (newExcludedCriteria[index].includes(option)) {
			newExcludedCriteria[index].splice(newExcludedCriteria[index].indexOf(option), 1);
		} else newExcludedCriteria[index].push(option);

		this.tabularData = {
			...this.tabularData,
			excludedCriteria: newExcludedCriteria
		};
	}

	protected updated(_changedProperties: Map<PropertyKey, unknown>): void {
		if (!_changedProperties.has("tabularData")) return;
		for (const row of this.tabularData.rows) {
			const parent = row[0].parentElement;
			if (!parent) continue;
			if (row.some((element, i) => this.tabularData.excludedCriteria[i].includes(element.textContent ?? ""))) {
				parent.style.display = "none";
			} else parent.style.removeProperty("display");
		}
	}

	disconnectedCallback(): void {
		this._wrap.removeEventListener("click", this.clickListener);
		super.disconnectedCallback();
	}

	render() {
		return html`<div class="wrap">
			<slot></slot>
			${this.openSelect
				? html`<div
						class="wrap-select"
						style=${styleMap({
							top: `${this.openSelect.top}px`,
							left: `${this.openSelect.left}px`,
							width: `${this.openSelect.width}px`,
							height: `${this.openSelect.height}px`
						})}
				  >
						${this.openSelect.options.map((option) => {
							assertNonUndefined(this.openSelect);
							return html`<div
								class="wrap-select__option ${classMap({
									"wrap-select__option--crossed": this.tabularData.excludedCriteria[this.openSelect.index].includes(option)
								})}"
								@click="${() => { this.toggleCriterion(option); }}"
							>
								${option}
							</div>`;
						})}
				  </div>`
				: ""}
		</div>`;
	}
}
