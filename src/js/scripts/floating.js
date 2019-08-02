var floatingPanel = document.querySelector('.floatingPanel');
var floatingPanel1 = document.querySelector('.floatingPanel--1');

let arePanels = [false, false, false];

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
    if (e.target.classList[1] === 'modalButton--1') {
        toggleFloatingWindow(0, floatingPanel, e.target);
        addEventListen(floatingPanel);
    }
    if (e.target.classList[1] === 'modalButton--2') {
        toggleFloatingWindow(1, floatingPanel1, e.target);
        addEventListen(floatingPanel1);
    }
});