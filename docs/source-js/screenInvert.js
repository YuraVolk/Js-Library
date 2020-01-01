//Created by Yury Volkovskiy
const data = {
  TO_INVERT_CONTAINER: 'invertable-content',
  TO_INVERT: 'invert-content__btn',
  INVERTED: 'invertable-content--inverted'
}

let modeTarget = document.querySelector(`.${data.TO_INVERT_CONTAINER}`);
let mode = lightOrDark(getComputedStyle(modeTarget).backgroundColor);

function lightOrDark(color) {
  var r, g, b, hsp;
  if (color.match(/^rgb/)) {
      color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
      r = color[1];
      g = color[2];
      b = color[3];
  } else {
      color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
      r = color >> 16;
      g = color >> 8 & 255;
      b = color & 255;
  }
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
  return hsp > 127.5 ? 'light' : 'dark';
}


document.addEventListener('click', (e) => {
  if (e.target.classList[1] === data.TO_INVERT) {
    if (mode === 'light') {
      mode = 'dark';
      modeTarget.classList.add(data.INVERTED);
    } else {
      mode = 'light';
      modeTarget.classList.remove(data.INVERTED);
    }
  }
});