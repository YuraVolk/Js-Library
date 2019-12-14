//Created by Yury Volkovskiy
const data = {
  BUTTON_LEFT: 'buttons__button--left',
  BUTTON_RIGHT: 'buttons__button--right',
  BUTTON: 'buttons__button'
};

let page = 1;

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

function numOnButton() {
  document.querySelector(`.${data.BUTTON_LEFT}`).textContent = 'Go to page ' + (page - 1);
  document.querySelector(`.${data.BUTTON_RIGHT}`).textContent = 'Go to page ' + (page + 1);
}

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

document.addEventListener('click', event => {
  if (`.${event.target.parentNode.classList[0]}` === `.${data.BUTTON}`) {
    buttonPress(event.target.parentNode.classList[1]);
  }
  if (`.${event.target.classList[0]}` === `.${data.BUTTON}`) {
    buttonPress(event.target.classList[1]);
  }
});

displayButtons(page);

