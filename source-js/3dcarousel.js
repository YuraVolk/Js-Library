//Created by Yury Volkovskiy

"use strict";

const data = {
  CAROUSEL: 'threed-carousel',
  ITEM: 'threed-carousel__items-item',
  CONTROLS: 'threed-carousel__controls',
  CAROUSEL_INNER: 'threed-carousel__items',
  BUTTON_NEXT: 'threed-carousel__next',
  BUTTON_PREV: 'threed-carousel__prev',
  BUTTON_SWITCH_ORIENTATION: 'threed-carousel__switch3d'
};

window.addEventListener('load', () => {
  var carousel3d = document.querySelector(`.${data.CAROUSEL}`);

  initCarousel(carousel3d);
});

/**
 * Summary. Rotates carousel.
 *
 * @param {Number}  theta        Theta value used for calculations.
 * @param {Number}  imageIndex   Index of current image.
 * @param {Node}    figure       Container of images.
 * @param {Boolean} isntVertical Is carousel vertical.
 */
function rotateCarousel(theta, imageIndex, figure, isntVertical) {
  if (isntVertical) {
    figure.style.transform = "rotateY(" + imageIndex * -theta + "rad)";
  } else {
    figure.style.transform = "rotateX(" + imageIndex * -theta + "rad)";
  }
}

/**
 * Summary. Creates 3D carousel
 *
 * @param {Node}    parent       Container of carousel.
 * @param {Boolean} isntVertical Is carousel vertical.
 */
function initCarousel(parent, isntVertical) {
  if (isntVertical == undefined) {
    isntVertical = true;
  }

  let figure = parent.querySelector(`.${data.CAROUSEL_INNER}`);
  let nav = document.querySelector(`.${data.CONTROLS}`);
  let images = Array.prototype.slice.call(figure.querySelectorAll(`.${data.ITEM}`));
  let n = images.length;
  let theta = 2 * Math.PI / n;
  let currImage = 0;

  if (isntVertical) {
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width))
    });
  } else {
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));
    window.addEventListener('resize', () => {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).height))
    });
  }

  setupNavigation();

  /**
   * Summary. Sets up carousel default position.
   * Description. Sets all default css properties,
   *              percentages and opacities.
   * @access    private
   * @see       rotateCarousel
   * @memberof  initCarousel
   *
   * @since 1.2.0
   *
   * @param {Number} n Number of images.
   * @param {Number} s Size of every image.
   */
  function setupCarousel(n, s) {
    var apothem = s / (2 * Math.tan(Math.PI / n));

    figure.style.transformOrigin = "50% 50% " + -apothem + "px";

    for (var i = 0; i < n; i++) {
      images[i].style.padding = "0";
    } for (i = 1; i < n; i++) {
      images[i].style.transformOrigin = "50% 50% " + -apothem + "px";

      if (isntVertical) {
        images[i].style.transform = "rotateY(" + i * theta + "rad)";
      } else {
        images[i].style.transform = "rotateX(" + i * theta + "rad)";
      }
      images[i].style.padding = "0";
    }

    for (i = 0; i < n; i++) {
      images[i].style.backfaceVisibility = 'hidden';
      images[i].style.opacity = 0.99999;
    }

    rotateCarousel(theta, currImage, figure, isntVertical);
  }

  /**
   * Summary. Add listeners for buttons.
   * Description. Changes carousel styles
   *              based on button pressed.
   *
   * @memberof initCarousel
   * @see      rotateCarousel
   * @fires    onClick
   */
  function setupNavigation() {
    nav.addEventListener('click', onClick, true);

    function onClick(e) {
      e.stopPropagation();

      var t = e.target;
      if (t.tagName.toUpperCase() != 'BUTTON')
        return;

      if (t.classList.contains(data.BUTTON_NEXT)) {
        currImage++;
      } else if (t.classList.contains(data.BUTTON_PREV)) {
        currImage--;
      } else if (t.classList.contains(data.BUTTON_SWITCH_ORIENTATION)) {
        isntVertical = !isntVertical;
        if (isntVertical) {
          parent.style.height = 'auto';
          figure.style.marginTop = 0;
        } else {
          parent.style.height = '870px';
          figure.style.marginTop = '120px';
        }
      }

      rotateCarousel(theta, currImage, figure, isntVertical);
    }
  }

  /**
   * Summary. Rerenders carousel.
   * @access private
   */
  setInterval(function () {
    if (isntVertical) {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    } else {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));
    }
  }, 160);
}