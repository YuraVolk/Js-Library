import { LitElement, css, html } from "lit";
import { customElement, property, query, queryAssignedElements, state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { OnePageScrollConfiguration } from "src/modules/interfaces/component/one-page-scroll/types";
import { CarouselDirection } from "src/modules/interfaces/generic/carousel/carousel";

declare global {
	interface HTMLElementTagNameMap {
		"one-page-scroll-component": OnePageScrollComponent;
	}
}

@customElement("one-page-scroll-component")
export class OnePageScrollComponent extends LitElement implements OnePageScrollConfiguration {
	static styles = css`
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
	`;

	@property({ type: Boolean })
	isHorizontal = false;
	@property({ type: Number })
	duration = 500;
	@property({ type: Number })
	increment = 6;
    @property({ type: Boolean })
    noScrollbar = false;

	@state()
	_selectedItem = 0;
	@state()
	_isScrolling = false;

	private scrollEventListener?: (event: WheelEvent) => void;

	@queryAssignedElements()
	_onePageScrollElements!: HTMLElement[];
	@query(".wrap")
	_wrapElement!: HTMLDivElement;

	private easeInOutQuad(t: number, b: number, c: number, d: number) {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	}

	protected smoothScrollTo(to: number) {
		this._isScrolling = true;
		const wrap = this._wrapElement;
		const start = this.isHorizontal ? wrap.scrollLeft : wrap.scrollTop,
			change = to - start;
		let currentTime = 0;
        const property = this.isHorizontal ? "scrollLeft" : "scrollTop";

		const animateScroll = () => {
			if (!this.scrollEventListener) return;
            currentTime += this.increment;
            const quad = this.easeInOutQuad(currentTime, start, change, this.duration);
            if (quad > this.increment) {
                wrap[property] = quad - (this.increment / 2);
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

	protected scrollSlide(direction: CarouselDirection.BACKWARDS | CarouselDirection.FORWARDS) {
		if (this._isScrolling) return;
        this._selectedItem += direction;
		this.smoothScrollTo(this._onePageScrollElements[this._selectedItem].offsetHeight * this._selectedItem);    
	}

	protected firstUpdated() {
		const items = this._onePageScrollElements;
		this._wrapElement.addEventListener(
			"wheel",
			(this.scrollEventListener = (event) => {
				if (event.deltaY > 0) {
					if (this._selectedItem >= items.length - 1) {
						if (!this._isScrolling) this.smoothScrollTo(this._selectedItem = 0);
					} else this.scrollSlide(CarouselDirection.FORWARDS);
				} else {
					if (this._selectedItem === 0) {
						if (!this._isScrolling) {
							this._selectedItem = items.length - 1;
							this.smoothScrollTo(
								(this.isHorizontal ? this._wrapElement.scrollWidth : this._wrapElement.scrollHeight) -
									(this.isHorizontal ? items[0].offsetWidth : items[0].offsetHeight)
							);
						}
					} else this.scrollSlide(CarouselDirection.BACKWARDS);
				}
			}),
            { passive: true }
		);
	}

	disconnectedCallback(): void {
		if (this.scrollEventListener) this._wrapElement.removeEventListener("wheel", this.scrollEventListener);
		super.disconnectedCallback();
	}

	render() {
		return html`<div class="wrap ${classMap({ "wrap--horizontal": this.isHorizontal, "wrap--no-scrollbar": this.noScrollbar })}">
			<slot></slot>
		</div>`;
	}
}
