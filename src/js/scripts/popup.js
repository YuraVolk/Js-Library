"use strict";

let scroll, timeLeft, isActive;

function showPopup(popup) {
  isActive = false;
  if (popup.style.display != 'block') {
    popup.style.display = 'block';
    stopScroll();
  }
  if (popup.classList[2] === 'time') {
    initTiming(popup);
  }
}

function hidePopup() {
  Array.from(document.querySelectorAll('.popup')).forEach(el => {
    if (el.classList[3] === 'renew' && el.style.display === 'block') {
      isActive = true;
    }
    el.style.display = 'none';
  });

  document.body.style.position = '';
  document.body.style.top = '';

  window.scrollTo(0, scroll.slice(0, -2));
}

function initTiming(popup) {
  const pop = popup;

  timeLeft = 6;
  pop.childNodes[1].childNodes[3].childNodes[3].textContent = 6;

  pop.childNodes[1].childNodes[1].style.display = 'none';
  pop.childNodes[1].childNodes[3].style.display = 'block';

  var interval = setInterval(function () {
    timeLeft--;

    pop.childNodes[1].childNodes[3].childNodes[3].textContent = timeLeft;
    if (timeLeft < 1) {
      clearInterval(interval);
      pop.childNodes[1].childNodes[1].style.display = 'block';
      pop.childNodes[1].childNodes[3].style.display = 'none';
    }
  }, 1000);
}

function stopScroll() {
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  scroll = scrollY;
  const body = document.body;
  body.style.position = 'fixed';
  body.style.top = "-" + scrollY;
}

let timing = setInterval(function () {
  if (isActive) {
    showPopup(document.querySelector('.popup--3'));
  }
}, 15000);

document.addEventListener('click', e => {
  if (e.target.classList[1] === 'popupButton') {
    showPopup(document.querySelector(".popup--" + e.target.classList[2].slice(-1)));
  }
  if (e.target.classList[0] === 'popup__close') {
    hidePopup();
  }
  if (e.target.classList[1] === 'closePopup') {
    isActive = false;
  }
});

window.addEventListener('scroll', () => {
  document.documentElement.style.setProperty('--scroll-y', window.scrollY + 'px');
});

