//Created by Yury Volkovskiy
const data = {
  NAV: 'sidenav',
  LINK: 'sidenav__items-link',
  NAV_HIDDEN: 'sidenav--hidden',
  NAV_CLOSE: 'sidenav__close',
  LINKS: 'sidenav__items'
};

const array = [];

const body = document.querySelector('body');
const sidenav = document.querySelector(`.${data.NAV}`);

// Initialize sections and their headers.
Array.prototype.slice.call(document.getElementsByTagName('section')).forEach(elMain => {
  for (let el of document.getElementsByTagName('h1')) {
    if (elMain.contains(el)) {
      array.push(el.textContent);
      break;
    }
  }
});

// Add all headings to navigation.
array.forEach(el => {
  document.querySelector(`.${data.LINKS}`).insertAdjacentHTML('beforeend', `<li class="${data.LINK}"><a href="#` + el.replace(/ /g, '') + '">' + el + '</a></li>');
});

document.addEventListener('click', e => {
  if (e.target.classList[0] === data.NAV_CLOSE) {
    sidenav.classList.add(data.NAV_HIDDEN);
    body.classList.add(data.NAV_HIDDEN);
  }
});

document.addEventListener('mousemove', e => {
  if (e.clientX < 5) {
    sidenav.classList.remove(data.NAV_HIDDEN);
    body.classList.remove(data.NAV_HIDDEN);
  }
});

sidenav.classList.add(data.NAV_HIDDEN);
body.classList.add(data.NAV_HIDDEN);
