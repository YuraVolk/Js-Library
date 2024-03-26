import type { RangeInputComponent } from "lit/src/components/range-input/rangeInput";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";
import { customElement } from "lit/decorators.js";
import { LitElement, css, html } from "lit";

import("../header");
import("../sidebar");
import("../../../components/range-input/rangeInput")
	.then(({ RangeInputComponent }) => {
		window.customElements.define("range-input-component", RangeInputComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("range-input-application-example-1")
class RangeInputApplicationExample1 extends LitElement {
	static styles = css`
		:host {
			display: contents;
		}

		range-input-component {
			all: inherit;
			display: block;
		}		
	`;

	render() {
		return html`<range-input-component .ticks=${[0, 25, 50, 75, 100]}></range-input-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"range-input-component": RangeInputComponent;
		"range-input-application-example-1": RangeInputApplicationExample1;
	}
}
