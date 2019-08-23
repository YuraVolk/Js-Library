
var opacityRanges = document.getElementsByClassName('opacity_range');
var rangeOpacity = opacityRanges[0].childNodes;
var rgba = [132, 46, 153, 1];

let opacityGlobal = 1;

function initColorPicker() {
    var canvasEl = document.getElementById('picker');
    var canvasContext = canvasEl.getContext('2d');

    var image = new Image(256, 256);
    image.onload = () => canvasContext.drawImage(image, 0, 0, image.width, image.height); 
    image.src = "picker.webp";
    canvasEl.onmousedown = function(mouseEvent) {
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

  toHex(red,green,blue);
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
      
      thumbRange.oninput = function(thumbRange, trackRange) {
        return function(e) {
          trackRange.value = thumbRange.value;
          changeOpacity(trackRange.value);
          changeColor(rgba, opacityGlobal);
        };
      }(thumbRange, trackRange);
  }
}

function changeOpacity(opacity) {
  document.querySelector('.opacity').style = "opacity: " + opacity / 100;

  opacityGlobal = opacity / 100;
}

function changeColor(rgba, opacity) {
  document.querySelector('.picker-back').style = "background-color: " + "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity + ")";
  document.querySelector('.rgba').textContent = " is " + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity;

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