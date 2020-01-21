//Created by Yury Volkovskiy

const data = {
  IMAGE: 'magnifier__image',
  GLASS: 'magnifier__glass'
}

let width, height, img, zoom, glass;

/**
 * Summary. Initialize magnifier.
 * Description. Set default values, select images
 *              and attach event listeners.
 *
 * @fires load
 */
window.addEventListener("load", () => {
  zoom = 2;

  img = document.querySelector(`.${data.IMAGE}`);

  img.parentNode.insertAdjacentHTML('afterbegin', `<div class="${data.GLASS}"></div>`);
  glass = document.querySelector(`.${data.GLASS}`);

  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  width = glass.offsetWidth / 2;
  height = glass.offsetHeight / 2;

  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);
});

/**
 * Summary. Handle movement of magnifier.
 *
 * @fires mousemove
 *
 * @param {MouseEvent} event Mouse move event
 */
function moveMagnifier(event) {
  event.preventDefault();
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

/**
 * Summary. Helper function to get x and y coordinates
 *          of mouse.
 *
 * @param {MouseEvent} event Mouse move event
 */
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
