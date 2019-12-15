//Created by Yury Volkovskiy
const data = {
  TABLE: 'table-filtering',
  TABLE_HEADINGS: 'table-filters',
  INPUT: 'filtering-input',
  OPTION_HIDDEN: 'option--hidden',
  OPTION: 'option',
  CURRENT_OPTION: 'chooser',
  SELECT: 'select-filtering'
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

function showAll() {
  tableTr.forEach((el) => el.classList.remove(data.OPTION_HIDDEN));
}

function filter() {
  const num = filters.indexOf(selected);
  tableTr.forEach((el) => {
    if (el.children[num].textContent.toLowerCase().indexOf(input.value.toLowerCase()) === -1) {
      el.classList.add(data.OPTION_HIDDEN);
    }
  });
}

Array.prototype.slice.call(filtersEl.children).forEach((el) => {
  filters.push(el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1));
});

filters.forEach((el) => {
  select.insertAdjacentHTML('beforeend', `<p class=\"${data.OPTION}\">` + el + "</p>");
});


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

input.addEventListener('input', (e) => {
  showAll();
  if (input.value.trim().length !== 0) {
    filter();
  }
});
