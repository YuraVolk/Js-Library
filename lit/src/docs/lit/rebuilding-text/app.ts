import type { RebuildingTextComponent } from "lit/src/components/rebuilding-text/rebuildingText";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import type { SelfModifyingTextRenderer } from "lit/src/interfaces/generic/selfModifyingText";

import("../header");
import("../sidebar");
import("../../../components/rebuilding-text/rebuildingText")
	.then(({ RebuildingTextComponent }) => {
		window.customElements.define("rebuilding-text-component", RebuildingTextComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("rebuilding-text-application-example-1")
export class RebuildingTextApplicationExample1 extends LitElement {
	render() {
		return html`<rebuilding-text-component .strings=${["Test text", "The new resulting text", "Small"]}></rebuilding-text-component>`;
	}
}

@customElement("rebuilding-text-application-example-2")
export class RebuildingTextApplicationExample2 extends LitElement {
	render() {
		return html`<rebuilding-text-component .strings=${["Hello", "World"]}></rebuilding-text-component>`;
	}
}

@customElement("rebuilding-text-application-example-3")
export class RebuildingTextApplicationExample3 extends LitElement {
	render() {
		return html`
			<rebuilding-text-component
				.strings=${["Test text", "The new resulting text", "Small"]}
				.typingSpeed=${200}
			></rebuilding-text-component>
		`;
	}
}

@customElement("rebuilding-text-application-example-4")
export class RebuildingTextApplicationExample4 extends LitElement {
	static styles = css`
		span {
			display: inline-block;
			overflow: hidden;
			font-size: 24px;
			line-height: 56px;
			white-space: nowrap;
			transition: all 175ms ease;
		}

		transition-component {
			font-size: 0;
		}

		.leave-active > span {
			max-width: 1ch;
			min-width: 1ch;
		}

		.leave > span {
			max-width: 0;
			min-width: 0;
		}

		.enter > span {
			max-width: 1ch;
			min-width: 1ch;
		}

		.enter-active > span {
			max-width: 0;
			min-width: 0;
		}
	`;

	render() {
		return html`<rebuilding-text-component
			class="rebuilding-text"
			.strings=${["Test text", "The new resulting text", "Small"]}
			.renderElements=${((letter, index) => ({
				key: letter.letterState !== "idle" ? letter.letter + String(index) : String(index),
				value: html`<span class="leave">
					<span>${letter.letter}</span>
				</span>`
			})) satisfies SelfModifyingTextRenderer}
			.duration=${175}
			.typingSpeed=${70}
		></rebuilding-text-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"rebuilding-text-component": RebuildingTextComponent;
		"rebuilding-text-application-example-1": RebuildingTextApplicationExample1;
		"rebuilding-text-application-example-2": RebuildingTextApplicationExample2;
		"rebuilding-text-application-example-3": RebuildingTextApplicationExample3;
		"rebuilding-text-application-example-4": RebuildingTextApplicationExample4;
	}
}
