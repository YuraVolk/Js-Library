import { LitElement, css, html } from "lit";
import { customElement, property, queryAssignedElements, queryAsync } from "lit/decorators.js";
import { when } from "lit/directives/when.js";
import { PopupLitConfiguration } from "src/modules/interfaces/component/popup/types.lit";

declare global {
	interface HTMLElementTagNameMap {
		"popup-component": PopupComponent;
	}
}

@customElement("popup-component")
export class PopupComponent extends LitElement implements PopupLitConfiguration {
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
	@property()
	closeButtonSelector = "[data-popup-close-button]";

	@queryAsync(".popup")
	_popup!: Promise<HTMLDivElement>;
	@queryAssignedElements({ slot: "popup" })
	_assignedElements!: HTMLElement[];

	private clickEventListener!: EventListener;

	async openPopup() {
		if (this.open) return;
		this.open = true;
		const popup = await this._popup;
		const targetElements: unknown[] = Array.from(
			this._assignedElements.reduce<Element[]>(
				(list, b) => [...list, ...Array.from(b.querySelectorAll(this.closeButtonSelector))],
				[]
			)
		);
		popup.addEventListener("click", this.clickEventListener = (event) => {
			if (event.target && targetElements.includes(event.target)) this.closePopup().catch(e => { console.error(e); });
		});

		if (this.autoClosingTime) {
			await new Promise((resolve) => setTimeout(resolve, this.autoClosingTime ?? 0));
			await this.closePopup();
		}
	}

	async closePopup() {
		if (!this.open) return;
		const popup = await this._popup;
		popup.removeEventListener("click", this.clickEventListener);
		this.open = false;
	}

	render() {
		return html`${when(
			this.displayOpenButton,
			() =>
				html`<div @click="${() => this.openPopup()}">
					<slot name="popup-open-button"></slot>
				</div>`
		)}
		${when(
			this.open,
			() => html`<div class="popup">
				<slot name="popup"></slot>
			</div>`
		)}`;
	}
}
