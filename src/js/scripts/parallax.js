//Created by Yury Volkovskiy

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

const effect = 1.968;
const newH = window.innerHeight / effect;
const parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]'));

//Initialize parallaxes by data-parallax
parallaxes.forEach(function(el) {
  var clientOffsets = el.getBoundingClientRect();
  el.animationOffset = clientOffsets.top + window.pageYOffset;
  el.speed = el.dataset.speed;
  el.margin = el.dataset.marginBottom;
});

/*
 * Summary. Control movement of parallaxes.
 * Change their positions with accordance
 * to current scroll position of user.
 */
function move() {
  const scrollPoint = window.pageYOffset;

  parallaxes.forEach(function(el) {
    if ((scrollPoint > (el.animationOffset - newH * 2) && scrollPoint < (el.animationOffset + newH))) {
      const point = (scrollPoint - (el.animationOffset - newH)) / el.speed - (el.margin || 0);
      const up = point + 'px';
      el.style.webkitTransform = 'translateY(' + up + ')';
      el.style.MozTransform = 'translateY(' + up + ')';
      el.style.msTransform = 'translateY(' + up + ')';
      el.style.OTransform = 'translateY(' + up + ')';
      el.style.transform = 'translateY(' + up + ')';

    }

  });
  window.requestAnimationFrame(move);
}

window.requestAnimationFrame(move);
