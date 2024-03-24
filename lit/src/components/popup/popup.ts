import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { PopupConfiguration } from "shared/component/popup";

export class PopupComponent extends LitElement implements PopupConfiguration {
	static styles = css`
		.popup {
			position: fixed;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			z-index: 10000;
		}
	`;

	@property({ type: Boolean })
	open = false;
	@property({ type: Boolean })
	displayOpenButton = false;
	@property({ type: Number })
	autoClosingTime?: number;

	openPopup() {
		if (this.open) return;
		this.open = true;

		if (this.autoClosingTime) {
			setTimeout(() => {
				this.closePopup();
			}, this.autoClosingTime ?? 0);
		}
	}

	closePopup() {
		if (!this.open) return;
		this.open = false;
	}

	render() {
		return html`${when(
			this.displayOpenButton,
			() =>
				html`<div
					@click="${() => {
						this.openPopup();
					}}"
				>
					<slot name="popup-open-button"></slot>
				</div>`
		)}
		${when(
			this.open,
			() =>
				html`<div class="popup">
					<slot name="popup"></slot>
				</div>`
		)}`;
	}
}
