//Created by Yury Volkovskiy
const data = {
  SLIDER: 'gallery',
  SLIDES: 'gallery-list',
  SLIDE: 'gallery-list__item',
  GALLERY_INDICATOR: 'gallery-toggle',
  ACTIVE_INDICATOR: 'gallery-toggle--active',
  LEFT_BTN: 'gallery__button--prev',
  RIGHT_BTN: 'gallery__button--next'
};

const slider = document.querySelector(`.${data.SLIDER}`);
const slideList = document.querySelector(`.${data.SLIDES}`);
const slideListItems = slider.querySelectorAll(`.${data.SLIDE}`);
const slideWidth = slideListItems[0].offsetWidth;
const slidesLength = slideListItems.length;
let current = 1;
slideList.style.left = '-' + (current * 100) + '%';
let direction;
let animating = false;

/**
 * Summary. Handle clicks on carousel left/right buttons.
 * Description. Move slides of carousel left or
 *              right depending on clicked button.
 *
 * @param {Node} el Clicked button
 */
function clickArrowButton(el) {
  let direction = el.classList[1].slice(-4);
  const pos = parseInt(slideList.style.left) || 0;
  let newPos;
  direction = direction === 'prev' ? -1 : 1;
  newPos = pos + (-1 * 100 * direction);
  if (!animating) {
    slideTo(slideList, pos, newPos, 500);
    current += direction;
  }
}

/**
 * Summary. Handle clicks on carousel slide toggles.
 * Description. Go to nth carousel item
 *              depending on pressed toggle.
 *
 * @param {Node} el Pressed toggle
 */
function clickPagerItem(el) {
  const slideIndex = el.classList[1][el.classList[1].length - 1];
  const targetSlide = slider.querySelector(`.${data.SLIDE}--` + slideIndex);
  const pos = parseInt(slideList.style.left) || 0;
  const newPos = Math.round(targetSlide.offsetLeft / targetSlide.offsetWidth) * 100 * -1;

  if (!animating && pos !== newPos) {
    slideTo(slideList, pos, newPos);
    current = parseInt(slideIndex) + 1;
  }
}

/**
 * Summary. Function to handle carousel animation.
 *
 * @param {Node}   element Carousel
 * @param {Number} pos     Current position of slides in carousel
 * @param {Number} newPos  New position of slides in carousel
 */
function slideTo(element, pos, newPos) {
  animating = true;
  animate(pos, newPos, element);
}

/**
 * Summary. Helper function to smoothly
 *          carousel to left or right.
 *
 * @param {Number} delta   Value of new position relative to animation
 * @param {Number} pos     Current position of slides in carousel
 * @param {Number} newPos  New position of slides in carousel
 * @param {Node}   element Carousel
 */
function step(delta, pos, newPos, element) {
  const direction = pos > newPos ? 1 : -1
  element.style.left = pos + Math.abs(newPos - pos) * delta * direction * -1 + '%';
}

/**
 * Summary. Smoothly animate slide transition in carousel.
 *
 * @see step
 * @param {Number} pos     Current position of slides in carousel
 * @param {Number} newPos  New position of slides in carousel
 * @param {Node}   element Carousel
 */
function animate(pos, newPos, element) {
  const start = new Date();
  const idle = setInterval(function () {
    let timePassed = new Date - start;
    let progress = timePassed / 500;
    if (progress > 1) {
      progress = 1;
    }
    const delta = Math.pow(progress, 2);
    step(delta, pos, newPos, element);
    if (progress === 1) {
      updateSlide();
      clearInterval(idle);
      animating = false;
      checkCurrentSlide();
    }
  }, 20);
}


/**
 * Summary. Update carousel current toggle.
 */
function updateSlide() {
  Array.prototype.slice.call(document.querySelectorAll(`.${data.GALLERY_INDICATOR}`)).forEach((el) => {
    el.classList.remove(data.ACTIVE_INDICATOR);
  });
  if (current === 0) {
    document.querySelector(`.${data.GALLERY_INDICATOR}--` + (slidesLength - 1)).classList.add(data.ACTIVE_INDICATOR);
  } else if (slidesLength === (current - 1)) {
    document.querySelector(`.${data.GALLERY_INDICATOR}--0`).classList.add(data.ACTIVE_INDICATOR);
  } else {
    document.querySelector(`.${data.GALLERY_INDICATOR}--` + (current - 1)).classList.add(data.ACTIVE_INDICATOR);
  }
}

/**
 * Summary. Perform check whether current slide is correct.
 * Description. If slide is not in its final position,
 *              move it to it.
 */
function checkCurrentSlide() {
  let cycle = false;
  cycle = !!(current === 0 || current > slidesLength)
  if (cycle) {
    current = (current === 0) ? slidesLength : 1;
    slideList.style.left = (-1 * current * 100) + '%';
  }
}

const firstSlide = slideListItems[0];
const lastSlide = slideListItems[slidesLength - 1];
const firstSlideClone = firstSlide.cloneNode(true);
const lastSlideClone = lastSlide.cloneNode(true);

firstSlideClone.classList.remove(firstSlideClone.classList[1]);
lastSlideClone.classList.remove(lastSlideClone.classList[1]);

slideList.appendChild(firstSlideClone);
slideList.insertBefore(lastSlideClone, firstSlide);

/**
 * Summary. Listen for clicks on buttons.
 *
 * @listens click
 */
document.addEventListener('click', e => {
  if (e.target.classList[1] === data.LEFT_BTN ||
    e.target.classList[1] === data.RIGHT_BTN) {
    if (e.target.classList[1] === data.LEFT_BTN && current == 1) {
      clickArrowButton(e.target);
    } else {
      clickArrowButton(e.target);
    }

  }
  if (e.target.classList[0] === data.GALLERY_INDICATOR) {
    clickPagerItem(e.target);
  }
});

