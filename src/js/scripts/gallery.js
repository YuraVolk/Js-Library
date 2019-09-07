const items = document.querySelectorAll('.gallery-item');
const dots = document.querySelectorAll('.gallery-indicators li');
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
	currentItem = (n + items.length) % items.length;
}

function nextItem(n) {
	hideItem('gallery-item--to-left');
	changeCurrentItem(n + 1);
	showItem('gallery-item--from-right');
}

function previousItem(n) {
	hideItem('gallery-item--to-right');
	changeCurrentItem(n - 1);
	showItem('gallery-item--from-left');
}

function goToItem(n) {
	if (n < currentItem) {
		hideItem('gallery-item--to-right');
		currentItem = n;
		showItem('gallery-item--from-left');
	} else {
		hideItem('gallery-item--to-left');
		currentItem = n;
		showItem('gallery-item--from-right');
	}
}

function hideItem(direction) {
	isEnabled = false;
	items[currentItem].classList.add(direction);
	dots[currentItem].classList.remove('indicator-active');
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('gallery-item--active', direction);
	});
}

function showItem(direction) {
	items[currentItem].classList.add('gallery-item--next', direction);
	dots[currentItem].classList.add('indicator-active');
	items[currentItem].addEventListener('animationend', function() {
		this.classList.remove('gallery-item--next', direction);
		this.classList.add('gallery-item--active');
		isEnabled = true;
	});
}

document.querySelector('.gallery-left').addEventListener('click', function() {
	if (isEnabled) {
		previousItem(currentItem);
	}
});

document.querySelector('.gallery-right').addEventListener('click', function() {
	if (isEnabled) {
		nextItem(currentItem);
	}
});

document.querySelector('.gallery-indicators').addEventListener('click', function(e) {
	var target = [].slice.call(e.target.parentNode.children).indexOf(e.target);
	if (target !== currentItem && target < dots.length) {
		goToItem(target);
	}
});
