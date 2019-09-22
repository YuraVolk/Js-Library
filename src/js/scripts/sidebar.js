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
  document.querySelector('.sidenav').insertAdjacentHTML('beforeend', '<a href="#' + el.replace(/ /g, '') + '">' + el + '</a>');
});

document.addEventListener('click', e => {
  if (e.target.classList[0] === 'nav__close') {
    sidenav.classList.add('navbar-hidden');
    body.classList.add('hidden');
  }
});

document.addEventListener('mousemove', e => {
  if (e.clientX < 5) {
    sidenav.classList.remove('navbar-hidden');
    body.classList.remove('hidden');
  }
});

sidenav.classList.add('navbar-hidden');
body.classList.add('hidden');
