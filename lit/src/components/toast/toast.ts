import "../../interfaces/transition/transition";

import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { defaultClassNames } from "../../interfaces/transition/interface";
import { ToastConfiguration } from "shared/component/toast";

export class ToastComponent extends LitElement implements ToastConfiguration {
	static styles = css`
		:host {
			display: contents;
		}
	`;

	@property({ type: Boolean })
	isOpen = false;
	@property({ type: Number })
	autoCloseDelay?: number;
	@property({ type: Number })
	transitionDuration = 300;
	@property({ type: Object })
	classNames = defaultClassNames();

	private _timeoutRef?: number;

	private onOpenValueChange() {
		if (this.autoCloseDelay && this.isOpen) {
			this._timeoutRef = window.setTimeout(() => {
				this.close();
			}, this.autoCloseDelay);
		}
	}

	close() {
		this.isOpen = false;
		window.clearTimeout(this._timeoutRef);
		this._timeoutRef = undefined;
	}

	protected updated(_changedProperties: Map<PropertyKey, unknown>): void {
		for (const key of _changedProperties.keys()) {
			switch (key) {
				case "isOpen":
					this.onOpenValueChange();
					break;
			}
		}
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.onOpenValueChange();
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearTimeout(this._timeoutRef);
	}

	render() {
		return html`
			<transition-component ?isActive=${this.isOpen} .duration=${this.transitionDuration} .classNames=${this.classNames}>
				<slot></slot>
			</transition-component>
		`;
	}
}
