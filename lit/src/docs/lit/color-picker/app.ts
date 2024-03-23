import type { ColorPickerComponent } from "lit/src/components/color-picker/colorPicker";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";

import colorPickerImage from "../../../../../assets/img/picker.jpg";
import { customElement } from "lit/decorators.js";

import("../header");
import("../sidebar");
import("../../../components/color-picker/colorPicker")
	.then(({ ColorPickerComponent }) => {
		window.customElements.define("color-picker-component", ColorPickerComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("color-picker-application-example-1")
export class ColorPickerApplicationExample1 extends LitElement {
	static styles = css`
		.color-picker {
			position: relative;
			z-index: 2;
		}
	`;

	render() {
		return html` <color-picker-component class="color-picker" imageUrl=${colorPickerImage}></color-picker-component> `;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"color-picker-component": ColorPickerComponent;
		"color-picker-application-example-1": ColorPickerApplicationExample1;
	}
}
