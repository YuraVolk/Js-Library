//Created by Yury Volkovskiy

const data = {
  ID: 'autocomplete-list',
  CLASS: 'autocomplete-items',
  ITEMS: 'autocomplete-list__item',
  INPUT: 'autocomplete__input'
};

const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
let autoInput = document.querySelector(`.${data.INPUT}`);

/**
 * Summary. Add listener for user input.
 * Description. Listens for user input and finds that
 *              user's country could possible be.
 *              After that function inserts all possible
 *              countries as HTML.
 * @alias renderCountries
 *
 * @listens data.INPUT~input
 */
autoInput.addEventListener("input", function (e) {
  const val = this.value;
  closeAllLists();
  if (!val) {
    return false;
  }
  this.parentNode.insertAdjacentHTML('afterbegin', `<ul id="${data.ID}" class="${data.CLASS}"></ul>`);
  const el = document.querySelector(`.${data.CLASS}`);
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    el.insertAdjacentHTML('beforeend', `<li class="${data.ITEMS}">\n<strong>` +
          countries[i].substr(0, val.length) + '</strong>' + countries[i].substr(val.length) +
         `</li>`);
    }
  }
});

/**
 * Summary. Function to react to key events.
 * Description. Function reacted and rendered
 *              countries each time user presses
 *              a key in input.
 *
 * @deprecated 2.1.0 Use renderCountries instead.
 *
 * @listens data.INPUT~keydown
 */
autoInput.addEventListener("keydown", function (e) {
  var x = document.getElementById(this.id + data.ID);
  if (x) x = x.getElementsByTagName("li");
});

/**
 * Summary. Hide all autocomplete lists for user.
 *
 * @param {Node} target Target list for closing
 */
function closeAllLists(target) {
  const list = document.getElementsByClassName(data.CLASS);
  for (var i = 0; i < list.length; i++) {
    if (target != list[i] && target != autoInput) {
      list[i].remove();
    }
  }
}

/**
 * Summary. Listen for click on country.
 * Description. Listen for click on country
 *              of active autocomplete lists
 *              and sets the value of input
 *              based on country clicked.
 *              Standard functionality
 *              of autocomplete list.
 *
 * @fires click
 */
document.addEventListener("click", function (e) {
  if (e.target.parentNode.classList[0] === data.ITEMS) {
    autoInput.value = e.target.parentNode.childNodes[3].value;
  }
  if (e.target.parentNode.parentNode.classList) {
    if (e.target.parentNode.parentNode.classList[0] === data.ITEMS) {
      autoInput.value = e.target.parentNode.parentNode.childNodes[3].value;
    }
  }
  if (e.target.classList[0] === data.ITEMS) {
    autoInput.value = e.target.childNodes[1].textContent + e.target.childNodes[2].textContent;
  }
  closeAllLists(e.target);
});
