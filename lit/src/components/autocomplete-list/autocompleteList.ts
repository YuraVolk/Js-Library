import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { AutocompleteListConfiguration } from "shared/component/autocompleteList";
import { AutocompleteListChangeEvent } from "./events";

export class AutocompleteListComponent extends LitElement implements AutocompleteListConfiguration {
	static styles = css`
		:host {
			position: relative;
		}

		.autocomplete-items {
			position: absolute;
			top: 100%;
			left: 0;
			right: 0;
			z-index: 9999;
			overflow-y: scroll;
			width: 100%;
			max-height: 200px;
			padding-left: 0;
			margin: 0;
			list-style-type: none;
		}

		.autocomplete-item {
			padding: 10px;
			cursor: pointer;
			background-color: #ffffff;
			border-bottom: 1px solid #d4d4d4;
		}
	`;

	@property({ type: Array })
	options: string[] = [];
	@property({ type: String })
	inputValue = "";

	render() {
		const value = this.inputValue.toLowerCase().trim();
		const filteredOptions = value.length
			? this.options.filter((option) => {
					const lowerOption = option.toLowerCase();
					return lowerOption !== value && lowerOption.startsWith(value);
			  })
			: [];
		const isListOpened = filteredOptions.length > 0;

		return html`
			<slot></slot>
			${when(
				isListOpened,
				() => html`<ul class="autocomplete-items">
					${filteredOptions.map((option) => {
						return html`<li
							class="autocomplete-item"
							@click="${() => {
								this.dispatchEvent(new AutocompleteListChangeEvent(option));
							}}"
						>
							${option}
						</li>`;
					})}
				</ul>`
			)}
		`;
	}
}
