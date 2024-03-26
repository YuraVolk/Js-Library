import { LitElement, css, html } from "lit";
import { property, state } from "lit/decorators.js";
import { ScrollingAdConfiguration } from "shared/component/scrollingAd";
import { getFirstScrollableParent } from "shared/utils/domUtils";
import { generateThreshold } from "shared/interfaces/intersectionObserved";
import { StyleInfo, styleMap } from "lit/directives/style-map.js";

export class ScrollingAdComponent extends LitElement implements ScrollingAdConfiguration {
	static styles = css`
		:host {
			display: contents;
		}

		.scrolling-ad {
			all: inherit;
			display: revert;
		}
	`;

	@property({ type: Number })
	rootMargin = 0;
	@property({ type: Number })
	checkInterval = 500;

	@state()
	_scrollingAdStyles: StyleInfo = {};

	protected intersectionObserver?: IntersectionObserver;
	private interval?: number;

	protected firstUpdated(): void {
		const scrollableParent = getFirstScrollableParent(this, false);
		this.intersectionObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio < 1) {
					const top = scrollableParent instanceof HTMLElement ? scrollableParent.scrollTop : scrollableParent.scrollY;
					this._scrollingAdStyles = {
						top: `${String(top + this.offsetHeight + this.rootMargin)}px`
					};
				}
			},
			{
				rootMargin: `${String(this.rootMargin)}px`,
				threshold: generateThreshold()
			}
		);
		this.interval = window.setInterval(() => {
			const top = scrollableParent instanceof HTMLElement ? scrollableParent.scrollTop : scrollableParent.scrollY;
			this._scrollingAdStyles = {
				top: `${String(top + this.offsetHeight + this.rootMargin)}px`
			};
		}, this.interval);

		this.intersectionObserver.observe(this);
	}

	disconnectedCallback(): void {
		window.clearInterval(this.interval);
		this.intersectionObserver?.disconnect();
		super.disconnectedCallback();
	}

	render() {
		return html`<div class="scrolling-ad" style=${styleMap(this._scrollingAdStyles)}>
			<slot></slot>
		</div>`;
	}
}
