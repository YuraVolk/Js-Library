import { LitElement, css, html } from "lit";
import { customElement, property, state } from "lit/decorators.js";

declare global {
  interface HTMLElementTagNameMap {
    "color-picker-component": ColorPickerComponent;
  }
}

@customElement("color-picker-component")
export class ColorPickerComponent extends LitElement {
  @property({ type: String })
  imageUrl = "";
  @property({ type: Number })
  width = 245;
  @property({ type: Number })
  height = 245;

  @state()
  _hexCode = "";
  @state()
  _rgbaCode = "";
  @state()
  _rgb = "";

  render() {
    return html`
      <div class="color-picker">
        <div class="color-picker__border">
          <div class="color-picker__background">
            <canvas id="color-picker__canvas" width="245" height="245"></canvas>
          </div>
        </div>
        <div class="color-picker__info">
          <div class="color-picker__current-color_background">
            <div class="color-picker__current-color"></div>
          </div>
          <label class="color-picker__opacity">
            <span class="color-picker__opacity-label">Opacity: </span>
            <span class="color-picker__opacity-range">
              <input type="range" class="opacity-range__track" />
              <input type="range" class="opacity-range__thumb" />
            </span>
          </label>
          <p>Hex code: <span class="color-code color-code--hex"></span></p>
          <p>RGBA: <span class="color-code color-code--rgba"></span></p>
          <p>RGB: <span class="color-code color-code--rgb"></span></p>
        </div>
      </div>
    `;
  }
}
