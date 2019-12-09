//Created by Yury Volkovskiy

function filterDivs(toLeave) {

  Array.prototype.slice.call(document.querySelectorAll('.filterEl')).forEach(function (element, i) {

    if (toLeave != 'all') {
      if (document.querySelectorAll('.filterEl')[i].classList[2] != toLeave) {
        document.querySelectorAll('.filterEl')[i].style.display = 'none';
      } else {
        document.querySelectorAll('.filterEl')[i].style.display = 'block';
      }
    } else {
      document.querySelectorAll('.filterEl')[i].style.display = 'block';
    }
  });
}

function removeClassName(className, mod) {
  Array.prototype.slice.call(document.querySelectorAll(className)).forEach(function (el, i) {
    Array.prototype.slice.call(document.querySelectorAll(className))[i].classList.remove(mod);
  });
}

function showDivFiltering(pressedButton) {
  removeClassName('.filter__slider-btn', 'filter-btnActive');
  Array.prototype.slice.call(document.querySelectorAll('.filter__slider-btn'))[pressedButton].classList.add('filter-btnActive');
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
  if (`.${event.target.classList[0]}` === '.filter__slider-btn') {
    pressedButton = document.activeElement.classList[1].slice(-1);

    showDivFiltering(pressedButton);
  }
});
