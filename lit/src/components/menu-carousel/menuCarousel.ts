import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { assertNonUndefinedDevOnly } from "shared/utils/utils";
import { CarouselDirection, carouselControlsStyles } from "../../interfaces/generic/carousel";
import { MenuCarouselConfiguration, MenuCarouselInternalItem } from "shared/component/menuCarousel";
import { LinkedCarouselMixin, LinkedItem } from "../../interfaces/hooks/linkedItems";
import { CarouselItem } from "../../interfaces/hooks/linkedItems";
import { ResizeController } from "../../interfaces/hooks/resizeController";
import { CarouselConfigurationAutoplayOptions } from "shared/interfaces/carousel";
import { AutoplayController } from "../../interfaces/hooks/autoplayController";
import { when } from "lit/directives/when.js";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { classMap } from "lit/directives/class-map.js";
import { getCurrentItemInfo } from "shared/utils/carousel";

class Item extends MenuCarouselInternalItem {
	constructor(private elementData: LinkedItem) {
		super(elementData.element);
	}

	initStyles() {
		this.elementData.styles = {
			position: "absolute"
		};
		return this;
	}

	setMovingStyle(x: number, y: number, scale: number) {
		this.elementData.styles = {
			...this.elementData.styles,
			width: String(this.width) + "px",
			left: String(x) + "px",
			top: String(y) + "px",
			zIndex: String((scale * 100) | 0)
		};
	}
}

export class MenuCarouselComponent extends LinkedCarouselMixin(LitElement) implements MenuCarouselConfiguration {
	static styles = [
		carouselControlsStyles,
		css`
			:host {
				display: block;
				position: relative;
				overflow: hidden;
				padding: 0;
			}

			.carousel-controls {
				z-index: 999;
				top: 80%;
			}

			.carousel-controls__toggles {
				z-index: 999;
				top: calc(80% + 40px);
			}
		`
	];

	@property({ type: Number })
	xPos?: number;
	@property({ type: Number })
	yPos = 112;
	@property({ type: Number })
	xRadius?: number;
	@property({ type: Number })
	yRadius?: number = 128;
	@property({ type: Number })
	farScale = 0.9;
	@property({ type: Number })
	speed = 0.11;
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
	private _currentItem = 0;
	private _items: Item[] = [];
	private _rotation = Math.PI / 2;
	private _destRotation = Math.PI / 2;
	private _frameTimer?: number;
	private _autoplayController!: AutoplayController;

	protected playFrame() {
		const change = this._destRotation - this._rotation;
		if (Math.abs(change) <= 0) {
			this._rotation = this._destRotation;
			window.clearTimeout(this._frameTimer);
			this._frameTimer = undefined;
		} else {
			this._rotation += change * this.speed;
			this.scheduleNextFrame();
		}

		this.carouselRender();
	}

	protected scheduleNextFrame() {
		this._frameTimer = window.setTimeout(() => {
			this.playFrame();
		}, 32);
	}

	go(count: number) {
		this._destRotation += ((2 * Math.PI) / this._items.length) * count;
		if (this._frameTimer === undefined) this.scheduleNextFrame();
	}

	previousSlide() {
		this.go(CarouselDirection.BACKWARDS);
		this._currentItem++;
	}

	nextSlide() {
		this.go(CarouselDirection.FORWARDS);
		this._currentItem--;
	}

	switchOrientation() {
		this.isVertical = !this.isVertical;
		this.onResize();
	}

	protected rotateItem(itemIndex: number, rotation: number) {
		const item = this._items[itemIndex];
		const sin = Math.sin(rotation);
		const scale = this.farScale + (1 - this.farScale) * (sin + 1) * 0.5;
		assertNonUndefinedDevOnly(this.xPos);
		assertNonUndefinedDevOnly(this.xRadius);
		item.moveTo(
			this.xPos + scale * (Math.cos(rotation) * this.xRadius - item.fullWidth / 2),
			this.yPos + scale * sin * (this.yRadius ?? 1) + this.yPos / 2.3,
			scale
		);
	}

	protected carouselRender() {
		const count = this._items.length;
		const spacing = (2 * Math.PI) / count;
		let radians = this._rotation;
		for (let i = 0; i < count; i++) {
			this.rotateItem(i, radians);
			radians += spacing;
		}
	}

	protected setupCarousel() {
		this.xPos ??= this.offsetWidth * 0.5;
		this.yPos = this.offsetHeight * 0.1;
		this[this.isVertical ? "yRadius" : "xRadius"] ??= this.offsetWidth / 2.3;
		this[this.isVertical ? "xRadius" : "yRadius"] = this.offsetHeight / 6;
		this._items.splice(0, this._items.length);
		for (const image of this.itemValues) {
			image.element.removeAttribute("style");
			this._items.push(new Item(image).initStyles());
		}

		this.carouselRender();
	}

	private onResize() {
		this[this.isVertical ? "yRadius" : "xRadius"] = undefined;
		this.xPos = undefined;
		this.setupCarousel();
	}

	protected firstUpdated() {
		this.setupCarousel();
		new ResizeController(this, this.onResize.bind(this));
		this._autoplayController = new AutoplayController(this, {
			autoplay: this.autoplay,
			nextSlide: this.nextSlide.bind(this),
			previousSlide: this.previousSlide.bind(this)
		});
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearTimeout(this._frameTimer);
	}

	render() {
		const { realCurrentItem, childrenLength, getCurrentItem } = getCurrentItemInfo({
			childrenLength: this.itemKeys.length,
			currentItem: this._currentItem
		});

		return html`
			<slot></slot>
			${when(
				this.allowSwitchingOrientation || this.showArrows,
				() =>
					html`<div class="carousel-controls">
						${when(
							this.showArrows,
							() =>
								html`<button
									class="carousel-controls__previous-button"
									@click="${() => {
										this._autoplayController.abortTimeout();
										this.nextSlide();
									}}"
								></button>`
						)}
						${when(
							this.allowSwitchingOrientation,
							() =>
								html`<button
									class="carousel-controls__perspective-button"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.switchOrientation();
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
									@click="${() => {
										this._autoplayController.abortTimeout();
										this.previousSlide();
									}}"
								></button>`
						)}
					</div>`
			)}
			${when(
				this.showToggles,
				() => html`
					<ul class="carousel-controls__toggles">
						${map(
							range(this.itemKeys.length),
							(i) =>
								html`<li
									class="carousel-controls__toggle ${classMap({
										"carousel-controls__toggle--active": i === realCurrentItem
									})}"
									@click=${() => {
										this._autoplayController.abortTimeout();
										const difference = (getCurrentItem(i) % childrenLength) - (this._currentItem % childrenLength);
										this.go(difference);
										this._currentItem += difference;
									}}
								></li>`
						)}
					</ul>
				`
			)}
		`;
	}
}

export { CarouselItem };
