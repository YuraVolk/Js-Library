let slider = document.getElementById('categorySlider');
let slideList = slider.getElementsByClassName('js-slide-list')[0];
let slideListItems = slider.getElementsByClassName('js-slide-list-item');
let slideWidth = slideListItems[0].offsetWidth;
let slidesLength = slideListItems.length;
let current = 1;
slideList.style.left = '-' + (current * 100) + '%';
let direction;
let animating = false;

function cloneFirstAndLastItem() {
  var firstSlide = slideListItems[0];
  var lastSlide = slideListItems[slidesLength - 1];
  var firstSlideClone = firstSlide.cloneNode(true);
  var lastSlideClone = lastSlide.cloneNode(true);

  firstSlideClone.removeAttribute('data-slide-index');
  lastSlideClone.removeAttribute('data-slide-index');

  slideList.appendChild(firstSlideClone);
  slideList.insertBefore(lastSlideClone, firstSlide);
}

function clickArrowButton(el) {
  var direction = el.getAttribute('data-direction');
  var pos = parseInt(slideList.style.left) || 0;
  var newPos;
  direction = direction === 'prev' ? -1 : 1;
  newPos = pos + (-1 * 100 * direction);
  if (!animating) {
    slideTo(slideList,  pos, newPos, 500);
    current += direction;
  }
}

function clickPagerItem(el) {
  var slideIndex = el.getAttribute('data-slide-index');
  var targetSlide = slider.querySelector('.js-slide-list-item[data-slide-index="' + slideIndex + '"]');
  var pos = parseInt(slideList.style.left) || 0;
  var newPos = Math.round(targetSlide.offsetLeft / targetSlide.offsetWidth) * 100 * -1;

  if (!animating && pos !== newPos) {
    slideTo(slideList,pos, newPos);
    current = parseInt(slideIndex) + 1;
  }

}

function slideTo(element, pos, newPos) {
  animating = true;
  animate(pos, newPos, element);
}

function step(delta, pos, newPos, element) {
  var direction = pos > newPos ? 1 : -1
  element.style.left = pos + Math.abs(newPos - pos) * delta * direction * -1 + '%';
}

function animate(pos, newPos, element) {
  var start = new Date();
  var idle = setInterval(function () {
    var timePassed = new Date - start;
    var progress = timePassed / 500;
    if (progress > 1) {
      progress = 1;
    }
    var delta =  Math.pow(progress, 2);
    step(delta, pos, newPos, element);

    if (progress === 1) {
      clearInterval(idle);
      animating = false;
      checkCurrentSlide();
    }
  }, 20);
}

function checkCurrentSlide() {
  var cycle = false;
  cycle = !!(current === 0 || current > slidesLength)
  if (cycle) {
    current = (current === 0) ? slidesLength : 1;
    slideList.style.left = (-1 * current * 100) + '%';
  }

}

cloneFirstAndLastItem();

document.addEventListener('click', e => {
  if (e.target.classList[1] === 'slider__button--prev' ||
      e.target.classList[1] === 'slider__button--next') {
      clickArrowButton(e.target);
  }
  if (e.target.classList[0] === 'slider-pager__item') {
    clickPagerItem(e.target);
  }
});
