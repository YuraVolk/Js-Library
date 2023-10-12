import { LitElement, css, html } from "lit";
import {
  customElement,
  property,
  state,
  query,
  queryAll,
} from "lit/decorators.js";
import { assertNonUndefinedDevOnly } from "../utils";

class Item {
  image: HTMLElement;
  fullWidth: number;
  fullHeight: number;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  scale?: number;
  moveTo: (x: number, y: number, scale: number) => void;

  constructor(image: HTMLElement) {
    this.image = image;
    this.fullWidth = image.clientWidth;
    this.fullHeight = image.clientHeight;
    image.style.position = "absolute";
    this.moveTo = function (x, y, scale) {
      this.width = this.fullWidth * scale;
      this.height = this.fullHeight * scale;
      this.x = x;
      this.y = y;
      this.scale = scale;
      var style = this.image.style;
      style.width = this.width + "px";
      style.left = x + "px";
      style.top = y + "px";
      style.zIndex = String((scale * 100) | 0);
    };
  }
}

@customElement("menu-carousel-component")
export class MenuCarouselComponent extends LitElement {
  static styles = css`
    .carousel-controls {
      position: relative;
      z-index: 1;
      display: flex;
      gap: 1rem;
      align-items: center;
      justify-content: center;
    }

    .carousel-controls__next-button {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7.5px 0 7.5px 13px;
      border-color: transparent transparent transparent #fff;
      background: none;
      cursor: pointer;
    }

    .carousel-controls__previous-button {
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 7.5px 13px 7.5px 0;
      border-color: transparent #fff transparent transparent;
      background: none;
      cursor: pointer;
    }
  `;

  @state()
  _carousel!: HTMLElement;
  @state()
  _images!: HTMLElement[];

  @state()
  _rotation = Math.PI / 2;
  @state()
  _destRotation = Math.PI / 2;
  @state()
  _frameTimer = 0;
  @state()
  _items!: Item[];

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

  private boundEventListener!: (this: Window, ev: UIEvent) => unknown;

  protected rotateItem(itemIndex: number, rotation: number) {
    const item = this._items[itemIndex];
    const sin = Math.sin(rotation);
    const scale = this.farScale + (1 - this.farScale) * (sin + 1) * 0.5;
    assertNonUndefinedDevOnly(this.xPos);
    assertNonUndefinedDevOnly(this.xRadius);
    item.moveTo(
      this.xPos +
        scale * (Math.cos(rotation) * this.xRadius - item.fullWidth / 2),
      this.yPos + scale * sin * this.yRadius,
      scale
    );
  }

  protected carouselRender() {
    const count = this._items.length;
    const spacing = (2 * Math.PI) / count;
    let radians = this._rotation;
    for (let i = 0; i < count; i++) {
      this.rotateItem(i, radians);
      radians += spacing;
    }
  }

  protected scheduleNextFrame() {
    this._frameTimer = window.setTimeout(() => this.playFrame(), 32);
  }

  protected playFrame() {
    const change = this._destRotation - this._rotation;
    if (Math.abs(change) <= 0) {
      this._rotation = this._destRotation;
      window.clearTimeout(this._frameTimer);
      this._frameTimer = 0;
    } else {
      this._rotation += change * this.speed;
      this.scheduleNextFrame();
    }
    this.carouselRender();
  }

  protected go(count: number) {
    this._destRotation += ((2 * Math.PI) / this._items.length) * count;
    if (this._frameTimer === 0) this.scheduleNextFrame();
  }

  protected firstUpdated() {
    this.setupCarousel();
  }

  setupCarousel() {
    const carousel = this.querySelector<HTMLElement>(".carousel");
    if (!carousel) return;
    this._carousel = carousel;
    this._images = Array.from(this.querySelectorAll(".carousel-item"));
    for (const image of this._images) {
      image.removeAttribute("style");
    }

    this.xPos ??= this._carousel.offsetWidth * 0.5;
    this.yPos ??= this._carousel.offsetHeight * 0.1;
    this.xRadius ??= this._carousel.offsetWidth / 2.3;
    this.yRadius ??= this._carousel.offsetHeight / 6;
    this._items = this._images.map((item) => new Item(item));
    this.carouselRender();
  }

  connectedCallback() {
    super.connectedCallback();
    this.boundEventListener = () => {
      this.xRadius = this.xPos = undefined;
      this.setupCarousel();
    };
    window.addEventListener("resize", this.boundEventListener);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.boundEventListener);
  }

  protected goBack() {
    this.go(-1);
  }

  protected goForward() {
    this.go(1);
  }

  render() {
    return html`
      <slot></slot>
      <div class="carousel-controls">
        <button
          class="carousel-controls__previous-button"
          @click="${this.goBack}"
        ></button>
        <button
          class="carousel-controls__next-button"
          @click="${this.goForward}"
        ></button>
      </div>
    `;
  }
}
