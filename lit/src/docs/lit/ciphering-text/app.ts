import type { CipheringTextComponent } from "lit/src/components/ciphering-text/cipheringText";
import "../../../components/litEntry";
import "../../../global.css";
import { customElement } from "lit/decorators.js";
import { LitElement, css, html } from "lit";
import type { SelfModifyingTextRenderer } from "lit/src/interfaces/generic/selfModifyingText";

import("../header");
import("../sidebar");
import("../../../components/ciphering-text/cipheringText")
	.then(({ CipheringTextComponent }) => {
		window.customElements.define(
			"ciphering-text-component",
			class extends CipheringTextComponent {
				static styles = [
					...CipheringTextComponent.styles,
					css`
						span {
							display: inline-block;
							overflow: hidden;
							font-size: 24px;
							line-height: 56px;
							white-space: pre;
							transition: all 0.1s ease;
							min-width: 0;
							max-width: 0;
						}

						transition-component {
							font-size: 0;
						}

						.leave-active {
							max-width: 1ch;
							min-width: 1ch;
						}

						.leave {
							max-width: 0;
							min-width: 0;
						}

						.enter {
							max-width: 1ch;
							min-width: 1ch;
						}

						.enter-active {
							max-width: 0;
							min-width: 0;
						}
					`
				];
			}
		);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

const styles = css`
	span {
		display: inline-block;
		overflow: hidden;
		font-size: 24px;
		line-height: 56px;
		white-space: pre;
	}

	span.active {
		color: #e3caca;
	}
`;

@customElement("ciphering-text-application-example-1")
export class CipheringTextApplicationExample1 extends LitElement {
	static styles = styles;

	render() {
		return html`<ciphering-text-component
			.strings=${["Lorem ipsum dolor", "sit amet"]}
			.renderElements=${((letter, index) => ({
				key: String(index),
				value: html`<span class=${letter.letterState === "changing" ? "active" : ""}>${letter.letter}</span>`
			})) satisfies SelfModifyingTextRenderer}
		>
		</ciphering-text-component>`;
	}
}

@customElement("ciphering-text-application-example-2")
export class CipheringTextApplicationExample2 extends LitElement {
	static styles = styles;

	render() {
		return html`<ciphering-text-component
			.strings=${["Hello", "World"]}
			.renderElements=${((letter, index) => ({
				key: String(index),
				value: html`<span class=${letter.letterState === "changing" ? "active" : ""}>${letter.letter}</span>`
			})) satisfies SelfModifyingTextRenderer}
		></ciphering-text-component>`;
	}
}

@customElement("ciphering-text-application-example-3")
export class CipheringTextApplicationExample3 extends LitElement {
	static styles = styles;

	render() {
		return html`
			<ciphering-text-component
				.strings=${["Hello", "World", "Something", "Else"]}
				.characters=${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
				.renderElements=${((letter, index) => ({
					key: String(index),
					value: html`<span class=${letter.letterState === "changing" ? "active" : ""}>${letter.letter}</span>`
				})) satisfies SelfModifyingTextRenderer}
			></ciphering-text-component>
		`;
	}
}

@customElement("ciphering-text-application-example-4")
export class CipheringTextApplicationExample4 extends LitElement {
	static styles = css`
		span {
			display: inline-block;
			overflow: hidden;
			font-size: 24px;
			line-height: 56px;
			white-space: pre;
			transition: all 0.1s ease;
			min-width: 0;
			max-width: 0;
		}

		transition-component {
			font-size: 0;
		}

		.leave-active {
			max-width: 1ch;
			min-width: 1ch;
		}

		.leave {
			max-width: 0;
			min-width: 0;
		}

		.enter {
			max-width: 1ch;
			min-width: 1ch;
		}

		.enter-active {
			max-width: 0;
			min-width: 0;
		}
	`;

	render() {
		return html`<ciphering-text-component
			.strings=${["Hello", "World", "New Text", "Something else"]}
			.typingSpeed=${45}
			.characters=${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
			.renderElements=${((letter, index) => ({
				key: letter.letterState === "changing" ? letter.letter + String(index) : String(index),
				value: html`<span>${letter.letter}</span>`
			})) satisfies SelfModifyingTextRenderer}
			.duration=${100}
		></ciphering-text-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ciphering-text-component": CipheringTextComponent;
		"ciphering-text-application-example-1": CipheringTextApplicationExample1;
		"ciphering-text-application-example-2": CipheringTextApplicationExample2;
		"ciphering-text-application-example-3": CipheringTextApplicationExample3;
		"ciphering-text-application-example-4": CipheringTextApplicationExample4;
	}
}
