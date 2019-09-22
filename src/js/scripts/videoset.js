let videoPlays, isMute = true, prevVideoVolume;
var styledRanges = document.getElementsByClassName('styled_range');
var rangeVideo = styledRanges[0].childNodes;

var audioRanges = document.getElementsByClassName('ver_range');
var rangeAudio = audioRanges[0].childNodes;

function toMinuteSecond(number) {
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

    thumbRange.addEventListener('input', () => {
      trackRange.value = thumbRange.value;
      if (!isTime) {
        setVideoTime(trackRange.value * getVideoDuration() / 100);
      }
    });

    if (navigator.userAgent.indexOf("MSIE ") > -1 || navigator.userAgent.indexOf("Trident/") > -1) {
      thumbRange.addEventListener('change', () => {
        trackRange.value = thumbRange.value;
        if (!isTime) {
          setVideoTime(trackRange.value * getVideoDuration() / 100);
        }
      });
    }
  }
}

document.querySelector('.video__presentation').onended = function (e) {
  videoPlays = false;
};

function changeVolume() {
  let vol = rangeAudio[1].value / 100;

  if (isMute) {
    document.querySelector('.video__presentation').volume = vol;
  }
}

document.querySelector('.video__presentation').onplaying = function () {
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
  document.querySelector('.video__time').textContent = toMinuteSecond(Math.floor(video.duration - video.currentTime));

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
      startVideo()
    }
  }
  if (event.target.children[0]) {
    if ('.' + event.target.children[0].classList[0] === '.button-play') {
      if (!videoPlays) {
        startVideo()
      }
    }
    if ('.' + event.target.children[0].classList[0] === '.button-stop') {
      pauseVideo();
    }
    if ('.' + event.target.children[0].classList[0] === '.button-reset') {
      resetVideoTime();
    }
    if ('.' + event.target.children[0].classList[0] === '.button-mute') {
      switchMute();
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
});
