//Created by Yury Volkovskiy
const data = {
  POPUP: 'popup',
  RENEWING_POPUP: 'popup--3',
  STOP_POPUP_RENEW: 'closePopup',
  CLOSE_POPUP: 'popup__close',
  SHOW_POPUP: 'popup-btn',
  POPUP_TIMED: 'popup--timed',
  POPUP_RENEWING: 'popup--renewing',
  POPUP_TIMER: 'popup__timer'
};

let scroll, timeLeft, isActive, toScroll;

// Show popup
function showPopup(popup) {
  isActive = false;
  if (popup.style.display != 'block') {
    popup.style.display = 'block';
    stopScroll();
  }
  if (popup.classList.contains(data.POPUP_TIMED)) {
    initTiming(popup);
  }
}

// Hide popup
function hidePopup() {
  Array.prototype.slice.call(document.querySelectorAll(`.${data.POPUP}`)).forEach(el => {
    if (el.classList.contains(data.POPUP_RENEWING) && el.style.display === 'block') {
      isActive = true;
    }
    el.style.display = 'none';
  });

  document.body.style.position = '';
  document.body.style.top = '';

  window.scrollTo(0, toScroll);
}

/**
 * Summary. Start countdown on popup.
 *
 * @param {Node} popup Popup window
 */
function initTiming(popup) {
  const pop = popup;

  timeLeft = 6;
  pop.querySelector(`.${data.POPUP_TIMER}`).textContent = 6;

  pop.childNodes[1].childNodes[1].style.display = 'none';
  pop.childNodes[1].childNodes[3].style.display = 'block';

  var interval = setInterval(function () {
    timeLeft--;

    pop.querySelector(`.${data.POPUP_TIMER}`).textContent = timeLeft;
    if (timeLeft < 1) {
      clearInterval(interval);
      pop.childNodes[1].childNodes[1].style.display = 'block';
      pop.childNodes[1].childNodes[3].style.display = 'none';
    }
  }, 1000);
}

// Prevent scrolling and set current scroll
function stopScroll() {
  const body = document.querySelector('body');
  toScroll = scroll;
  body.style.position = 'fixed';
  body.style.top = "-" + scroll + 'px';
}

// Show popup again
let timing = setInterval(function () {
  if (isActive) {
    showPopup(document.querySelector(`.${data.RENEWING_POPUP}`));
  }
}, 15000);

/**
 * Summary. Handle clicks on buttons.
 *
 * @listens click
 */
document.addEventListener('click', e => {
  if (e.target.classList[1] === data.SHOW_POPUP) {
    showPopup(document.querySelector(`.${data.POPUP}--` + e.target.classList[2].slice(-1)));
  }
  if (e.target.classList[0] === data.CLOSE_POPUP) {
    hidePopup();
  }
  if (e.target.classList[1] === data.STOP_POPUP_RENEW) {
    isActive = false;
  }
});

window.addEventListener('scroll', () => {
  scroll = window.pageYOffset;
});

toScroll = window.pageYOffset;
