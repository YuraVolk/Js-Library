import { LitElement, css, html } from "lit";
import { customElement, query, queryAssignedElements, state } from "lit/decorators.js";
import { RangeInputComponent } from "../range-input/rangeInput";
import playButton from "../../../assets/img/play.png";
import pauseButton from "../../../assets/img/pause.png";
import resetButton from "../../../assets/img/reset.png";
import muteButton from "../../../assets/img/volume.png";
import { assertDevOnly } from "../../utils";

declare global {
	interface HTMLElementTagNameMap {
		"custom-video-component": CustomVideoComponent;
	}
}

export interface VideoControlData {
	video: HTMLVideoElement;
	timeRange: RangeInputComponent;
	volumeRange: RangeInputComponent;
}

@customElement("custom-video-component")
export class CustomVideoComponent extends LitElement {
	@state()
	_isVideoPlaying = false;
	@state()
	_isMute = false;
	@state()
	_previousVideoVolume?: number;

	@queryAssignedElements()
	_videoElement!: HTMLElement[];
	@query("#volume-range-input")
	_volumeRangeInput!: RangeInputComponent;
	@query("#time-range-input")
	_timeRangeInput!: RangeInputComponent;

	private videoCheckInterval?: number;

	toMinutesSeconds(time: number) {
		const hours = Math.floor(time / 3600),
			minutes = Math.floor((time - hours * 3600) / 60),
			seconds = Math.floor(time - hours * 3600 - minutes * 60);
		return `Time: ${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
	}

	onVideoEnded() {
		this._isVideoPlaying = false;
	}

	onVideoPlaying({ timeRange, video }: VideoControlData = this.getWorkingData()) {
		if (this._isVideoPlaying) return;
		this._isVideoPlaying = true;
		this.videoCheckInterval ??= window.setInterval(() => {
			timeRange.label = this.toMinutesSeconds(video.currentTime);
			timeRange.changeValue(video.currentTime);
		}, 50);
	}

	resetVideoTime({ timeRange, video }: VideoControlData = this.getWorkingData()) {
		if (!this._isVideoPlaying) return;
		this._isVideoPlaying = false;
		video.currentTime = 0;
		video.pause();
		timeRange._value = 0;
	}

	startVideo({ video }: VideoControlData = this.getWorkingData()) {
		if (this._isVideoPlaying) return;
		video.play();
	}

	stopVideo({ video }: VideoControlData = this.getWorkingData()) {
		if (!this._isVideoPlaying) return;
		video.pause();
		window.clearInterval(this.videoCheckInterval);
		this._isVideoPlaying = false;
		this.videoCheckInterval = undefined;
	}

	resetVideo(data: VideoControlData = this.getWorkingData()) {
		data.timeRange.changeValue(0);
		data.timeRange.label = this.toMinutesSeconds(0);
		data.video.currentTime = 0;
		this.stopVideo(data);
	}

	setVideoSecond(seconds: number) {
		const { video, timeRange } = this.getWorkingData();
		timeRange._value = seconds;
		timeRange.label = this.toMinutesSeconds(seconds);
		video.currentTime = seconds;
	}

	toggleMute({ video }: VideoControlData = this.getWorkingData()) {
		if (this._isMute && this._previousVideoVolume !== undefined) {
			this._isMute = false;
			video.volume = this._previousVideoVolume;
		} else {
			this._isMute = true;
			this._previousVideoVolume = video.volume;
			video.volume = 0;
		}

        this._volumeRangeInput.changeValue(video.volume);
	}

	protected getWorkingData(): VideoControlData {
		const [video] = this._videoElement;
		assertDevOnly(video instanceof HTMLVideoElement);
		const volumeRange = this._volumeRangeInput;
		const timeRange = this._timeRangeInput;
		return { video, volumeRange, timeRange };
	}

	protected firstUpdated() {
		const { video, volumeRange, timeRange } = this.getWorkingData();
		video.load();
		video.onloadeddata = () => {
			video.removeAttribute("controls");
			timeRange.maximum = video.duration;

			video.addEventListener("ended", () => this.onVideoEnded());
			video.addEventListener("playing", () => this.onVideoPlaying({ video, volumeRange, timeRange }));
			timeRange._onUpdateListener = (seconds) => {
				this.setVideoSecond(seconds);
			};
            volumeRange._onUpdateListener = (volume) => {
                volumeRange.changeValue(volume);
                video.volume = volume;
            };
		};
	}

	disconnectedCallback(): void {
		window.clearInterval(this.videoCheckInterval);
		super.disconnectedCallback();
	}

	render() {
		return html`<div class="wrap">
			<div class="video">
				<slot></slot>
			</div>
			<div class="controls">
				<range-input-component id="time-range-input" step="0.01" label="Time: 00:00" hideValue></range-input-component>
				<range-input-component
					id="volume-range-input"
					step="0.01"
					defaultValue="1"
					maximum="1"
					label="Volume:"
					hideValue
				></range-input-component>
				<ul class="controls-buttons">
					<li class="controls-button" @click="${() => this.startVideo()}">
						<button class="controls-button__clickable-button">
							<img alt="Play" src="${playButton}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${() => this.stopVideo()}">
						<button class="controls-button__clickable-button">
							<img alt="Pause" src="${pauseButton}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${() => this.resetVideo()}">
						<button class="controls-button__clickable-button">
							<img alt="Reset" src="${resetButton}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${() => this.toggleMute()}">
						<button class="controls-button__clickable-button">
							<img alt="Mute" src="${muteButton}" class="controls-button__image" />
						</button>
					</li>
				</ul>
			</div>
		</div>`;
	}
}
