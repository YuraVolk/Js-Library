const x = document.querySelectorAll(".comparsion-image--other");

for (var i = 0; i < x.length; i++) {
  compareImages(x[i], i, x.length + 1);
}

function compareImages(img, index, length) {
  var slider, img, clicked = 0;
  const width = img.offsetWidth;
  const height = img.offsetHeight;
  img.style.width = (width /  length) + "px";
  slider = document.createElement("DIV");
  slider.setAttribute("class", "comparsion-slider");
  img.parentElement.insertBefore(slider, img);
  slider.style.top = (height / 2) -  (slider.offsetHeight / 2) + "px";
  slider.style.left = (width - ((width /  length) * (index + 1))) - (slider.offsetWidth / 2) + "px";
  slider.addEventListener("mousedown", slideReady);
  window.addEventListener("mouseup", slideFinish);
  slider.addEventListener("touchstart", slideReady);
  window.addEventListener("touchstop", slideFinish);
  slide(width - ((width /  length) * (index + 1)));
  function slideReady(event) {
    event.preventDefault();
    clicked = 1;
    window.addEventListener("mousemove", slideMove);
    window.addEventListener("touchmove", slideMove);
  }
  function slideFinish() {
    clicked = 0;
  }
  function slideMove() {
    if (clicked !== 0) {
      img.style.left = 0;
      let pos = event.pageX - img.getBoundingClientRect().left - window.pageXOffset;
      if (pos < 0) pos = 0;
      if (pos > width) pos = width;
      slide(pos);
    }
  }
  function slide(differ) {
    img.style.width = differ + "px";
    slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
  }
}
