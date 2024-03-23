import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { RangeInputComponent } from "../range-input/rangeInput";
import { styleMap } from "lit/directives/style-map.js";
import { ColorPickerConfiguration } from "shared/component/colorPicker";
import { RGBAColor, verifyValidRGBAColor } from "shared/interfaces/colors";
import { RangeInputChangeEvent } from "../range-input/events";
import { Ref, createRef, ref } from "lit/directives/ref.js";
import { assertNonUndefined } from "shared/utils/utils";

window.customElements.define("range-input-component", RangeInputComponent);

export class ColorPickerComponent extends LitElement implements ColorPickerConfiguration {
	static styles = css`
		.wrap {
			max-width: 670px;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			gap: 0.3rem;
		}

		.color-picker-wrap {
			max-width: var(--width);
			max-height: var(--height);
			border: 3px solid #000000;
			background-color: #000000;
		}

		.color-picker {
			max-width: inherit;
			max-height: inherit;
		}

		.color-picker__canvas {
			cursor: crosshair;
		}

		.current-color-wrap {
			width: calc(var(--width) / 2);
			height: calc(var(--height) / 2);
			border: 3px solid #000000;
		}

		.current-color {
			width: 100%;
			height: 100%;
		}

		.info {
			width: 235px;
		}

		p {
			margin: 3px 0;
		}

		#opacity-range {
			display: block;
			padding: 2rem 0;
		}
	`;

	@property({ type: String })
	imageUrl = "";
	@property({ type: Number })
	width = 245;
	@property({ type: Number })
	height = 245;
	@property({ type: Array })
	backgroundColor: RGBAColor = [0, 0, 0, 1];
	@property({ type: Array })
	rgba: RGBAColor = [0, 0, 0, 1];

	private _canvasRef: Ref<HTMLCanvasElement> = createRef();

	private convertOpacityToBackground() {
		const alpha = 1 - this.rgba[3] / 100,
			baseAlpha = this.rgba[3] / 100;
		return this.rgba.map((c, i) => (i === 3 ? 1 : Math.round(alpha * this.backgroundColor[i] + baseAlpha * c * 100)));
	}

	getHex() {
		return (
			"#" +
			this.convertOpacityToBackground()
				.slice(0, -1)
				.map((color) => Number(color).toString(16).padStart(2, "0"))
				.join("")
		);
	}

	getRGB() {
		return `rgb(${this.convertOpacityToBackground().slice(0, -1).join(", ")})`;
	}

	getRGBA() {
		return `rgba(${this.rgba.join(", ")})`;
	}

  protected get context() {
    assertNonUndefined(this._canvasRef.value);
		const ctx = this._canvasRef.value.getContext("2d", { willReadFrequently: true });
		assertNonUndefined(ctx);
    return ctx;
  }

	protected onOpacityChange(newValue: number) {
		const color = [...this.rgba.slice(0, -1), newValue];
		if (verifyValidRGBAColor(color)) this.rgba = color;
	}

	protected onCanvasMouseDown(event: MouseEvent) {
		const color = [...this.context.getImageData(event.offsetX, event.offsetY, 1, 1).data.slice(0, -1), this.rgba[3]];
		if (verifyValidRGBAColor(color)) this.rgba = color;
	}

  protected firstUpdated(): void {
    const image = new Image(this.width, this.height);
    image.src = this.imageUrl;
    image.onload = () => {
      this.context.drawImage(image, 0, 0, image.width, image.height);
    };
  }

	render() {
		return html`
			<div
				class="wrap"
				style=${styleMap({
					"--width": `${String(this.width)}px`,
					"--height": `${String(this.height)}px`
				})}
			>
				<div class="color-picker-wrap">
					<div class="color-picker">
						<canvas
							class="color-picker__canvas"
							width="${this.width}"
							height="${this.height}"
							${ref(this._canvasRef)}
							@mousedown=${(e: MouseEvent) => {
								this.onCanvasMouseDown(e);
							}}
						></canvas>
					</div>
				</div>
				<div class="info">
					<div class="current-color-wrap">
						<div class="current-color" style=${styleMap({ backgroundColor: this.getRGB() })}></div>
					</div>
					<range-input-component
						id="opacity-range"
						maximum="1"
						step="0.01"
						.ticks=${[0, 100]}
						label="Opacity:"
						defaultValue="1"
						@change=${(e: RangeInputChangeEvent) => {
							this.onOpacityChange(e.value);
						}}
					></range-input-component>
					<p>Hex code: ${this.getHex()}</p>
					<p>RGBA: ${this.getRGBA()}</p>
					<p>RGB: ${this.getRGB()}</p>
				</div>
			</div>
		`;
	}
}
