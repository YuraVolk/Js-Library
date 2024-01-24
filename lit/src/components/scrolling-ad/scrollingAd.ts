import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { ScrollingAdConfiguration } from "shared/component/scrollingAd";
import { getFirstScrollableParent } from "shared/utils/domUtils";
import { generateThreshold } from "shared/interfaces/intersectionObserved";

export class ScrollingAdComponent extends LitElement implements ScrollingAdConfiguration {
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
            threshold: generateThreshold()
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
