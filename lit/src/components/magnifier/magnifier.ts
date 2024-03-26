import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import { assertNonUndefined } from "shared/utils/utils";
import { MagnifierConfiguration } from "shared/component/magnifier";
import { LinkedCarouselMixin } from "../../interfaces/hooks/linkedItems";
import { ImageMagnifierGlass } from "./magnifierGlass";

export class ImageMagnifierComponent extends LinkedCarouselMixin(LitElement) implements MagnifierConfiguration {
	static styles = css`
		:host {
			position: relative;
			display: block;
		}
	`;

	@property({ type: Number })
	zoomScale = 2;
	@property({ type: Boolean })
	autoConfigureGlassSource = false;
	@property({ type: String })
	imageSource = "";

	protected _magnifierRef: Ref<HTMLDivElement> = createRef();
	protected get magnifierImage() {
		const image = this._magnifierRef.value;
		assertNonUndefined(image);
		return image;
	}

	moveMagnifier(x: number, y: number) {
		const image = this.magnifierImage,
			glass = this.linkedItemsContext["magnifier-glass"];

		const width = glass.element.offsetWidth / 2,
			height = glass.element.offsetHeight / 2;
		if (x > image.offsetWidth) {
			x = image.offsetWidth;
		} else if (x < 0) x = 0;
		if (y > image.offsetHeight) {
			y = image.offsetHeight;
		} else if (y < 0) y = 0;

		glass.styles = {
			...glass.styles,
			left: `${String(x - width)}px`,
			top: `${String(y - height)}px`,
			backgroundPosition: "-" + String(x * this.zoomScale - width) + "px -" + String(y * this.zoomScale - height) + "px"
		};
	}

	protected onMouseMove(event: MouseEvent) {
		event.preventDefault();
		const rect = this.magnifierImage.getBoundingClientRect();
		this.moveMagnifier(event.pageX - rect.left - window.scrollX, event.pageY - rect.top - window.scrollY);
	}

	private mouseMoveListener?: (event: MouseEvent) => void;
	protected firstUpdated(): void {
		const glass = this.linkedItemsContext["magnifier-glass"];

		glass.element.addEventListener(
			"mousemove",
			(this.mouseMoveListener ??= (e) => {
				this.onMouseMove(e);
			})
		);
		glass.element.addEventListener("pointermove", this.mouseMoveListener);

		glass.styles = {
			backgroundImage: `url("${this.imageSource}")`,
			backgroundSize: `${String(this.magnifierImage.offsetWidth * this.zoomScale)}px ${String(this.magnifierImage.offsetHeight * this.zoomScale)}px`
		};
	}

	render() {
		return html`<div
				class="magnifier__image"
				@mousemove=${(event: MouseEvent) => {
					this.onMouseMove(event);
				}}
				${ref(this._magnifierRef)}
			>
				<slot name="image"></slot>
			</div>
			<slot name="glass"></slot>`;
	}
}

export { ImageMagnifierGlass };
