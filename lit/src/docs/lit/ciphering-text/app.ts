import type { CipheringTextComponent } from "lit/src/components/ciphering-text/cipheringText";
import "../../../components/litEntry";
import "../../../global.css";
import { customElement } from "lit/decorators.js";
import { LitElement, css, html } from "lit";

import("../header");
import("../sidebar");
import("../../../components/ciphering-text/cipheringText")
	.then(({ CipheringTextComponent }) => {
		window.customElements.define("ciphering-text-component", class extends CipheringTextComponent {
			static styles = css`
				${CipheringTextComponent.styles}

				span {
					transition: all 50ms ease-in-out;
				}

				.active {
					color: #e3caca;
				}
			`;
		});
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("ciphering-text-application-example-1")
export class CipheringTextApplicationExample1 extends LitElement {
	render() {
		return html`<ciphering-text-component .strings=${["Carousel Accepts", "Now this is different"]}></ciphering-text-component>`;
	}
}

@customElement("ciphering-text-application-example-2")
export class CipheringTextApplicationExample2 extends LitElement {
	render() {
		return html`<ciphering-text-component .strings=${["Hello", "World"]}></ciphering-text-component>`;
	}
}

@customElement("ciphering-text-application-example-3")
export class CipheringTextApplicationExample3 extends LitElement {
	render() {
		return html`
			<ciphering-text-component
				.strings=${["Hello", "World", "Something", "Else"]}
				.characters=${"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")}
			></ciphering-text-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"ciphering-text-component": CipheringTextComponent;
		"ciphering-text-application-example-1": CipheringTextApplicationExample1;
		"ciphering-text-application-example-2": CipheringTextApplicationExample2;
		"ciphering-text-application-example-3": CipheringTextApplicationExample3;
	}
}
