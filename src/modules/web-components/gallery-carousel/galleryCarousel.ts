import { LitElement, PropertyValueMap, css, html } from "lit";
import { customElement, property, query, queryAssignedElements, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { styleMap } from "lit/directives/style-map.js";

declare global {
	interface HTMLElementTagNameMap {
		"gallery-carousel-component": GalleryCarouselComponent;
	}
}

@customElement("gallery-carousel-component")
export class GalleryCarouselComponent extends LitElement {
	static styles = css`
		.wrap {
			position: relative;
		}

		.gallery {
			position: relative;
			overflow: hidden;
			width: 100%;
			height: 100%;
		}

		.gallery-list {
			position: relative;
			width: inherit;
			height: inherit;
			margin: 0;
			padding: 0;
			list-style-type: none;
			font-size: 0;
			white-space: nowrap;
			line-height: 1;
			z-index: 10;
		}

		.gallery-item {
			display: inline-block;
			width: 100%;
			height: 100%;
		}

		.gallery-toggles {
      position: relative;
      z-index: 2;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style-type: none;
			padding: 0;
			gap: 0.3rem;
		}

		.gallery-toggle {
			width: 10px;
			height: 10px;
			cursor: pointer;
			border: 1px solid #e2e2e2;
			border-radius: 50%;
		}

		.gallery-toggle--active {
			background-color: #2390bb;
		}

		.gallery-controls {
			position: absolute;
			z-index: 1;
			display: flex;
			align-items: center;
			justify-content: space-between;
			left: -10%;
			right: -10%;
			top: 0;
			bottom: 0;
		}

		.gallery-controls__next-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 0 7.5px 13px;
			border-color: transparent transparent transparent #fff;
			background: none;
			cursor: pointer;
		}

		.gallery-controls__previous-button {
			width: 0;
			height: 0;
			border-style: solid;
			border-width: 7.5px 13px 7.5px 0;
			border-color: transparent #fff transparent transparent;
			background: none;
			cursor: pointer;
		}
	`;

	@property({ type: Boolean })
	smoothDiametralTransition = true;
	@property({ type: Number })
	current = 1;
	@property({ type: Number })
	frameGap = 20;
	@property({ type: Number })
	animationDuration = 500;

	@queryAssignedElements({ flatten: true })
	_carouselItems!: HTMLElement[];
	@query(".gallery-list")
	_galleryList!: HTMLElement;
	@query(".gallery")
	_galleryWrap!: HTMLElement;

	@state()
	_itemsLength = 0;
	@state()
	_isAnimating = false;

	protected interval?: number;

	protected firstUpdated(): void {
		const slides = this._carouselItems;
		this._itemsLength = slides.length;
		this._galleryList.style.left = this.current * -100 + "%";
		slides[0].before(slides[slides.length - 1].cloneNode(true));
		slides[slides.length - 1].after(slides[0].cloneNode(true));
	}

	protected checkCurrentSlide(value: number) {
		if (value === 0 || value > this._itemsLength) return value === 0 ? this._itemsLength : 1;
    return value;
	}

	protected slideTo(position: number, newPosition: number) {
		const galleryList = this._galleryList;
		this._isAnimating = true;
		const start = new Date();
		this.interval = window.setInterval(() => {
			let progress = (new Date().getTime() - start.getTime()) / this.animationDuration;
			if (progress > 1) progress = 1;
			galleryList.style.left =
				position + Math.abs(newPosition - position) * progress ** 2 * (position > newPosition ? -1 : 1) + "%";
			if (progress === 1) {
				clearInterval(this.interval);
				this._isAnimating = false;
				this.current = this.checkCurrentSlide(this.current);
        this._galleryList.style.left = this.current * -100 + "%";
			}
		}, this.frameGap);
	}

	protected changeCurrentSlide(slide: number) {
    if (this._itemsLength <= 1) return;
    if (!this.smoothDiametralTransition) slide = this.checkCurrentSlide(slide);
		const position = parseInt(this._galleryList.style.left, 10) || 0;
		const newPosition = slide * -100;
		if (!this._isAnimating && position !== newPosition) {
      this.current = slide;
			this.slideTo(position, newPosition);
		}
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearInterval(this.interval);
	}

	render() {
		return html`<div class="wrap">
			<div class="gallery">
				<ul class="gallery-list">
					<slot></slot>
				</ul>
			</div>
			<div class="gallery-controls">
				<button
					class="gallery-controls__previous-button"
					@click="${() => {
						this.changeCurrentSlide(this.current - 1);
					}}"
				></button>
				<button
					class="gallery-controls__next-button"
					@click="${() => {
						this.changeCurrentSlide(this.current + 1);
					}}"
				></button>
			</div>
			${this._itemsLength !== 0
				? html`<ul class="gallery-toggles">
						${Array.from(
							{ length: this._itemsLength },
							(_, i) =>
								html`<li
									class="gallery-toggle ${classMap({ "gallery-toggle--active": this.current - 1 === i })}"
									@click="${() => {
										this.changeCurrentSlide(i + 1);
									}}"
								></li>`
						)}
				  </ul>`
				: ""}
		</div>`;
	}
}
