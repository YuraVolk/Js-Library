//Created by Yury Volkovskiy

const data = {
  CONTAINER: 'one-page-scroll',
  SLIDE: 'one-page-scroll__slide'
};

let selectedItem = 0;
let isScrolling = false;
const items = Array.prototype.slice.call(document.querySelectorAll(`.${data.SLIDE}`));

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


function easeInOutQuad(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t + b;
  t--;
  return -c / 2 * (t * (t - 2) - 1) + b;
}

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
}

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

