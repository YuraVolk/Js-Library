import { LitElement, html } from "lit";
import { property, state } from "lit/decorators.js";
import { assertNonUndefinedDevOnly } from "shared/utils/utils";
import { carouselControlsStyles } from "../../interfaces/generic/carousel";
import { MenuCarouselConfiguration, MenuCarouselInternalItem } from "shared/component/menuCarousel";
import { LinkedCarouselMixin, LinkedItem } from "../../interfaces/hooks/linkedItems";
import { CarouselItem } from "../../interfaces/hooks/linkedItems";

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
			width: this.width + "px",
			left: x + "px",
			top: y + "px",
			zIndex: String((scale * 100) | 0)
		};
	}
}

export class MenuCarouselComponent extends LinkedCarouselMixin(LitElement) implements MenuCarouselConfiguration {
	static styles = carouselControlsStyles;

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

	goBack() {}

	goForward() {}

	protected firstUpdated() {
		for (const value of this.itemValues) {
			this._items.push(new Item(value).initStyles());
		}
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
