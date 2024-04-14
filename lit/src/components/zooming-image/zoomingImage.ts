import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { LinkedCarouselMixin } from "../../interfaces/hooks/linkedItems";
import { ZoomingImageConfiguration } from "shared/component/zoomingImage";
import { ZoomingImageGlass } from "./zoomingImageGlass";

export class ZoomingImage extends LinkedCarouselMixin(LitElement) implements ZoomingImageConfiguration {
	static styles = css`
		:host {
			position: relative;
			display: block;
		}
	`;

	@property({ type: Number })
	moveRatio = 0.15;
	@property({ type: Number })
	backgroundShift = 9;
	@property({ type: Number })
	positionShift = 34;

	private mouseMoveListener?: (event: MouseEvent) => void;

	onMouseMove(event: MouseEvent) {
		const { top, left } = this.getBoundingClientRect();
		const x = event.x - left,
			y = event.pageY - top;
		const { offsetWidth, offsetHeight } = this;
		let xMove = (x / offsetWidth) * 100,
			yMove = (y / offsetHeight) * 100;
		if (x >= 0.01 * offsetWidth) xMove += this.moveRatio * xMove;
		if (y >= 0.01 * offsetHeight) yMove += this.moveRatio * yMove;

		this.linkedItemsContext["zooming-image-glass"].styles = {
			backgroundPositionX: `${String(xMove - this.backgroundShift)}%`,
			backgroundPositionY: `${String(yMove - this.backgroundShift)}%`,
			left: `${String(x - this.positionShift)}px`,
			top: `${String(y - this.positionShift)}px`
		};
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.addEventListener("mousemove", (this.mouseMoveListener ??= this.onMouseMove.bind(this)));
		this.addEventListener("pointermove", this.mouseMoveListener);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		if (this.mouseMoveListener) {
			this.removeEventListener("mousemove", this.mouseMoveListener);
			this.removeEventListener("pointermove", this.mouseMoveListener);
		}
	}

	render() {
		return html`
			<slot name="image"></slot>
			<slot name="glass"></slot>
		`;
	}
}

export { ZoomingImageGlass };
