import { LitElement, html } from "lit";
import { property, queryAssignedElements } from "lit/decorators.js";
import { assertNonUndefined } from "shared/utils/utils";

export class ImageMagnifierComponent extends LitElement {
	@property({ type: Number })
	zoomScale = 2;
	@property({ type: Boolean })
	autoConfigureGlassSource = false;

	@queryAssignedElements({ flatten: true })
	_image!: HTMLElement[];
	@queryAssignedElements({ selector: "[data-magnifier-glass]" })
	_glass!: HTMLElement[];

  protected cachedGlass!: HTMLElement;
  protected cachedImage!: HTMLElement;
	private moveListener?: (event: MouseEvent) => void;

  protected moveMagnifier(x: number, y: number) {
    const image = this.cachedImage, glass = this.cachedGlass;
    const width = glass.offsetWidth / 2, height = glass.offsetHeight / 2;
    if (x > image.offsetWidth) {
      x = image.offsetWidth;
    } else if (x < 0) x = 0;
    if (y > image.offsetHeight) {
      y = image.offsetHeight;
    } else if (y < 0) y = 0;

    glass.style.left = `${x - width}px`;
    glass.style.top = `${y - height}px`;
    glass.style.backgroundPosition = "-" + (x * this.zoomScale - width) + "px -" + (y * this.zoomScale - height) + "px";
  }

	protected firstUpdated(): void {
		const image = this._image[0].querySelector<HTMLElement>("[data-magnifier-content]"), [glass] = this._glass;
    assertNonUndefined(image);
		if (this.autoConfigureGlassSource && image.hasAttribute("src")) {
			glass.style.backgroundImage = `url("${image.getAttribute("src") ?? ""}")`;
		}
		glass.style.backgroundSize = `${image.offsetWidth * this.zoomScale}px ${image.offsetHeight * this.zoomScale}px`;
    this.cachedImage = image, this.cachedGlass = glass;

    this.moveListener = (event) => {
      event.preventDefault();
      const rect = image.getBoundingClientRect();
      this.moveMagnifier(event.pageX - rect.left - window.scrollX, event.pageY - rect.top - window.scrollY);
    };
    image.addEventListener("mousemove", this.moveListener);
    glass.addEventListener("mousemove", this.moveListener);
    image.addEventListener("pointermove", this.moveListener);
    image.addEventListener("pointermove", this.moveListener);
	}

	render() {
		return html`<slot></slot>`;
	}
}
