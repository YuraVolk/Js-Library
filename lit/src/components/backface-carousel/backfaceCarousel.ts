import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { carouselControlsStyles } from "../../interfaces/generic/carousel";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";
import { LinkedCarouselMixin } from "../../interfaces/hooks/linkedItems";
import { BackfaceCarouselItem } from "./backfaceCarouselItem";
import { IntervalController } from "../../interfaces/hooks/intervalController";
import { ResizeController } from "../../interfaces/hooks/resizeController";
import { CarouselConfiguration, CarouselConfigurationAutoplayOptions } from "shared/interfaces/carousel";
import { AutoplayController } from "../../interfaces/hooks/autoplayController";
import { getCurrentItemInfo } from "shared/utils/carousel";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { classMap } from "lit/directives/class-map.js";

export class BackfaceCarousel extends LinkedCarouselMixin(LitElement) implements CarouselConfiguration {
	static styles = css`
		:host {
			display: block;
		}

		.backface-carousel {
			display: flex;
			width: auto;
			height: 100%;
			flex-direction: column;
			align-items: center;
			perspective: 500px;
			overflow: hidden;
			padding: 20px;
		}

		.backface-carousel--vertical {
			margin-top: 10%;
			height: 33vw;
			overflow: visible;
		}

		.backface-carousel-items {
			width: 40%;
			transform-style: preserve-3d;
			transition: all 0.5s;
			padding: 0;
			list-style-type: none;
			margin: 0 auto;
			flex: 0 0 auto;
		}

		${carouselControlsStyles}
	`;

	@property({ type: Boolean })
	isVertical = false;
	@property({ type: Boolean })
	allowSwitchingOrientation = false;
	@property({ type: Boolean })
	showArrows = false;
	@property({ type: Boolean })
	showToggles = false;
	@property({ type: Object })
	autoplay?: CarouselConfigurationAutoplayOptions;

	@state()
	protected _carouselStyles: StyleInfo = {};
	@state()
	private _currentItem = 0;

	private _autoplayController!: AutoplayController;
	private _intervalController = new IntervalController(
		this,
		() => {
			this.setupCarousel();
		},
		250
	);
	
	rotateCarousel(newCurrentImage: number) {
		const theta = (2 * Math.PI) / this.itemValues.length;
		this._carouselStyles.transform = `rotate${this.isVertical ? "X" : "Y"}(${String(newCurrentImage * -theta)}rad)`;
		this._currentItem = newCurrentImage;
	}

	private setupCarousel() {
		const items = this.itemValues;
		const length = items.length,
			theta = (2 * Math.PI) / length,
			size = items[0].element[this.isVertical ? "offsetHeight" : "offsetWidth"];
		const apothem = size / (2 * Math.tan(Math.PI / length));
		this._carouselStyles.transformOrigin = `50% 50% ${String(-apothem)}px`;

		for (let i = 0; i < length; i++) {
			const newStyles: StyleInfo = {};
			newStyles.padding = "0";
			if (i === 0) {
				items[i].styles = newStyles;
				continue;
			}

			newStyles.transformOrigin = `50% 50% ${String(-apothem)}px`;
			newStyles.transform = `rotate${this.isVertical ? "X" : "Y"}(${String(i * theta)}rad)`;
			items[i].styles = newStyles;
		}

		this.rotateCarousel(this._currentItem);
	}

	protected firstUpdated(): void {
		new ResizeController(this, this.setupCarousel.bind(this));
		this._autoplayController = new AutoplayController(this, {
			autoplay: this.autoplay,
			nextSlide: this.nextSlide.bind(this),
			previousSlide: this.previousSlide.bind(this)
		});

		this.setupCarousel();
	}

	nextSlide() {
		this._intervalController.abortInterval();
		this.rotateCarousel(this._currentItem + 1);
	}

	previousSlide() {
		this._intervalController.abortInterval();
		this.rotateCarousel(this._currentItem - 1);
	}

	switchPerspective() {
		this._intervalController.abortInterval();
		this.isVertical = !this.isVertical;
		this.setupCarousel();
	}

	render() {
		const { realCurrentItem, childrenLength, getCurrentItem } = getCurrentItemInfo({
			childrenLength: this.itemKeys.length,
			currentItem: this._currentItem
		});

		return html`
			<div class="backface-carousel ${this.isVertical ? "backface-carousel--vertical" : ""}">
				<ul class="backface-carousel-items" style=${styleMap(this._carouselStyles)}>
					<slot></slot>
				</ul>
			</div>
			${when(
				this.showArrows || this.allowSwitchingOrientation,
				() =>
					html`<div class="carousel-controls">
						${when(
							this.showArrows,
							() =>
								html`<button
									class="carousel-controls__previous-button"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.previousSlide();
									}}
								></button>`
						)}
						${when(
							this.allowSwitchingOrientation,
							() =>
								html`<button
									class="carousel-controls__perspective-button"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.switchPerspective();
									}}
								>
									Switch
								</button>`
						)}
						${when(
							this.showArrows,
							() =>
								html`<button
									class="carousel-controls__next-button"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.nextSlide();
									}}
								></button>`
						)}
					</div>`
			)}
			${when(
				this.showToggles,
				() =>
					html`<ul class="carousel-controls__toggles">
						${map(
							range(childrenLength),
							(i) =>
								html`<li
									class="carousel-controls__toggle ${classMap({
										"carousel-controls__toggle--active": i === realCurrentItem
									})}"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.rotateCarousel(getCurrentItem(i));
									}}
								></li>`
						)}
					</ul>`
			)}
		`;
	}
}

export { BackfaceCarouselItem };
