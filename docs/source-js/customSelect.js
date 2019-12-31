//Created by Yury Volkovskiy

const data = {
  SELECT: 'custom-select',
  SELECT_CURRENT: 'custom-select__selected',
  SELECT_OPTIONS: 'custom-select__items',
  SELECT_OPTIONS_HIDDEN: 'custom-select__items--hidden',
  SELECT_OPTION_CURRENT: 'custom-select__item--selected',
  SELECT_OPEN: 'custom-select--open',
  SELECT_OPTION: 'custom-select__item'
};

const x = document.getElementsByClassName(data.SELECT);

for (let i = 0; i < x.length; i++) {
  const select = x[i].querySelector('select');

  x[i].insertAdjacentHTML('beforeend', `\n    <div class=\"${data.SELECT_CURRENT}\">\n${select.options[select.selectedIndex].innerHTML}\n    </div>\n  `);
  const a = x[i].lastElementChild;

  x[i].insertAdjacentHTML('beforeend', `\n    <ul class=\"${data.SELECT_OPTIONS} ${data.SELECT_OPTIONS_HIDDEN}\"></ul>\n  `);
  var b = x[i].lastElementChild;
  for (let j = 1; j < select.length; j++) {
    b.insertAdjacentHTML('beforeend', `\n    <li class="${data.SELECT_OPTION}">` + select.options[j].innerHTML + "</li>\n    ");
    let c = b.lastElementChild;
    c.addEventListener("click", function (event) {
      if (window.getComputedStyle(event.target.parentNode).getPropertyValue("opacity") == 0) {
        return;
      }

      const selectTest = event.target.parentNode.parentNode.querySelectorAll("select")[0];
      const toTest = event.target.parentNode.previousElementSibling;
      for (let i = 0; i < selectTest.length; i++) {
        if (selectTest.options[i].innerHTML == event.target.innerHTML) {
          selectTest.selectedIndex = i;
          toTest.innerHTML = event.target.innerHTML;
          const options = Array.from(event.target.parentNode.querySelectorAll(`.${data.SELECT_OPTION_CURRENT}`));
          options.forEach((el) => el.classList.remove(data.SELECT_OPTION_CURRENT));
          event.target.classList.add(data.SELECT_OPTION_CURRENT);
          break;
        }
      }
    });
  }


  a.addEventListener("click", function (event) {
    event.stopPropagation();
    closeAllSelect(event.target);
    event.target.nextElementSibling.classList.toggle(data.SELECT_OPTIONS_HIDDEN);
    event.target.classList.toggle(data.SELECT_OPEN);
  });
}

function closeAllSelect(el) {
  var x, y, i, arrNo = [];
  x = document.getElementsByClassName(data.SELECT_OPTIONS);
  y = document.getElementsByClassName(data.SELECT_CURRENT);
  for (i = 0; i < y.length; i++) {
    if (el == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove(data.SELECT_OPEN);
    }
  }
  for (i = 0; i < x.length; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add(data.SELECT_OPTIONS_HIDDEN);
    }
  }
}

window.addEventListener('scroll', () => {
  closeAllSelect();
});

document.addEventListener('click', () => {
  closeAllSelect();
});
