class PerspectiveCarousel {
  constructor(startingOptions) {
    let options = {};
    let data = {};

    function initializeCarouselData() {
      const parentStyle = window.getComputedStyle(options.parent);
      data = {
        totalItems: options.parent.children.length,
        containerWidth: parentStyle.width.slice(0, -2),
        containerHeight: parentStyle.height.slice(0, -2),
        currentCenterItem: null,
        previousCenterItem: null,
        items: [],
        calculations: [],
        carouselRotationsLeft: 0,
        currentlyMoving: false,
        itemsAnimating: 0,
        currentSpeed: options.speed,
        intervalTimer: null,
        currentDirection: undefined,
        leftItemsCount: 0,
        rightItemsCount: 0,
        performingSetup: true
      };
      Array.from(options.parent.querySelectorAll('img')).forEach((el) => {
        el.classList.remove(options.activeClassName);
      });
    }

    function preload(callback) {
      if (options.preloadImages === false) {
        callback();
        return;
      }
      const imageElements = Array.from(options.parent.querySelectorAll('img'));
      let loadedImages = 0;
      const totalImages = imageElements.length;
      imageElements.forEach(function (el) {
        el.setAttribute('src', el.getAttribute('src'));
        el.onload = () => {
          loadedImages += 1;
          if (loadedImages === totalImages) {
            callback();
          }
        };
      });
    }

    function setOriginalItemDimensions() {
      Array.from(options.parent.querySelectorAll('img')).forEach(function (el) {
        if (el.dataset.originalWidth == undefined || options.forcedImageWidth > 0) {
          el.style.display = '';
          el.dataset.originalWidth = el.clientWidth;
          el.style.display = 'none';
        }
        if (el.dataset.originalHeight == undefined || options.forcedImageHeight > 0) {
          el.style.display = '';
          el.dataset.originalHeight = el.clientHeight;
          el.style.display = 'none';
        }
      });
    }

    function forceImageDimensionsIfEnabled() {
      if (options.forcedImageWidth && options.forcedImageHeight) {
        Array.from(options.parent.querySelectorAll('img')).forEach(function (el) {
          el.style.width = options.forcedImageWidth;
          el.style.height = options.forcedImageHeight;
        });
      }
    }

    function preCalculatePositionProperties() {
      data.calculations[0] = {
        distance: 0,
        offset: 0,
        opacity: 1
      };
      let horizonOffset = options.horizonOffset;
      let separation = options.separation;
      for (let i = 1; i <= options.flankingItems + 2; i++) {
        if (i > 1) {
          horizonOffset *= options.horizonOffsetMultiplier;
          separation *= options.separationMultiplier;
        }
        data.calculations[i] = {
          distance: data.calculations[i - 1].distance + separation,
          offset: data.calculations[i - 1].offset + horizonOffset,
          opacity: data.calculations[i - 1].opacity * options.opacityMultiplier
        };
      }
      if (options.edgeFadeEnabled) {
        data.calculations[options.flankingItems + 1].opacity = 0;
      } else {
        data.calculations[options.flankingItems + 1] = {
          distance: 0,
          offset: 0,
          opacity: 0
        };
      }
    }

    function setupCarousel() {
      data.items = Array.from(options.parent.querySelectorAll('img'));
      if (options.horizon === 0) {
        if (options.orientation === 'horizontal') {
          options.horizon = data.containerHeight / 2;
        } else {
          options.horizon = data.containerWidth / 2;
        }
      }
      options.parent.style.position = 'relative';
      Array.from(options.parent.querySelectorAll('img')).forEach(function (el) {
        var centerPosLeft, centerPosTop;
        if (options.orientation === 'horizontal') {
          centerPosLeft = (data.containerWidth / 2) - (el.dataset.originalWidth / 2);
          centerPosTop = options.horizon - (el.dataset.originalHeight / 2);
        } else {
          centerPosLeft = options.horizon - (el.dataset.originalWidth / 2);
          centerPosTop = (data.containerHeight / 2) - (el.dataset.originalHeight / 2);
        }
        Object.assign(el.style, {
          'left': centerPosLeft,
          'top': centerPosTop,
          'visibility': 'visible',
          'position': 'absolute',
          'z-index': 0,
          'opacity': 0
        });
        el.style.display = '';
      });
    }

    function setupStarterRotation() {
      options.startingItem = (options.startingItem === 0) ? Math.round(data.totalItems / 2) : options.startingItem;
      data.rightItemsCount = Math.ceil((data.totalItems - 1) / 2);
      data.leftItemsCount = Math.floor((data.totalItems - 1) / 2);
      data.carouselRotationsLeft = 1;
      moveItem(data.items[options.startingItem - 1], 0);
      data.items[options.startingItem - 1].style.opacity = 1;
      let itemIndex = options.startingItem - 1;
      for (let pos = 1; pos <= data.rightItemsCount; pos++) {
        (itemIndex < data.totalItems - 1) ? itemIndex += 1 : itemIndex = 0;
        data.items[itemIndex].style.opacity = 1;
        moveItem(data.items[itemIndex], pos);
      }
      itemIndex = options.startingItem - 1;
      for (let pos = -1; pos >= data.leftItemsCount * -1; pos--) {
        (itemIndex > 0) ? itemIndex -= 1 : itemIndex = data.totalItems - 1;
        data.items[itemIndex].style.opacity = 1;
        moveItem(data.items[itemIndex], pos);
      }
    }

    function performCalculations(item, newPosition) {
      const newDistanceFromCenter = Math.abs(newPosition);
      if (newDistanceFromCenter < options.flankingItems + 1) {
        var calculations = data.calculations[newDistanceFromCenter];
      } else {
        var calculations = data.calculations[options.flankingItems + 1];
      }
      const distanceFactor = Math.pow(options.sizeMultiplier, newDistanceFromCenter);
      const newWidth = distanceFactor * item.dataset.originalWidth;
      const newHeight = distanceFactor * item.dataset.originalHeight;
      const newOffset = calculations.offset;
      let newDistance = calculations.distance;
      if (newPosition < 0) {
        newDistance *= -1;
      }
      if (options.orientation == 'horizontal') {
        var center = data.containerWidth / 2;
        var newLeft = center + newDistance - (newWidth / 2);
        var newTop = options.horizon - newOffset - (newHeight / 2);
      } else {
        var center = data.containerHeight / 2;
        var newLeft = options.horizon - newOffset - (newWidth / 2);
        var newTop = center + newDistance - (newHeight / 2);
      }
      let newOpacity;
      if (newPosition === 0) {
        newOpacity = 1;
      } else {
        newOpacity = calculations.opacity;
      }
      const newDepth = options.flankingItems + 2 - newDistanceFromCenter;
      item.dataset.width = newWidth;
      item.dataset.height = newHeight;
      item.dataset.top = newTop;
      item.dataset.left = newLeft;
      item.dataset.oldPosition = item.dataset.currentPosition || 0;
      item.dataset.depth = newDepth;
      item.dataset.opacity = newOpacity;
    }

    function moveItem(item, newPosition) {
      if (Math.abs(newPosition) <= options.flankingItems + 1) {
        performCalculations(item, newPosition);
        data.itemsAnimating++;
        item.style.zIndex = item.dataset.depth;
        Object.assign(item.style, {
          left: item.dataset.left + 'px',
          width: item.dataset.width + 'px',
          height: item.dataset.height + 'px',
          top: item.dataset.top + 'px',
          opacity: item.dataset.opacity
        });
        setTimeout(() => {
          itemAnimationComplete(item, newPosition);
        }, 300);
      } else {
        item.dataset.currentPosition = newPosition;
        if (item.dataset.oldPosition === 0 || !item.dataset.oldPosition) {
          performCalculations(item, newPosition);
          Object.assign(item.style, {
            left: item.dataset.left + 'px',
            width: item.dataset.width + 'px',
            height: item.dataset.height + 'px',
            top: item.dataset.top + 'px',
            opacity: item.dataset.opacity,
            zIndex: item.dataset.depth
          });
        }
      }
    }

    function itemAnimationComplete(item, newPosition) {
      data.itemsAnimating--;
      item.dataset.currentPosition = newPosition;;
      if (newPosition === 0) {
        data.currentCenterItem = item;
      }
      if (data.itemsAnimating === 0) {
        data.carouselRotationsLeft -= 1;
        data.currentlyMoving = false;
        if (data.carouselRotationsLeft > 0) {
          rotateCarousel(0);
        } else {
          data.currentSpeed = options.speed;
          data.currentCenterItem.classList.add(options.activeClassName);
          if (data.performingSetup === false) {
            options.movedToCenter(data.currentCenterItem);
            options.movedFromCenter(data.previousCenterItem);
          }
          data.performingSetup = false;
        }
      }
    }

    function rotateCarousel() {
      if (data.currentlyMoving === false) {
        data.currentCenterItem.classList.remove(options.activeClassName);
        data.currentlyMoving = true;
        data.itemsAnimating = 0;
        data.carouselRotationsLeft++;
        for (let i = 0; i < data.totalItems; i++) {
          const item = data.items[i];
          const currentPosition = parseInt(item.dataset.currentPosition, 10);
          let newPosition;
          if (data.currentDirection == 'forward') {
            newPosition = currentPosition - 1;
          } else {
            newPosition = currentPosition + 1;
          }
          const flankingAllowance = (newPosition > 0) ? data.rightItemsCount : data.leftItemsCount;
          if (Math.abs(newPosition) > flankingAllowance) {
            newPosition = currentPosition * -1;
            if (data.totalItems % 2 == 0) {
              newPosition += 1;
            }
          }
          moveItem(item, newPosition);
        }
      }
    }
    function extend(out) {
      for (var i = 1; i < arguments.length; i++) {
        if (!arguments[i]) {
          continue;
        }
        for (var key in arguments[i]) {
          if (arguments[i].hasOwnProperty(key)) {
            out[key] = arguments[i][key];
          }
        }
      }
      return out;
    };

    function nextItemFromCenter() {
      var next = data.currentCenterItem.next();
      if (next.length <= 0) {
        const children = data.currentCenterItem.parentNode.children;
        next = children[0];
      }
      return next;
    }

    function prevItemFromCenter() {
      var prev = data.currentCenterItem.prev();
      if (prev.length <= 0) {
        const children = data.currentCenterItem.parentNode.children;
        prev = children.children[length];
      }
      return prev;
    }

    function moveOnce(direction) {
      if (data.currentlyMoving === false) {
        data.previousCenterItem = data.currentCenterItem;
        options.movingFromCenter(data.currentCenterItem);
        if (direction == 'backward') {
          options.movingToCenter(prevItemFromCenter());
          data.currentDirection = 'backward';
        } else if (direction == 'forward') {
          options.movingToCenter(nextItemFromCenter());
          data.currentDirection = 'forward';
        }
      }
    }
    this.reload = function (newOptions) {
      const preset = {
        startingItem: 1,
        separation: 175,
        separationMultiplier: 0.6,
        horizonOffset: 0,
        horizonOffsetMultiplier: 1,
        sizeMultiplier: 0.7,
        opacityMultiplier: 0.87,
        horizon: 0,
        speed: 300,
        flankingItems: 2,
        linkHandling: 2,
        autoPlay: 0,
        orientation: 'horizontal',
        activeClassName: 'carousel-center',
        preloadImages: true,
        forcedImageWidth: 0,
        forcedImageHeight: 0,
        movingToCenter: function () { },
        movedToCenter: function () { },
        clickedCenter: function () { },
        movingFromCenter: function () { },
        movedFromCenter: function () { },
        parent: document.querySelector('.perspective-carousel')
      };
      options = extend({}, preset, newOptions);
      initializeCarouselData();
      Array.from(options.parent.querySelectorAll('img')).forEach((el) => el.style.display = 'none');
      forceImageDimensionsIfEnabled();
      preload(function () {
        setOriginalItemDimensions();
        preCalculatePositionProperties();
        setupCarousel();
        setupStarterRotation();
      });
    };
    this.next = function () {
      options.autoPlay = 0;
      moveOnce('forward');
    };
    this.prev = function () {
      options.autoPlay = 0;
      moveOnce('backward');
    };
    this.reload(startingOptions);
    document.addEventListener('click', (e) => {
      if (e.target.classList[1] === 'perspective-left') {
        data.currentDirection = 'backward';
        rotateCarousel();
      }
      if (e.target.classList[1] === 'perspective-right') {
        data.currentDirection = 'forward';
        rotateCarousel();
      }
      if (e.target.classList[1] === 'perspective-switch') {
        if (options.orientation === 'vertical') {
          options.orientation = 'horizontal';
        } else {
          options.orientation = 'vertical';
        }
        rotateCarousel();
      }
    });
  }
};

window.onload = () => {
  new PerspectiveCarousel();
}
