const zoom = 2;

const img = document.querySelector('.magnifier-image');

img.parentNode.insertAdjacentHTML('afterbegin', '<div class="magnifier-glass"></div>');
const glass = document.querySelector('.magnifier-glass');

glass.style.backgroundImage = "url('" + img.src + "')";
glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
const width = glass.offsetWidth / 2;
const height = glass.offsetHeight / 2;

glass.addEventListener("mousemove", moveMagnifier);
img.addEventListener("mousemove", moveMagnifier);
glass.addEventListener("touchmove", moveMagnifier);
img.addEventListener("touchmove", moveMagnifier);

function moveMagnifier(event) {
  event.preventDefault();
  let {x, y} = getCursorPos(event);
  if (x > img.width - (width / zoom)) {
    x = img.width - (width / zoom);
  }
  if (x < width / zoom) {
    x = width / zoom;
  }
  if (y > img.height - (height / zoom)) {
    y = img.height - (height / zoom);
  }
  if (y < height / zoom) {
    y = height / zoom;
  }
  glass.style.left = (x - width) + "px";
  glass.style.top = (y - height) + "px";
  glass.style.backgroundPosition = "-" + ((x * zoom) - width) + "px -" + ((y * zoom) - height) + "px";
}

function getCursorPos(event) {
  let x = 0;
  let y = 0;
  event = event || window.event;
  const rect = img.getBoundingClientRect();
  x = event.pageX - rect.left;
  y = event.pageY - rect.top;
  x -= window.pageXOffset;
  y -= window.pageYOffset;
  return { x, y };
}
