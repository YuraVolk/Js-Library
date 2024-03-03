import { LitElement, css, html } from "lit";
import { property, queryAssignedElements, state } from "lit/decorators.js";
import { RangeInputComponent } from "../range-input/rangeInput";
import playButton from "src/../assets/img/play.png";
import pauseButton from "src/../assets/img/pause.png";
import resetButton from "src/../assets/img/reset.png";
import muteButton from "src/../assets/img/volume.png";
import { assertNonUndefined } from "shared/utils/utils";
import { styleMap } from "lit/directives/style-map.js";
import { VideoConfigurationProps, toMinutesSeconds } from "shared/component/customVideo";
import { createRef, ref } from "lit/directives/ref.js";
import { ifDefined } from "lit/directives/if-defined.js";
import { RangeInputChangeEvent } from "../range-input/events";

window.customElements.define("range-input-component", RangeInputComponent);

export class CustomVideoComponent extends LitElement implements VideoConfigurationProps {
	static styles = css`
		:host {
			display: block;
			position: relative;
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

	@queryAssignedElements({ selector: "source" })
	_sourceElements!: HTMLSourceElement[];

	@property({ type: Boolean })
	autoplay = false;
	@property({ type: Boolean })
	muted = false;
	@property({ type: String })
	crossorigin?: "anonymous" | "use-credentials";
	@property({ type: String })
	poster?: string;
	@property({ type: String })
	preload?: "none" | "metadata" | "auto";
	@property({ type: String })
	src?: string;
	@property({ type: Number })
	height?: number;
	@property({ type: Number })
	width?: number;

	@state()
	_isVideoPlaying = false;
	@state()
	_isMuted = false;
	@state()
	_videoDuration?: number;
	@state()
	_currentTimeLabel = toMinutesSeconds(0);
	@state()
	_current?: number;
	@state()
	_volume = 1;

	private _previousVideoVolume?: number;
	private _videoRef = createRef<HTMLVideoElement>();

	protected updateTrackInfo() {
		assertNonUndefined(this._videoRef.value);
		this._currentTimeLabel = toMinutesSeconds(this._videoRef.value.currentTime);
		this._current = this._videoRef.value.currentTime;
	}

	startVideo() {
		this._videoRef.value
			?.play()
			?.then(() => {
				this._isVideoPlaying = true;
			})
			?.catch((e) => {
				console.debug(e);
			});
	}

	stopVideo() {
		this._videoRef.value?.pause();
		this._isVideoPlaying = false;
	}

	resetVideo() {
		if (this._videoRef.value) this._videoRef.value.currentTime = 0;
		this.stopVideo();
	}

	toggleMute() {
		assertNonUndefined(this._videoRef.value);
		if (this._isMuted && this._previousVideoVolume !== undefined) {
			this._isMuted = false;
			this._videoRef.value.volume = this._previousVideoVolume;
		} else {
			this._isMuted = true;
			this._previousVideoVolume = this._videoRef.value.volume;
			this._videoRef.value.volume = 0;
		}

		this._volume = this._videoRef.value.volume;
	}

	setVideoSecond(seconds: number) {
		assertNonUndefined(this._videoRef.value);
		this._videoRef.value.currentTime = seconds;
	}

	setVolume(volume: number) {
		if (this._videoRef.value) this._videoRef.value.volume = volume;
		this._volume = volume;
	}

	protected firstUpdated(): void {
		assertNonUndefined(this._videoRef.value);
		this._videoRef.value.append(...this._sourceElements);
		this._videoRef.value.load();
		this._videoRef.value.onloadeddata = () => {
			assertNonUndefined(this._videoRef.value);
			if (this.muted) {
				this._videoRef.value.volume = 0;
				this._isMuted = true;
				this._previousVideoVolume = 1;
				if (this.autoplay) this.startVideo();
			}

			this._videoDuration = this._videoRef.value.duration;
		};
	}

	render() {
		return html`<div class="video">
				<video
					${ref(this._videoRef)}
					?muted=${this.muted}
					width=${ifDefined(this.width)}
					height=${ifDefined(this.height)}
					poster=${ifDefined(this.poster)}
					preload=${ifDefined(this.preload)}
					src=${ifDefined(this.src)}
					crossorigin=${ifDefined(this.crossorigin)}
					@timeupdate=${() => {
						this.updateTrackInfo();
					}}
					@ended=${() => {
						this.stopVideo();
					}}
				>
					<slot></slot>
				</video>
			</div>
			<div class="controls">
				<range-input-component
					id="volume-range-input"
					step="0.01"
					defaultValue="1"
					.dynamicValue=${this._volume}
					maximum="1"
					hideValue
					@change=${(event: RangeInputChangeEvent) => {
						this.setVolume(event.value);
					}}
				></range-input-component>
				<range-input-component
					id="time-range-input"
					step="0.01"
					label=${this._currentTimeLabel}
					maximum=${ifDefined(this._videoDuration)}
					.dynamicValue=${this._current ?? 0}
					hideValue
					allSameLine
					@change=${(event: RangeInputChangeEvent) => {
						this.setVideoSecond(event.value);
					}}
				></range-input-component>
				<ul class="controls-buttons">
					<li
						class="controls-button"
						@click="${() => {
							this.startVideo();
						}}"
						style=${styleMap({ display: this._isVideoPlaying ? "none" : "block" })}
					>
						<button class="controls-button__clickable-button">
							<img alt="Play" src="${playButton}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${() => {
							this.stopVideo();
						}}"
						style=${styleMap({ display: this._isVideoPlaying ? "block" : "none" })}
					>
						<button class="controls-button__clickable-button">
							<img alt="Pause" src="${pauseButton}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${() => {
							this.resetVideo();
						}}"
					>
						<button class="controls-button__clickable-button">
							<img alt="Reset" src="${resetButton}" class="controls-button__image" />
						</button>
					</li>
					<li
						class="controls-button"
						@click="${() => {
							this.toggleMute();
						}}"
					>
						<button class="controls-button__clickable-button">
							<img alt="Mute" src="${muteButton}" class="controls-button__image" />
						</button>
					</li>
				</ul>
			</div>`;
	}
}
