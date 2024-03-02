import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { carouselControlsStyles } from "../../interfaces/generic/carousel";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";
import { provide } from "@lit/context";
import { LinkedItems, linkedItemsContext } from "../../interfaces/hooks/linkedItems";
import { BackfaceCarouselItem } from "./backfaceCarouselItem";
import { IntervalController } from "../../interfaces/hooks/intervalController";
import { ResizeController } from "../../interfaces/hooks/resizeController";

export class BackfaceCarousel extends LitElement {
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
	@state()
	protected _carouselStyles: StyleInfo = {};
	@state()
	private _currentItem = 0;

	@provide({ context: linkedItemsContext })
	linkedItemsContext: LinkedItems = {};

	private intervalController = new IntervalController(
		this,
		() => {
			this.setupCarousel();
		},
		250
	);

	protected get itemValues() {
		return Object.values(this.linkedItemsContext);
	}

	rotateCarousel(newCurrentImage: number) {
		const theta = (2 * Math.PI) / this.itemValues.length;
		this._carouselStyles.transform = `rotate${this.isVertical ? "X" : "Y"}(${newCurrentImage * -theta}rad)`;
		this._currentItem = newCurrentImage;
	}

	private setupCarousel() {
		const items = this.itemValues;
		const length = items.length,
			theta = (2 * Math.PI) / length,
			size = items[0].element[this.isVertical ? "offsetHeight" : "offsetWidth"];
		const apothem = size / (2 * Math.tan(Math.PI / length));
		this._carouselStyles.transformOrigin = `50% 50% ${-apothem}px`;

		for (let i = 0; i < length; i++) {
			items[i].styles = {};
			items[i].styles.padding = "0";
			if (i === 0) continue;
			items[i].styles.transformOrigin = `50% 50% ${-apothem}px`;
			items[i].styles.transform = `rotate${this.isVertical ? "X" : "Y"}(${i * theta}rad)`;
		}

		this.linkedItemsContext = Object.keys(this.linkedItemsContext).reduce(
			(obj, key, i) => ({
				...obj,
				[key]: items[i]
			}),
			{}
		);
		this.rotateCarousel(this._currentItem);
	}

	protected firstUpdated(): void {
		new ResizeController(this, this.setupCarousel.bind(this));
		this.setupCarousel();
	}

	nextSlide() {
		this.intervalController.abortInterval();
		this.rotateCarousel(this._currentItem + 1);
	}

	previousSlide() {
		this.intervalController.abortInterval();
		this.rotateCarousel(this._currentItem - 1);
	}

	switchPerspective() {
		this.intervalController.abortInterval();
		this.isVertical = !this.isVertical;
	}

	render() {
		return html`
			<div class="backface-carousel ${this.isVertical ? "backface-carousel--vertical" : ""}">
				<ul class="backface-carousel-items" style=${styleMap(this._carouselStyles)}>
					<slot></slot>
				</ul>
			</div>
			<div class="carousel-controls">
				<button
					class="carousel-controls__previous-button"
					@click=${() => {
						this.previousSlide();
					}}
				></button>
				<button
					class="carousel-controls__perspective-button"
					@click=${() => {
						this.switchPerspective();
					}}
				>
					Switch
				</button>
				<button
					class="carousel-controls__next-button"
					@click=${() => {
						this.nextSlide();
					}}
				></button>
			</div>
		`;
	}
}

export { BackfaceCarouselItem };
