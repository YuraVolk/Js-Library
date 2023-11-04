import { LitElement, css, html } from "lit";
import {
  customElement,
  property,
  state,
  query,
  queryAll,
} from "lit/decorators.js";
import { carouselControlsStyles } from "../../interfaces/carousel";

declare global {
  interface HTMLElementTagNameMap {
    "backface-carousel-component": BackfaceCarouselComponent;
  }
}

@customElement("backface-carousel-component")
export class BackfaceCarouselComponent extends LitElement {
  static styles = css`
    .carousel {
      display: flex;
      width: auto;
      height: 100%;
      flex-direction: column;
      align-items: center;
      perspective: 500px;
      overflow: hidden;
      padding: 20px;
    }

    .carousel--vertical {
      margin-top: 10%;
      height: 33vw;
      overflow: visible;
    }

    .carousel * {
      margin: 0 auto;
      flex: 0 0 auto;
    }

    .carousel-items {
      width: 40%;
      margin: 0;
      transform-style: preserve-3d;
      transition: all 0.5s;
      padding: 0;
      list-style-type: none;
    }

    .carousel-item {
      position: relative;
      width: 100%;
      height: auto;
      padding: 0;
      opacity: 0.9999;
      backface-visibility: hidden;
    }

    .carousel-item:not(:first-of-type) {
      position: absolute;
      left: 0;
      top: 0;
      margin: 0 auto;
      padding: 0 auto;
    }

    .carousel-item > * {
      width: 100%;
      height: 100%;
    }

    ${carouselControlsStyles}
  `;

  @state()
  private _elements: Element[] = [];
  @state()
  private _currentItem = 0;

  @query(".carousel-items")
  _carouselWrap!: HTMLElement;
  @queryAll(".carousel-item")
  _carouselItem!: HTMLElement[];

  private boundEventListener!: (this: Window, ev: UIEvent) => unknown;

  @property({
    type: Boolean,
    converter: {
      fromAttribute: (value) => {
        return Boolean(Number(value));
      },
      toAttribute: (value) => {
        return String(value);
      },
    },
  })
  isHorizontal = true;

  connectedCallback() {
    super.connectedCallback();
    this._elements = Array.from(this.children);
    this.boundEventListener = this.setupCarousel.bind(this);
    window.addEventListener("resize", this.boundEventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._elements.length = 0;
    window.removeEventListener("resize", this.boundEventListener);
  }

  protected nextSlide() {
    this.rotateCarousel(this._currentItem + 1);
  }

  protected previousSlide() {
    this.rotateCarousel(this._currentItem - 1);
  }

  protected rotateCarousel(newCurrentImage: number) {
    const items = Array.from(this._carouselItem);
    const length = items.length,
      theta = (2 * Math.PI) / length;
    this._carouselWrap.style.transform = `rotate${
      this.isHorizontal ? "Y" : "X"
    }(${newCurrentImage * -theta}rad)`;
    this._currentItem = newCurrentImage;
  }

  switchPerspective() {
    this.isHorizontal = !this.isHorizontal;
    this.setupCarousel();
  }

  protected firstUpdated() {
    this.setupCarousel();
  }

  setupCarousel() {
    const items = Array.from(this._carouselItem);

    const length = items.length,
      theta = (2 * Math.PI) / length,
      size = parseFloat(
        getComputedStyle(items[0])[this.isHorizontal ? "width" : "height"]
      );
    const apothem = size / (2 * Math.tan(Math.PI / length));
    this._carouselWrap.style.transformOrigin = `50% 50% ${-apothem}px`;

    for (let i = 0; i < length; i++) {
      items[i].style.padding = "0";
      if (i === 0) continue;
      items[i].style.transformOrigin = `50% 50% ${-apothem}px`;
      items[i].style.transform = `rotate${this.isHorizontal ? "Y" : "X"}(${
        i * theta
      }rad)`;
    }

    this.rotateCarousel(this._currentItem);
  }

  render() {
    return html`
      <div>
        <div class="carousel ${!this.isHorizontal ? "carousel--vertical" : ""}">
          <ul class="carousel-items">
            ${this._elements.map((element) => {
              return html`<li class="carousel-item">${element}</li>`;
            })}
          </ul>
        </div>
        <div class="carousel-controls">
          <button
            class="carousel-controls__previous-button"
            @click="${() => { this.previousSlide(); }}"
          ></button>
          <button
            class="carousel-controls__perspective-button"
            @click="${() => { this.switchPerspective(); }}"
          >
            switch
          </button>
          <button
            class="carousel-controls__next-button"
            @click="${() => { this.nextSlide(); }}"
          ></button>
        </div>
      </div>
    `;
  }
}
