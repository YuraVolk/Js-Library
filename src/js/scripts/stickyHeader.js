let bounding;
let topE = document.querySelector('.headerScroll--top');
let bottomE = document.querySelector('.headerScroll--bottom');
topE.parentNode.onscroll = () => {
    setTimeout(() => {
        bounding = topE.getBoundingClientRect();
        if (bounding.top >= 0 && bounding.left >= 0 && bounding.right <= (window.innerWidth || document.documentElement.clientWidth) 
            && bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            if (!bottomE.classList.contains('hide')) {
                bottomE.classList.add('hide');
            }
            if (topE.classList.contains('hide')) {
                topE.classList.remove('hide');
            }
        } else {
            if (!topE.classList.contains('hide')) {
                topE.classList.add('hide');
            }
            if (bottomE.classList.contains('hide')) {
                bottomE.classList.remove('hide');
            }
        }
    }, 47);
};