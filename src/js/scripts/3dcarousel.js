
window.addEventListener('load', () => {
    var carousel3d = document.querySelector('.tdcarousel');
  
    initCarousel(carousel3d, true);
});

function rotateCarousel(theta, imageIndex, figure, isntVertical) {
    //figure.style.transform = "rotateX(" + imageIndex * -theta + "rad)"  VERTICAL CAROUSEL ONLY;
    if (isntVertical) {  
        figure.style.transform = "rotateY(" + imageIndex * -theta + "rad)";
    } else {
        figure.style.transform = "rotateX(" + imageIndex * -theta + "rad)";
    }
}

function initCarousel(parent, isntVertical) {
    let figure = parent.querySelector('figure');
    let nav = document.querySelector('.carousel-nav');
    let images = figure.children;
    let n = images.length;

    let theta =  2 * Math.PI / n;
    let currImage = 0;
    
    /*setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));
    window.addEventListener('resize', () => { 
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).height)) 
    }); VERTICAL CAROUSEL ONLY*/
   
    if (isntVertical) {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        window.addEventListener('resize', () => { 
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
        });
    } else {
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));
        window.addEventListener('resize', () => { 
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).height)) 
        });
    }
    
    setupNavigation();

    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));

        figure.style.transformOrigin = "50% 50% " + -apothem + "px";

        for (var i = 0; i < n; i++) {
            images[i].style.padding = "0";
        }for (i = 1; i < n; i++) {
            images[i].style.transformOrigin = "50% 50% " + -apothem + "px";
            //images[i].style.transform = "rotateX(" + i * theta + "rad)"  VERTICAL CAROUSEL ONLY;
            if (isntVertical) {
                images[i].style.transform = "rotateY(" + i * theta + "rad)";
            } else {
                images[i].style.transform = "rotateX(" + i * theta + "rad)";
            }
            images[i].style.padding = "0";
        }
        
        for (i = 0; i < n; i++) {
            images[i].style.backfaceVisibility = 'hidden';
            //images[i].style.padding = '30px';
        }
        
        rotateCarousel(theta, currImage, figure, isntVertical);
    }

    function setupNavigation() {
        nav.addEventListener('click', onClick, true);
        
        function onClick(e) {
            e.stopPropagation();
            
            var t = e.target;
            if (t.tagName.toUpperCase() != 'BUTTON')
                return;
            
            if (t.classList.contains('next')) {
                currImage++;
            }
            else if (t.classList.contains('prev')) {
                currImage--;
            } else if (t.classList.contains('switch3d')) {
                isntVertical = !isntVertical;
                if (isntVertical) {
                    parent.style.height = 'auto';
                    figure.style.marginTop = 0;
                } else {
                    parent.style.height = '870px';
                    figure.style.marginTop = '120px';
                }
            }
            
            rotateCarousel(theta, currImage, figure, isntVertical);
        }
    }

    setInterval(function() {
        //setupCarousel(n, parseFloat(getComputedStyle(images[0]).height))  VERTICAL CAROUSEL ONLY;
        if (isntVertical) { 
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
        } else {
            setupCarousel(n, parseFloat(getComputedStyle(images[0]).height));
        }
    }, 160);

}