{
    var ideasSlideIndex = 0;
    ideasShowDivs(ideasSlideIndex);

    function ideasPlusDivs(n) {
        ideasShowDivs(ideasSlideIndex += n);
    }

    function plusDivsOuter(n) {
        ideasSlideIndex = parseInt(n);
        ideasShowDivs(ideasSlideIndex);
    }

    function ideasSwitchIdeaSrc(n, x) {
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

    function ideasShowDivs(n) {
        let i;
        let x = document.getElementsByClassName('Slider');
    
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