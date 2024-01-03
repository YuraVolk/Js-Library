import React, { useState } from "react";
import styles from "./Page.module.css";
import { AutocompleteList } from "../../../components/autocomplete-list/AutocompleteList";

const countries =
	`Afghanistan, Albania, Algeria, Andorra, Angola, Anguilla, Antigua & Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia &amp; Herzegovina, Botswana, Brazil, British Virgin Islands, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cameroon, Cape Verde, Cayman Islands, Chad, Chile, China, Colombia, Congo, Cook Islands, Costa Rica, Cote D Ivoire, Croatia, Cruise Ship, Cuba, Cyprus, Czech Republic, Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Estonia, Ethiopia, Falkland Islands, Faroe Islands, Fiji, Finland, France, French Polynesia, French West Indies, Gabon, Gambia, Georgia, Germany, Ghana, Gibraltar, Greece, Greenland, Grenada, Guam, Guatemala, Guernsey, Guinea, Guinea Bissau, Guyana, Haiti, Honduras, Hong Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Isle of Man, Israel, Italy, Jamaica, Japan, Jersey, Jordan, Kazakhstan, Kenya, Kuwait, Kyrgyz Republic, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macau, Macedonia, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Mauritania, Mauritius, Mexico, Moldova, Monaco, Mongolia, Montenegro, Montserrat, Morocco, Mozambique, Namibia, Nepal, Netherlands, Netherlands Antilles, New Caledonia, New Zealand, Nicaragua, Niger, Nigeria, Norway, Oman, Pakistan, Palestine, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Puerto Rico, Qatar, Reunion, Romania, Russia, Rwanda, Saint Pierre &amp; Miquelon, Samoa, San Marino, Satellite, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, South Africa, South Korea, Spain, Sri Lanka, St Kitts &amp; Nevis, St Lucia, St Vincent, St. Lucia, Sudan, Suriname, Swaziland, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor L'Este, Togo, Tonga, Trinidad &amp; Tobago, Tunisia, Turkey, Turkmenistan, Turks &amp; Caicos, Uganda, Ukraine, United Arab Emirates, United Kingdom, Uruguay, Uzbekistan, Venezuela, Vietnam, Virgin Islands (US), Yemen, Zambia, Zimbabwe`
		.split(",")
		.map((t) => t.trim());
const numbers = `10,20,30,40,50,60,70,80,90,100+`.split(",");
const professions = `Frontend,Backend,Application Developer`.split(",");

const Page = () => {
	const [inputCountry, setInputCountry] = useState("");
	const [inputNumber, setInputNumbers] = useState("");
	const [inputProfession, setInputProfession] = useState("");

	return (
		<main className="main">
			<h1 className="heading">Autocomplete List</h1>
			<p>
				Autocomplete inputs built through JavaScript can be incredibly useful in enhancing the user experience and improving efficiency. By
				providing suggestions or completing input fields based on a user's previous input or predefined data, autocomplete inputs save time
				and effort for users. They eliminate the need for users to type out long or repetitive words, phrases, or addresses, making form
				filling a breeze. Autocomplete inputs also help reduce errors and ensure accuracy by offering relevant suggestions, preventing
				misspellings or incorrect entries. This feature is particularly valuable for e-commerce websites, search bars, and any application
				that requires data entry, as it streamlines the process and enhances overall usability. With its ability to anticipate user needs
				and provide real-time suggestions, autocomplete inputs built through JavaScript are an invaluable tool for creating intuitive and
				efficient web interfaces.
			</p>
			<form autoComplete="off">
				<label className={styles["autocomplete-label"]}>
					<AutocompleteList options={countries} inputValue={inputCountry} changeInputValue={setInputCountry}>
						<input
							value={inputCountry}
							onChange={(e) => {
								setInputCountry(e.target.value);
							}}
							className={styles["autocomplete-input"]}
							type="text"
							placeholder="Your country..."
							autoComplete="off"
						/>
					</AutocompleteList>
				</label>
			</form>
			<p>
				Above you can see an example of an autocomplete input that allows the user to fill out the country quicker. The lightweight
				component configuration allows you to only input the options parameter for autocomplete-list-component, and the autocomplete input
				is ready. The implementation is simple yet efficient and scalable, easily allowing for independent autocomplete inputs.
			</p>
			<form autoComplete="off">
				<label className={styles["autocomplete-label"]}>
					<AutocompleteList options={numbers} inputValue={inputNumber} changeInputValue={setInputNumbers}>
						<input
							value={inputNumber}
							onChange={(e) => {
								setInputNumbers(e.target.value);
							}}
							className={styles["autocomplete-input"]}
							type="text"
							placeholder="Amount of pet projects you've completed:"
							autoComplete="off"
						/>
					</AutocompleteList>
				</label>
				<label className={styles["autocomplete-label"]}>
					<AutocompleteList options={professions} inputValue={inputProfession} changeInputValue={setInputProfession}>
						<input
							value={inputProfession}
							onChange={(e) => {
								setInputProfession(e.target.value);
							}}
							className={styles["autocomplete-input"]}
							type="text"
							placeholder="Enter profession..."
							autoComplete="off"
						/>
					</AutocompleteList>
				</label>
			</form>
			<p>
				You need to provide basic React configuration to get started with the component: you need to define inputValue prop and
				setInputValue callback for the two-way binding. Additionally, you need to pass a string array of options for the component to have
				any effect.
			</p>
		</main>
	);
};

export default Page;
