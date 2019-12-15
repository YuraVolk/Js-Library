//Created by Yury Volkovskiy
const data = {
  FLOATING_PANELS: [
    {
      CLASS: 'list__floating-panel--0',
      OPEN_BUTTON: 'floating-panel__button--0'
    },
    {
      CLASS: 'list__floating-panel--1',
      OPEN_BUTTON: 'floating-panel__button--1'
    }
  ]
}

var floatingPanel = document.querySelector(`.${data.FLOATING_PANELS[0].CLASS}`);
var floatingPanel1 = document.querySelector(`.${data.FLOATING_PANELS[1].CLASS}`);

let arePanels = [false, false];

function addEventListen(panel) {
  var initX, initY, mousePressX, mousePressY;

  document.addEventListener('mousedown', e => {
      initX = panel.offsetLeft;
      initY = panel.offsetTop;
      mousePressX = e.clientX;
      mousePressY = e.clientY;

      var changePosition = function(event) {
          panel.style.left = initX + event.clientX - mousePressX + 'px';
          panel.style.top = initY + event.clientY - mousePressY + 'px';
      }

      panel.addEventListener('mousemove', changePosition, false);

      window.addEventListener('mouseup', function() {
          panel.removeEventListener('mousemove', changePosition, false);
      }, false);

  }, false);
}

function toggleFloatingWindow(i, panel, btn) {
  if (arePanels[i] === false) {
    arePanels[i] = true;
    panel.style.display = 'block';
    btn.textContent = 'Close Floating Window ' + (i + 1);
  } else {
    arePanels[i] = false;
    panel.style.display = 'none';
    btn.textContent = 'Open Floating Window ' + (i + 1);
  }
}

document.addEventListener('click', e => {
  if (e.target.classList[1] === data.FLOATING_PANELS[0].OPEN_BUTTON) {
    toggleFloatingWindow(0, floatingPanel, e.target);
    addEventListen(floatingPanel);
  }
  if (e.target.classList[1] === data.FLOATING_PANELS[1].OPEN_BUTTON) {
    toggleFloatingWindow(1, floatingPanel1, e.target);
    addEventListen(floatingPanel1);
  }
});
