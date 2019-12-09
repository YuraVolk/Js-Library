//Created by Yury Volkovskiy

const filters = [];

const table = document.querySelector('.table-filtering');
const filtersEl = table.querySelector('.table-filters');
const input = document.querySelector('.filtering-input');
const tableTr = Array.prototype.slice.call(table.children[0].children);
tableTr.shift();
const select = document.querySelector('.select-filtering');

let isShown = false;
let selected = 'Name';

function showAll() {
  tableTr.forEach((el) => el.classList.remove('option--hidden'));
}

function filter() {
  const num = filters.indexOf(selected);
  tableTr.forEach((el) => {
    if (el.children[num].textContent.toLowerCase().indexOf(input.value.toLowerCase()) === -1) {
      el.classList.add('option--hidden');
    }
  });
}

Array.prototype.slice.call(filtersEl.children).forEach((el) => {
  filters.push(el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1));
});

filters.forEach((el) => {
  select.insertAdjacentHTML('beforeend', "<p class=\"option\">" + el + "</p>");
});


document.addEventListener('click', (e) => {
  if (e.target.classList[0] === 'chooser') {
    if (isShown) {
      document.querySelector('.select-filtering').classList.add('option--hidden');
    } else {
      document.querySelector('.select-filtering').classList.remove('option--hidden');
    }
    isShown = !isShown;
  }
  if (e.target.classList[0] === 'option') {
    isShown = false;
    document.querySelector('.select-filtering').classList.add('option--hidden');
    selected = e.target.textContent;
    document.querySelector('.chooser').textContent = selected;
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
