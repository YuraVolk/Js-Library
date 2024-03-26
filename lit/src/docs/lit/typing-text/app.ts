import type { TypingTextComponent } from "lit/src/components/typing-text/typingText";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import("../header");
import("../sidebar");
import("../../../components/typing-text/typingText")
	.then(({ TypingTextComponent }) => {
		window.customElements.define("typing-text-component", TypingTextComponent);
		window.customElements.define(
			"typing-text-animated-component",
			class extends TypingTextComponent {
				static styles = [
					...TypingTextComponent.styles,
					css`
						@keyframes color {
							50% {
								color: #57bb9d;
							}
						}

						span {
							animation: 0.5s color infinite;
						}
					`
				];
			}
		);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("typing-text-application-example-1")
export class TypingTextApplicationExample1 extends LitElement {
	static styles = css`
		.typing-text {
			display: block;
			max-width: 50vw;
			white-space: unset;
			font-size: 24px;
			line-height: 54px;
			min-height: 5lh;
		}
	`;

	render() {
		return html`<typing-text-component
			class="typing-text"
			.strings=${[
				"Nulla facilisi. Cras venenatis nulla non erat luctus ultrices. In facilisis tincidunt tristique. Curabitur lobortis sapien a metus lobortis, et lobortis nunc suscipit. Fusce orci mauris, bibendum et vehicula ac, fringilla at elit.",
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque nam! Perferendis non, deleniti tempore soluta magnam expedita nulla? Est repudiandae error rerum dolorum dolor ducimus ex tempore aut temporibus."
			]}
		></typing-text-component>`;
	}
}

@customElement("typing-text-application-example-2")
export class TypingTextApplicationExample2 extends LitElement {
	static styles = css`
		.typing-text {
			display: block;
			max-width: 50vw;
			white-space: unset;
			font-size: 24px;
			line-height: 54px;
			min-height: 5lh;
		}
	`;
	render() {
		return html`<typing-text-animated-component
			class="typing-text"
			.strings=${[
				"",
				"Nulla facilisi. Cras venenatis nulla non erat luctus ultrices. In facilisis tincidunt tristique. Curabitur lobortis sapien a metus lobortis, et lobortis nunc suscipit. Fusce orci mauris, bibendum et vehicula ac, fringilla at elit.",
				"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque nam! Perferendis non, deleniti tempore soluta magnam expedita nulla? Est repudiandae error rerum dolorum dolor ducimus ex tempore aut temporibus."
			]}
		></typing-text-animated-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"typing-text-component": TypingTextComponent;
		"typing-text-animated-component": TypingTextComponent;
		"typing-text-application-example-1": TypingTextApplicationExample1;
		"typing-text-application-example-2": TypingTextApplicationExample2;
	}
}
