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

document.querySelector(`.${data.VIDEO}`).addEventListener('loadedmetadata', function () {

  let videoPlays, isMute = true, prevVideoVolume;
  var styledRanges = document.getElementsByClassName(data.RANGES.TIME_RANGE.WRAP);
  var rangeVideo = styledRanges[0].childNodes;

  var audioRanges = document.getElementsByClassName(data.RANGES.VOLUME_RANGE.WRAP);
  var rangeAudio = audioRanges[0].childNodes;

  /**
   * Summary. Convert given time to HH/MM/SS
   *
   * @param {*} number Time left before end of video
   */
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

  /**
   * Summary. Set current time of video
   *
   * @param {Number} time New time of video
   */
  function setVideoTime(time) {
    const video = document.querySelector(`.${data.VIDEO}`);

    video.currentTime = time;
    updateVideoTime();
  }

  /**
   * Summary. Return video duration
   *
   * @return {Number} Duration of video
   */
  function getVideoDuration() {
    const video = document.querySelector(`.${data.VIDEO}`);
    console.log(video)

    return video.duration;
  }

  /**
   * Summary. Pause video.
   */
  function pauseVideo() {
    videoPlays = false;
    document.querySelector(`.${data.VIDEO}`).pause();
  }

  /**
   * Summary. Start video / unpause video.
   */
  function startVideo() {
    videoPlays = false;
    document.querySelector(`.${data.VIDEO}`).play();
  }

  /**
   * Summary. Set value of ranges so they match current video time.
   *
   * @param {Number} videoTime     Current video time
   * @param {Number} videoDuration Duration of video
   * @param {Node}   range         Range with current video time
   */
  function equalizeRange(videoTime, videoDuration, range) {
    range[3].value = videoTime * 100 / videoDuration;
    range[1].value = videoTime * 100 / videoDuration;
  }

  /**
   * Summary. Make ranges stylable and change video settings.
   * Description. Add progress bars to ranges,
   *              take the position of range,
   *              modify video time and volume.
   *
   * @listens input
   *
   * @param {Array}   audioRanges Ranges to control video
   * @param {Boolean} isTime      Is current range responds for time or not
   */
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

  /**
   * Summary. Identify that video ended.
   * @fires onended
   */
  document.querySelector(`.${data.VIDEO}`).onended = function (e) {
    videoPlays = false;
  };

  /**
   * Summary. Set volume of video
   */
  function changeVolume() {
    let vol = rangeAudio[1].value / 100;

    if (isMute) {
      document.querySelector(`.${data.VIDEO}`).volume = vol;
    }
  }

  /**
   * Summary. Identify that video started.
   * @fires onplaying
   */
  document.querySelector(`.${data.VIDEO}`).onplaying = function () {
    videoPlays = true;
    setInterval(() => {
      if (videoPlays) {
        updateVideoTime();
      }
    }, 50);
  }

  /**
   * Summary. Mute or unmute video.
   */
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

  /**
   * Summary. Set current video time.
   * @see toMinuteSecond
   * @see equalizeRange
   */
  function updateVideoTime() {
    const video = document.querySelector(`.${data.VIDEO}`);
    document.querySelector(`.${data.VIDEO_CURRENT_TIME}`).textContent = toMinuteSecond(Math.floor(video.duration - video.currentTime));

    equalizeRange(video.currentTime, video.duration, rangeVideo);
  }

  /**
   * Summary. Reset video time to zero.
   */
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

  /**
   * Summary. Add event listeners for controls of video.
   * @listens click
   */
  document.addEventListener('click', function (event) {
    if (event.target.classList.length > 0) {
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
    }
  });
});
