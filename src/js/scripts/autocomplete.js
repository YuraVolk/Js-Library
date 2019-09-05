const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];
let autoInput = document.querySelector('.autocomplete-input');

autoInput.addEventListener("input", function (e) {
  const val = this.value;
  closeAllLists();
  if (!val) {
    return false;
  }
  this.parentNode.insertAdjacentHTML('afterbegin', '<div id="autocomplete-list" class="autocomplete-items"></div>');
  const el = document.querySelector('.autocomplete-items');
  for (var i = 0; i < countries.length; i++) {
    if (countries[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
    el.insertAdjacentHTML('beforeend', '<div class="item-set">\n<span><strong>' +
          countries[i].substr(0, val.length) + '</strong>' + countries[i].substr(val.length) +
         '</span>\n<input class="autoInput" type="hidden" value="' + countries[i] + '">\n </div>');
    }
  }
});
autoInput.addEventListener("keydown", function (e) {
  var x = document.getElementById(this.id + "autocomplete-list");
  if (x) x = x.getElementsByTagName("div");
});

function closeAllLists(target) {
  const list = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < list.length; i++) {
    if (target != list[i] && target != autoInput) {
      list[i].remove();
    }
  }
}

document.addEventListener("click", function (e) {
  if (e.target.parentNode.classList[0] === 'item-set') {
    autoInput.value = e.target.parentNode.childNodes[3].value;
  }
  if (e.target.parentNode.parentNode.classList) {
    if (e.target.parentNode.parentNode.classList[0] === 'item-set') {
      autoInput.value = e.target.parentNode.parentNode.childNodes[3].value;
    }
  }
  if (e.target.classList[0] === 'item-set') {
    autoInput.value = e.target.childNodes[3].value;
  }
  closeAllLists(e.target);
});
