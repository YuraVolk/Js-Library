//Created by Yury Volkovskiy

"use strict";

const data = {
  CAROUSEL: 'tdcarousel',
  ITEM: 'figure__img',
  CONTROLS: 'carousel-nav',
  CAROUSEL_INNER: 'div',
  BUTTON_NEXT: 'next',
  BUTTON_PREV: 'prev',
  BUTTON_SWITCH_ORIENTATION: 'switch3d'
};

window.addEventListener('load', () => {
  var carousel3d = document.querySelector(`.${data.CAROUSEL}`);

  initCarousel(carousel3d, true);
});

function rotateCarousel(theta, imageIndex, figure, isntVertical) {
  if (isntVertical) {
    figure.style.transform = "rotateY(" + imageIndex * -theta + "rad)";
  } else {
    figure.style.transform = "rotateX(" + imageIndex * -theta + "rad)";
  }
}

function initCarousel(parent, isntVertical) {
  let figure = parent.querySelector(data.CAROUSEL_INNER);
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

  function setupNavigation() {
    nav.addEventListener('click', onClick, true);

    function onClick(e) {
      e.stopPropagation();

      var t = e.target;
      if (t.tagName.toUpperCase() != 'BUTTON')
        return;

      if (t.classList.contains(data.BUTTON_NEXT)) {
        currImage++;
      }
      else if (t.classList.contains(data.BUTTON_PREV)) {
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

  setInterval(function () {
    if (isntVertical) {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    } else {
      setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));
    }
  }, 160);

}
