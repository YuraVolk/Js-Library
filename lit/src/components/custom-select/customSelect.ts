import { LitElement, css, html } from "lit";
import { state, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { CustomSelectConfiguration, SelectInternalItem } from "shared/component/customSelect";
import { ClickAwayController } from "../../interfaces/hooks/clickAwayController";
import { map } from "lit/directives/map.js";
import { CustomSelectChangeEvent } from "./events";

export class CustomSelectComponent extends LitElement implements CustomSelectConfiguration {
	static styles = css`
		select {
			display: none;
		}

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

		.custom-select-options .custom-select-option[data-selected] {
			background-color: rgba(0, 0, 0, 0.1);
		}

		.custom-select-options .custom-select-option[data-disabled] {
			background-color: rgba(0, 0, 0, 0.33);
		}

		.custom-select-options .custom-select-option:last-child {
			overflow: hidden;
		}
	`;

	@property({ type: Array })
	items: SelectInternalItem[] = [];
	@property({ type: String })
	selectName = "";
	@state()
	_isOpened = false;

	connectedCallback(): void {
		super.connectedCallback();
		new ClickAwayController(this, () => {
			this._isOpened = false;
		});
	}

	toggledOpened() {
		this._isOpened = !this._isOpened;
	}

	onItemSelected(item: SelectInternalItem) {
		this._isOpened = false;
		if (item.isDisabled) return;
		for (const el of this.items) {
			if (el === item) {
				el.isSelected = true;
				this.dispatchEvent(new CustomSelectChangeEvent(el));
			} else el.isSelected = false;
		}

		this.requestUpdate("items");
	}

	render() {
		const selectedItem = this.items.find((item) => item.isSelected);

		return html`
			<select .value=${selectedItem?.value ?? ""} name=${this.selectName}>
				${map(
					this.items,
					(option) => html`<option value=${option.value} ?disabled=${option.isDisabled} ?selected=${option.isSelected}>
						${option.innerContent}
					</option>`
				)}
			</select>
			<div class="wrap">
				<div
					class="custom-select-option custom-select-current ${classMap({ active: this._isOpened })}"
					@click=${() => {
						this.toggledOpened();
					}}
				>
					${selectedItem?.innerContent ?? ""}
				</div>
				<ul class="custom-select-options ${classMap({ hidden: !(this.items.length && this._isOpened) })}">
					${map(
						this.items,
						(item) => html`<li
							class="custom-select-option"
							?data-disabled=${item.isDisabled}
							?data-selected=${item.isSelected}
							value=${item.value}
							@click=${() => {
								this.onItemSelected(item);
							}}
						>
							${item.innerContent}
						</li>`
					)}
				</ul>
			</div>
		`;
	}
}
