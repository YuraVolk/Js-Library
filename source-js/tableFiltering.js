//Created by Yury Volkovskiy
const data = {
  TABLE: 'jobs-table',
  TABLE_HEADINGS: 'jobs-table__headers',
  INPUT: 'table-filtering__input',
  OPTION_HIDDEN: 'table-filtering__select-option--hidden',
  OPTION: 'table-filtering__select-option',
  CURRENT_OPTION: 'table-filtering__select-current',
  SELECT: 'table-filtering__select-options'
};

const filters = [];

const table = document.querySelector(`.${data.TABLE}`);
const filtersEl = table.querySelector(`.${data.TABLE_HEADINGS}`);
const input = document.querySelector(`.${data.INPUT}`);
const tableTr = Array.prototype.slice.call(table.children[0].children);
tableTr.shift();
const select = document.querySelector(`.${data.SELECT}`);

let isShown = false;
let selected = 'Name';

/**
 * Summary. Show all table items.
 */
function showAll() {
  tableTr.forEach((el) => el.classList.remove(data.OPTION_HIDDEN));
}

/**
 * Summary. Filter all table items.
 * Description. Iterate over all table
 *              items and hide them if they
 *              do not contain given string in HTML input.
 */
function filter() {
  const num = filters.indexOf(selected);
  tableTr.forEach((el) => {
    if (el.children[num].textContent.toLowerCase().indexOf(input.value.toLowerCase()) === -1) {
      el.classList.add(data.OPTION_HIDDEN);
    }
  });
}

//Add all table items to array
Array.prototype.slice.call(filtersEl.children).forEach((el) => {
  filters.push(el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1));
});
filters.forEach((el) => {
  select.insertAdjacentHTML('beforeend', `<p class=\"${data.OPTION}\">` + el + "</p>");
});

/**
 * Summary. Listen for click on property select options.
 * Description. Listen for click on property select options,
 *              validate input value as needed by filtering,
 *              and filter all table items by current selected property.
 *
 * @see filter
 * @listens click
 */
document.addEventListener('click', (e) => {
  if (e.target.classList[0] === data.CURRENT_OPTION) {
    if (isShown) {
      document.querySelector(`.${data.SELECT}`).classList.add(data.OPTION_HIDDEN);
    } else {
      document.querySelector(`.${data.SELECT}`).classList.remove(data.OPTION_HIDDEN);
    }
    isShown = !isShown;
  }
  if (e.target.classList[0] === data.OPTION) {
    isShown = false;
    document.querySelector(`.${data.SELECT}`).classList.add(data.OPTION_HIDDEN);
    selected = e.target.textContent;
    document.querySelector(`.${data.CURRENT_OPTION}`).textContent = selected;
    showAll();
    if (input.value.trim().length !== 0) {
      filter();
    }
  }
});

/**
 * Summary. Filter table items on input.
 *
 * @fires input
 */
input.addEventListener('input', (e) => {
  showAll();
  if (input.value.trim().length !== 0) {
    filter();
  }
});
