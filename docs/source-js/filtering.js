//Created by Yury Volkovskiy
const data = {
  FILTER_ITEM: "filter__item",
  FILTER_BUTTON: "filter__controls-btn",
  FILTER_BUTTON_ACTIVE: "filter__controls-btn"
};

function filterDivs(toLeave) {
  Array.prototype.slice.call(document.querySelectorAll(`.${data.FILTER_ITEM}`)).forEach(function (element, i) {

    if (toLeave != 'all') {
      if (!document.querySelectorAll(`.${data.FILTER_ITEM}`)[i].classList[1].endsWith(toLeave)) {
        document.querySelectorAll(`.${data.FILTER_ITEM}`)[i].style.display = 'none';
      } else {
        document.querySelectorAll(`.${data.FILTER_ITEM}`)[i].style.display = 'block';
      }
    } else {
      document.querySelectorAll(`.${data.FILTER_ITEM}`)[i].style.display = 'block';
    }
  });
}

function removeClassName(className, mod) {
  Array.prototype.slice.call(document.querySelectorAll(className)).forEach(function (el, i) {
    Array.prototype.slice.call(document.querySelectorAll(className))[i].classList.remove(mod);
  });
}

function showDivFiltering(pressedButton) {
  removeClassName(`.${data.FILTER_BUTTON}`, `.${data.FILTER_BUTTON_ACTIVE}`);
  Array.prototype.slice.call(document.querySelectorAll(`.${data.FILTER_BUTTON}`))[pressedButton].classList.add(`.${data.FILTER_BUTTON_ACTIVE}`);
  switch (pressedButton) {
    case '0':
      filterDivs('all');
      break;
    case '1':
      filterDivs('tag1');
      break;
    case '2':
      filterDivs('tag2');
      break;
    case '3':
      filterDivs('tag3');
      break;
    case '4':
      filterDivs('tag4');
      break;
  }
}


document.addEventListener('click', event => {
  if (Array.from(event.target.classList).includes(data.FILTER_BUTTON)) {
    pressedButton = document.activeElement.classList[2].slice(-1);
    showDivFiltering(pressedButton);
  }
});