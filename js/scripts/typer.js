//Created by Yury Volkovskiy
let isTyping = false;

var markups = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat. Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris \nnisi ut aliquip ex ea commodo consequat."
];

const data = {
  TEXTS: [
    {
      START_TYPING_BUTTON: 'typeButton--1',
      ELEMENT: 'self-typing-1',
    },
    {
      START_TYPING_BUTTON: 'typeButton--2',
      ELEMENT: 'self-typing-2',
    }
  ],
  ANIMATION_WAVE: 'animationWave'
};

function startTyping(content, el, letterUniq) {
  var index = 0;
  if (letterUniq) {
    el.textContent = '';
  }
  while (index <= content.length) {
    (function (index) {
      setTimeout(function () {
        if (!letterUniq) {
          el.textContent = content.substr(0, index);
        } else {
          el.insertAdjacentHTML('beforeend', `<span class="${data.ANIMATION_WAVE}">` + content.charAt(index) + "</span>");
        }

        if (index >= content.length) {
          isTyping = false;
        }
      }, 35 * index);
    })(index++);
  }
}

document.addEventListener('click', event => {
  if (event.target.classList[1] === data.TEXTS[0].START_TYPING_BUTTON) {
    if (!isTyping) {
      isTyping = true;
      startTyping(markups[0], document.querySelector(`.${data.TEXTS[0].ELEMENT}`), false);
    }
  }
  if (event.target.classList[1] === data.TEXTS[1].START_TYPING_BUTTON) {
    if (!isTyping) {
      isTyping = true;
      startTyping(markups[1], document.querySelector(`.${data.TEXTS[1].ELEMENT}`), true);
    }
  }
});

