//Created by Yury Volkovskiy

let isTyping = false;

var markups = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat. Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris \nnisi ut aliquip ex ea commodo consequat."
];

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
          el.insertAdjacentHTML('beforeend', "<span class=\"animationWave\">" + content.charAt(index) + "</span>");
        }

        if (index >= content.length) {
          isTyping = false;
        }
      }, 35 * index);
    })(index++);
  }
}

document.addEventListener('click', event => {
  if (event.target.classList[1] === "typeButton--1") {
    if (!isTyping) {
      isTyping = true;
      startTyping(markups[0], document.querySelector('.self-typing-1'), false);
    }
  }
  if (event.target.classList[1] === "typeButton--2") {
    if (!isTyping) {
      isTyping = true;
      startTyping(markups[1], document.querySelector('.self-typing-2'), true);
    }
  }
});

