import { LitElement, html } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import { assertNonUndefined } from "shared/utils/utils";
import { ToastLitConfiguration } from "../../interfaces/component/toast";

declare global {
	interface HTMLElementTagNameMap {
		"toast-component": ToastComponent;
	}
}

@customElement("toast-component")
export class ToastComponent extends LitElement implements ToastLitConfiguration {
    @property({ type: Number })
    animationDelay = 500;
    @property({ type: Number })
    autoCloseDelay?: number;
    @property()
    inactiveClass = "disabled";
    @property({ type: Boolean })
    closeOnButtonClick = false;

    @queryAssignedElements()
    _toast!: HTMLElement[];

    private timeoutId?: number;
    private toastClosingId?: number;

    closeToast() {
        for (const toast of this._toast) toast.classList.add(this.inactiveClass);
        this.toastClosingId = window.setTimeout(() => {
            for (const toast of this._toast) toast.remove();
        }, this.animationDelay);
    }

    protected onButtonClicked(_button: HTMLButtonElement) {
        assertNonUndefined(_button);
    }

    protected firstUpdated(): void {
        if (!this.closeOnButtonClick) return;
        for (const button of this._toast.flatMap((it) => Array.from(it.getElementsByTagName("button")))) {
            button.addEventListener("click", () => {
                this.onButtonClicked(button);
                this.closeToast();
            });
        }
    }

    connectedCallback(): void {
        super.connectedCallback();
        if (this.autoCloseDelay) this.timeoutId = window.setTimeout(() => { this.closeToast(); }, this.autoCloseDelay);
    }

    disconnectedCallback(): void {
        window.clearTimeout(this.timeoutId);
        window.clearTimeout(this.toastClosingId);
        super.disconnectedCallback();
    }

    render() {
        return html`<div>
            <slot></slot>
        </div>`
    }
}
