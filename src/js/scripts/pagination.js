//Created by Yury Volkovskiy
const data = {
  BUTTON_LEFT: 'pagination__button--left',
  BUTTON_RIGHT: 'pagination__button--right',
  BUTTON: 'pagination__button'
};

let page = 1;

/**
 * Summary. Change current page.
 *
 * @param {String} modifier      Class of clicked button
 * @param {Number} [firstPage=1] First page
 * @param {Number} [lastPage=12] Last page
 */
function buttonPress(modifier, firstPage = 1, lastPage = 12) {
  if (modifier === data.BUTTON_LEFT) {
    if (page !== firstPage) {
      page--;
    }
  } else if (modifier === data.BUTTON_RIGHT) {
    if (page !== lastPage) {
      page++;
    }
  }
  displayButtons(page);
}

/**
 * Summary. Change text of pagination buttons so they
 *          accord to current page.
 */
function numOnButton() {
  document.querySelector(`.${data.BUTTON_LEFT}`).textContent = 'Go to page ' + (page - 1);
  document.querySelector(`.${data.BUTTON_RIGHT}`).textContent = 'Go to page ' + (page + 1);
}

/**
 * Summary. Show or hide buttons if current page
 *          is first or last.
 *
 * @example
 * Current page = 1
 * First page = 1
 * First button is hidden
 *
 * @example
 * Current page = 12
 * First page = 12
 * Second button is hidden
 *
 * @param {Number} curPage   Current page
 * @param {Number} firstPage First page
 * @param {Number} lastPage  Last page
 */
function displayButtons(curPage, firstPage = 1, lastPage = 12) {
  if (curPage === firstPage) {
    document.querySelector(`.${data.BUTTON_LEFT}`).style.display = 'none';
    document.querySelector(`.${data.BUTTON_RIGHT}`).style.display = 'block';
  } else if (curPage === lastPage) {
    document.querySelector(`.${data.BUTTON_LEFT}`).style.display = 'block';
    document.querySelector(`.${data.BUTTON_RIGHT}`).style.display = 'none';
  } else {
    document.querySelector(`.${data.BUTTON_LEFT}`).style.display = 'block';
    document.querySelector(`.${data.BUTTON_RIGHT}`).style.display = 'block';
  }

  numOnButton();
}

/**
 * Summary. Handle clicks on pagination buttons.
 *
 * @listens click
 */
document.addEventListener('click', event => {
  if (`.${event.target.parentNode.classList[0]}` === `.${data.BUTTON}`) {
    buttonPress(event.target.parentNode.classList[1]);
  }
  if (`.${event.target.classList[0]}` === `.${data.BUTTON}`) {
    buttonPress(event.target.classList[1]);
  }
});

displayButtons(page);

