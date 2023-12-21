import { LitElement, css, html } from "lit";
import { customElement, property, query, queryAssignedElements } from "lit/decorators.js";
import { ZoomingImageLitConfiguration } from "src/modules/interfaces/component/zooming-image/types.lit";

declare global {
	interface HTMLElementTagNameMap {
		"zooming-image-component": ZoomComponent;
	}
}

@customElement("zooming-image-component")
export class ZoomComponent extends LitElement implements ZoomingImageLitConfiguration {
	static styles = css`
		.wrap {
			position: relative;
			width: 100%;
			height: 100%;
		}
	`;

	@property({ type: Number })
	moveRatio = 0.15;
	@property({ type: Number })
	backgroundShift = 9;
	@property({ type: Number })
	positionShift = 34;
	@property({ type: Boolean })
	autoConfigureGlassSource = false;

	@queryAssignedElements({ slot: "image" })
	_image!: HTMLElement[];
	@queryAssignedElements({ slot: "glass" })
	_glass!: HTMLElement[];
	@query(".wrap")
	_wrapElement!: HTMLElement;

	private mouseMoveListener!: (event: MouseEvent) => unknown;

	protected firstUpdated(): void {
		const [image] = this._image,
			[glass] = this._glass,
			wrap = this._wrapElement;
		if (this.autoConfigureGlassSource && image.hasAttribute("src")) {
			glass.style.backgroundImage = `url("${image.getAttribute("src") ?? ""}")`;
		}
		Object.assign(glass.style, {
			overflow: "hidden",
			display: "block",
			position: "absolute"
		});

		wrap.addEventListener(
			"pointermove",
			(this.mouseMoveListener = (event) => {
				const { top, left } = wrap.getBoundingClientRect();
				const x = event.x - left,
					y = event.pageY - top;
				const { offsetWidth, offsetHeight } = image;
				let xMove = (x / offsetWidth) * 100,
					yMove = (y / offsetHeight) * 100;
				if (x >= 0.01 * offsetWidth) xMove += this.moveRatio * xMove;
				if (y >= 0.01 * offsetHeight) yMove += this.moveRatio * yMove;

				Object.assign(glass.style, {
					backgroundPositionX: `${xMove - this.backgroundShift}%`,
					backgroundPositionY: `${yMove - this.backgroundShift}%`,
					left: `${x - this.positionShift}px`,
					top: `${y - this.positionShift}px`
				});
			}),
			{ passive: true }
		);
	}

	disconnectedCallback(): void {
		this._wrapElement.removeEventListener("mousemove", this.mouseMoveListener);
		this._wrapElement.removeEventListener("pointermove", this.mouseMoveListener);
		super.disconnectedCallback();
	}

	render() {
		return html`<div class="wrap">
			<slot name="image"></slot>
			<slot name="glass"></slot>
		</div>`;
	}
}
