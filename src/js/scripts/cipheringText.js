//Created by Yury Volkovskiy

const data = {
  START_REBUILD_BUTTON: 'start-cipher-btn',
  STOP_REBUILD_BUTTON: 'stop-cipher-btn',
  TEXT: 'ciphering__text',
  CHANGING_LETTER: 'ciphering-text__letter--changed'
};


let nextPhrase = 'into text that is reciphered';
const phrases = ['This text rechipers', 'into text that is reciphered', 'still no jQuery or any other plugin', 'It IS cool'];
let isRebuilding = false;

function cipherLetter(el, newLetter, isTimed) {
  const symbols = ['!', '"', '#', '$', '%', '*', '0', '1', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>'];
  let changeNumber;
  if (!isTimed) {
    changeNumber = Math.round(Math.random() * (44 - 6) + 6);
  } else {
    changeNumber = Math.round(Math.random() * (14 - 6) + 6);
  }
  let isDone = false;
  var index = 0;
  setTimeout(function () {
    while (index <= changeNumber) {
      (function (index) {
        setTimeout(function () {
          if (!isDone) {
            let symbol = symbols[Math.floor(Math.random() * symbols.length)];
            el.textContent = symbol;
          }
          if (!(index < changeNumber)) {
            isDone = true;
            el.textContent = newLetter;
            el.classList.remove(data.CHANGING_LETTER);
          }
        }, 65 * index);
      })(index++);
    }
  }, Math.random() * 1000);
}

function splitText(el, nextPhraseLength) {
  const oldText = el.textContent;
  el.textContent = '';
  for (var i = 0; i < oldText.length; i++) {
    el.insertAdjacentHTML('beforeend', '<span>' + oldText.charAt(i) + '</span>');
  }
  if (nextPhraseLength > oldText.length) {
    for (var i = 0; i < nextPhraseLength - oldText.length; i++) {
      el.insertAdjacentHTML('beforeend', '<span></span>');
    }
  }
}

function recipherText(children, nextText) {
  children.forEach((el, i) => {
    if (!(el.textContent == nextText.charAt(i))) {
      el.classList.add(data.CHANGING_LETTER);
      if (el.textContent.length === 0) {
        setTimeout(function () {
          cipherLetter(el, nextText.charAt(i), true);
        }, 45 * i);
      } else {
        cipherLetter(el, nextText.charAt(i), false);
      }
    }
  });
}

let element = document.querySelector(`.${data.TEXT}`);
let inter;
let gI = -1;

document.addEventListener('click', event => {

  if (event.target.classList[1] === data.START_REBUILD_BUTTON) {
    isRebuilding = true;
    inter = window.setInterval(() => {
      if (gI === phrases.length - 1) {
        gI = 0;
      } else {
        gI++;
      }
      let index = (gI);
      if (gI === phrases.length - 1) {
        nextPhrase = phrases[0];
      } else {
        nextPhrase = phrases[gI + 1];
      }
      element.textContent = phrases[index];

      splitText(element, nextPhrase.length);
      recipherText(Array.prototype.slice.call(element.childNodes), nextPhrase);
    }, 7680);
  }
  if (event.target.classList[1] === data.STOP_REBUILD_BUTTON) {
    if (typeof inter !== 'undefined') {
      window.clearInterval(inter);
    }
  }
});
