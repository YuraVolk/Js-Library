import type { ToastComponent } from "lit/src/components/toast/toast";
import "../../../components/litEntry";
import "../../../global.css";
import "./style.css";
import { customElement, state } from "lit/decorators.js";
import { LitElement, css, html } from "lit";
import { createRef, ref } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";

import("../header");
import("../sidebar");
import("../../../components/toast/toast")
	.then(({ ToastComponent }) => {
		window.customElements.define("toast-component", ToastComponent);
	})
	.catch((e: unknown) => {
		console.trace(e);
	});

@customElement("toast-application-example-1")
export class ToastApplicationExample1 extends LitElement {
	static styles = css`
		.toast {
			position: fixed;
			bottom: -200px;
			left: 50%;
			width: 50%;
			transform: translateX(-50%);
			min-width: 300px;
			background-color: #8a2be2;
			opacity: 0.95;
			padding: 8px;
			border-radius: 25px;
			height: 200px;
			color: #e6e6e6;
			z-index: 9999;
			font-family: "Lucida Console", Geneva, Verdana, "sans-serif";
			box-sizing: border-box;
			padding-top: 16px;
			animation: slide-up 0.8s ease-out forwards;
			transition: all 0.8s ease-in;
		}

		.toast-content {
			display: flex;
			justify-content: space-between;
		}

		.toast-buttons {
			display: flex;
			justify-content: space-around;
			width: 200px;
		}

		.toast-button {
			display: inline-block;
			margin: 0;
			white-space: nowrap;
			text-align: center;
			color: #222;
			background-color: #ccc;
			border-radius: 5px;
			border: none;
			cursor: pointer;
			padding: 7px;
			box-sizing: border-box;
		}

		.toast.leave-active {
			transform: translate(-50%, 50%);
		}

		@keyframes slide-up {
			from {
				bottom: -200px;
			}

			to {
				bottom: -150px;
			}
		}
	`;

	@state()
	private _isOpen = true;
	private _transitionRef = createRef<ToastComponent>();

	private closeToast() {
		this._isOpen = false;
	}

	render() {
		return html`<toast-component
			?isOpen=${this._isOpen}
			.transitionDuration=${800}
			@transition-display-directive-init=${() => {
				this.requestUpdate();
			}}
			${ref(this._transitionRef)}
		>
			${when(
				this._transitionRef.value,
				() =>
					html`<div class="toast ${this._transitionRef.value?.transitionDirective() ?? ""}">
						<div class="toast-content">
							<span>Some Toast Content Here</span>
							<div class="toast-buttons">
								<button
									class="toast-button"
									@click=${() => {
										this.closeToast();
									}}
								>
									OK
								</button>
								<button
									class="toast-button"
									@click=${() => {
										this.closeToast();
									}}
								>
									Cancel
								</button>
							</div>
						</div>
					</div>`
			)}
		</toast-component>`;
	}
}

declare global {
	interface HTMLElementTagNameMap {
		"toast-component": ToastComponent;
		"toast-application-example-1": ToastApplicationExample1;
	}
}
