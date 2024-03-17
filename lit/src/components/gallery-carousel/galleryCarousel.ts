import { LitElement, css, html } from "lit";
import { property, queryAssignedElements, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { GalleryCarouselConfiguration } from "shared/component/galleryCarousel";
import { LinkedCarouselMixin } from "../../interfaces/hooks/linkedItems";
import { styleMap } from "lit/directives/style-map.js";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { GalleryCarouselItem } from "./galleryCarouselItem";

export class GalleryCarouselComponent extends LinkedCarouselMixin(LitElement) implements GalleryCarouselConfiguration {
	static styles = css`
		:host {
			position: relative;
		}

		.gallery {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 100%;
		}

		.gallery-list {
			position: relative;
			width: inherit;
			height: inherit;
			margin: 0;
			padding: 0;
			list-style-type: none;
			font-size: 0;
			white-space: nowrap;
			line-height: 1;
			z-index: 10;
		}

		.gallery-item {
			display: inline-block;
			width: 100%;
			height: 100%;
		}

		.gallery-toggles {
			position: relative;
			z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style-type: none;
			padding: 0;
			gap: 0.3rem;
		}

		.gallery-toggle {
			width: 10px;
			height: 10px;
			cursor: pointer;
			border: 1px solid #e2e2e2;
			border-radius: 50%;
		}

		.gallery-toggle--active {
			background-color: #2390bb;
		}

		.gallery-controls {
			position: absolute;
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			left: -10%;
			right: -10%;
			top: 0;
			bottom: 0;
		}

		.gallery-controls__next-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 0 7.5px 13px;
			border-color: transparent transparent transparent #fff;
			background: none;
			cursor: pointer;
		}

		.gallery-controls__previous-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 13px 7.5px 0;
			border-color: transparent #fff transparent transparent;
			background: none;
			cursor: pointer;
		}
	`;

	@property({ type: Boolean })
	smoothDiametralTransition = false;
	@property({ type: Number })
	current = 1;
	@property({ type: Number })
	frameGap = 20;
	@property({ type: Number })
	animationDuration = 500;
	@property({ type: Boolean })
	showArrows = false;
	@property({ type: Boolean })
	showToggles = false;

	@state()
	protected _galleryLeft = this.current * -100;
	private _interval?: number;
	private _isAnimating = false;

	@queryAssignedElements({ flatten: true })
	private _assignedElements!: HTMLElement[];

	protected get itemsLength() {
		return this.itemKeys.length;
	}

	protected firstUpdated(): void {
		const slottedElements = this._assignedElements;
		slottedElements[0].before(slottedElements[slottedElements.length - 1].cloneNode(true));
		slottedElements[slottedElements.length - 1].after(slottedElements[0].cloneNode(true));
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearInterval(this._interval);
	}

	private checkCurrentSlide(value: number) {
		if (value === 0 || value > this.itemsLength - 2) return value === 0 ? this.itemsLength - 2 : 1;
		return value;
	}

	protected slideTo(position: number, newPosition: number, currentSlide: number) {
		this._isAnimating = true;
		const start = new Date();
		this._interval = window.setInterval(() => {
			const progress = Math.min((new Date().getTime() - start.getTime()) / this.animationDuration, 1);
			this._galleryLeft = position + Math.abs(newPosition - position) * progress ** 2 * (position > newPosition ? -1 : 1);
			if (progress === 1) {
				window.clearInterval(this._interval);
				this._isAnimating = false;
				this.current = this.checkCurrentSlide(currentSlide);
				this._galleryLeft = this.current * -100;
			}
		}, this.frameGap);
	}

	changeCurrentSlide(newSlide: number) {
		if (this.itemKeys.length <= 1) return;
		if (!this.smoothDiametralTransition) newSlide = this.checkCurrentSlide(newSlide);
		const newPosition = newSlide * -100;
		if (!this._isAnimating && this._galleryLeft !== newPosition) {
			this.current = newSlide;
			this.slideTo(this._galleryLeft, newPosition, newSlide);
		}
	}

	render() {
		return html`
			<div class="gallery">
				<ul
					class="gallery-list"
					style=${styleMap({
						left: `${this._galleryLeft}%`
					})}
				>
					<slot></slot>
				</ul>
			</div>
			${when(
				this.showArrows,
				() => html`<div class="gallery-controls">
					<button
						@click=${() => {
							this.changeCurrentSlide(this.current - 1);
						}}
						class="gallery-controls__previous-button"
					></button>
					<button
						@click=${() => {
							this.changeCurrentSlide(this.current + 1);
						}}
						class="gallery-controls__next-button"
					></button>
				</div>`
			)}
			${when(
				this.showToggles && this.itemsLength,
				() => html`<ul class="gallery-toggles">
					${map(
						range(this._assignedElements.length ? this.itemsLength - 2 : this.itemsLength),
						(i) =>
							html`<li
								@click=${() => {
									this.changeCurrentSlide(i + 1);
								}}
								class="gallery-toggle ${classMap({
									"gallery-toggle--active": i === this.current - 1
								})}"
							></li>`
					)}
				</ul>`
			)}
		`;
	}
}

export { GalleryCarouselItem };
