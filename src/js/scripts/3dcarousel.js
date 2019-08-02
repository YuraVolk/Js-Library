
window.addEventListener('load', () => {
    var carousel3d = document.querySelector('.carousel');

    initCarousel(carousel3d);

});

function initCarousel(root) {
    let figure = root.querySelector('figure');
    let nav = document.querySelector('.carousel-nav');
    let images = figure.children;
    let n = images.length;
    let gap = root.dataset.gap || 0;
    let bfc = 'bfc' in root.dataset;

    let theta =  2 * Math.PI / n;
    let currImage = 0;
    
    setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
    window.addEventListener('resize', () => { 
        setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
    });

    setupNavigation();

    function setupCarousel(n, s) {
        var apothem = s / (2 * Math.tan(Math.PI / n));
        
        figure.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (var i = 0; i < n; i++)
            images[i].style.padding = `${gap}px`;
        for (i = 1; i < n; i++) {
            images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
            images[i].style.transform = `rotateY(${i * theta}rad)`;
        }
        if (bfc)
            for (i = 0; i < n; i++)
                 images[i].style.backfaceVisibility = 'hidden';
        
        rotateCarousel(currImage);
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
            else {
                currImage--;
            }
            
            rotateCarousel(currImage);
        }
            
    }

    function rotateCarousel(imageIndex) {
        figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
    }
    
}
