//Created by Yury Volkovskiy
const data = {
  RANGES: {
    TIME_RANGE: {
        WRAP: 'videoset__time-range',
        TRACK: 'time-range__track',
        THUMB: 'time-range__thumb'
    },
    VOLUME_RANGE: {
      WRAP: 'videoset__volume-range',
      TRACK: 'volume-range__track',
      THUMB: 'volume-range__thumb'
    }
  },
  BUTTONS: {
    PLAY: 'videoset__button--play',
    STOP: 'videoset__button--stop',
    RESTART: 'videoset__button--reset',
    MUTE: 'videoset__button--mute'
  },
  VIDEO: 'videoset__video',
  VIDEO_CURRENT_TIME: 'videoset__current-time'
};

let videoPlays, isMute = true, prevVideoVolume;
var styledRanges = document.getElementsByClassName(data.RANGES.TIME_RANGE.WRAP);
var rangeVideo = styledRanges[0].childNodes;

var audioRanges = document.getElementsByClassName(data.RANGES.VOLUME_RANGE.WRAP);
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
  const video = document.querySelector(`.${data.VIDEO}`);

  video.currentTime = time;
  updateVideoTime();
}

function getVideoDuration() {
  const video = document.querySelector(`.${data.VIDEO}`);

  return video.duration;
}

function pauseVideo() {
  videoPlays = false;
  document.querySelector(`.${data.VIDEO}`).pause();
}

function startVideo() {
  videoPlays = false;
  document.querySelector(`.${data.VIDEO}`).play();
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
        if (child.className === data.RANGES.VOLUME_RANGE.THUMB) {
          var thumbRange = child;
        } else if (child.className === data.RANGES.VOLUME_RANGE.TRACK) {
          var trackRange = child;
        }
      } else {
        if (child.className === data.RANGES.TIME_RANGE.THUMB) {
          var thumbRange = child;
        } else if (child.className === data.RANGES.TIME_RANGE.TRACK) {
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
  }
}

document.querySelector(`.${data.VIDEO}`).onended = function (e) {
  videoPlays = false;
};

function changeVolume() {
  let vol = rangeAudio[1].value / 100;

  if (isMute) {
    document.querySelector(`.${data.VIDEO}`).volume = vol;
  }
}

document.querySelector(`.${data.VIDEO}`).onplaying = function () {
  videoPlays = true;

  setInterval(() => {
    if (videoPlays) {
      updateVideoTime();
    }
  }, 50);
}

function switchMute() {
  const video = document.querySelector(`.${data.VIDEO}`);

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
  const video = document.querySelector(`.${data.VIDEO}`);
  document.querySelector(`.${data.VIDEO_CURRENT_TIME}`).textContent = toMinuteSecond(Math.floor(video.duration - video.currentTime));

  equalizeRange(video.currentTime, video.duration, rangeVideo);
}

function resetVideoTime() {
  const video = document.querySelector(`.${data.VIDEO}`);

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

window.addEventListener("load", () => {
  updateVideoTime();
});

document.addEventListener('click', function (event) {
  console.log(event.target.parentNode);
  if (event.target.classList.contains(data.BUTTONS.PLAY) ||
      event.target.parentNode.classList.contains(data.BUTTONS.PLAY)) {
    if (!videoPlays) {
      startVideo()
    }
  }

  if (event.target.children[0]) {
    if (event.target.children[0].classList[0] === data.BUTTONS.PLAY) {
      if (!videoPlays) {
        startVideo()
      }
    }
    if (event.target.children[0].classList[0] === data.BUTTONS.STOP) {
      pauseVideo();
    }
    if (event.target.children[0].classList[0] === data.BUTTONS.RESTART) {
      resetVideoTime();
    }
    if (event.target.children[0].classList[0] === data.BUTTONS.MUTE) {
      switchMute();
    }
  }
  if (event.target.classList.contains(data.BUTTONS.STOP) ||
  event.target.parentNode.classList.contains(data.BUTTONS.STOP)) {
    pauseVideo();
  }
  if (event.target.classList.contains(data.BUTTONS.RESTART) ||
  event.target.parentNode.classList.contains(data.BUTTONS.RESTART)) {
    resetVideoTime();
  }
  if (event.target.classList.contains(data.BUTTONS.MUTE) ||
  event.target.parentNode.classList.contains(data.BUTTONS.MUTE)) {
    switchMute();
  }
});
