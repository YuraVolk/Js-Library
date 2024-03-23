import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { assertNonUndefinedDevOnly } from "shared/utils/utils";
import { CarouselDirection, carouselControlsStyles } from "../../interfaces/generic/carousel";
import { MenuCarouselConfiguration, MenuCarouselInternalItem } from "shared/component/menuCarousel";
import { LinkedCarouselMixin, LinkedItem } from "../../interfaces/hooks/linkedItems";
import { CarouselItem } from "../../interfaces/hooks/linkedItems";
import { ResizeController } from "../../interfaces/hooks/resizeController";

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
		`,
		carouselControlsStyles
	];

	@property({ type: Number })
	xPos?: number;
	@property({ type: Number })
	yPos = 112;
	@property({ type: Number })
	xRadius?: number;
	@property({ type: Number })
	yRadius = 128;
	@property({ type: Number })
	farScale = 0.9;
	@property({ type: Number })
	speed = 0.11;

	private _items: Item[] = [];
	private _rotation = Math.PI / 2;
	private _destRotation = Math.PI / 2;
	private _frameTimer?: number;

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

	goBack() {
		this.go(CarouselDirection.BACKWARDS);
	}

	goForward() {
		this.go(CarouselDirection.FORWARDS);
	}

	protected rotateItem(itemIndex: number, rotation: number) {
		const item = this._items[itemIndex];
		const sin = Math.sin(rotation);
		const scale = this.farScale + (1 - this.farScale) * (sin + 1) * 0.5;
		assertNonUndefinedDevOnly(this.xPos);
		assertNonUndefinedDevOnly(this.xRadius);
		item.moveTo(
			this.xPos + scale * (Math.cos(rotation) * this.xRadius - item.fullWidth / 2),
			this.yPos + scale * sin * this.yRadius + this.yPos / 2.3,
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
		this.xRadius ??= this.offsetWidth / 2.3;
		this.yRadius = this.offsetHeight / 6;
		this._items.splice(0, this._items.length);
		for (const image of this.itemValues) {
			image.element.removeAttribute("style");
			this._items.push(new Item(image).initStyles());
		}

		this.carouselRender();
	}

	private onResize() {
		this.xRadius = undefined;
		this.xPos = undefined;
		this.setupCarousel();
	}

	protected firstUpdated() {
		this.setupCarousel();
		new ResizeController(this, this.onResize.bind(this));
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearTimeout(this._frameTimer);
	}

	render() {
		return html`
			<slot></slot>
			<div class="carousel-controls">
				<button
					class="carousel-controls__previous-button"
					@click="${() => {
						this.goBack();
					}}"
				></button>
				<button
					class="carousel-controls__next-button"
					@click="${() => {
						this.goForward();
					}}"
				></button>
			</div>
		`;
	}
}

export { CarouselItem };
