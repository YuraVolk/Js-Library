var index = 0;
var amount = 0;
var currTransl = [];
var translationComplete = true;
var moveOffset = 0;

var transitionCompleted = function () {
  translationComplete = true;
}

var carousel = document.getElementById('carousel');
amount = document.getElementsByClassName("slide").length;
moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
carousel.style.width = (amount * moveOffset) + 'px';
for (var i = 0; i < amount; i++) {
  currTransl[i] = -moveOffset;
  document.getElementsByClassName("slide")[i].addEventListener("transitionend", transitionCompleted, true);
  document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
  document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);
  document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
}

carousel.insertBefore(carousel.children[4], carousel.children[0]);

function changeSlides(isNext) {
  if (translationComplete === true) {
    translationComplete = false;
    if (isNext) {
      var outerIndex = (index) % amount;
      index++;
    } else {
      index--;
      if (index == -1) {
        index = amount - 1;
      }
      var outerIndex = (index) % amount;
    }

    for (var i = 0; i < amount; i++) {
      var slide = document.getElementsByClassName("slide")[i];
      slide.style.opacity = '1';
      if (isNext) {
        slide.style.transform = 'translateX(' + (currTransl[i] - moveOffset) + 'px)';
        currTransl[i] = currTransl[i] - moveOffset;
      } else {
        slide.style.transform = 'translateX(' + (currTransl[i] + moveOffset) + 'px)';
        currTransl[i] = currTransl[i] + moveOffset;
      }
    }

    var outerSlide = document.getElementsByClassName("slide")[outerIndex];
    outerSlide.style.opacity = '0';
    if (isNext) {
      outerSlide.style.transform = 'translateX(' + (currTransl[outerIndex] + (moveOffset * amount)) + 'px)';
      currTransl[outerIndex] = currTransl[outerIndex] + moveOffset * (amount);
    } else {
      outerSlide.style.transform = 'translateX(' + (currTransl[outerIndex] - (moveOffset * amount)) + 'px)';
      currTransl[outerIndex] = currTransl[outerIndex] - moveOffset * (amount);
    }
  }
}

document.addEventListener('click', (event) => {
  if (event.target.classList[1] === 'previous') {
    changeSlides(false);
  }
  if (event.target.classList[1] === 'nextSlide') {
    changeSlides(true);
  }
}, true);
