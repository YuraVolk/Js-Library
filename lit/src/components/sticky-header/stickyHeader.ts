import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { LinkedCarouselMixin } from "../../interfaces/hooks/linkedItems";
import { StickyHeaderConfiguration } from "shared/component/stickyHeader";
import { generateThreshold } from "shared/interfaces/intersectionObserved";
import { StickyHeaderElement } from "./stickyHeaderElement";

export class StickyHeaderComponent extends LinkedCarouselMixin(LitElement) implements StickyHeaderConfiguration {
	@property()
	rootMargin = "0px";
	@property({ type: Number })
	ratio = 0.25;
	@property()
	fixedClassName = "fixed";

	protected intersectionObserver?: IntersectionObserver;

	protected firstUpdated() {
		const header = this.linkedItemsContext["sticky-header"];
		let isFixed = false;

		this.intersectionObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio <= this.ratio && !isFixed) {
					isFixed = true;
					const { top, left } = header.element.getBoundingClientRect();
					Object.assign(header.element.style, {
						position: "fixed",
						top: `${String(top)}px`,
						left: `${String(left)}px`
					});
					header.element.getBoundingClientRect();

					header.styles = {
						position: "fixed",
						top: "0",
						left: "0",
						right: "0"
					};
				} else if (entry.intersectionRatio > this.ratio && isFixed) {
					isFixed = false;
					header.styles = {};
				}
			},
			{
				rootMargin: this.rootMargin,
				threshold: generateThreshold()
			}
		);

		this.intersectionObserver.observe(this);
	}

	disconnectedCallback(): void {
		this.intersectionObserver?.disconnect();
		super.disconnectedCallback();
	}

	render() {
		return html`<slot></slot>`;
	}
}

export { StickyHeaderElement };
