import { LitElement, PropertyValues, css, html } from "lit";
import { property, query, queryAssignedElements, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { when } from "lit/directives/when.js";
import { carouselControlsStyles } from "../../interfaces/generic/carousel";
import { AutoplayController } from "../../interfaces/hooks/autoplayController";
import { OnePageScrollConfiguration, easeInOutQuad } from "shared/component/onePageScroll";
import { CarouselConfigurationAutoplayOptions, CarouselDirection } from "shared/interfaces/carousel";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";

export class OnePageScrollComponent extends LitElement implements OnePageScrollConfiguration {
	static styles = css`
		:host {
			display: block;
		}

		${carouselControlsStyles}

		.wrap {
			width: 100%;
			height: 100%;
			min-height: 100%;
			max-height: 100%;
			overflow-x: hidden;
			overflow-y: scroll;
		}

		.wrap--horizontal {
			display: flex;
			overflow-x: scroll;
			overflow-y: hidden;
		}

		.wrap--no-scrollbar {
			overflow: hidden;
		}

		.carousel-controls {
			margin-top: 12px;
		}

		::slotted(*) {
			display: block;
			flex: 1 0 0;
			box-sizing: border-box;
		}
	`;

	@property({ type: Number })
	duration = 500;
	@property({ type: Number })
	increment = 6;
	@property({ type: Boolean })
	noScrollbar = false;
	@property({ type: Boolean })
	allowSwitchingOrientation = false;
	@property({ type: Boolean })
	isVertical = false;
	@property({ type: Boolean })
	showArrows = false;
	@property({ type: Boolean })
	showToggles = false;
	@property({ type: Object })
	autoplay?: CarouselConfigurationAutoplayOptions;

	@state()
	private _currentItem = 0;
	private _previousItem = 0;
	private _isScrolling = false;
	private _autoplayController!: AutoplayController;

	@queryAssignedElements()
	_onePageScrollElements!: HTMLElement[];
	@query(".wrap")
	_wrapElement!: HTMLDivElement;

	protected firstUpdated(): void {
		this.requestUpdate();
		this._autoplayController = new AutoplayController(this, {
			autoplay: this.autoplay,
			nextSlide: this.nextSlide.bind(this),
			previousSlide: this.previousSlide.bind(this)
		});
	}

	protected updated(_changedProperties: PropertyValues): void {
		if (_changedProperties.has("isVertical") && _changedProperties.get("isVertical") !== undefined) {
			this.navigateToItem(this._previousItem);
		}
	}

	protected smoothScrollTo(to: number) {
		this._isScrolling = true;
		const wrap = this._wrapElement;
		const start = this.isVertical ? wrap.scrollTop : wrap.scrollLeft,
			change = to - start;
		let currentTime = 0;
		const property = this.isVertical ? "scrollTop" : "scrollLeft";

		const animateScroll = () => {
			currentTime += this.increment;
			const quad = easeInOutQuad(currentTime, start, change, this.duration);
			if (quad > this.increment) {
				wrap[property] = quad - this.increment / 2;
			} else wrap[property] = quad;
			if (currentTime < this.duration) {
				setTimeout(animateScroll, this.increment);
			} else if (currentTime >= this.duration) {
				wrap[property] = to;
				this._isScrolling = false;
			}
		};
		animateScroll();
	}

	protected scrollSlide(direction: CarouselDirection) {
		if (this._isScrolling) return;
		this._currentItem += direction;
		this.smoothScrollTo(
			this._onePageScrollElements[this._currentItem][this.isVertical ? "offsetHeight" : "offsetWidth"] * this._currentItem
		);
	}

	private nextSlide() {
		const items = this._onePageScrollElements;
		if (this._currentItem >= items.length - 1) {
			if (!this._isScrolling) this.smoothScrollTo((this._currentItem = 0));
		} else this.scrollSlide(CarouselDirection.FORWARDS);
	}

	private previousSlide() {
		const items = this._onePageScrollElements;
		if (this._currentItem === 0) {
			if (!this._isScrolling) {
				this._currentItem = items.length - 1;
				this.smoothScrollTo(
					(this.isVertical ? this._wrapElement.scrollHeight : this._wrapElement.scrollWidth) -
						(this.isVertical ? items[0].offsetHeight : items[0].offsetWidth)
				);
			}
		} else this.scrollSlide(CarouselDirection.BACKWARDS);
	}

	private navigateToItem(item: number) {
		if (this._isScrolling) return;
		const element = this._onePageScrollElements[0];
		this._currentItem = item;
		this.smoothScrollTo(element[this.isVertical ? "offsetHeight" : "offsetWidth"] * item);
		this._autoplayController.abortTimeout();
	}

	private switchOrientation() {
		if (this._isScrolling) return;
		this._previousItem = this._currentItem;
		this._currentItem = 0;
		this._autoplayController.abortTimeout();
		this.isVertical = !this.isVertical;
	}

	private onWheel(event: WheelEvent) {
		if (event.deltaY > 0) {
			this.nextSlide();
		} else this.previousSlide();
		this._autoplayController.abortTimeout();
	}

	render() {
		return html`<div
				class="wrap ${classMap({ "wrap--horizontal": !this.isVertical, "wrap--no-scrollbar": this.noScrollbar })}"
				@wheel=${{
					handleEvent: (e: WheelEvent) => {
						this.onWheel(e);
					},
					passive: true
				}}
			>
				<slot></slot>
			</div>
			${when(
				this.allowSwitchingOrientation || this.showArrows,
				() => html`
					<div class="carousel-controls">
						${when(
							this.showArrows,
							() => html`
								<button
									class="carousel-controls__previous-button"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.previousSlide();
									}}
								></button>
							`
						)}
						${when(
							this.allowSwitchingOrientation,
							() =>
								html`<button
									class="carousel-controls__perspective-button"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.switchOrientation();
									}}
								>
									Switch
								</button>`
						)}
						${when(
							this.showArrows,
							() => html`
								<button
									class="carousel-controls__next-button"
									@click=${() => {
										this._autoplayController.abortTimeout();
										this.nextSlide();
									}}
								></button>
							`
						)}
					</div>
				`
			)}
			${when(
				this.showToggles,
				() =>
					html`<ul class="carousel-controls__toggles">
						${map(
							range(this._onePageScrollElements.length),
							(i) =>
								html`<li
									class="carousel-controls__toggle ${classMap({
										"carousel-controls__toggle--active": i === this._currentItem
									})}"
									@click=${() => {
										this.navigateToItem(i);
									}}
								></li>`
						)}
					</ul>`
			)} `;
	}
}
