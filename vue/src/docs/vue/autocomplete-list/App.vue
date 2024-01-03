<template>
    <header-component />
    <sidebar-component active-link="Autocomplete Input" />
    <main class="main">
        <h1 class="heading">Autocomplete Input</h1>
        <p>
            Autocomplete inputs built through JavaScript can be incredibly useful in enhancing the user experience and
            improving efficiency. By
            providing suggestions or completing input fields based on a user's previous input or predefined data,
            autocomplete inputs save time
            and effort for users. They eliminate the need for users to type out long or repetitive words, phrases, or
            addresses, making form
            filling a breeze. Autocomplete inputs also help reduce errors and ensure accuracy by offering relevant
            suggestions, preventing
            misspellings or incorrect entries. This feature is particularly valuable for e-commerce websites, search bars,
            and any application
            that requires data entry, as it streamlines the process and enhances overall usability. With its ability to
            anticipate user needs and
            provide real-time suggestions, autocomplete inputs built through JavaScript are an invaluable tool for creating
            intuitive and
            efficient web interfaces.
        </p>
        <form autocomplete="off">
            <label class="autocomplete-label">
                <autocomplete-list-component :options="`Afghanistan, Albania, Algeria, Andorra, Angola, Anguilla, Antigua & Barbuda, Argentina, Armenia, Aruba, Australia, Austria, Azerbaijan, Bahamas, Bahrain, Bangladesh, Barbados, Belarus, Belgium, Belize, Benin, Bermuda, Bhutan, Bolivia, Bosnia &amp; Herzegovina, Botswana, Brazil, British Virgin Islands, Brunei, Bulgaria, Burkina Faso, Burundi, Cambodia, Cameroon, Cape Verde, Cayman Islands, Chad, Chile, China, Colombia, Congo, Cook Islands, Costa Rica, Cote D Ivoire, Croatia, Cruise Ship, Cuba, Cyprus, Czech Republic, Denmark, Djibouti, Dominica, Dominican Republic, Ecuador, Egypt, El Salvador, Equatorial Guinea, Estonia, Ethiopia, Falkland Islands, Faroe Islands, Fiji, Finland, France, French Polynesia, French West Indies, Gabon, Gambia, Georgia, Germany, Ghana, Gibraltar, Greece, Greenland, Grenada, Guam, Guatemala, Guernsey, Guinea, Guinea Bissau, Guyana, Haiti, Honduras, Hong Kong, Hungary, Iceland, India, Indonesia, Iran, Iraq, Ireland, Isle of Man, Israel, Italy, Jamaica, Japan, Jersey, Jordan, Kazakhstan, Kenya, Kuwait, Kyrgyz Republic, Laos, Latvia, Lebanon, Lesotho, Liberia, Libya, Liechtenstein, Lithuania, Luxembourg, Macau, Macedonia, Madagascar, Malawi, Malaysia, Maldives, Mali, Malta, Mauritania, Mauritius, Mexico, Moldova, Monaco, Mongolia, Montenegro, Montserrat, Morocco, Mozambique, Namibia, Nepal, Netherlands, Netherlands Antilles, New Caledonia, New Zealand, Nicaragua, Niger, Nigeria, Norway, Oman, Pakistan, Palestine, Panama, Papua New Guinea, Paraguay, Peru, Philippines, Poland, Portugal, Puerto Rico, Qatar, Reunion, Romania, Russia, Rwanda, Saint Pierre &amp; Miquelon, Samoa, San Marino, Satellite, Saudi Arabia, Senegal, Serbia, Seychelles, Sierra Leone, Singapore, Slovakia, Slovenia, South Africa, South Korea, Spain, Sri Lanka, St Kitts &amp; Nevis, St Lucia, St Vincent, St. Lucia, Sudan, Suriname, Swaziland, Sweden, Switzerland, Syria, Taiwan, Tajikistan, Tanzania, Thailand, Timor L'Este, Togo, Tonga, Trinidad &amp; Tobago, Tunisia, Turkey, Turkmenistan, Turks &amp; Caicos, Uganda, Ukraine, United Arab Emirates, United Kingdom, Uruguay, Uzbekistan, Venezuela, Vietnam, Virgin Islands (US), Yemen, Zambia, Zimbabwe`
                        .split(',')
                        .map((t) => t.trim())
                    " :input-value="inputCountry" @change-input-value="changeCountryInputValue">
                    <input v-model="inputCountry" class="autocomplete-input" type="text" placeholder="Your country..."
                        autocomplete="off" />
                </autocomplete-list-component>
            </label>
        </form>
        <p>
            Above you can see an example of an autocomplete input that allows the user to fill out the country quicker. The
            lightweight component
            configuration allows you to only input the options parameter for autocomplete-list-component, and the
            autocomplete input is ready. The
            implementation is simple yet efficient and scalable, easily allowing for independent autocomplete inputs.
        </p>
        <form autocomplete="off">
            <label class="autocomplete-label">
                <autocomplete-list-component :options="`10,20,30,40,50,60,70,80,90,100+`.split(',')" :input-value="inputNumber"
                    @change-input-value="changeInputNumberValue">
                    <input class="autocomplete-input" type="text" placeholder="Amount of pet projects you've completed:"
                        autocomplete="off" v-model="inputNumber" />
                </autocomplete-list-component>
            </label>
            <label class="autocomplete-label">
                <autocomplete-list-component :options="`Frontend,Backend,Application Developer`.split(',')"
                    :input-value="inputProfession" @change-input-value="changeInputProfessionValue">
                    <input class="autocomplete-input" type="text" placeholder="Enter profession..." autocomplete="off"
                        v-model="inputProfession" />
                </autocomplete-list-component>
            </label>
        </form>
        <p>
            You need to provide basic Vue configuration to get started with the component: you need to define input-value
            prop and
            @change-input-value emit event listener. The emit listener will fire when an input value is changed, and
            input-value prop is the
            current input value. Additionally, you need to pass a string array of options for the component to have any
            effect. The easiest way to
            track input changes would be through a v-model.
        </p>
    </main>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
const AutocompleteListComponent = defineAsyncComponent(() => import("../../../components/autocomplete-list/AutocompleteList.vue"));
const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));

const inputCountry = ref("");
const changeCountryInputValue = (newValue: string) => {
    inputCountry.value = newValue;
};
const inputNumber = ref("");
const changeInputNumberValue = (newValue: string) => {
    inputNumber.value = newValue;
};
const inputProfession = ref("");
const changeInputProfessionValue = (newValue: string) => {
    inputProfession.value = newValue;
};
</script>

<style>
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
</style>
