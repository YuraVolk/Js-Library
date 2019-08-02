//Library currently has 9 scripts finished
// 72 Scripts total written

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
    `
];

document.addEventListener('click', event => {
    if (event.target.parentNode.classList[0] === 'block__btn') {
        let nodeList = Array.from(document.querySelector(`.${event.target.parentNode.classList[1]}`).parentNode.childNodes);

        const markEl = nodeList[nodeList.length - 2];
        const markUp = markups[`.${event.target.parentNode.classList[1]}`.slice(-1)];
        const btn = document.querySelector(`.${event.target.parentNode.classList[1]}`).parentNode.childNodes[3];

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


updateView = () => {
    Array.from(document.querySelectorAll('.markup')).forEach(el => {
        el.style.boxShadow = `inset 0 0 100px #797979`;
    });
}

updateView();