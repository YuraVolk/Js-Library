import type { PopupComponent } from "lit/src/components/popup/popup";
import "../../../components/litEntry";
import "../../../global.css";
import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

import popupCloseButton from "../../../../../assets/img/close.png";

import("../header");
import("../sidebar");
import("../../../components/popup/popup")
	.then(({ PopupComponent }) => {
		window.customElements.define("popup-component", PopupComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("popup-application-example-1")
export class PopupApplicationExample1 extends LitElement {
	static styles = css`
		.popup-wrap {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			box-shadow:
				0 4px 8px 0 rgba(0, 0, 0, 0.2),
				0 6px 20px 0 rgba(0, 0, 0, 0.19);
			background-color: rgba(0, 0, 0, 0.4);
		}

		.popup {
			position: absolute;
			display: flex;
			justify-content: center;
			align-items: center;
			width: 300px;
			height: 300px;
			box-sizing: border-box;
			padding-top: 12.5px;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 24px;
			box-shadow:
				0 4px 8px 0 rgba(0, 0, 0, 0.2),
				0 6px 20px 0 rgba(0, 0, 0, 0.19);
			text-align: center;
			color: #bfbfbf;
			background-color: #676767;
			border: 3px solid #000000;
		}

		.popup__close-button {
			position: absolute;
			width: 20px;
			height: 20px;
			right: 10px;
			top: 10px;
			cursor: pointer;
		}

		.popup-open-button {
			background-color: #5b1f1f;
			padding: 12px;
			border: none;
			border-radius: 3px;
			text-transform: uppercase;
			color: #e2e2e2;
			font-size: 17px;
			cursor: pointer;
		}
	`;

	render() {
		return html`
			<popup-component displayOpenButton>
				<button class="popup-open-button" slot="popup-open-button">Open Popup</button>
				<div class="popup-wrap" slot="popup">
					<div class="popup">
						<img class="popup__close-button" data-popup-close-button src=${popupCloseButton} alt="Close Button" />
						<p>Sample popup. This is a template for making different popups.</p>
					</div>
				</div>
			</popup-component>
		`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"popup-component": PopupComponent;
		"popup-application-example-1": PopupApplicationExample1;
	}
}
