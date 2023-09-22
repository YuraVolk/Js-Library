//Created by Yury Volkovskiy

const data = {
  CONTAINER: 'one-page-scroll',
  SLIDE: 'one-page-scroll__slide'
};

let selectedItem = 0;
let isScrolling = false;
const items = Array.prototype.slice.call(document.querySelectorAll(`.${data.SLIDE}`));

/**
 * Summary. Helper function to determine,
 *          whether user is scrolling up
 *          or down.
 *
 * @param {MouseEvent} event Mouse move event
 */
function scrollDir(event) {
  let delta;
  if (event.wheelDelta) {
    delta = event.wheelDelta;
  } else {
    delta = -1 * event.deltaY;
  }

  if (delta < 0) {
    return true;
  } else if (delta > 0) {
    return false;
  }
}

/**
 * Summary. Helper function for smooth transition.
 *
 * @access private
 *
 * @param {Number} t Current time of animation
 * @param {Number} b Starting position of animation
 * @param {Number} c Current position of animation
 * @param {Number} d Duration of animation
 */
function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

/**
 * Summary. Smoothly transition from current slide
 *          to the target slide.
 *
 * @see easeInOutQuad
 *
 * @param {Node}   element  One page scroll container
 * @param {Number} to       Target position
 * @param {Number} duration Duration of transition.
 */
function smoothScrollTo(element, to, duration) {
  isScrolling = true;
  var start = element.scrollTop,
    change = to - start,
    currentTime = 0,
    increment = 5;

  var animateScroll = function() {
    currentTime += increment;
    var val = easeInOutQuad(currentTime, start, change, duration);
    element.scrollTop = val;
    if (currentTime < duration) {
      setTimeout(animateScroll, increment);
    }
    if (currentTime === duration) {
      isScrolling = false;
    }
  };

  animateScroll();
  //return animateScroll;
}

/**
 * Summary. Calculate target item, and perform
 *          smooth scroll to it.
 *
 * @see smoothScrollTo
 *
 * @param {Boolean} dir Direction (up/down) of scrolling
 */
function scrollToSlide(dir) {
  if (!isScrolling) {
    if (dir == true) {
      const toPixel = items[selectedItem + 1].offsetTop;
      smoothScrollTo(items[0].parentNode, toPixel, 600);
      selectedItem++;
    } else {
      const toPixel = items[selectedItem - 1].offsetTop;
      smoothScrollTo(items[0].parentNode, toPixel, 600);
      selectedItem--;
    }
  }
}

/**
 * Summary. Handle user mouse movement in one page scroll.
 * Description. Fully handle mouse movement,
 *              and calculate direction. After this,
 *              perform smooth scroll to slide.
 *
 * @see scrollDir
 * @see scrollToSlide
 * @see smoothScrollTo
 *
 * @listens wheel
 */
document.querySelector(`.${data.CONTAINER}`).addEventListener('wheel', (e) => {
  e.preventDefault();
  if (scrollDir(e)) {
    if (selectedItem >= items.length - 1) {
      if (!isScrolling) {
        selectedItem = 0;
        smoothScrollTo(items[0].parentNode, items[0].offsetTop, 600);
      }
    } else {
      scrollToSlide(true);
    }
  } else {
    if (selectedItem === 0) {
      if (!isScrolling) {
        const toPixel = items[0].parentNode.scrollHeight - items[0].offsetHeight;
        selectedItem = items.length - 1;
        smoothScrollTo(items[0].parentNode, toPixel, 600);
      }
    } else {
      scrollToSlide(false);
    }
  }
});

