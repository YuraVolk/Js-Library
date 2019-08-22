class Item {
    constructor(image) {
        image.item = this;
        this.image = image;
        this.fullWidth = image.width;
        this.fullHeight = image.height;
        this.alt = image.alt;
        this.title = image.title;
        image.style.position = 'absolute';
        this.moveTo = function (x, y, scale) {
            this.width = this.fullWidth * scale;
            this.height = this.fullHeight * scale;
            this.x = x;
            this.y = y;
            this.scale = scale;
            var style = this.image.style;
            style.width = this.width + "px";
            style.left = x + "px";
            style.top = y + "px";
            style.zIndex = "" + (scale * 100) | 0;
        };
    }
}

class Carousel {
    constructor(container, options) {
        var self = this;
        this.items = [];
        let item = container;
        this.xCentre = (options.xPos === null) ? item.offsetWidth * 0.5 : options.xPos;
        this.yCentre = (options.yPos === null) ? item.offsetHeight * 0.1 : options.yPos;
        this.xRadius = (options.xRadius === null) ? item.offsetWidth / 2.3 : options.xRadius;
        this.yRadius = (options.yRadius === null) ? item.offsetHeight / 6 : options.yRadius;
        this.farScale = options.farScale;
        this.rotation = this.destRotation = Math.PI / 2;
        this.speed = options.speed;
        this.frameTimer = 0;
        this.rotateItem = function (itemIndex, rotation) {
            var item = this.items[itemIndex];
            var sin = Math.sin(rotation);
            var farScale = this.farScale;
            var scale = farScale + ((1 - farScale) * (sin + 1) * 0.5);
            item.moveTo(this.xCentre + (scale * ((Math.cos(rotation) * this.xRadius) - (item.fullWidth * 0.5))), this.yCentre + (scale * sin * this.yRadius), scale);
        };
        this.render = function () {
            var count = this.items.length;
            var spacing = 2 * Math.PI / count;
            var radians = this.rotation;
            for (var i = 0; i < count; i++) {
                this.rotateItem(i, radians);
                radians += spacing;
            }
        };
        this.playFrame = function () {
            var change = this.destRotation - this.rotation;
            if (Math.abs(change) <= 0) {
                this.rotation = this.destRotation;
                clearTimeout(this.frameTimer);
                this.frameTimer = 0;
            }
            else {
                this.rotation += change * this.speed;
                this.scheduleNextFrame();
            }
            this.render();
        };
        this.scheduleNextFrame = function () {
            this.frameTimer = setTimeout(function () { self.playFrame(); }, 32);
        };
        this.itemsRotated = function () {
            return this.items.length * ((Math.PI / 2) - this.rotation) / (2 * Math.PI);
        };
        this.floatIndex = function () {
            var floatIndex = this.itemsRotated() % this.items.length;
            return (floatIndex < 0) ? floatIndex + this.items.length : floatIndex;
        };
        this.nearestIndex = function () {
            return Math.round(this.floatIndex()) % this.items.length;
        };
        this.go = function (count) {
            this.destRotation += (2 * Math.PI / this.items.length) * count;
            if (this.frameTimer === 0)
                this.scheduleNextFrame();
        };
        var images = item.querySelectorAll('.carouselm-item');
        document.addEventListener('click', e => {
            if (e.target.classList[1] == 'carousel-menu-left') {
                self.go(-1);
            }
            if (e.target.classList[1] == 'carousel-menu-right') {
                self.go(1);
            }
        });
        this.finishInit = function () {
            clearInterval(this.initTimer);
            for (var i = 0; i < images.length; i++) {
                this.items.push(new Item(images[i]));
            }
            this.render();
        };
        this.initTimer = setInterval(function () { self.finishInit(); }, 50);
    }
}


window.onload = function () {
    const options = {
        xPos: null,
        yPos: 112,
        xRadius: null,
        yRadius: 128,
        farScale: 0.9,
        speed: 0.11
    };

    new Carousel(document.querySelector('#carouselm'), options);
};