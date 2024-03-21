import { LitElement, css, html } from "lit";
import { property, query, queryAssignedElements } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { OnePageScrollConfiguration, easeInOutQuad } from "shared/component/onePageScroll";
import { CarouselDirection } from "shared/interfaces/carousel";

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

		::slotted(*) {
			display: block;
			flex: 1 0 0;
			box-sizing: border-box;
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

	private _selectedItem = 0;
	private _isScrolling = false;

	@queryAssignedElements()
	_onePageScrollElements!: HTMLElement[];
	@query(".wrap")
	_wrapElement!: HTMLDivElement;

	protected smoothScrollTo(to: number) {
		this._isScrolling = true;
		const wrap = this._wrapElement;
		const start = this.isHorizontal ? wrap.scrollLeft : wrap.scrollTop,
			change = to - start;
		let currentTime = 0;
		const property = this.isHorizontal ? "scrollLeft" : "scrollTop";

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
		this._selectedItem += direction;
		this.smoothScrollTo(
			this._onePageScrollElements[this._selectedItem][this.isHorizontal ? "offsetWidth" : "offsetHeight"] * this._selectedItem
		);
	}

	private onWheel(event: WheelEvent) {
		const items = this._onePageScrollElements;
		if (event.deltaY > 0) {
			if (this._selectedItem >= items.length - 1) {
				if (!this._isScrolling) this.smoothScrollTo((this._selectedItem = 0));
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
	}

	render() {
		return html`<div
			class="wrap ${classMap({ "wrap--horizontal": this.isHorizontal, "wrap--no-scrollbar": this.noScrollbar })}"
			@wheel=${{
				handleEvent: (e: WheelEvent) => {
					this.onWheel(e);
				},
				passive: true
			}}
		>
			<slot></slot>
		</div>`;
	}
}
