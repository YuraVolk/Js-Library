//Created by Yury Volkovskiy
"use strict";

document.querySelector('.zoom-container').addEventListener('mousemove', function (e) {
  let style = document.querySelector('.zoom__hover').style;
  let x = e.pageX - this.offsetLeft;
  let y = e.pageY - this.offsetTop;
  let imgWidth = document.querySelector('.zoom__image').width;
  let imgHeight = document.querySelector('.zoom__image').height;
  let xMove = ((x / imgWidth) * 100);
  let yMove = ((y / imgHeight) * 100);

  if (x > (.01 * imgWidth)) {
    xMove += (.15 * xMove);
  };

  if (y >= (.01 * imgHeight)) {
    yMove += (.15 * yMove);
  };

  style.backgroundPositionX = (xMove - 9) + '%';
  style.backgroundPositionY = (yMove - 9) + '%';
  style.left = (x - 34) + 'px';
  style.top = (y - 34) + 'px';
}, false);
