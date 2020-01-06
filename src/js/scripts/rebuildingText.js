//Created by Yury Volkovskiy

const data = {
  START_REBUILD_BUTTON: 'start-bubbling__btn',
  STOP_REBUILD_BUTTON: 'stop-bubbling__btn',
  TEXT: 'bubble__text'
};

let phrases = [
  'This text transforms   ',
  'into other texts       ',
  'no jQuery or any plugin',
  'just pure javascript   ',
  'Cool, right?            '
];

const phrasesLastLetters = [];
let isRebulding1 = false;

/**
 * Summary. Helper function to set character at index of string.
 *
 * @param {String} str   Original string
 * @param {Number} index Index of new character
 * @param {String} char  New character
 */
function setCharAt(str, index, char) {
  if (index > str.length - 1) return str;

  return str.substr(0, index) + char + str.substr(index + 1);
}

// Initialize arrays
function moderateLists() {
  phrases.forEach(el => {
    phrasesLastLetters.push(el.charAt(0));
  });
}

/**
 * Summary. Smoothly rebuild text of HTML element from one to another.
 *
 * @param {Node}   el         HTML text element
 * @param {String} phrase     Current content of element
 * @param {String} nextPhrase New content of element
 */
function rebuildTextFinal(el, phrase, nextPhrase) {
  let firstLetter = nextPhrase.charAt(0);
  let newText = phrase;
  let isDone = false;

  for (var i = 0; (i < nextPhrase.length - 1 && !isDone); i++) {
    (function (i) {
      setTimeout(function () {
        newText = setCharAt(newText, i - 1, nextPhrase.charAt(i));
        setTimeout(function () {
          if (i < phrase.length - 1) {
            newText = setCharAt(newText, i - 1, nextPhrase.charAt(i - 1));
          }
        }, 25 * i);
        if (i > 1) {
          newText = newText.replace(newText.charAt(1), nextPhrase.charAt(1));
        }
        if (i > 4) {
          newText = newText.replace(newText.charAt(3), nextPhrase.charAt(3));
          newText = newText.replace(newText.charAt(2), nextPhrase.charAt(2));
        }
        if (!isDone) {
          newText = newText.replace(newText.charAt(0), firstLetter);
          el.textContent = '' + newText;
        }
        if (!(i < nextPhrase.length - 1)) {
          el.textContent = nextPhrase;
          isDone = true;
        }
      }, 75 * i);

    })(index++);
  }
}


moderateLists();
let element, index, phraseNext;
let gI = -1;

let inter;

/**
 * Summary. Handle clicks on buttons.
 *
 * @listens click
 */
document.addEventListener('click', event => {
  if (event.target.classList[1] === data.START_REBUILD_BUTTON) {
    isRebulding1 = true;
    inter = window.setInterval(() => {
      if (gI === phrases.length - 1) {
        gI = 0;
      } else {
        gI++;
      }
      element = document.querySelector(`.${data.TEXT}`);
      index = (gI);
      if (gI === phrases.length - 1) {
        phraseNext = phrases[0];
      } else {
        phraseNext = phrases[gI + 1];
      }

      rebuildTextFinal(element, phrases[index], phraseNext);
    }, 3670);
  }
  if (event.target.classList[1] === data.STOP_REBUILD_BUTTON) {
    if (typeof inter !== 'undefined') {
      window.clearInterval(inter);
    }
  }
});
