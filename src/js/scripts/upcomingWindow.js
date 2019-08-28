function isInViewport(el) {
    const bounding = el.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const el = document.querySelector('.upcome');
let bounding;
var isScrolling;

el.parentNode.addEventListener('scroll', () => { 
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(function() {
        if (!isInViewport(el)) {
            el.style.top = el.parentNode.scrollTop - el.offsetHeight + 260 + 'px';
        }
	}, 67);
});
