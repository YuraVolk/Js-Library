import { LitElement, css, html } from "lit";
import { query, queryAssignedElements, state } from "lit/decorators.js";
import { RangeInputComponent } from "../range-input/rangeInput";
import playButton from "src/../assets/img/play.png";
import pauseButton from "src/../assets/img/pause.png";
import resetButton from "src/../assets/img/reset.png";
import muteButton from "src/../assets/img/volume.png";
import { assertDevOnly } from "shared/utils/utils";
import { styleMap } from "lit/directives/style-map.js";
import { toMinutesSeconds } from "shared/component/customVideo";

window.customElements.define("range-input-component", RangeInputComponent);

export interface VideoControlData {
	video: HTMLVideoElement;
	timeRange: RangeInputComponent;
	volumeRange: RangeInputComponent;
}

export class CustomVideoComponent extends LitElement {
	static styles = css`
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

		range-input-component {
			display: block;
		}

		#time-range-input {
			margin-left: 15px;
			color: #000;
		}

		#volume-range-input {
			width: 33px;
		}
	`;

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

	onVideoEnded() {
		this._isVideoPlaying = false;
	}

	onVideoPlaying({ timeRange, video }: VideoControlData = this.getWorkingData()) {
		if (this._isVideoPlaying) return;
		this._isVideoPlaying = true;
		this.videoCheckInterval ??= window.setInterval(() => {
			timeRange.label = toMinutesSeconds(video.currentTime);
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
		video.play().catch(e => { console.debug(e); });
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
		data.timeRange.label = toMinutesSeconds(0);
		data.video.currentTime = 0;
		this.stopVideo(data);
	}

	setVideoSecond(seconds: number) {
		const { video, timeRange } = this.getWorkingData();
		timeRange._value = seconds;
		timeRange.label = toMinutesSeconds(seconds);
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

			video.addEventListener("ended", () => { this.onVideoEnded(); });
			video.addEventListener("playing", () => { this.onVideoPlaying({ video, volumeRange, timeRange }); });
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
				<range-input-component id="volume-range-input" step="0.01" defaultValue="1" maximum="1" hideValue></range-input-component>
				<range-input-component id="time-range-input" step="0.01" label="00:00" hideValue allSameLine></range-input-component>
				<ul class="controls-buttons">
					<li
						class="controls-button"
						@click="${() => { this.startVideo(); }}"
						style=${styleMap({ display: this._isVideoPlaying ? "none" : "block" })}
					>
						<button class="controls-button__clickable-button">
							<img alt="Play" src="${playButton}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${() => { this.stopVideo(); }}"
						style=${styleMap({ display: this._isVideoPlaying ? "block" : "none" })}
					>
						<button class="controls-button__clickable-button">
							<img alt="Pause" src="${pauseButton}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${() => { this.resetVideo(); }}">
						<button class="controls-button__clickable-button">
							<img alt="Reset" src="${resetButton}" class="controls-button__image" />
						</button>
					</li>
					<li class="controls-button" @click="${() => { this.toggleMute(); }}">
						<button class="controls-button__clickable-button">
							<img alt="Mute" src="${muteButton}" class="controls-button__image" />
						</button>
					</li>
				</ul>
			</div>
		</div>`;
	}
}
