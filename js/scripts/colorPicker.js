//Created by Yury Volkovskiy

const data = {
  OPACITY_RANGE: {
    WRAP: 'color-picker__opacity-range',
    THUMB: 'opacity-range__thumb',
    TRACK: 'opacity-range__track'
  },
  CODES: {
    RGBA: 'color-code--rgba',
    RGB: 'color-code--rgb',
    HEX: 'color-code--hex'
  },
  COLOR_PICKER_BACKGROUND: 'color-picker__current-color',
  COLOR_PICKER: 'color-picker__canvas',
  OPACITY_BACKGROUND: 'color-picker__background'
};

var opacityRanges = document.getElementsByClassName(data.OPACITY_RANGE.WRAP);
var rangeOpacity = opacityRanges[0].childNodes;
var rgba = [132, 46, 153, 1];

let opacityGlobal = 1;

function initColorPicker() {
  var canvasEl = document.getElementById(data.COLOR_PICKER);
  var canvasContext = canvasEl.getContext('2d');
  var image = new Image(256, 256);

  if (canvasEl.toDataURL('image/webp').indexOf('data:image/webp') == 0) {
    image.src = "picker.webp";
  } else {
    image.src = "picker.jpg";
  }

  image.onload = () => canvasContext.drawImage(image, 0, 0, image.width, image.height);
  canvasEl.onmousedown = function (mouseEvent) {
    var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
    rgba = imgData.data;

    changeColor(rgba, opacityGlobal);
  }
}

function rgbToHex(rgb) {
  var hex = Number(rgb).toString(16);

  if (hex.length < 2) {
    hex = "0" + hex;
  }

  return hex;
};

function toHex(red, green, blue) {
  var r = rgbToHex(red);
  var g = rgbToHex(green);
  var b = rgbToHex(blue);

  document.querySelector(`.${data.CODES.HEX}`).textContent = '#' + r + g + b;
  return '#' + r + g + b;
}

function rgbaToRgb(RGBA) {
  alpha = 1 - RGBA.alpha;

  var red = Math.round((RGBA.alpha * (RGBA.red / 255) + (alpha * (0 / 255))) * 255);
  var green = Math.round((RGBA.alpha * (RGBA.green / 255) + (alpha * (0 / 255))) * 255);
  var blue = Math.round((RGBA.alpha * (RGBA.blue / 255) + (alpha * (0 / 255))) * 255);

  document.querySelector(`.${data.CODES.RGB}`).textContent = 'is : ' + red + ', ' + green + ', ' + blue;

  toHex(red, green, blue);
}

function modifyRange(audioRanges) {
  for (var i = 0; i < audioRanges.length; i++) {
    var thumbRange = null, trackRange = null;

    for (var j = 0; j < audioRanges[i].children.length; j++) {
      var child = audioRanges[i].children[j];

      if (child.className === data.OPACITY_RANGE.THUMB) {
        var thumbRange = child;
      } else if (child.className === data.OPACITY_RANGE.TRACK) {
        var trackRange = child;
      }
    }

    thumbRange.addEventListener('input', () => {
        trackRange.value = thumbRange.value;
        changeOpacity(trackRange.value);
        changeColor(rgba, opacityGlobal);
    });
  }
}

function changeOpacity(opacity) {
  const opacityDiv = document.querySelector(`.${data.OPACITY_BACKGROUND}`);
  opacityDiv.style.opacity = opacity / 100;
  opacityGlobal = opacity / 100;
}

function changeColor(rgba, opacity) {
  const pickerBack = document.querySelector(`.${data.COLOR_PICKER_BACKGROUND}`);
  const pickerRgba = document.querySelector(`.${data.CODES.RGBA}`);

  pickerBack.style.backgroundColor = "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity + ")";
  pickerRgba.textContent = " is " + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity;

  const RGBA = {
    red: rgba[0],
    green: rgba[1],
    blue: rgba[2],
    alpha: opacityGlobal
  };

  rgbaToRgb(RGBA);
}

initColorPicker();
modifyRange(opacityRanges);

rangeOpacity[1].value = "100";
rangeOpacity[3].value = "100";
