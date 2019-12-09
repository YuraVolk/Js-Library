//Created by Yury Volkovskiy
let page = 1;

function buttonPress(modifier, firstPage = 1, lastPage = 12) {
  if (modifier === 'buttons__button--left') {
    if (page !== firstPage) {
      page--;
    }
  } else if (modifier === 'buttons__button--right') {
    if (page !== lastPage) {
      page++;
    }
  }
  displayButtons(page);
}

function numOnButton() {
  document.querySelector('.buttons__button--left').textContent = 'Go to page ' + (page - 1);
  document.querySelector('.buttons__button--right').textContent = 'Go to page ' + (page + 1);
}

function displayButtons(curPage, firstPage = 1, lastPage = 12) {
  if (curPage === firstPage) {
    document.querySelector('.buttons__button--left').style.display = 'none';
    document.querySelector('.buttons__button--right').style.display = 'block';
  } else if (curPage === lastPage) {
    document.querySelector('.buttons__button--left').style.display = 'block';
    document.querySelector('.buttons__button--right').style.display = 'none';
  } else {
    document.querySelector('.buttons__button--left').style.display = 'block';
    document.querySelector('.buttons__button--right').style.display = 'block';
  }

  numOnButton();
}

document.addEventListener('click', event => {
  if (`.${event.target.parentNode.classList[0]}` === '.buttons__button') {
    buttonPress(event.target.parentNode.classList[1]);
  }
  if (`.${event.target.classList[0]}` === '.buttons__button') {
    buttonPress(event.target.classList[1]);
  }
});

displayButtons(page);

