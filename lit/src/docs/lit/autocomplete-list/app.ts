import type { AutocompleteListComponent } from "lit/src/components/autocomplete-list/autocompleteList";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { AutocompleteListChangeEvent } from "../../../components/autocomplete-list/events";

import("../header");
import("../sidebar");
import("../../../components/autocomplete-list/autocompleteList")
	.then(({ AutocompleteListComponent }) => {
		window.customElements.define("autocomplete-list-component", AutocompleteListComponent);
	})
	.catch((e) => {
		console.trace(e);
	});

const countries =
	`Afghanistan, Albania, Algeria, Andorra, Angola, Anguilla, Antigua & Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia &amp; Herzegovina, Botswana, Brazil, British Virgin Islands, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cameroon, Cape Verde, Cayman Islands, Chad, Chile, China, Colombia, Congo, Cook Islands, Costa Rica, Cote D Ivoire, Croatia, Cruise Ship, Cuba, Cyprus, Czech Republic, Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Estonia, Ethiopia, Falkland Islands, Faroe Islands, Fiji, Finland, France, French Polynesia, French West Indies, Gabon, Gambia, Georgia, Germany, Ghana, Gibraltar, Greece, Greenland, Grenada, Guam, Guatemala, Guernsey, Guinea, Guinea Bissau, Guyana, Haiti, Honduras, Hong Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Isle of Man, Israel, Italy, Jamaica, Japan, Jersey, Jordan, Kazakhstan, Kenya, Kuwait, Kyrgyz Republic, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macau, Macedonia, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Mauritania, Mauritius, Mexico, Moldova, Monaco, Mongolia, Montenegro, Montserrat, Morocco, Mozambique, Namibia, Nepal, Netherlands, Netherlands Antilles, New Caledonia, New Zealand, Nicaragua, Niger, Nigeria, Norway, Oman, Pakistan, Palestine, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Puerto Rico, Qatar, Reunion, Romania, Russia, Rwanda, Saint Pierre &amp; Miquelon, Samoa, San Marino, Satellite, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, South Africa, South Korea, Spain, Sri Lanka, St Kitts &amp; Nevis, St Lucia, St Vincent, St. Lucia, Sudan, Suriname, Swaziland, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor L'Este, Togo, Tonga, Trinidad &amp; Tobago, Tunisia, Turkey, Turkmenistan, Turks &amp; Caicos, Uganda, Ukraine, United Arab Emirates, United Kingdom, Uruguay, Uzbekistan, Venezuela, Vietnam, Virgin Islands (US), Yemen, Zambia, Zimbabwe`
		.split(",")
		.map((t) => t.trim());
const numbers = `10,20,30,40,50,60,70,80,90,100+`.split(",");
const professions = `Frontend,Backend,Application Developer`.split(",");

const styles = css`
	.autocomplete-input {
		width: 100%;
		height: 40px;
		background-color: #ffffff;
		border: 2px solid #333333;
		color: #222;
		padding: 7px;
		box-sizing: border-box;
	}

	.autocomplete-label {
		position: relative;
		display: block;
		width: 260px;
		height: 40px;
	}
`;

@customElement("autocomplete-list-application-example-1")
class AutocompleteListApplicationExample1 extends LitElement {
	static styles = styles;

	@state()
	_inputValue = "";

	render() {
		return html`<form autocomplete="off">
			<label class="autocomplete-label">
				<autocomplete-list-component
					.options=${countries}
					inputValue=${this._inputValue}
					@autocomplete-selected=${(e: AutocompleteListChangeEvent) => {
						this._inputValue = e.value;
					}}
				>
					<input
						class="autocomplete-input"
						type="text"
						placeholder="Your country..."
						autocomplete="off"
						.value=${this._inputValue}
						@input=${({ target }: { target: HTMLInputElement }) => {
							this._inputValue = target.value;
						}}
					/>
				</autocomplete-list-component>
			</label>
		</form>`;
	}
}

@customElement("autocomplete-list-application-example-2")
class AutocompleteListApplicationExample2 extends LitElement {
	static styles = styles;

	@state()
	_inputProjects = "";
	@state()
	_inputProfessions = "";

	render() {
		return html`<form autocomplete="off">
			<label class="autocomplete-label">
				<autocomplete-list-component
					.options=${numbers}
					inputValue=${this._inputProjects}
					@autocomplete-selected=${(e: AutocompleteListChangeEvent) => {
						this._inputProjects = e.value;
					}}
				>
					<input
						class="autocomplete-input"
						type="text"
						placeholder="Amount of pet projects you've completed:"
						autocomplete="off"
						.value=${this._inputProjects}
						@input=${({ target }: { target: HTMLInputElement }) => {
							this._inputProjects = target.value;
						}}
					/>
				</autocomplete-list-component>
			</label> 
			<label class="autocomplete-label">
				<autocomplete-list-component
					.options=${professions}
					inputValue=${this._inputProfessions}
					@autocomplete-selected=${(e: AutocompleteListChangeEvent) => {
						this._inputProfessions = e.value;
					}}
				>
					<input
						class="autocomplete-input"
						type="text"
						placeholder="Enter profession..."
						autocomplete="off"
						.value=${this._inputProfessions}
						@input=${({ target }: { target: HTMLInputElement }) => {
							this._inputProfessions = target.value;
						}}
					/>
				</autocomplete-list-component>
			</label>
		</form>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"autocomplete-list-component": AutocompleteListComponent;
		"autocomplete-list-application-example-1": AutocompleteListApplicationExample1;
		"autocomplete-list-application-example-2": AutocompleteListApplicationExample2;
	}
}
