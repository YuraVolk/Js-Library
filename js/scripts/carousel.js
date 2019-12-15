//Created by Yury Volkovskiy

function testWebP() {
  return new Promise(res => {
    const webP = new Image();
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    webP.onload = webP.onerror = function () {
      res(webP.height === 2);
    };
  })
};
let webP = false;

let ideasSlideIndex = 0;
setTimeout(() => {
  ideasShowDivs(ideasSlideIndex);
}, 120);

function ideasPlusDivs(n) {
  ideasShowDivs(ideasSlideIndex += n);
}

function plusDivsOuter(n) {
  ideasSlideIndex = parseInt(n);
  ideasShowDivs(ideasSlideIndex);
}

function ideasSwitchIdeaSrc(n, x) {
  if (webP) {
    x[1].src = "img/slide" + n + ".webp";

    if (n === 5) {
      x[2].src = "img/slide" + 0 + ".webp";
    } else {
      x[2].src = "img/slide" + (n + 1) + ".webp";
    }
    if (n === 0) {
      x[0].src = "img/slide" + 5 + ".webp";
    } else {
      x[0].src = "img/slide" + (n - 1) + ".webp";
    }
  } else {
    x[1].src = "img/slide" + n + ".png";

    if (n === 5) {
      x[2].src = "img/slide" + 0 + ".png";
    } else {
      x[2].src = "img/slide" + (n + 1) + ".png";
    }
    if (n === 0) {
      x[0].src = "img/slide" + 5 + ".png";
    } else {
      x[0].src = "img/slide" + (n - 1) + ".png";
    }
  }

}

function ideasShowDivs(n) {
  let x = document.getElementsByClassName('Slider');
  ideasSwitchIdeaSrc(n, x);
  if (ideasSlideIndex !== -1) {

    if (ideasSlideIndex !== 6) {
      ideasSwitchIdeaSrc(n, x);
    } else {
      ideasSlideIndex = 0;
      n = 0;

      ideasSwitchIdeaSrc(n, x);
    }

  } else {
    ideasSlideIndex = 5;
    n = 5;

    ideasSwitchIdeaSrc(n, x);
  }

  ideasSlideIndex = n;
}


document.addEventListener('click', event => {
  if (`.${event.target.parentNode.classList[0]}` === '.slider-item') {
    if (`.${event.target.parentNode.classList[1]}` === '.slider-item--left') {
      ideasPlusDivs(-1);
    }
    if (`.${event.target.parentNode.classList[1]}` === '.slider-item--right') {
      ideasPlusDivs(1);
    }
  }
});


testWebP().then((hasWebP) => {
  if (hasWebP) {
    webP = true;
  }
});

