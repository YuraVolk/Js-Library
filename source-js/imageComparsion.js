//Created by Yury Volkovskiy
const data = {
  COMPARISON_IMG: 'comparsion-image--comparison',
  COMPARISON_SLIDER: 'comparsion-slider__toddler'
};

const x = document.querySelectorAll(`.${data.COMPARISON_IMG}`);

for (var i = 0; i < x.length; i++) {
  compareImages(x[i], i, x.length + 1);
}

/**
 * Summary. Control image comparison.
 * Description. Set up comparison sliders,
 *              set their default positions,
 *              attach listeners and control
 *              image comparison.
 *
 *
 * @param {Node}   img    Comparison image
 * @param {Number} index  Index of comparison image
 * @param {Number} length Number of images to compare
 */
function compareImages(img, index, length) {
  var slider, img, clicked = 0;
  const width = img.offsetWidth;
  const height = img.offsetHeight;
  img.style.width = (width /  length) + "px";
  slider = document.createElement("DIV");
  slider.setAttribute("class", data.COMPARISON_SLIDER);
  img.parentElement.insertBefore(slider, img);
  slider.style.top = (height / 2) -  (slider.offsetHeight / 2) + "px";
  slider.style.left = (width - ((width /  length) * (index + 1))) - (slider.offsetWidth / 2) + "px";
  slider.addEventListener("mousedown", slideReady);
  window.addEventListener("mouseup", slideFinish, {passive: true});
  slider.addEventListener("touchstart", slideReady);
  window.addEventListener("touchstop", slideFinish, {passive: true});
  slide(width - ((width /  length) * (index + 1)));

  /**
   * Summary. Handle dragging of sliders
   *
   * @listens mousemove
   *
   * @param {EventTarget} event Clicked slider
   */
  function slideReady(event) {
    event.preventDefault();
    clicked = 1;
    window.addEventListener("mousemove", slideMove, {passive: true});
    window.addEventListener("touchmove", slideMove, {passive: true});
  }

  /**
   * Summary. Indicate that user has stop comparing images.
   * @access private
   */
  function slideFinish() {
    clicked = 0;
  }

  /**
   * Summary. Handle movement and comparison of sliders.
   *
   * @fires mousemove
   */
  function slideMove() {
    if (clicked !== 0) {
      img.style.left = 0;
      let pos = event.pageX - img.getBoundingClientRect().left - window.pageXOffset;
      if (pos < 0) pos = 0;
      if (pos > width) pos = width;
      slide(pos);
    }
  }

  /**
   * Summary. Display comparison of two images.
   *
   * @param {Number} differ New position of slider and image.
   */
  function slide(differ) {
    img.style.width = differ + "px";
    slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
  }
}