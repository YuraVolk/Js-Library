import { css, html, LitElement, render, TemplateResult } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { map } from "lit/directives/map.js";
import { range } from "lit/directives/range.js";
import { styleMap } from "lit/directives/style-map.js";
import { MarqueeCarouselConfiguration } from "shared/component/marqueeCarousel";

export class MarqueeCarouselComponent extends LitElement implements Required<MarqueeCarouselConfiguration> {
	static styles = css`
		:host {
			display: block;
			overflow: hidden;
		}

		.marquee {
			width: 10000vw;
		}

		.marquee-text {
			animation-name: marquee-scroll-animation;
			animation-timing-function: linear;
			animation-iteration-count: infinite;
			animation-duration: var(--duration);
			float: left;
		}

		.marquee--paused .marquee-text {
			animation-play-state: paused;
		}

		.marquee-text--reversed {
			animation-direction: reverse;
		}

		@keyframes marquee-scroll-animation {
			from {
				transform: translateX(0);
			}

			to {
				transform: translateX(-100%);
			}
		}
	`;

	@property({ type: String })
	duration = "15s";
	@property({ type: Number })
	repetitions = 2;
	@property({ type: Boolean })
	isPaused = false;
	@property({ type: Boolean })
	isReversed = false;
	@property({ attribute: false })
	renderItem: (i: number) => TemplateResult<1> = () => html``;

	protected render(): unknown {
		render(
			map(range(this.repetitions), (repetition) => this.renderItem(repetition)),
			this
		);

		return html`<div
			class="marquee ${classMap({
				"marquee--paused": this.isPaused
			})}"
			style=${styleMap({
				"--duration": this.duration
			})}
		>
			${map(
				range(this.repetitions),
				(i) =>
					html`<div class="marquee-text ${classMap({ "marquee-text--reversed": this.isReversed })}">
						<slot name=${i}></slot>
					</div>`
			)}
		</div>`;
	}
}
