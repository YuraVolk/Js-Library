"use strict";

const array = [];

Array.from(document.getElementsByTagName('section')).forEach(elMain => {
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
    document.querySelector('.sidenav').style = 'display: none';
    document.querySelector('body').style = 'margin: 0';
  }
})

document.addEventListener('mousemove', e => {
  if (e.clientX < 5) {
    document.querySelector('.sidenav').style = 'display: block';
    document.querySelector('body').style = 'margin-left: 19%';
  }
})

document.querySelector('.sidenav').style = 'display: none';
document.querySelector('body').style = 'margin: 0';
