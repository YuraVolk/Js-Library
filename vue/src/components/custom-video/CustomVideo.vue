<template>
	<div class="wrap">
		<div class="video">
			<video ref="video" v-bind="videoPassedProps" @timeupdate="updateTrackInfo">
				<slot></slot>
			</video>
		</div>
		<div class="controls">
			<range-input-component
				id="volume-range-input"
				:step="0.01"
				:maximum="1"
				hide-value
				@change="setVolume"
                :default-value="1"
				:value="rangeInputSettings.volume"
			></range-input-component>
			<range-input-component
				id="time-range-input"
				:step="0.01"
				:maximum="rangeInputSettings.duration"
				:label="rangeInputSettings.currentTimeLabel"
				hide-value
				all-same-line
				@change="setVideoSecond"
				:value="rangeInputSettings.current"
			></range-input-component>
			<ul class="controls-buttons">
				<li class="controls-button" :style="{ display: isVideoPlaying ? 'none' : 'block' }" @click="startVideo">
					<button class="controls-button__clickable-button">
						<img alt="Play" :src="playButton" class="controls-button__image" />
					</button>
				</li>
				<li class="controls-button" :style="{ display: isVideoPlaying ? 'block' : 'none' }" @click="stopVideo">
					<button class="controls-button__clickable-button">
						<img alt="Pause" :src="pauseButton" class="controls-button__image" />
					</button>
				</li>
				<li class="controls-button" @click="resetVideo">
					<button class="controls-button__clickable-button">
						<img alt="Reset" :src="resetButton" class="controls-button__image" />
					</button>
				</li>
				<li class="controls-button" @click="toggleMute">
					<button class="controls-button__clickable-button">
						<img alt="Mute" :src="muteButton" class="controls-button__image" />
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, reactive } from "vue";
import playButton from "../../../../assets/img/play.png";
import pauseButton from "../../../../assets/img/pause.png";
import resetButton from "../../../../assets/img/reset.png";
import muteButton from "../../../../assets/img/volume.png";
import RangeInputComponent from "../range-input/RangeInput.vue";
import { assertNonUndefined } from "shared/utils/utils";
import { VideoConfigurationProps, toMinutesSeconds } from "shared/component/customVideo";

const props = defineProps<VideoConfigurationProps>();

const video = ref<HTMLVideoElement | null>(null);
const isMuted = ref(props.muted);
const previousVideoVolume = ref<number | undefined>();
const isVideoPlaying = ref(props.autoplay ?? false);
const currentTimeInSeconds = ref(0);

const rangeInputSettings = reactive({
	duration: video.value?.duration,
	current: video.value?.currentTime,
	volume: video.value?.volume ?? 1,
	currentTimeLabel: toMinutesSeconds(video.value?.currentTime ?? 0)
});
const videoPassedProps = computed(() => {
	const configuration: Partial<VideoConfigurationProps> = { ...props };
	delete configuration.muted;
	delete configuration.autoplay;
	return configuration;
});

const updateTrackInfo = () => {
    if (!video.value) return;
    rangeInputSettings.currentTimeLabel = toMinutesSeconds(video.value.currentTime);
    rangeInputSettings.current = video.value.currentTime;
};

const startVideo = () => {
    video.value?.play()?.catch(e => { console.debug(e); });
    isVideoPlaying.value = true; 
};

const stopVideo = () => {
    video.value?.pause();
    isVideoPlaying.value = false; 
};

const resetVideo = () => {
    if (video.value) video.value.currentTime = 0;
    stopVideo();
};

const toggleMute = () => {
    if (!video.value) return;
    if (isMuted.value && previousVideoVolume.value !== undefined) {
        isMuted.value = false;
        video.value.volume = previousVideoVolume.value;
    } else {
        isMuted.value = true;
        previousVideoVolume.value = video.value.volume;
        video.value.volume = 0;
    }

    rangeInputSettings.volume = video.value.volume;
};

const setVideoSecond = (seconds: number) => {
	if (!video.value) return;
    video.value.currentTime = seconds;
    currentTimeInSeconds.value = video.value.currentTime;
    startVideo();
};

const setVolume = (volume: number) => {
    if (video.value) video.value.volume = volume;
    rangeInputSettings.volume = volume;
};

onMounted(() => {
	if (!video.value) return;
	video.value.load();
	video.value.onloadeddata = () => {
		assertNonUndefined(video.value);

		if (props.muted) {
			video.value.volume = 0;
            isMuted.value = true;
            previousVideoVolume.value = 1;
			if (props.autoplay) startVideo();
		}

        rangeInputSettings.duration = video.value.duration;
	};
});
</script>

<style scoped>
.wrap {
	position: relative;
	width: 100%;
	height: 100%;
}

.video {
	width: inherit;
	height: inherit;
}

.controls {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
	background-color: #e2e2e2;
	display: flex;
	flex-direction: row-reverse;
	justify-content: space-around;
	height: 12.5%;
	padding: 4px;
	box-sizing: border-box;
}

.controls-buttons {
	display: flex;
	list-style-type: none;
	padding: 0;
	margin: 0;
	gap: 5%;
}

.control-button {
	display: block;
	height: 100%;
	cursor: pointer;
}

.controls-button__clickable-button {
	width: inherit;
	height: 100%;
	padding: 0;
	margin: 0;
	border: none;
	background: none;
	cursor: pointer;
}

.controls-button__image {
	width: inherit;
	height: inherit;
	cursor: pointer;
}

#time-range-input {
	margin-left: 15px;
	color: #000;
}

#volume-range-input {
	width: 33px;
}
</style>
