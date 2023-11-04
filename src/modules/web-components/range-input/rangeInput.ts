import { LitElement, css, html } from "lit";
import { customElement, property, state, queryAsync } from "lit/decorators.js";
import { assertDevOnly } from "../../utils";
import { styleMap } from 'lit/directives/style-map.js';
import { defaultActiveColor, defaultHoverColor, thumbStyles } from "./styles";
import { when } from "lit/directives/when.js";
import { classMap } from "lit/directives/class-map.js";

declare global {
  interface HTMLElementTagNameMap {
    "range-input-component": RangeInputComponent;
  }
}

@customElement("range-input-component")
export class RangeInputComponent extends LitElement {
  private uiRangeID = crypto.randomUUID();
  static styles = css`
    .range-slider__input {
      -webkit-appearance: none;
      appearance: none;
      width: 100%;
      height: 6px;
      background: var(--trackColor, #ccc);
      cursor: pointer;
      outline: none;
      border-radius: var(--thumbSize, 15px);
    }

    .range-slider__input::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${thumbStyles}
    }

    .range-slider__input::-moz-range-thumb {
      ${thumbStyles}
    }

    .range-slider__input::-webkit-slider-thumb:hover {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${defaultHoverColor});
    }

    .range-slider__input::-moz-range-thumb:hover {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, ${defaultHoverColor});
    }

    .range-slider__input:active::-webkit-slider-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${defaultActiveColor});
    }

    .range-slider__input:active::-moz-range-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${defaultActiveColor});
    }

    .range-slider__input:focus::-webkit-slider-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${defaultActiveColor});
    }

    .range-slider__input:focus::-moz-range-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, ${defaultActiveColor});
    }

    .wrap {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
    }

    .value {
      font-size: var(--valueSize, 25px);
      width: calc(var(--valueSize, 25px) * 2);
      text-align: center;
    }

    .range-slider__label {
      display: block;
      font-size: calc(var(--valueSize, 25px) / 2);
    }

    .range-slider {
      flex-grow: 1;
      height: 100%;
    }

    .range-slider--one-lined {
      display: flex;
      align-items: center;
    }

    .range-slider-ticks {
      position: relative;
      margin: 0;
      padding: 0 10px;
      list-style-type: none;
    }

    .range-slider-ticks__tick {
      position: absolute;
      top: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      left: calc(var(--value) + var(--valueSize, 25px) / 4);
      width: 1px;
      height: calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3));
      background: var(--trackColor, #ccc);
      line-height: calc((var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) * 4);
    }
  `;

  @property({ type: Number })
  minimum = 0;
  @property({ type: Number })
  maximum = 100;
  @property({ type: Number })
  defaultValue = 0;
  @property({ type: Number })
  step = 1;
  @property({ type: Array, converter: {
    fromAttribute: (value) => value ? value.split(",").map(Number) : [],
    toAttribute: (value: number[]) => value.join(",")
  } })
  ticks: number[] = [];
  @property({ type: String })
  label = "";
  @property({ type: String })
  thumbSize = "15px";
  @property({ type: String })
  trackColor = "#ccc";
  @property({ type: String })
  thumbColor = "#f50";
  @property({ type: String })
  hoverColor = defaultHoverColor;
  @property({ type: String })
  activeColor = defaultActiveColor;
  @property({ type: String })
  valueSize = "25px";
  @property({ type: Boolean })
  hideValue = false;
  @property({ type: Boolean })
  allSameLine = false;

  @state()
  _value = 0;
  @state()
  protected _gradientStyle = {};
  @state()
  _onUpdateListener?: (newValue: number) => void;

  @queryAsync(".range-slider__input")
  rangeSlider!: Promise<HTMLInputElement>;

  private boundEventListener!: (this: Window, ev: Event) => unknown;

  protected setGradientStyle() {
    const progress = (this._value / this.maximum) * 100;
    this._gradientStyle = {
      background: `linear-gradient(to right, ${this.thumbColor} ${progress}%, ${this.trackColor} ${progress}%)`
    };
  }

  protected onValueChange(event: Event) {
    assertDevOnly(event.target instanceof HTMLInputElement);
    this._value = Number(event.target.value);
    this.setGradientStyle();
    this._onUpdateListener?.(this._value);
  }

  changeValue(newValue: number) {
    this._value = newValue;
    this.rangeSlider.then((range) => range.value = String(newValue));
    this.setGradientStyle();
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.boundEventListener = (event) => { this.onValueChange(event) };
    this._value = this.defaultValue;
    this.rangeSlider.then((result) => {
      this.setGradientStyle();
      result.addEventListener("input", this.boundEventListener);
    });
  }

  disconnectedCallback(): void {
    this.rangeSlider.then((result) => {
      result.removeEventListener("input", this.boundEventListener);
    });
    super.disconnectedCallback();
  }

  render() {
    const variableKeys =
      ["thumbSize", "trackColor", "thumbColor", "hoverColor", "activeColor", "valueSize"] as const satisfies ReadonlyArray<keyof this>;
    return html`
      <div class="wrap" style="${variableKeys.map(key => `--${String(key)}: ${this[key]}`).join("; ")}">
        <div class="range-slider ${classMap({ "range-slider--one-lined": this.allSameLine })}">
          <label class="range-slider__label" for="${this.uiRangeID}">${this.label}</label>
          <input
            type="range"
            min="${this.minimum}"
            max="${this.maximum}"
            value="${this._value}"
            id="${this.uiRangeID}"
            step="${this.step}"
            class="range-slider__input"
            style=${styleMap(this._gradientStyle)}
          >
          ${this.ticks.length ? html`
            <ul class="range-slider-ticks">
              ${this.ticks.map(tick => html`<li class="range-slider-ticks__tick" style="--value: ${tick}%">${tick}</li>`)}
            </ul>
          ` : ""}
        </div>
        ${when(!this.hideValue, () => html`<span class="value">${this._value}</span>`)}
      </div>
    `;
  }
}
