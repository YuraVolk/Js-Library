window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})(); //префикс для браузеров старых

const effect = 1.968; // Эффект дрожания и расстояния. Оптимальное значение. Не ставить меньше 1
const newH = window.innerHeight / effect; //Радиус паралакса
var parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]')); //элементы по data-parallax. [].slice - костыль для ie. Он не поддерживает Array.from()

parallaxes.forEach(function(el) {
  var clientOffsets = el.getBoundingClientRect();
  el.animationOffset = clientOffsets.top + window.scrollY;
  el.speed = el.dataset.speed;
  el.margin = el.dataset.marginBottom;
}); //дать всем параметры

function move() {
  const scrollPoint = window.scrollY; //место скролла. Если контейнер ограниченный есть (div а внутри паралакс) заменить window на него.

  parallaxes.forEach(function(el) {
    if (scrollPoint > (el.animationOffset - newH * 2) && scrollPoint < (el.animationOffset + newH)) { // проверить зону действия
      const point = (scrollPoint - (el.animationOffset - newH)) / el.speed - (el.margin || 0); //найти нужное для паралакса место
      const up = point + 'px';
      el.style.webkitTransform = 'translateY(' + up + ')'; //Задать его всем браузероам
      el.style.MozTransform = 'translateY(' + up + ')';
      el.style.msTransform = 'translateY(' + up + ')';
      el.style.OTransform = 'translateY(' + up + ')';
      el.style.transform = 'translateY(' + up + ')';
    }

  });

  window.requestAnimationFrame(move); //рекурсия
}

window.requestAnimationFrame(move);
