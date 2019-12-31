//Created by Yury Volkovskiy

const data = {
  CAROUSEL: 'carousel-menu__list',
  ITEM: 'carousel-menu__image',
  BUTTON_LEFT: 'carousel-menu-left',
  BUTTON_RIGHT: 'carousel-menu-right'
};


/**
 * Sumary. Image class to control <img> positions.
 * @access private
 */
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

/**
 * Summary. 3D carousel controller.
 * Description. A class for controlling 3D carousel, that calculates and manipulates all images positions
 *
 * @alias Carousel3D
 *
 * @see Item
 */
class Carousel {
  /**
   * Summary. Initialization constructor for carousel.
   * Description. All methods, center positions, number of images and images themselves are initiated.
   *
   * @class Carousel
   *
   * @param {Node}   container Container for carousel, where all children are images
   * @param {Object} options   Options for specifying speed, position of carousel
   */
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

    /**
     * Summary. Function to calculate and move item to position.
     * @access private
     */
    this.rotateItem = function (itemIndex, rotation) {
      var item = this.items[itemIndex];
      var sin = Math.sin(rotation);
      var farScale = this.farScale;
      var scale = farScale + ((1 - farScale) * (sin + 1) * 0.5);
      item.moveTo(this.xCentre + (scale * ((Math.cos(rotation) * this.xRadius) - (item.fullWidth * 0.5))), this.yCentre + (scale * sin * this.yRadius), scale);
    };

    /**
     * Summary. Method to rotate items one by one
     * @access private
     */
    this.render = function () {
      var count = this.items.length;
      var spacing = 2 * Math.PI / count;
      var radians = this.rotation;
      for (var i = 0; i < count; i++) {
        this.rotateItem(i, radians);
        radians += spacing;
      }
    };

    /**
     * Summary. Start rendering and items positioning.
     * @access private
     */
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

    /**
     * Summary. Set timeout for next slides.
     * @access private
     */
    this.scheduleNextFrame = function () {
      this.frameTimer = setTimeout(function () { self.playFrame(); }, 32);
    };

    /**
     * Summary. Get position of items needed for further calculation.
     * @access private
     */
    this.itemsRotated = function () {
      return this.items.length * ((Math.PI / 2) - this.rotation) / (2 * Math.PI);
    };

    /**
     * Summary. Index needed to find the nearest image.
     *
     * @access private
     * @see itemsRotated
     */
    this.floatIndex = function () {
      var floatIndex = this.itemsRotated() % this.items.length;
      return (floatIndex < 0) ? floatIndex + this.items.length : floatIndex;
    };

    /**
     * Summary. Find nearest image.
     *
     * @access private
     * @see floatIndex
     */
    this.nearestIndex = function () {
      return Math.round(this.floatIndex()) % this.items.length;
    };

    /**
     * Summary. Controller function to react on left-right button presses.
     * @access private
     */
    this.go = function (count) {
      this.destRotation += (2 * Math.PI / this.items.length) * count;
      if (this.frameTimer === 0)
        this.scheduleNextFrame();
    };

    var images = item.querySelectorAll(`.${data.ITEM}`);

    /**
     * Summary. Event listeners for buttons.
     * @access private
     */
    document.addEventListener('click', e => {
      if (e.target.classList[1] == data.BUTTON_LEFT) {
        self.go(-1);
      }
      if (e.target.classList[1] == data.BUTTON_RIGHT) {
        self.go(1);
      }
    });

    /**
     * Summary. Add all images to carousel.
     * @access private
     */
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


const options = {
  xPos: null,
  yPos: 112,
  xRadius: null,
  yRadius: 128,
  farScale: 0.9,
  speed: 0.11
};

window.addEventListener("load", () => {
  new Carousel(document.querySelector(`#${data.CAROUSEL}`), options);
});
