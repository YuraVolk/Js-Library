import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { StickyHeaderConfiguration } from "shared/component/stickyHeader";
import { generateThreshold } from "shared/interfaces/intersectionObserved";

declare global {
	interface HTMLElementTagNameMap {
		"sticky-header-component": StickyHeaderComponent;
	}
}

@customElement("sticky-header-component")
export class StickyHeaderComponent extends LitElement implements StickyHeaderConfiguration {
	@property()
	rootMargin = "0px";
	@property({ type: Number })
	ratio = 0.25;
	@property()
	fixedClassName = "fixed";

	@queryAssignedElements({ flatten: true })
	_headers!: HTMLElement[];

	protected intersectionObserver?: IntersectionObserver;

	protected firstUpdated() {
		const header = this._headers[0];
		this.intersectionObserver = new IntersectionObserver(
			([entry]) => {
				if (entry.intersectionRatio <= this.ratio && !header.classList.contains(this.fixedClassName)) {
					header.classList.add(this.fixedClassName);
					const { top, left } = header.getBoundingClientRect();
					Object.assign(header.style, {
						position: "fixed",
						top: `${top}px`,
						left: `${left}px`
					});
					header.getBoundingClientRect();
					Object.assign(header.style, { top: "0", left: "0", right: "0" });
				} else if (entry.intersectionRatio > this.ratio && header.classList.contains(this.fixedClassName)) {
					header.classList.remove(this.fixedClassName);
					Object.assign(header.style, {
						position: "",
						top: "",
						left: "",
						right: ""
					});
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
