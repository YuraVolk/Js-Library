import type { RebuildingTextComponent } from "lit/src/components/rebuilding-text/rebuildingText";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

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

declare global {
	interface HTMLElementTagNameMap {
		"rebuilding-text-component": RebuildingTextComponent;
		"rebuilding-text-application-example-1": RebuildingTextApplicationExample1;
		"rebuilding-text-application-example-2": RebuildingTextApplicationExample2;
		"rebuilding-text-application-example-3": RebuildingTextApplicationExample3;
	}
}
