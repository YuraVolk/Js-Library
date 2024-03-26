import { LitElement, css, html } from "lit";
import { state } from "lit/decorators.js";
import { ImageComparatorItem } from "./imageComparatorItem";
import { repeat } from "lit/directives/repeat.js";
import { LinkedCarouselMixin } from "../../interfaces/hooks/linkedItems";
import { ImageComparisonData } from "shared/component/imageComparator";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";

export class ImageComparatorComponent extends LinkedCarouselMixin(LitElement) {
	static styles = css`
		:host {
			position: relative;
			width: 100%;
			height: 100%;
		}

		.comparison-slider {
			position: absolute;
			top: 50%;
			transform: translate(-50%, -50%);
			z-index: 1;
			width: 40px;
			height: 40px;
			background-color: #333;
			border-radius: 50%;
			cursor: ew-resize;
		}
	`;

	@state()
	protected _imageData: Record<string, ImageComparisonData<StyleInfo>> = {};

	protected get clickedElement() {
		return this.itemKeys.find((key) => this._imageData[key].isClicked);
	}

	protected slide(elementKey: string, difference: number) {
		const element = this.linkedItemsContext[elementKey];
		const imageComparisonData = this._imageData[elementKey];
		element.styles = {
			width: String(difference) + "px"
		};

		imageComparisonData.style.left = String(difference) + "px";
		this._imageData = { ...this._imageData };
	}

	protected onMouseStart(event: Event, elementKey: string) {
		event.preventDefault();
		const newImageData = { ...this._imageData };
		newImageData[elementKey].isClicked = true;
		this._imageData = newImageData;
	}

	protected onMouseMove(event: MouseEvent | PointerEvent) {
		const clickedElement = this.clickedElement;
		if (!clickedElement) return;
		const element = this.linkedItemsContext[clickedElement];
		element.styles = {
			left: "0"
		};

		let pos = event.pageX - element.element.getBoundingClientRect().left - window.scrollX;
		if (pos < 0) pos = 0;
		if (pos > this._imageData[clickedElement].offsetWidth) {
			pos = this._imageData[clickedElement].offsetWidth;
		}

		this.slide(clickedElement, pos);
	}

	protected onMouseUp() {
		this._imageData = Object.fromEntries(
			Object.entries(this._imageData).map(([key, value]) => [
				key,
				{
					...value,
					isClicked: false
				}
			])
		);
	}

	private onMouseUpListener?: EventListener;
	private onMouseMoveListener?: (event: MouseEvent | PointerEvent) => void;

	private updateEntries(slide = false) {
		this.itemEntries.forEach(
			(
				[
					key,
					{
						element: { offsetWidth }
					}
				],
				index,
				arr
			) => {
				this._imageData[key] = {
					isClicked: false,
					offsetWidth,
					style: {}
				};

				if (slide) this.slide(key, offsetWidth - (offsetWidth / arr.length) * index);
			}
		);

		if (!slide) this._imageData = { ...this._imageData };
	}

	protected async scheduleUpdate() {
		const values = this.itemValues.map((value) => value.element);
		if (
			!values.every<ImageComparatorItem>((value): value is ImageComparatorItem => value instanceof ImageComparatorItem && !value.hasUpdated)
		) {
			return super.scheduleUpdate();
		}

		for (const item of values) await item.updateComplete;
		this.updateEntries();
		return super.scheduleUpdate();
	}

	protected firstUpdated() {
		this.updateEntries(true);
		window.addEventListener(
			"mouseup",
			(this.onMouseUpListener ??= () => {
				this.onMouseUp();
			})
		);
		window.addEventListener("pointerup", this.onMouseUpListener);
		window.addEventListener(
			"mousemove",
			(this.onMouseMoveListener ??= (event) => {
				this.onMouseMove(event);
			})
		);
		window.addEventListener("pointermove", this.onMouseMoveListener);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();

		if (this.onMouseMoveListener) {
			window.removeEventListener("mousemove", this.onMouseMoveListener);
			window.removeEventListener("pointermove", this.onMouseMoveListener);
		}

		if (this.onMouseUpListener) {
			window.removeEventListener("mouseup", this.onMouseUpListener);
			window.removeEventListener("pointerup", this.onMouseUpListener);
		}
	}

	render() {
		return html`<slot></slot> ${repeat(
				this.itemKeys.slice(1),
				(item) => item,
				(item) =>
					html`<div
						class="comparison-slider"
						style=${styleMap(this._imageData[item].style)}
						@mousedown=${(e: MouseEvent) => {
							this.onMouseStart(e, item);
						}}
						@pointerdown=${(e: MouseEvent) => {
							this.onMouseStart(e, item);
						}}
					></div>`
			)}`;
	}
}

export { ImageComparatorItem };
