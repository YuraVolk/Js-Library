//Library currently has 33 scripts finished

markups = [
  `
       <pre><code>
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
               x[1].src = "img/idea" + n + ".png";

                if (n === 3) {
                    x[2].src = "img/idea" + 0 + ".png";
                } else {
                    x[2].src = "img/idea" + (n + 1) + ".png";
                }
                if (n === 0) {
                    x[0].src = "img/idea" + 3 + ".png";
                } else {
                    x[0].src = "img/idea" + (n - 1) + ".png";
                }
            }

            function ideasShowDivs(n) {
                let i;
                let x = document.getElementsByClassName('ideasSlider');

                if (ideasSlideIndex !== -1) {

                    if (ideasSlideIndex !== 4) {
                        ideasSwitchIdeaSrc(n, x);
                    } else {
                        ideasSlideIndex = 0;
                        n = 0;

                        ideasSwitchIdeaSrc(n, x);
                    }

                } else {
                    ideasSlideIndex = 3;
                    n = 3;

                    ideasSwitchIdeaSrc(n, x);
                }

                ideasSlideIndex = n;
            }
        }
        </code></pre>
    `,
  `
    <pre><code>function filterDivs(toLeave) {

        Array.from(document.querySelectorAll('.filterEl')).forEach(function(element, i) {

            if (toLeave != 'all') {
                if (document.querySelectorAll('.filterEl')[i].classList[2] != toLeave) {
                    document.querySelectorAll('.filterEl')[i].style.display = 'none';
                } else {
                    document.querySelectorAll('.filterEl')[i].style.display = 'block';
                }
            } else {
                document.querySelectorAll('.filterEl')[i].style.display = 'block';
            }
        });
    }

    function removeClassName(className, mod) {
        Array.from(document.querySelectorAll(className)).forEach(function(el, i) {
            Array.from(document.querySelectorAll(className))[i].classList.remove(mod);
        });
    }

    function showDivFiltering(pressedButton) {
        removeClassName('.filter__slider-btn', 'filter-btnActive');
        Array.from(document.querySelectorAll('.filter__slider-btn'))[pressedButton].classList.add('filter-btnActive');
        console.log(pressedButton);
        switch(pressedButton) {
            case '0':
                filterDivs('all');
                break;
            case '1':
                filterDivs('tag1');
                break;
            case '2':
                filterDivs('tag2');
                break;
            case '3':
                filterDivs('tag3');
                break;
            case '4':
                filterDivs('tag4');
                break;
        }
    }</code></pre>
    `,
  `
        <pre><code>function buttonPress(modifier, firstPage = 1, lastPage = 3) {
        // modifier === 'buttons__button--left' ? gPage++ : gPage--;
        if (modifier === 'buttons__button--left') {
            if (page !== firstPage) {
                page--;
            }
        } else if (modifier === 'buttons__button--right') {
            if (page !== lastPage) {
                page++;
            }
        }
        displayButtons(page);
    }
    function displayButtons(curPage, firstPage = 1, lastPage = 3) {
        if (curPage === firstPage) {
            document.querySelector('.buttons__button--left').style.display = 'none';
            document.querySelector('.buttons__button--right').style.display = 'block';
        } else if (curPage === lastPage) {
            document.querySelector('.buttons__button--left').style.display = 'block';
            document.querySelector('.buttons__button--right').style.display = 'none';
        } else {
            document.querySelector('.buttons__button--left').style.display = 'block';
            document.querySelector('.buttons__button--right').style.display = 'block';
        }
        showPosts();
    }</code></pre>
    `,
  `<code><pre>
    let videoPlays, isMute = true, prevVideoVolume;
    var styledRanges = document.getElementsByClassName('styled_range');
    var rangeVideo = styledRanges[0].childNodes;

    var audioRanges = document.getElementsByClassName('ver_range');
    var rangeAudio = audioRanges[0].childNodes;

    function toMinuteSecond (number) {
        number = parseInt(number, 10);

        var hours = Math.floor(number / 3600);
        var minutes = Math.floor((number - (hours * 3600)) / 60);
        var seconds = number - (hours * 3600) - (minutes * 60);

        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return minutes + ':' + seconds;
    }

    function setVideoTime(time) {
        const video = document.querySelector('.video__presentation');

        video.currentTime = time;
        updateVideoTime();
    }

    function getVideoDuration() {
        const video = document.querySelector('.video__presentation');

        return video.duration;
    }

    function pauseVideo() {
        videoPlays = false;
        document.querySelector('.video__presentation').pause();
    }

    function startVideo() {
        videoPlays = false;
        document.querySelector('.video__presentation').play();
    }

    function equalizeRange(videoTime, videoDuration, range) {
        range[3].value = videoTime * 100 / videoDuration;
        range[1].value = videoTime * 100 / videoDuration;
    }

    function modifyRange(audioRanges, isTime) {
        for (var i = 0; i < audioRanges.length; i++) {
            var thumbRange = null, trackRange = null;

            for (var j = 0; j < audioRanges[i].children.length; j++) {
              var child = audioRanges[i].children[j];

              if (isTime) {
                    if (child.className === 'thumb_ver') {
                        var thumbRange = child;
                    } else if (child.className === 'track_ver') {
                        var trackRange = child;
                    }
              } else {
                    if (child.className === 'thumb_range') {
                        var thumbRange = child;
                    } else if (child.className === 'track_range') {
                        var trackRange = child;
                    }
              }

            }
            thumbRange.oninput = function(thumbRange, trackRange) {
              return function(e) {
                trackRange.value = thumbRange.value;
                if (!isTime) {
                    setVideoTime(trackRange.value * getVideoDuration() / 100);
                }
              };
            }(thumbRange, trackRange);
        }
    }

    document.querySelector('.video__presentation').onended = function(e) {
        videoPlays = false;
    };

    function changeVolume() {
        let vol = rangeAudio[1].value / 100;

        if (isMute) {
            document.querySelector('.video__presentation').volume = vol;
        }
    }

    document.querySelector('.video__presentation').onplaying = function(){
        videoPlays = true;

        setInterval(() => {
            if (videoPlays) {
                updateVideoTime();
            }
        }, 50);
    }

    function switchMute() {
        const video = document.querySelector('.video__presentation');

        if (isMute) {
            let vol = rangeAudio[1].value / 100;
            prevVideoVolume = vol;
            isMute = false;
            video.volume = 0;

            rangeAudio[3].value = "0";
            rangeAudio[1].value = "0";
        } else {
            isMute = true;
            video.volume = prevVideoVolume;

            rangeAudio[3].value = "" + (prevVideoVolume * 100);
            rangeAudio[1].value = "" + (prevVideoVolume * 100);
        }
    }

    setInterval(() => {
        if (videoPlays) {
            changeVolume();
        }
    }, 200);

    function updateVideoTime() {
        const video = document.querySelector('.video__presentation');
        let res =  toMinuteSecond(Math.floor(video.duration - video.currentTime));
        document.querySelector('.video__time').textContent = res;

        equalizeRange(video.currentTime, video.duration, rangeVideo);
    }

    function resetVideoTime() {
        const video = document.querySelector('.video__presentation');

        videoPlays = false;

        video.currentTime = 0;
        rangeVideo[3].value = "0";
        rangeVideo[1].value = "0";
    }

    rangeVideo[3].value = "0";
    rangeVideo[1].value = "0";

    rangeAudio[3].value = "100";
    rangeAudio[1].value = "100";

    modifyRange(styledRanges, false);
    modifyRange(audioRanges, true);

    document.addEventListener('click', function (event) {

        if ('.' + event.target.classList[0] === '.button-play') {
            if (!videoPlays) {
                startVideo();
            }
        }
        if ('.' + event.target.classList[0] === '.button-stop') {
            pauseVideo();
        }
        if ('.' + event.target.classList[0] === '.button-reset') {
            resetVideoTime();
        }
        if ('.' + event.target.classList[0] === '.button-mute') {
            switchMute();
        }
    });</code></pre>
    `,
  `
    <pre><code>const changeTab = function(tabNumber) {
        var tabToSave = document.querySelector('.tabs--' + tabNumber);

        Array.from(document.querySelectorAll('.tabs')).forEach(el => {
            el.style.display = 'none';
        });

        tabToSave.style.display = 'block';
    };

    document.addEventListener('click', function (event) {
        if ('.' + event.target.classList[0] === '.tab') {
            changeTab(event.target.classList[1].slice(-1));
        }
    });

    changeTab(0);</code></pre>
    `,
  `
        <pre><code>var opacityRanges = document.getElementsByClassName('opacity_range');
        var rangeOpacity = opacityRanges[0].childNodes;

        let opacityGlobal = 1;

        function initColorPicker() {
            var canvasEl = document.getElementById('picker');
            var canvasContext = canvasEl.getContext('2d');

            var image = new Image(256, 256);
            image.onload = () => canvasContext.drawImage(image, 0, 0, image.width, image.height);
            image.src = "picker.png";

            canvasEl.onmousedown = function(mouseEvent) {
            var imgData = canvasContext.getImageData(mouseEvent.offsetX, mouseEvent.offsetY, 1, 1);
            var rgba = imgData.data;

            changeColor(rgba, opacityGlobal);
            }

        }

        function rgbToHex(rgb) {
        var hex = Number(rgb).toString(16);

        if (hex.length < 2) {
            hex = "0" + hex;
        }

        return hex;
        };

        function toHex(red, green, blue) {
        var r = rgbToHex(red);
        var g = rgbToHex(green);
        var b = rgbToHex(blue);

        document.querySelector('.hex').textContent = '#' + r + g + b;
        }

        function rgbaToRgb(RGBA) {
        alpha = 1 - RGBA.alpha;

        console.log(RGBA);

        var red = Math.round((RGBA.alpha * (RGBA.red / 255) + (alpha * (0 / 255))) * 255);
        var green = Math.round((RGBA.alpha * (RGBA.green / 255) + (alpha * (0 / 255))) * 255);
        var blue = Math.round((RGBA.alpha * (RGBA.blue / 255) + (alpha * (0 / 255))) * 255);

        document.querySelector('.rgb').textContent = 'is : ' + red + ', ' + green + ', ' + blue;

        toHex(red,green,blue);
        }

        function modifyRange(audioRanges) {
        for (var i = 0; i < audioRanges.length; i++) {
            var thumbRange = null, trackRange = null;

            for (var j = 0; j < audioRanges[i].children.length; j++) {
                var child = audioRanges[i].children[j];

                if (child.className === 'thumb_opacity') {
                    var thumbRange = child;
                } else if (child.className === 'track_opacity') {
                    var trackRange = child;
                }
            }
            thumbRange.oninput = function(thumbRange, trackRange) {
                return function(e) {
                trackRange.value = thumbRange.value;
                changeOpacity(trackRange.value);
                };
            }(thumbRange, trackRange);
        }
        }

        function changeOpacity(opacity) {
        document.querySelector('.opacity').style = "opacity: " + opacity / 100;

        opacityGlobal = opacity / 100;
        }

        function changeColor(rgba, opacity) {
        let styl = "background-color: " + "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity + ")";
        document.querySelector('.picker-back').style = styl;
        document.querySelector('.rgba').textContent = " is " + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + opacity;

        const RGBA = {
            red: rgba[0],
            green: rgba[1],
            blue: rgba[2],
            alpha: opacityGlobal
        };

        rgbaToRgb(RGBA);
        }

        initColorPicker();
        modifyRange(opacityRanges);

        rangeOpacity[1].value = "100";
        rangeOpacity[3].value = "100";</code></pre>
    `, `
        <pre><code>const array = [];

        Array.from(document.getElementsByTagName('section')).forEach(elMain => {
            for (let el of document.getElementsByTagName('h1')) {

                if(elMain.contains(el)) {
                    array.push(el.textContent);
                    break;
                }
            }
        });

        array.forEach(el => {
            document.querySelector('.sidenav').insertAdjacentHTML('beforeend', '<a href="#' + el + '">' + el + '</a>');
        });

        document.addEventListener('click', e => {
            if (e.target.classList[0] === 'nav__close') {
                document.querySelector('.sidenav').style = 'display: none';
                document.querySelector('body').style = 'margin: 0';
            }
        })

        document.addEventListener('mousemove', e => {
            if (e.clientX < 5) {
                document.querySelector('.sidenav').style = 'display: block';
                document.querySelector('body').style = 'margin-left: 300px';
            }
        })

        document.querySelector('.sidenav').style = 'display: none';
        document.querySelector('body').style = 'margin: 0';
        </code></pre>
    `,
  `
        <pre><code>var floatingPanel = document.querySelector('.floatingPanel');
        var floatingPanel1 = document.querySelector('.floatingPanel--1');

        let arePanels = [false, false, false];

        function addEventListen(panel) {
            var initX, initY, mousePressX, mousePressY;

            document.addEventListener('mousedown', e => {
                initX = panel.offsetLeft;
                initY = panel.offsetTop;
                mousePressX = e.clientX;
                mousePressY = e.clientY;

                var changePosition = function(event) {
                    panel.style.left = initX + event.clientX - mousePressX + 'px';
                    panel.style.top = initY + event.clientY - mousePressY + 'px';
                }

                panel.addEventListener('mousemove', changePosition, false);

                window.addEventListener('mouseup', function() {
                    panel.removeEventListener('mousemove', changePosition, false);
                }, false);

            }, false);
        }

        function toggleFloatingWindow(i, panel, btn) {
            if (arePanels[i] === false) {
                arePanels[i] = true;
                panel.style.display = 'block';
                btn.textContent = 'Close Floating Window ' + (i + 1);
            } else {
                arePanels[i] = false;
                panel.style.display = 'none';
                btn.textContent = 'Open Floating Window ' + (i + 1);
            }
        }

        document.addEventListener('click', e => {
            if (e.target.classList[1] === 'modalButton--1') {
                toggleFloatingWindow(0, floatingPanel, e.target);
                addEventListen(floatingPanel);
            }
            if (e.target.classList[1] === 'modalButton--2') {
                toggleFloatingWindow(1, floatingPanel1, e.target);
                addEventListen(floatingPanel1);
            }
        });</code></pre>
    `, `
        <pre><code>let scroll, timeLeft, isActive;

        function showPopup(popup) {
            isActive = false;
            if (popup.style.display != 'block') {
                popup.style.display = 'block';
                stopScroll();
            }
            if (popup.classList[2] === 'time') {
                initTiming(popup);
            }
        }

        function hidePopup() {
            Array.from(document.querySelectorAll('.popup')).forEach(el => {
                if (el.classList[3] === 'renew' && el.style.display === 'block') {
                    isActive = true;
                }
                el.style.display = 'none';
            });

            document.body.style.position = '';
            document.body.style.top = '';

            window.scrollTo(0, scroll.slice(0, -2));
        }

        function initTiming(popup) {
            const pop = popup;

            timeLeft = 6;
            pop.childNodes[1].childNodes[3].childNodes[3].textContent = 6;

            pop.childNodes[1].childNodes[1].style.display = 'none';
            pop.childNodes[1].childNodes[3].style.display = 'block';

            var interval = setInterval(function() {
                timeLeft--;

                pop.childNodes[1].childNodes[3].childNodes[3].textContent = timeLeft;
                if (timeLeft < 1) {
                    clearInterval(interval);
                    pop.childNodes[1].childNodes[1].style.display = 'block';
                    pop.childNodes[1].childNodes[3].style.display = 'none';
                }
            }, 1000);
        }

        function stopScroll() {
            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            scroll = scrollY;
            const body = document.body;
            body.style.position = 'fixed';
            body.style.top = "-" + scrollY;
        }

        let timing = setInterval(function() {
            if (isActive) {
                showPopup(document.querySelector('.popup--3'));
            }
        }, 15000);

        document.addEventListener('click', e => {
            if (e.target.classList[1] === 'popupButton') {
                showPopup(document.querySelector(".popup--" + e.target.classList[2].slice(-1)));
            }
            if (e.target.classList[0] === 'popup__close') {
                hidePopup();
            }
            if (e.target.classList[1] === 'closePopup') {
                isActive = false;
            }
        });

        window.addEventListener('scroll', () => {
            document.documentElement.style.setProperty('--scroll-y', window.scrollY + 'px');
        });</code></pre>
    `, `
    <pre><code>

window.addEventListener('load', () => {
    var carousel3d = document.querySelector('.carousel');

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
    </code></pre>
    `,
  `
    <pre><code>
    var index = 0;
    var amount = 0;
    var currTransl = [];
    var translationComplete = true;
    var moveOffset = 0;

    var transitionCompleted = function(){
        translationComplete = true;
    }

    var carousel = document.getElementById('carousel');
    amount = document.getElementsByClassName("slide").length;
    moveOffset = parseInt(window.getComputedStyle(document.getElementById('carousel-container')).width, 10);
    carousel.style.width = (amount * moveOffset) + 'px';
    for(var i = 0; i < amount; i++) {
        currTransl[i] = -moveOffset;
        document.getElementsByClassName("slide")[i].addEventListener("transitionend", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("webkitTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("oTransitionEnd", transitionCompleted, true);
        document.getElementsByClassName("slide")[i].addEventListener("MSTransitionEnd", transitionCompleted, true);
    }

    carousel.insertBefore(carousel.children[4], carousel.children[0]);

    function changeSlides(isNext) {
        if(translationComplete === true) {
            translationComplete = false;
            if (isNext) {
                var outerIndex = (index) % amount;
                index++;
            } else {
                index--;
                if (index == -1) {
                    index = amount-1;
                }
                var outerIndex = (index) % amount;
            }

            for (var i = 0; i < amount; i++) {
                var slide = document.getElementsByClassName("slide")[i];
                slide.style.opacity = '1';
                if (isNext) {
                    slide.style.transform = 'translateX('+(currTransl[i]-moveOffset)+'px)';
                    currTransl[i] = currTransl[i]-moveOffset;
                } else {
                    slide.style.transform = 'translateX('+(currTransl[i]+moveOffset)+'px)';
                    currTransl[i] = currTransl[i]+moveOffset;
                }
            }

            var outerSlide = document.getElementsByClassName("slide")[outerIndex];
            outerSlide.style.opacity = '0';
            if (isNext) {
                outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]+(moveOffset*amount))+'px)';
                currTransl[outerIndex] = currTransl[outerIndex]+moveOffset*(amount);
            } else {
                outerSlide.style.transform = 'translateX('+(currTransl[outerIndex]-(moveOffset*amount))+'px)';
                currTransl[outerIndex] = currTransl[outerIndex]-moveOffset*(amount);
            }
        }
    }

    document.addEventListener('click', (event) => {
        if (event.target.classList[1] === 'previous') {
            changeSlides(false);
        }
        if (event.target.classList[1] === 'nextSlide') {
            changeSlides(true);
        }
    }, true);
    </code></pre>
    `,
  `
    <pre><code>

    var sections = Array.from(document.querySelectorAll('.accordion'));

    sections.forEach(el => {
        el.classList.add("hidden");
    });

    function switchAccordion(target) {
        if (target.classList[1] === "hidden") {
            sections.forEach(el => {
                el.classList.add("hidden");
            });
            target.classList.remove("hidden");
        } else {
            target.classList.add("hidden");
        }
    }

    document.addEventListener('click', event => {
        if (event.target.parentNode.classList[0] === "accordion") {
            switchAccordion(event.target.parentNode);
        }
    });
    </code></pre>
    `,
  `
    <pre><code>
    let isTyping = false;

    var markups = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\nsed do eiusmod tempor incididunt ut labore et dolore\nmagna aliqua. Ut enim ad minim veniam, quis nostrud\nexercitation ullamco laboris nisi ut aliquip ex ea\ncommodo consequat. Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed do eiusmod tempor \nincididunt ut labore et dolore magna aliqua. Ut enim ad \nminim veniam, quis nostrud exercitation ullamco laboris \nnisi ut aliquip ex ea commodo consequat."
    ];

    function startTyping(content, el, letterUniq) {
        var index = 0;
        if (letterUniq) {
            el.textContent = '';
        }
        while (index <= content.length) {
            (function(index) {
                setTimeout(function() {
                    if (!letterUniq) {
                        el.textContent = content.substr(0, index);
                    } else {
                        el.insertAdjacentHTML('beforeend', "<span class=\"animationWave\">" + content.charAt(index) + "</span>");
                    }

                    if (index >= content.length) {
                    isTyping = false;
                    }
                }, 35 * index);
            })(index++);
        }
    }

    document.addEventListener('click', event => {
        if(event.target.classList[1] === "typeButton--1") {
            if (!isTyping) {
                isTyping = true;
                startTyping(markups[0], document.querySelector('.self-typing-1'), false);
            }
        }
        if(event.target.classList[1] === "typeButton--2") {
            if (!isTyping) {
                isTyping = true;
                startTyping(markups[1], document.querySelector('.self-typing-2'), true);
            }
        }
    });
    </code></pre>
    `,
  `<pre><code>
    let phrases = [
        'This text transforms   ',
        'into other texts       ',
        'no jQuery or any plugin',
        'just pure javascript   ',
        'Cool, right?            '
    ];

    const phrasesLastLetters = [];
    let isRebulding1 = false;

    function setCharAt(str,index,char) {
        if(index > str.length-1) return str;

        return str.substr(0,index) + char + str.substr(index+1);
    }

    function moderateLists() {
        phrases.forEach(el => {
            phrasesLastLetters.push(el.charAt(0));
        });
    }

    function rebuildTextFinal(el, phrase, nextPhrase) {

        let firstLetter = nextPhrase.charAt(0);
        let newText = phrase;
        let isDone = false;

        for (var i = 0; (i < nextPhrase.length - 1 && !isDone); i++) {
            (function(i) {
                setTimeout(function() {
                    newText = setCharAt(newText, i - 1, nextPhrase.charAt(i));
                    setTimeout(function() {
                        if (i < phrase.length - 1) {
                            newText = setCharAt(newText, i - 1, nextPhrase.charAt(i - 1));
                        }
                    }, 25 * i);
                    if (i > 1) {
                        newText = newText.replace(newText.charAt(1), nextPhrase.charAt(1));
                    }
                    if (i > 4) {
                        newText = newText.replace(newText.charAt(3), nextPhrase.charAt(3));
                        newText = newText.replace(newText.charAt(2), nextPhrase.charAt(2));
                    }
                    if (!isDone) {
                        newText =  newText.replace(newText.charAt(0), firstLetter);
                        el.textContent = '' + newText;
                    }
                    if (!(i < nextPhrase.length - 1)) {
                        el.textContent = nextPhrase;
                        isDone = true;
                    }
                }, 75 * i);

            })(index++);
        }
    }


    moderateLists();
    let element, index, phraseNext;
    let gI = -1;

    let inter;

    document.addEventListener('click', event => {
        if (event.target.classList[1] === 'cipherButton--0') {
            isRebulding1 = true;
            inter = window.setInterval(() => {
                if (gI === phrases.length - 1) {
                    gI = 0;
                } else {
                    gI++;
                }
                element = document.querySelector('.rebuildingText--0');
                index = (gI);
                if (gI === phrases.length - 1) {
                    phraseNext = phrases[0];
                } else {
                    phraseNext = phrases[gI + 1];
                }

                rebuildTextFinal(element, phrases[index], phraseNext);
            }, 3670);
        }
        if (event.target.classList[1] === 'cipherButton--1') {
            if (typeof inter !== 'undefined') {
                window.clearInterval(inter);
            }
        }
    });
    </code></pre>`,
  `<pre><code>
    let nextPhrase = 'into text that is reciphered';
    const phrases = ['This text rechipers', 'into text that is reciphered', 'still no jQuery or any other plugin', 'It IS cool'];
    let isRebuilding = false;

    function cipherLetter(el, newLetter, isTimed) {
        const symbols = ['!', '"', '#', '$', '%', '*', '0', '1', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>'];
        let changeNumber;
        if (!isTimed) {
            changeNumber = Math.round(Math.random() * (44 - 6) + 6);
        } else {
            changeNumber = Math.round(Math.random() * (14 - 6) + 6);
        }
        let isDone = false;
        var index = 0;
        setTimeout(function() {
            while (index <= changeNumber) {
                (function(index) {
                    setTimeout(function() {
                        if (!isDone) {
                            let symbol = symbols[Math.floor(Math.random() * symbols.length)];
                            el.textContent = symbol;
                        }
                        if (!(index < changeNumber)) {
                            isDone = true;
                            el.textContent = newLetter;
                            el.classList.remove('changed');
                        }
                    }, 65 * index);
                })(index++);
            }
        }, Math.random() * 1000);
    }

    function splitText(el, nextPhraseLength) {
        const oldText = el.textContent;
        el.textContent = '';
        for (var i = 0; i < oldText.length; i++) {
            el.insertAdjacentHTML('beforeend', '<span>' + oldText.charAt(i) + '</span>');
        }
        if (nextPhraseLength > oldText.length) {
            for (var i = 0; i < nextPhraseLength - oldText.length; i++) {
                el.insertAdjacentHTML('beforeend', '<span></span>');
            }
        }
    }

    function recipherText(children, nextText) {
        children.forEach((el, i) => {
            if (!(el.textContent == nextText.charAt(i))) {
                el.classList.add('changed');
                if (el.textContent.length === 0) {
                    setTimeout(function() {
                        cipherLetter(el, nextText.charAt(i), true);
                    }, 45 * i);
                } else {
                    cipherLetter(el, nextText.charAt(i), false);
                }
            }
        });
    }

    let element = document.querySelector('.rebuildingText--1');
    let inter;
    let gI = -1;

    document.addEventListener('click', event => {

        if (event.target.classList[1] === 'scrambleButton--0') {
            isRebuilding = true;
            inter = window.setInterval(() => {
                if (gI === phrases.length - 1) {
                    gI = 0;
                } else {
                    gI++;
                }
                let index = (gI);
                if (gI === phrases.length - 1) {
                    nextPhrase = phrases[0];
                } else {
                    nextPhrase = phrases[gI + 1];
                }
                element.textContent = phrases[index];

                splitText(element, nextPhrase.length);
                recipherText(Array.from(element.childNodes), nextPhrase);
            }, 7680);
        }
        if (event.target.classList[1] === 'scrambleButton--1') {
            if (typeof inter !== 'undefined') {
                window.clearInterval(inter);
            }
        }
    });
    </code></pre>`,
  `<pre><code>
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
            yPos: 42,
            xRadius: null,
            yRadius: 48,
            farScale: 0.5,
            speed: 0.13
        };

        new Carousel(document.querySelector('#carouselm'), options);
    };
    </code></pre>`,
  `<pre><code>
    document.querySelector('.zoom-container').addEventListener('mousemove', function (e) {
        let style = document.querySelector('.zoom__hover').style;
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        let imgWidth = document.querySelector('.zoom__image').width;
        let imgHeight = document.querySelector('.zoom__image').height;
        let xMove = ((x / imgWidth) * 100);
        let yMove = ((y / imgHeight) * 100);

        if (x > (.01 * imgWidth)) {
            xMove += (.15 * xMove);
        };

        if (y >= (.01 * imgHeight)) {
            yMove += (.15 * yMove);
        };

        style.backgroundPositionX = (xMove - 9) + '%';
        style.backgroundPositionY = (yMove - 9) + '%';
        style.left = (x - 34) + 'px';
        style.top = (y - 34) + 'px';
    }, false);
    </code></pre>`,
  `<pre><code>
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
    </code></pre>`,
  `<pre><code>
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
    </code></pre>`,
  `<pre><code>
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
            return true;
        } else if (delta > 0) {
            return false;
        }
    }

    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    function smoothScrollTo(element, to, duration) {
        isScrolling = true;
        var start = element.scrollTop,
            change = to - start,
            currentTime = 0,
            increment = 10;

        var animateScroll = function () {
            currentTime += increment;
            var val = easeInOutQuad(currentTime, start, change, duration);
            element.scrollTop = val;
            if (currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
            if (currentTime === duration) {
            isScrolling = false;
            }
        };
        animateScroll();
    }

    function scrollToSlide(dir) {
        if (!isScrolling) {
            if (dir == true) {
                const toPixel = items[selectedItem + 1].offsetTop;
                smoothScrollTo(items[0].parentNode, toPixel, 600);
                selectedItem++;
            } else {
                const toPixel = items[selectedItem - 1].offsetTop;
                smoothScrollTo(items[0].parentNode, toPixel, 600);
                selectedItem--;
            }
        }
    }

    document.querySelector('.scroll-select').addEventListener('wheel', (e) => {
        e.preventDefault();
        if (scrollDir(e)) {
            if (selectedItem >= items.length - 1) {
                if (!isScrolling) {
                    selectedItem = 0;
                    smoothScrollTo(items[0].parentNode, items[0].offsetTop, 600);
                }
            } else {
                scrollToSlide(true);
            }
        } else {
            if (selectedItem === 0) {
                if (!isScrolling) {
                    const toPixel = items[0].parentNode.scrollHeight - items[0].offsetHeight;
                    selectedItem = items.length - 1;
                    smoothScrollTo(items[0].parentNode, toPixel, 600);
                }
            } else {
                scrollToSlide(false);
            }
        }
    });
    </code></pre>`,
  `<pre><code>
    let operations = ["0"];
    let res = "0";
    let curNum = 0;
    let element = document.querySelector('.calculator__result');

    function renderNum(classEl) {
        if (operations[curNum] === "0") {
            operations[curNum] = "";
        }
        if (operations[curNum - 1]) {
            if (!(classEl[classEl.length - 1] === "0" && operations[curNum - 1] === '/') && (operations[curNum - 1] !== ')')) {
                operations[curNum] += classEl[classEl.length - 1];
            }
        } else {
            operations[curNum] += classEl[classEl.length - 1];
        }
    }

    function addFraction() {
        if (!(operations[curNum].indexOf('.') > -1)) {
            operations[curNum] += '.';
        }
    }

    function changePosNeg() {
        if (operations[curNum].indexOf('-') > -1) {
            operations[curNum] = (Math.abs(operations[curNum])).toString();
        } else {
            operations[curNum] = (-Math.abs(operations[curNum])).toString();
        }
    }

    function insertSymbol(symbol) {
        curNum++;
        operations[curNum] = symbol;
        curNum++;
        operations[curNum] = "";
    }

    function addSymbol(symbol) {
        if (operations.length > 1) {
            if (!isNaN(operations[operations.length - 1]) && operations[operations.length - 1].length !== 0) {
                insertSymbol(symbol);
            } else if (operations[curNum - 1] === ')') {
                insertSymbol(symbol);
            }
        } else {
            insertSymbol(symbol);
        }
    }

    function evaluateEquation() {
        if (operations.length > 1) {
            let result;
            if (!(typeof operations[operations.length - 2] === 'number') && (operations[operations.length - 1].length === 0)) {
                if (!(operations[operations.length - 2].indexOf(')') > -1)) {
                    operations.splice(-2,1);
                }
            }
            if (operations[operations.length - 1].length === 0) {
                operations.pop();
            }
            curNum = 0;
            result = eval(operations.join(" "));
            operations.length = 0;
            operations = [result + ""];
            return result;
        }
    }

    function removeSymbol() {
        if (operations[curNum].length > 0) {
            operations[curNum] = operations[curNum].slice(0, -1);
            if (operations[curNum] === "") {
                operations[curNum] = "0";
            }
        }
    }

    function addPrefix(prefix, endPrefix) {
        operations.splice(operations[curNum - 1], 0, prefix + "(");
        operations.push(endPrefix + ")");
        if (!(operations[operations.length - 1] === "")) {
            operations.push("");
        }
        curNum = operations.length - 1;
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList[0] === 'calculator__btn') {
            const classEl = e.target.classList[1];
            if (!isNaN(classEl[classEl.length - 1])) {
                renderNum(classEl);
            }
            if (classEl === 'calculator__btn--fraction') {
                addFraction();
            }
            if (classEl === 'calculator__btn--plus') {
                addSymbol('+');
            }
            if (classEl === 'calculator__btn--minus') {
                addSymbol('-');
            }
            if (classEl === 'calculator__btn--multiply') {
                addSymbol('*');
            }
            if (classEl === 'calculator__btn--divide') {
                addSymbol('/');
            }
            if (classEl === 'calculator__btn--modulus') {
                addSymbol('%');
            }
            if (classEl === 'calculator__btn--plusminus') {
                changePosNeg();
            }
            if (classEl === 'calculator__btn--square') {
                addPrefix('Math.sqrt', "");
            }
            if (classEl === 'calculator__btn--sqr') {
                addPrefix('Math.pow', ",2");
            }
            if (classEl === 'calculator__btn--partial') {
                addPrefix('1/', "");
            }
            if (classEl === 'calculator__btn--delete') {
                removeSymbol();
            }
            if (classEl === 'calculator__btn--c') {
                curNum = 0;
                operations = ["0"];
            }
            if (classEl === 'calculator__btn--ce') {
                operations[curNum] = "0";
            }
            res = operations.join(" ");
            if (classEl === 'calculator__btn--equal') {
                res = evaluateEquation();
            }
            element.textContent = res;
        }
    });
    </code></pre>`,
    `<pre><code>
    let modeTarget = document.querySelector('.toInvert');
    let mode = lightOrDark(getComputedStyle(modeTarget).backgroundColor);

    function lightOrDark(color) {
      var r, g, b, hsp;
      if (color.match(/^rgb/)) {
          color = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
          r = color[1];
          g = color[2];
          b = color[3];
      } else {
          color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));
          r = color >> 16;
          g = color >> 8 & 255;
          b = color & 255;
      }
      hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));
      return hsp > 127.5 ? 'light' : 'dark';
    }


    document.addEventListener('click', (e) => {
      if (e.target.classList[1] === 'invert') {
        if (mode === 'light') {
          mode = 'dark';
          modeTarget.classList.add('inverted');
        } else {
          mode = 'light';
          modeTarget.classList.remove('inverted');
        }
      }
    });
    </code></pre>`,
    `<pre><code>
    let autoInput = document.querySelector('.autocomplete-input');
    autoInput.addEventListener("input", function (e) {
      const val = this.value;
      closeAllLists();
      if (!val) {
        return false;
      }
      this.parentNode.insertAdjacentHTML('afterbegin', '<div id="autocomplete-list" class="autocomplete-items"></div>');
      const el = document.querySelector('.autocomplete-items');
      for (var i = 0; i < countries.length; i++) {
        if (countries[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        el.insertAdjacentHTML('beforeend', '<div class="item-set"><span><strong>' +
              countries[i].substr(0, val.length) + '</strong>' + countries[i].substr(val.length) +
            '</span><input class="autoInput" type="hidden" value="' + countries[i] + '"> </div>');
        }
      }
    });
    autoInput.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
    });

    function closeAllLists(target) {
      const list = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < list.length; i++) {
        if (target != list[i] && target != autoInput) {
          list[i].remove();
        }
      }
    }

    document.addEventListener("click", function (e) {
      if (e.target.parentNode.classList[0] === 'item-set') {
        autoInput.value = e.target.parentNode.childNodes[3].value;
      }
      if (e.target.parentNode.parentNode.classList) {
        if (e.target.parentNode.parentNode.classList[0] === 'item-set') {
          autoInput.value = e.target.parentNode.parentNode.childNodes[3].value;
        }
      }
      if (e.target.classList[0] === 'item-set') {
        autoInput.value = e.target.childNodes[3].value;
      }
      closeAllLists(e.target);
    });

    </code></pre>`,
    `<pre><code>
    const x = document.querySelectorAll(".comparsion-image--other");
    for (var i = 0; i < x.length; i++) {
      compareImages(x[i], i, x.length + 1);
    }

    function compareImages(img, index, length) {
      var slider, img, clicked = 0;
      const width = img.offsetWidth;
      const height = img.offsetHeight;
      img.style.width = (width /  length) + "px";
      slider = document.createElement("DIV");
      slider.setAttribute("class", "comparsion-slider");
      img.parentElement.insertBefore(slider, img);
      slider.style.top = (height / 2) -  (slider.offsetHeight /2) + "px";
      slider.style.left = (width - ((width /  length) * (index + 1))) - (slider.offsetWidth / 2) + "px";
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchstop", slideFinish);
      slide(width - ((width /  length) * (index + 1)));
      function slideReady(event) {
        event.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        clicked = 0;
      }
      function slideMove() {
        if (clicked !== 0) {
          img.style.left = 0;
          let pos = event.pageX - img.getBoundingClientRect().left - window.pageXOffset;
          if (pos < 0) pos = 0;
          if (pos > width) pos = width;
          slide(pos);
        }
      }
      function slide(differ) {
        img.style.width = differ + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
    </code></pre>`,
    `<pre><code>
    let isHidden = 0;

    function showToast() {
      if (isHidden === 0) {
        isHidden = 1;
        const wrap = document.querySelector('.toast-wrap');
        wrap.insertAdjacentHTML('afterbegin', "<div class=\"toast\">\n    <div class=\"justify\">\n      <span>Some Toast Content Here</span>\n      <div class=\"flexbox-toast\">\n        <button class=\"modalButton closeToast\">OK</button>\n        <button class=\"modalButton closeToast\">Cancel</button>\n      </div>\n    </div>\n  </div>");
      }
    }

    function closeToast() {
      if (isHidden === 1) {
        isHidden = 2;
        const toast = document.querySelector('.toast');
        toast.style.bottom = '-200px';
        setTimeout(() => {
          toast.remove();
          isHidden = 0;
        }, 1000);
      }
    }

    document.addEventListener('click', (e) => {
      if (e.target.classList[1] === 'toastButton') {
        showToast();
      }
      if (e.target.classList[1] === 'closeToast') {
        closeToast();
      }
    });
    </code></pre>`,
    `<pre><code>
    const slider = document.getElementById('categorySlider');
    const slideList = document.querySelector('.gallery__slides');
    const slideListItems = slider.querySelectorAll('.gallery-list__item');
    const slideWidth = slideListItems[0].offsetWidth;
    const slidesLength = slideListItems.length;
    let current = 1;
    slideList.style.left = '-' + (current * 100) + '%';
    let direction;
    let animating = false;

    function clickArrowButton(el) {
      let direction = el.classList[1].slice(-4);
      const pos = parseInt(slideList.style.left) || 0;
      let newPos;
      direction = direction === 'prev' ? -1 : 1;
      newPos = pos + (-1 * 100 * direction);
      if (!animating) {
        slideTo(slideList, pos, newPos, 500);
        current += direction;
      }
    }

    function clickPagerItem(el) {
      const slideIndex = el.classList[1][el.classList[1].length - 1];
      const targetSlide = slider.querySelector('.gallery-list__item--' + slideIndex);
      const pos = parseInt(slideList.style.left) || 0;
      const newPos = Math.round(targetSlide.offsetLeft / targetSlide.offsetWidth) * 100 * -1;

      if (!animating && pos !== newPos) {
        slideTo(slideList, pos, newPos);
        current = parseInt(slideIndex) + 1;
      }
    }

    function slideTo(element, pos, newPos) {
      animating = true;
      animate(pos, newPos, element);
    }

    function step(delta, pos, newPos, element) {
      const direction = pos > newPos ? 1 : -1
      element.style.left = pos + Math.abs(newPos - pos) * delta * direction * -1 + '%';
    }

    function animate(pos, newPos, element) {
      const start = new Date();
      const idle = setInterval(function () {
        let timePassed = new Date - start;
        let progress = timePassed / 500;
        if (progress > 1) {
          progress = 1;
        }
        const delta = Math.pow(progress, 2);
        step(delta, pos, newPos, element);
        if (progress === 1) {
          updateSlide();
          clearInterval(idle);
          animating = false;
          checkCurrentSlide();
        }
      }, 20);
    }

    function updateSlide() {
      Array.from(document.querySelectorAll('.gallery-indicator')).forEach((el) => {
        el.classList.remove('indicator-active');
      });
      if (current === 0) {
        document.querySelector('.gallery-indicator--' + (slidesLength - 1)).classList.add('indicator-active');
      } else if (slidesLength === (current - 1)) {
        document.querySelector('.gallery-indicator--0').classList.add('indicator-active');
      } else {
        document.querySelector('.gallery-indicator--' + (current - 1)).classList.add('indicator-active');
      }
    }

    function checkCurrentSlide() {
      let cycle = false;
      cycle = !!(current === 0 || current > slidesLength)
      if (cycle) {
        current = (current === 0) ? slidesLength : 1;
        slideList.style.left = (-1 * current * 100) + '%';
      }
    }

    const firstSlide = slideListItems[0];
    const lastSlide = slideListItems[slidesLength - 1];
    const firstSlideClone = firstSlide.cloneNode(true);
    const lastSlideClone = lastSlide.cloneNode(true);

    firstSlideClone.classList.remove(firstSlideClone.classList[1]);
    lastSlideClone.classList.remove(lastSlideClone.classList[1]);

    slideList.appendChild(firstSlideClone);
    slideList.insertBefore(lastSlideClone, firstSlide);


    document.addEventListener('click', e => {
      if (e.target.classList[1] === 'gallery__button--prev' ||
        e.target.classList[1] === 'gallery__button--next') {
        clickArrowButton(e.target);
      }
      if (e.target.classList[0] === 'gallery-indicator') {
        clickPagerItem(e.target);
      }
    });
    </code></pre>`,
    `<pre><code>
    const zoom = 2;
    const img = document.querySelector('.magnifier-image');

    img.parentNode.insertAdjacentHTML('afterbegin', '<div class="magnifier-glass"></div>');
    const glass = document.querySelector('.magnifier-glass');

    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    const width = glass.offsetWidth / 2;
    const height = glass.offsetHeight / 2;

    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);

    function moveMagnifier(event) {
      event.preventDefault();
      let {x, y} = getCursorPos(event);
      if (x > img.width - (width / zoom)) {
        x = img.width - (width / zoom);
      }
      if (x < width / zoom) {
        x = width / zoom;
      }
      if (y > img.height - (height / zoom)) {
        y = img.height - (height / zoom);
      }
      if (y < height / zoom) {
        y = height / zoom;
      }
      glass.style.left = (x - width) + "px";
      glass.style.top = (y - height) + "px";
      glass.style.backgroundPosition = "-" + ((x * zoom) - width) + "px -" + ((y * zoom) - height) + "px";
    }

    function getCursorPos(event) {
      let x = 0;
      let y = 0;
      event = event || window.event;
      const rect = img.getBoundingClientRect();
      x = event.pageX - rect.left;
      y = event.pageY - rect.top;
      x -= window.pageXOffset;
      y -= window.pageYOffset;
      return { x, y };
    }
    </code></pre>`,
    `<pre><code>
    window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame    ||
              function( callback ){
                window.setTimeout(callback, 1000 / 60);
              };
    })(); /

    const effect = 1.968;
    const newH = window.innerHeight / effect; //Радиус паралакса
    var parallaxes = [].slice.call(document.querySelectorAll('[data-parallax]'));

    parallaxes.forEach(function(el) {
      var clientOffsets = el.getBoundingClientRect();
      el.animationOffset = clientOffsets.top + window.scrollY;
      el.speed = el.dataset.speed;
      el.margin = el.dataset.marginBottom;
    });
    function move() {
      const scrollPoint = window.scrollY;

      parallaxes.forEach(function(el) {
        if (scrollPoint > (el.animationOffset - newH * 2) && scrollPoint < (el.animationOffset + newH)) {
          const point = (scrollPoint - (el.animationOffset - newH)) / el.speed - (el.margin || 0);
          const up = point + 'px';
          el.style.webkitTransform = 'translateY(' + up + ')';
          el.style.MozTransform = 'translateY(' + up + ')';
          el.style.msTransform = 'translateY(' + up + ')';
          el.style.OTransform = 'translateY(' + up + ')';
          el.style.transform = 'translateY(' + up + ')';
        }

      });

      window.requestAnimationFrame(move);
    }

    window.requestAnimationFrame(move);
    </code></pre>`,
    `<pre><code>
    const finishDate = new Date('May 6, 2021 11:00:00').getTime();
let current = new Date().getTime();
let distance = finishDate - current;

const element = document.querySelector('.date');

function updateTime() {
  let yearDesc = 'years';
  let daysDesc = 'days';
  let hoursDesc = 'hours';
  let minutesDesc = 'minutes';
  let secondsDesc = 'seconds';

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const days = Math.floor(distance / (1000 * 60 * 60 * 24) - (Math.floor((distance / (1000 * 60 * 60 * 24)) / 356) * 356));
  const years = Math.floor((distance / (1000 * 60 * 60 * 24)) / 356);

  if (years.toString().slice(-1) === '1') {
    yearDesc = 'year';
  }
  if (days.toString().slice(-1) === '1') {
    daysDesc = 'day';
  }
  if (hours.toString().slice(-1) === '1') {
    hoursDesc = 'hour';
  }
  if (minutes.toString().slice(-1) === '1') {
    minutesDesc = 'minute';
  }
  if (seconds.toString().slice(-1) === 1) {
    secondsDesc = 'second';
  }

  element.textContent = (years <= 0 ? '' : years + ' ' + yearDesc) + ' ' + (days <= 0 ? '' : days + ' ' + daysDesc) + ' ' + (hours <= 0 ? '' : hours + ' ' + hoursDesc) + ' ' + (minutes <= 0 ? '' : minutes + ' ' + minutesDesc) + ' ' + (seconds <= 0 ? '0 seconds' : seconds + ' ' + secondsDesc);
  }

  window.setInterval(() => {
    current = new Date().getTime();
    distance = finishDate - current;

    updateTime();
  }, 1000);

  updateTime();
    </code></pre>`,
    `<pre><code>
    const filters = [];
    const table = document.querySelector('.table-filtering');
    const filtersEl = table.querySelector('.table-filters');
    const input = document.querySelector('.filtering-input');
    const tableTr = Array.prototype.slice.call(table.children[0].children);
    tableTr.shift();
    const select = document.querySelector('.select-filtering');

    let isShown = false;
    let selected = 'Name';

    function showAll() {
      tableTr.forEach((el) => el.classList.remove('option--hidden'));
    }

    function filter() {
      const num = filters.indexOf(selected);
      tableTr.forEach((el) => {
        if (el.children[num].textContent.toLowerCase().indexOf(input.value.toLowerCase()) === -1) {
          el.classList.add('option--hidden');
        }
      });
    }

    Array.prototype.slice.call(filtersEl.children).forEach((el) => {
      filters.push(el.textContent.charAt(0).toUpperCase() + el.textContent.slice(1));
    });

    filters.forEach((el) => {
      select.insertAdjacentHTML('beforeend', "<p class=\"option\">" + el + "</p>");
    });


    document.addEventListener('click', (e) => {
      if (e.target.classList[0] === 'chooser') {
        if (isShown) {
          document.querySelector('.select-filtering').classList.add('option--hidden');
        } else {
          document.querySelector('.select-filtering').classList.remove('option--hidden');
        }
        isShown = !isShown;
      }
      if (e.target.classList[0] === 'option') {
        isShown = false;
        document.querySelector('.select-filtering').classList.add('option--hidden');
        selected = e.target.textContent;
        document.querySelector('.chooser').textContent = selected;
        showAll();
        if (input.value.trim().length !== 0) {
          filter();
        }
      }
    });

    input.addEventListener('input', (e) => {
      showAll();
      if (input.value.trim().length !== 0) {
        filter();
      }
    });
    </code></pre>`,
    `<pre><code>
    const symbols = ['!', '"', '#', '$', '%', '*', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>', '_'];
    const common = ["123456", "password", "12345678", "1234", "pussy", "12345", "dragon", "qwerty", "696969", "mustang", "letmein", "baseball", "master", "michael", "football", "shadow", "monkey", "abc123", "pass", "6969", "jordan", "harley", "ranger", "iwantu", "jennifer", "hunter", "2000", "test", "batman", "trustno1", "thomas", "tigger", "robert", "access", "love", "buster", "1234567", "soccer", "hockey", "killer", "george", "sexy", "andrew", "charlie", "superman", "asshole", "dallas", "jessica", "panties", "pepper", "1111", "austin", "william", "daniel", "golfer", "summer", "heather", "hammer", "yankees", "joshua", "maggie", "biteme", "enter", "ashley", "thunder", "cowboy", "silver", "richard", "orange", "merlin", "michelle", "corvette", "bigdog", "cheese", "matthew", "121212", "patrick", "martin", "freedom", "ginger", "blowjob", "nicole", "sparky", "yellow", "camaro", "secret", "dick", "falcon", "taylor", "111111", "131313", "123123", "bitch", "hello", "scooter", "please", "", "porsche", "guitar", "chelsea", "black", "diamond", "nascar", "jackson", "cameron", "654321", "computer", "amanda", "wizard", "xxxxxxxx", "money", "phoenix", "mickey", "bailey", "knight", "iceman", "tigers", "purple", "andrea", "horny", "dakota", "aaaaaa", "player", "sunshine", "morgan", "starwars", "boomer", "cowboys", "edward", "charles", "girls", "booboo", "coffee", "xxxxxx", "bulldog", "ncc1701", "rabbit", "peanut", "john", "johnny", "gandalf", "spanky", "winter", "brandy", "compaq", "carlos", "tennis", "james", "mike", "brandon", "fender", "anthony", "blowme", "ferrari", "cookie", "chicken", "maverick", "chicago", "joseph", "diablo", "sexsex", "hardcore", "666666", "willie", "welcome", "chris", "panther", "yamaha", "justin", "banana", "driver", "marine", "angels", "fishing", "david", "maddog", "hooters", "wilson", "butthead", "dennis", "captain", "bigdick", "chester", "smokey", "xavier", "steven", "viking", "snoopy", "blue", "eagles", "winner", "samantha", "house", "miller", "flower", "jack", "firebird", "butter", "united", "turtle", "steelers", "tiffany", "zxcvbn", "tomcat", "golf", "bond007", "bear", "tiger", "doctor", "gateway", "gators", "angel", "junior", "thx1138", "porno", "badboy", "debbie", "spider", "melissa", "booger", "1212", "flyers", "fish", "porn", "matrix", "teens", "scooby", "jason", "walter", "cumshot", "boston", "braves", "yankee", "lover", "barney", "victor", "tucker", "princess", "mercedes", "5150", "doggie", "zzzzzz", "gunner", "horney", "bubba", "2112", "fred", "johnson", "xxxxx", "tits", "member", "boobs", "donald", "bigdaddy", "bronco", "penis", "voyager", "rangers", "birdie", "trouble", "white", "topgun", "bigtits", "bitches", "green", "super", "qazwsx", "magic", "lakers", "rachel", "slayer", "scott", "2222", "asdf", "video", "london", "7777", "marlboro", "srinivas", "internet", "action", "carter", "jasper", "monster", "teresa", "jeremy", "11111111", "bill", "crystal", "peter", "pussies", "cock", "beer", "rocket", "theman", "oliver", "prince", "beach", "amateur", "7777777", "muffin", "redsox", "star", "testing", "shannon", "murphy", "frank", "hannah", "dave", "eagle1", "11111", "mother", "nathan", "raiders", "steve", "forever", "angela", "viper", "ou812", "jake", "lovers", "suckit", "gregory", "buddy", "whatever", "young", "nicholas", "lucky", "helpme", "jackie", "monica", "midnight", "college", "baby", "brian", "mark", "startrek", "sierra", "leather", "232323", "4444", "beavis", "bigcock", "happy", "sophie", "ladies", "naughty", "giants", "booty", "blonde", "golden", "0", "fire", "sandra", "pookie", "packers", "einstein", "dolphins", "0", "chevy", "winston", "warrior", "sammy", "slut", "8675309", "zxcvbnm", "nipples", "power", "victoria", "asdfgh", "vagina", "toyota", "travis", "hotdog", "paris", "rock", "xxxx", "extreme", "redskins", "erotic", "dirty", "ford", "freddy", "arsenal", "access14", "wolf", "nipple", "iloveyou", "alex", "florida", "eric", "legend", "movie", "success", "rosebud", "jaguar", "great", "cool", "cooper", "1313", "scorpio", "mountain", "madison", "987654", "brazil", "lauren", "japan", "naked", "squirt", "stars", "apple", "alexis", "aaaa", "bonnie", "peaches", "jasmine", "kevin", "matt", "qwertyui", "danielle", "beaver", "4321", "4128", "runner", "swimming", "dolphin", "gordon", "casper", "stupid", "shit", "saturn", "gemini", "apples", "august", "3333", "canada", "blazer", "cumming", "hunting", "kitty", "rainbow", "112233", "arthur", "cream", "calvin", "shaved", "surfer", "samson", "kelly", "paul", "mine", "king", "racing", "5555", "eagle", "hentai", "newyork", "little", "redwings", "smith", "sticky", "cocacola", "animal", "broncos", "private", "skippy", "marvin", "blondes", "enjoy", "girl", "apollo", "parker", "qwert", "time", "sydney", "women", "voodoo", "magnum", "juice", "abgrtyu", "777777", "dreams", "maxwell", "music", "rush2112", "russia", "scorpion", "rebecca", "tester", "mistress", "phantom", "billy", "6666", "albert"];

    const rootForm = document.querySelector('.password');
    const password = document.querySelector('.password-check');
    const verify = document.querySelector('.password-second');
    const button = document.querySelector('.password-submit');
    const tests = Array.prototype.slice.call(document.querySelectorAll('.toPass'));

    let testsData = [];

    var timeout = null;

    function reset() {
      tests.forEach((element) => {
        element.classList.remove('wrong');
        element.classList.remove('correct');
      });
    }

    function checkPattern() {
      return symbols.some((el) => {
        return password.value.indexOf(el) > -1;
      });
    }

    function checkPassword() {
      let newPass = password.value;
      symbols.forEach((el) => {
        newPass = newPass.replace(el, '');
      });
      newPass = newPass.replace(/[0-9]/g, '');
      return common.some((el) => {
        return el === newPass;
      })
    }


    function countUpperCase() {
      let count = 0;
      const patternCase = new RegExp(/[A-Z]/);
      for (let i = 0; i < password.value.length; i++) {
        if (patternCase.test(password.value.charAt(i))) {
          count++
        };
      }
      return count;
    }


    function makeTests() {
      const patternLetter = new RegExp(/[*a-zA-Z]/);
      const patternNumber = new RegExp(/[*0-9]/);
      testsData[0] = password.value.length >= 6 ? 'correct' : 'wrong';
      tests[0].classList.add(testsData[0]);
      testsData[1] = checkPattern() ? 'correct' : 'wrong';
      tests[1].classList.add(testsData[1]);
      testsData[2] = (patternLetter.test(password.value)) && (patternNumber.test(password.value)) ? 'correct' : 'wrong';
      tests[2].classList.add(testsData[2]);
      testsData[3] = checkPassword() ? 'wrong' : 'correct';
      tests[3].classList.add(testsData[3]);
      testsData[4] = countUpperCase() >= 2 ? 'correct' : 'wrong';
      tests[4].classList.add(testsData[4]);
      if (tests[5].children[1].value.length !== 0) {
        testsData[5] = tests[5].children[1].value === password.value ? 'correct' : 'wrong';
        tests[5].classList.add(testsData[5]);
      }
      if (testsData.every((el) => el === "correct")) {
        button.disabled = false;
      } else {
        button.disabled = true;
      }
    }

    tests.push(verify.parentNode);

    tests.forEach((el) => {
      testsData.push(el.classList[1]);
    });


    reset();

    rootForm.addEventListener('input', () => {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        reset();
        if (password.value.length !== 0) {
          makeTests();
        }
      }, 600);
    });


    rootForm.addEventListener('keydown', (e) => {
      if (e.keyCode === 32) {
        e.preventDefault();
      }
    });
    </code></pre>`,
    `<pre><code>
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

        function rotateCarousel(rotations) {
          if (data.currentlyMoving === false) {
            data.currentCenterItem.classList.remove(options.activeClassName);
            data.currentlyMoving = true;
            data.itemsAnimating = 0;
            data.carouselRotationsLeft ++;
            if (options.quickerForFurther === true) {
              if (rotations > 1) {
                data.currentSpeed = options.speed;
              }
              data.currentSpeed = (data.currentSpeed < 100) ? 100 : data.currentSpeed;
            }
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
          rotateCarousel(1);
        }
        this.reload = function (newOptions) {
          const preset = {
            startingItem: 1,
            separation: 175,
            separationMultiplier: 0.6,
            horizonOffset: 0,
            horizonOffsetMultiplier: 1,
            sizeMultiplier: 0.7,
            opacityMultiplier: 1,
            horizon: 0,
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
            rotateCarousel(1);
          }
          if (e.target.classList[1] === 'perspective-right') {
            data.currentDirection = 'forward';
            rotateCarousel(1);
          }
          if (e.target.classList[1] === 'perspective-switch') {
            if (options.orientation === 'vertical') {
              options.orientation = 'horizontal';
            } else {
              options.orientation = 'vertical';
            }
            rotateCarousel(1);
          }
        });
      }
    };

    window.onload = () => {
      new PerspectiveCarousel();
    }
    </code></pre>`,
    `<pre><code>
    const x = document.getElementsByClassName("custom__select");

    for (let i = 0; i < x.length; i++) {
      const select = x[i].querySelector('select');
      x[i].insertAdjacentHTML('beforeend', "\n    <div class=\"select-selected\">\n      " + select.options[select.selectedIndex].innerHTML + "\n    </div>\n  ");
      const a = x[i].lastElementChild;
      x[i].insertAdjacentHTML('beforeend', "\n    <div class=\"select-items select-hide\"></div>\n  ");
      var b = x[i].lastElementChild;
      for (let j = 1; j < select.length; j++) {
        b.insertAdjacentHTML('beforeend', "\n    <div>" + select.options[j].innerHTML + "</div>\n    ");
        let c = b.lastElementChild;
        c.addEventListener("click", function (event) {
          const selectTest = event.target.parentNode.parentNode.querySelectorAll("select")[0];
          const toTest = event.target.parentNode.previousElementSibling;
          for (let i = 0; i < selectTest.length; i++) {
            if (selectTest.options[i].innerHTML == event.target.innerHTML) {
              selectTest.selectedIndex = i;
              toTest.innerHTML = event.target.innerHTML;
              const options = Array.from(event.target.parentNode.querySelectorAll(".same-as-selected"));
              options.forEach((el) => el.removeAttribute("class"));
              event.target.classList.add("same-as-selected");
              break;
            }
          }
        });
      }
      a.addEventListener("click", function (event) {
        event.stopPropagation();
        closeAllSelect(event.target);
        event.target.nextElementSibling.classList.toggle("select-hide");
        event.target.classList.toggle("select-arrow-active");
      });
    }

    function closeAllSelect(el) {
      var x, y, i, arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      for (i = 0; i < y.length; i++) {
        if (el == y[i]) {
          arrNo.push(i)
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }

    window.addEventListener('scroll', () => {
      closeAllSelect();
    });

    document.addEventListener('click', () => {
      closeAllSelect();
    });
    </code></pre>`
];


/*
    Order of initializations.
    * Imports
    * Variables
        * Constant Arrays
        * Arrays
            ! Only active operations.
            ? If about two variables, use two lets.
        * Let and Constants
        * Var
            ? Can be used to work more effectively with timeout loops
            ! Use must be really TASK SPECIFIC
        * Presets
            ? Use is needed only if two classes are connected
    * Functions
        * IIFES
            ! Only inner module pattern or timed closure
        * Classes
        * Function Expressions
            ? Use with closures, IIFES connections and event formats
            ? Const only declaration
        * Function Declarations
    * Standalone code
        ? Timeouts and intervals
        ? Onloads
            ! Service Worker is IIFE
        ? Navigator
        ? Initiations
            ! Observers are not included
            ? Only server side information and server context
        * Promises
    * Event listeners
        * Click listener
        * Scroll, wheel, mousemove
        * Task Aligned
            ? Other event listeners
        * Custom
            ! Event listener MUST be complex and passive
        * MutationObservers
            ! Use only when information is changed.
        * Passive event listeners
    * Shared Array Buffer
        ? Connect code parts to main bundle
        ! If can be replaced easily, do not use SAB
    * Other code
      ? Any other code
    * Debugger
    * Export
        ! Only one export per file
*/

document.addEventListener('click', event => {
  if (event.target.parentNode.parentNode.classList[0] === 'block__btn') {
    let nodeList = Array.from(document.querySelector(`.${event.target.parentNode.parentNode.classList[1]}`).parentNode.childNodes);

    const markEl = nodeList[nodeList.length - 2];
    const markUp = markups[`.${event.target.parentNode.parentNode.classList[1]}`.replace(/\D/g, '')];
    const btn = document.querySelector(`.${event.target.parentNode.parentNode.classList[1]}`).parentNode.childNodes[3];

    if (btn.classList[2] === 'active') {
      btn.classList.remove('active');
      while (markEl.firstChild) {
        markEl.removeChild(markEl.firstChild);
      }
    } else {
      btn.classList.add('active');
      markEl.insertAdjacentHTML('afterbegin', markUp);
    }

    updateView();

  }
});

/*
updateView = () => {
  Array.from(document.querySelectorAll('.markup')).forEach(el => {
    el.style.boxShadow = `inset 0 0 100px #797979`;
  });
}*/

updateView();
