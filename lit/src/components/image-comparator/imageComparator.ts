import { LitElement, css, html } from "lit";
import { queryAssignedElements, query } from "lit/decorators.js";

export class ImageComparatorComponent extends LitElement {
  static styles = css`
    .wrap {
      position: relative;
      width: 100%;
      height: 100%;
    }

    .comparison-slider {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      width: 40px;
      height: 40px;
      background-color: #333;
      border-radius: 50%;
      cursor: ew-resize;
    }
  `;

  @queryAssignedElements()
  _comparatorElements!: HTMLElement[];
  @query(".wrap")
  _wrapElement!: HTMLDivElement;

  private windowListeners: Array<(event: MouseEvent | PointerEvent) => void> = [];

  protected initializeImageComparator(index: number) {
    const elements = this._comparatorElements;
    const image = elements[index], { offsetWidth } = image;
    let clicked = false;
    const slider = document.createElement("div");
    slider.setAttribute("class", "comparison-slider");
    this._wrapElement.append(slider);
    slide(offsetWidth - (offsetWidth / (elements.length) * (index)));

    function slide(difference: number) {
      image.style.width = difference + "px";
      slider.style.left = image.offsetWidth - (slider.offsetWidth / 2) + "px";
    }

    const mouseStartListener = (event: Event) => {
      event.preventDefault();
      clicked = true;
    };
    slider.addEventListener("mousedown", mouseStartListener);
    slider.addEventListener("pointerdown", mouseStartListener);

    this.windowListeners.unshift(event => {
      if (!clicked) return false;
      image.style.left = "0";
      let pos = event.pageX - image.getBoundingClientRect().left - window.scrollX;
      if (pos < 0) pos = 0;
      if (pos > offsetWidth) pos = offsetWidth;
      slide(pos);
    });
    window.addEventListener("mousemove", this.windowListeners[0], { passive: true });
    window.addEventListener("pointermove", this.windowListeners[0], { passive: true });

    this.windowListeners.unshift(() => { clicked = false; });
    window.addEventListener("mouseup", this.windowListeners[0], { passive: true });
    window.addEventListener("pointerup", this.windowListeners[0], { passive: true });
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    for (const listener of this.windowListeners) {
      (["mousemove", "pointermove", "mouseup", "pointerup"] as const).forEach((listenerName) => {
        window.removeEventListener(listenerName, listener);
      });
    }
  }

  protected firstUpdated(): void {
    for (let i = 1; i < this._comparatorElements.length; i++) this.initializeImageComparator(i);
  }

  render() {
    return html`<div class="wrap">
      <slot></slot>
    </div>`;
  }
}
