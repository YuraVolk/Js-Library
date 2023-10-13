import { LitElement, css, html } from "lit";
import { customElement, property, state, queryAsync } from "lit/decorators.js";
import { assertDevOnly } from "../../utils";
import { styleMap } from 'lit/directives/style-map.js';
import { thumbStyles } from "./styles";

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

    .range-slider__input::-webkit-slider-thumb:hover,
    .range-slider__input::-moz-range-thumb:hover {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 3)) var(--hoverColor, rgba(255,85,0, .1));
    }

    .range-slider__input:active::-webkit-slider-thumb,
    .range-slider__input:active::-moz-range-thumb,
    .range-slider__input:focus::-webkit-slider-thumb,
    .range-slider__input:focus::-moz-range-thumb {
      box-shadow: 0 0 0 calc(var(--thumbSize, 15px) - (var(--thumbSize, 15px) / 6)) var(--activeColor, rgba(255,85,0, .2));
    }

    .wrap {
      display: flex;
      align-items: center;
      gap: 1rem;
      width: 100%;
      padding: 2rem 10px;
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
  hoverColor = "rgba(255,85,0, .1)";
  @property({ type: String })
  activeColor = "rgba(255,85,0, .2)";
  @property({ type: String })
  valueSize = "25px";

  @state()
  _value = 0;
  @state()
  protected _gradientStyle = {};

  @queryAsync(".range-slider__input")
  rangeSlider!: Promise<HTMLInputElement>;

  private boundEventListener!: (this: Window, ev: Event) => unknown;

  protected onValueChange(event: Event) {
    assertDevOnly(event.target instanceof HTMLInputElement);
    this._value = Number(event.target.value);
    const progress = (this._value / this.maximum) * 100;
    this._gradientStyle = {
      background: `linear-gradient(to right, ${this.thumbColor} ${progress}%, ${this.trackColor} ${progress}%)`
    };
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.boundEventListener = (event) => { this.onValueChange(event) };
    this._value = this.defaultValue;
    this.rangeSlider.then((result) => {
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
        <div class="range-slider">
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
        <span class="value">${this._value}</span>
      </div>
    `;
  }
}
