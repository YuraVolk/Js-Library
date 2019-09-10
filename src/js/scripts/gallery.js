const slider = document.getElementById('categorySlider');
const slideList = document.querySelector('.gallery__slides');
const slideListItems = slider.querySelectorAll('.gallery-list__item');
const slideWidth = slideListItems[0].offsetWidth;
const slidesLength = slideListItems.length;
let current = 1;
slideList.style.left = '-' + (current * 100) + '%';
let direction;
let animating = false;

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

function clickPagerItem(el) {
  const slideIndex = el.classList[1][el.classList[1].length - 1];
  const targetSlide = slider.querySelector('.gallery-list__item--' + slideIndex);
  const pos = parseInt(slideList.style.left) || 0;
  const newPos = Math.round(targetSlide.offsetLeft / targetSlide.offsetWidth) * 100 * -1;

  if (!animating && pos !== newPos) {
    slideTo(slideList, pos, newPos);
    current = parseInt(slideIndex) + 1;
  }
}

function slideTo(element, pos, newPos) {
  animating = true;
  animate(pos, newPos, element);
}

function step(delta, pos, newPos, element) {
  const direction = pos > newPos ? 1 : -1
  element.style.left = pos + Math.abs(newPos - pos) * delta * direction * -1 + '%';
}

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

function updateSlide() {
  Array.from(document.querySelectorAll('.gallery-indicator')).forEach((el) => {
    el.classList.remove('indicator-active');
  });
  if (current === 0) {
    document.querySelector('.gallery-indicator--' + (slidesLength - 1)).classList.add('indicator-active');
  } else if (slidesLength === (current - 1)) {
    document.querySelector('.gallery-indicator--0').classList.add('indicator-active');
  } else {
    document.querySelector('.gallery-indicator--' + (current - 1)).classList.add('indicator-active');
  }
}

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


document.addEventListener('click', e => {
  if (e.target.classList[1] === 'gallery__button--prev' ||
    e.target.classList[1] === 'gallery__button--next') {
    clickArrowButton(e.target);
  }
  if (e.target.classList[0] === 'gallery-indicator') {
    clickPagerItem(e.target);
  }
});

