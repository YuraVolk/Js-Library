//Created by Yury Volkovskiy
"use strict";

const data = {
  ZOOM_WRAP: 'zoom-container',
  ZOOM_IMAGE: 'zoom__image',
  ZOOM: 'zoom__hover'
};

document.querySelector(`.${data.ZOOM_WRAP}`).addEventListener('mousemove', function (e) {
  let style = document.querySelector(`.${data.ZOOM}`).style;
  let x = e.pageX - this.offsetLeft;
  let y = e.pageY - this.offsetTop;
  let imgWidth = document.querySelector(`.${data.ZOOM_IMAGE}`).width;
  let imgHeight = document.querySelector(`.${data.ZOOM_IMAGE}`).height;
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
