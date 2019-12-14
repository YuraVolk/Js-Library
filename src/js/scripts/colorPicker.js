//Created by Yury Volkovskiy

const data = {
  OPACITY_RANGE: {
    WRAP: 'opacity_range',
    THUMB: 'thumb_opacity',
    TRACK: 'track_opacity'
  },
  CODES: {
    RGBA: 'rgba',
    RGB: 'rgb',
    HEX: 'hex'
  },
  COLOR_POCKER_BACKGROUND: 'picker-back',
  COLOR_PICKER: 'picker',
  OPACITY_BACKGROUND: 'opacity'
};

var opacityRanges = document.getElementsByClassName('opacity_range');
var rangeOpacity = opacityRanges[0].childNodes;
var rgba = [132, 46, 153, 1];

let opacityGlobal = 1;

function initColorPicker() {
  var canvasEl = document.getElementById('picker');
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

  document.querySelector('.hex').textContent = '#' + r + g + b;
  return '#' + r + g + b;
}

function rgbaToRgb(RGBA) {
  alpha = 1 - RGBA.alpha;

  var red = Math.round((RGBA.alpha * (RGBA.red / 255) + (alpha * (0 / 255))) * 255);
  var green = Math.round((RGBA.alpha * (RGBA.green / 255) + (alpha * (0 / 255))) * 255);
  var blue = Math.round((RGBA.alpha * (RGBA.blue / 255) + (alpha * (0 / 255))) * 255);

  document.querySelector('.rgb').textContent = 'is : ' + red + ', ' + green + ', ' + blue;

  toHex(red, green, blue);
}

function modifyRange(audioRanges) {
  for (var i = 0; i < audioRanges.length; i++) {
    var thumbRange = null, trackRange = null;

    for (var j = 0; j < audioRanges[i].children.length; j++) {
      var child = audioRanges[i].children[j];

      if (child.className === 'thumb_opacity') {
        var thumbRange = child;
      } else if (child.className === 'track_opacity') {
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
  const opacityDiv = document.querySelector('.opacity');
  opacityDiv.style.opacity = opacity / 100;
  opacityGlobal = opacity / 100;
}

function changeColor(rgba, opacity) {
  const pickerBack = document.querySelector('.picker-back');
  const pickerRgba = document.querySelector('.rgba');

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
