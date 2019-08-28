let selectedItem = 0;
let isScrolling = false;
const items = Array.from(document.querySelectorAll('.scroll-item'));

function scrollDir(event) {
    let delta;
    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else {
        delta = -1 * event.deltaY;
    }

    if (delta < 0) {
        return true; //* down
    } else if (delta > 0) {
        return false; //* up
    }
}

function smoothScrollTo() {

}

function scrollToSlide(dir) {
    if (!isScrolling) {
        if (dir == true) {
            selectedItem++;
            console.log(items[selectedItem]);
        } else {
            selectedItem--;
            console.log(items[selectedItem]);
        }
    }   
}

document.querySelector('.scroll-select').addEventListener('wheel', (e) => {
    e.preventDefault();
    if (scrollDir(e)) {
        if (selectedItem >= items.length - 1) {
            console.log('cant go down');
        } else {
            scrollToSlide(true);
        }
    } else {
        if (selectedItem === 0) {
            console.log('cant go up');
        } else {
            scrollToSlide(false);
        }
    }
});