import "../../../components/litEntry";
import "../../../global.css";

import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import { SelfModifyingTextRenderer } from "lit/src/interfaces/generic/selfModifyingText";
import type { BubbleTextComponent } from "../../../components/bubble-text/bubbleText";

import("../header");
import("../sidebar");
import("../../../components/bubble-text/bubbleText")
	.then(({ BubbleTextComponent }) => {
		window.customElements.define("bubble-text-component", BubbleTextComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("bubble-text-application-example-1")
export class BubbleTextApplicationExample1 extends LitElement {
	static styles = css`
		span {
			display: inline-block;
			white-space: pre;
			font-size: 24px;
			line-height: 54px;
			overflow: hidden;
			transition: all 175ms linear;
		}

		transition-component {
			font-size: 0;
		}

        .appear-active,
		.enter-active {
            max-width: 0;
            min-width: 0;
        }

        .appear,
        .enter {
            max-width: 1ch;
            min-width: 1ch;
        }

		.leave-active {
            max-width: 1ch;
            min-width: 1ch;
        }
        
        .leave {
            max-width: 0;
            min-width: 0;
        }
	`;

	render() {
		return html`<bubble-text-component
			.strings=${["Lorem ipsum dolor", "sit amet dolor consecteur"]}
			.renderElements=${((letter, index) => ({
				key: letter.letter + String(index),
				value: html`<span class="leave">${letter.letter}</span>`
			})) satisfies SelfModifyingTextRenderer}
			.duration=${175}
            .typingSpeed=${175}
		></bubble-text-component>`;
	}
}

@customElement("bubble-text-application-example-2")
export class BubbleTextApplicationExample2 extends LitElement {
	static styles = css`
		span {
			display: inline-block;
			white-space: pre;
			font-size: 24px;
			line-height: 54px;
			overflow: hidden;
			transition: all 175ms linear;
		}

		transition-component {
			font-size: 0;
		}

        .appear-active,
		.enter-active {
            max-width: 0;
            min-width: 0;
        }

        .appear,
        .enter {
            max-width: 1ch;
            min-width: 1ch;
        }

		.leave-active {
            max-width: 1ch;
            min-width: 1ch;
        }
        
        .leave {
            max-width: 0;
            min-width: 0;
        }
	`;

	render() {
		return html`<bubble-text-component
			.strings=${["Lorem ipsum dolor", "sit amet dolor consecteur"]}
			.renderElements=${((letter, index) => ({
				key: letter.letter + String(index),
				value: html`<span class="leave">${letter.letter}</span>`
			})) satisfies SelfModifyingTextRenderer}
			.duration=${175}
		></bubble-text-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"bubble-text-component": BubbleTextComponent;
		"bubble-text-application-example-1": BubbleTextApplicationExample1;
        "bubble-text-application-example-2": BubbleTextApplicationExample2;
	}
}
