import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getFirstScrollableParent } from "src/modules/interfaces/generic/domUtils/domUtils";

declare global {
	interface HTMLElementTagNameMap {
		"scrolling-ad-component": ScrollingAdComponent;
	}
}

@customElement("scrolling-ad-component")
export class ScrollingAdComponent extends LitElement {
	@property({ type: Number })
	rootMargin = 0;
    @property({ type: Number })
    checkInterval = 500;

	protected intersectionObserver?: IntersectionObserver;
    private interval?: number;

    protected firstUpdated(): void {
        const scrollableParent = getFirstScrollableParent(this, false);
        this.intersectionObserver = new IntersectionObserver(([entry]) => {
            if (entry.intersectionRatio < 1) {
                const top = scrollableParent instanceof HTMLElement 
                    ? scrollableParent.scrollTop
                    : scrollableParent.scrollY;
                this.style.top = `${top + this.offsetHeight + this.rootMargin}px`;
            }
        }, {
            rootMargin: `${this.rootMargin}px`,
            threshold: [0, ...Array.from({ length: Math.ceil(1 * 100) }, (_, index) => index / 100), 1]
        });
        this.interval = window.setInterval(() => {
            const top = scrollableParent instanceof HTMLElement 
                ? scrollableParent.scrollTop
                : scrollableParent.scrollY;
            this.style.top = `${top + this.offsetHeight + this.rootMargin}px`;
        }, this.interval);

        this.intersectionObserver.observe(this);
    }

    disconnectedCallback(): void {
        window.clearInterval(this.interval);
        this.intersectionObserver?.disconnect();
        super.disconnectedCallback();
    }

    render() {
        return html`<slot></slot>`;
    }
}
