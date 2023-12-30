import { LitElement, css, html } from "lit";
import { customElement, state, queryAssignedElements } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map.js";
import { classMap } from "lit/directives/class-map.js";
import { SelectInternalItem } from "shared/component/customSelect";

declare global {
	interface HTMLElementTagNameMap {
		"custom-select-component": CustomSelectComponent;
	}
}

@customElement("custom-select-component")
export class CustomSelectComponent extends LitElement {
	static styles = css`
		.wrap {
			position: relative;
			width: 150px;
		}

		.custom-select-current {
			border-radius: 20px;
			transition: all 0.3s;
			background-color: dodgerblue;
		}

		.custom-select-current::after {
			position: absolute;
			content: "";
			top: 14px;
			right: 10px;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-color: #fff transparent transparent transparent;
			transition: all 0.3s;
		}

		.custom-select-current.active::after {
			border-color: transparent transparent #fff transparent;
			top: 7px;
		}

		.custom-select-option.active {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
			background-color: darkcyan;
		}

		.custom-select-option {
			color: #ffffff;
			padding: 3px 12px;
			border: 1px solid transparent;
			border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
			user-select: none;
			cursor: pointer;
		}

		.custom-select-options {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 99;
			opacity: 1;
			transition: opacity 0.2s linear;
			padding-left: 0;
			list-style-type: none;
			margin: 0;
			background-color: dodgerblue;
			border-bottom-left-radius: 20px;
			border-bottom-right-radius: 20px;
		}

		.custom-select-options.hidden {
			opacity: 0;
			pointer-events: none;
			cursor: default;
		}

		.custom-select-options .custom-select-option:hover {
			background-color: rgba(0, 0, 0, 0.15);
		}

		.custom-select-options .custom-select-option[data-selected="true"] {
			background-color: rgba(0, 0, 0, 0.1);
		}

		.custom-select-options .custom-select-option[data-disabled="true"] {
			background-color: rgba(0, 0, 0, 0.33);
		}

		.custom-select-options .custom-select-option:last-child {
			overflow: hidden;
		}
	`;

	@queryAssignedElements({ flatten: true })
	_selectElement!: HTMLSelectElement[];

	@state()
	_internalElements: SelectInternalItem[] = [];
	@state()
	_isOpened = false;

	private boundDocumentClickListener!: (event: Event) => unknown;

	protected onItemSelected(element: SelectInternalItem) {
		this._isOpened = false;
		if (element.isDisabled) return;
		this._internalElements.forEach((el) => (el === element ? (el.isSelected = true) : (el.isSelected = false)));
		this._selectElement.forEach((select) => (select.value = element.value));
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.boundDocumentClickListener = (event) => {
			if (!event.composedPath().some((e) => e instanceof CustomSelectComponent)) this._isOpened = false;
		};
		document.addEventListener("click", this.boundDocumentClickListener);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		document.removeEventListener("click", this.boundDocumentClickListener);
	}

	protected firstUpdated(): void {
		for (const select of this._selectElement) {
			this._internalElements = Array.from(select.children).map((element, i) => ({
				innerContent: element.textContent ?? "",
				value: element.getAttribute("value") ?? "",
				isSelected: select.selectedIndex === i,
				isDisabled: Boolean(element.getAttribute("disabled"))
			}));
		}
	}

	render() {
		return html`
			<slot
				style=${styleMap({
					display: this._internalElements.length ? "none" : "revert"
				})}
			></slot>
			<div class="wrap">
				<div
					class="custom-select-option custom-select-current ${classMap({
						active: this._isOpened
					})}"
					@click="${() => {
						this._isOpened = !this._isOpened;
					}}"
				>
					${this._internalElements.find((item) => item.isSelected)?.innerContent ?? ""}
				</div>
				<ul
					class="custom-select-options ${classMap({
						hidden: !(this._internalElements.length && this._isOpened)
					})}"
				>
					${this._internalElements.map((element) => {
						return html`
							<li
								class="custom-select-option"
								data-disabled="${element.isDisabled}"
								data-selected="${element.isSelected}"
								value="${element.value}"
								@click="${() => {
									this.onItemSelected(element);
								}}"
							>
								${element.innerContent}
							</li>
						`;
					})}
				</ul>
			</div>
		`;
	}
}
