//Created by Yury Volkovskiy

const array = [];

const body = document.querySelector('body');
const sidenav = document.querySelector('.sidenav');

Array.prototype.slice.call(document.getElementsByTagName('section')).forEach(elMain => {
  for (let el of document.getElementsByTagName('h1')) {
    if (elMain.contains(el)) {
      array.push(el.textContent);
      break;
    }
  }
});

array.forEach(el => {
  document.querySelector('.sidenav__items').insertAdjacentHTML('beforeend', '<li class="sidenav__items-link"><a href="#' + el.replace(/ /g, '') + '">' + el + '</a></li>');
});

document.addEventListener('click', e => {
  if (e.target.classList[0] === 'sidenav__close') {
    sidenav.classList.add('sidenav--hidden');
    body.classList.add('sidenav--hidden');
  }
});

document.addEventListener('mousemove', e => {
  if (e.clientX < 5) {
    sidenav.classList.remove('sidenav--hidden');
    body.classList.remove('sidenav--hidden');
  }
});

sidenav.classList.add('sidenav--hidden');
body.classList.add('sidenav--hidden');
