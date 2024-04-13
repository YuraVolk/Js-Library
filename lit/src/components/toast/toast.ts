import "../../interfaces/transition";
import { Transition } from "../../interfaces/transition";

import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";
import { ToastConfiguration } from "shared/component/toast";
import { createRef, ref } from "lit/directives/ref.js";
import { assertNonUndefined } from "shared/utils/utils";
import { cache } from "lit/directives/cache.js";

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

	private _timeoutRef?: number;
	private _transition = createRef<Transition>();

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

	transitionDirective() {
		assertNonUndefined(this._transition.value);
		return this._transition.value.directive();
	}

	connectedCallback(): void {
		super.connectedCallback();
		this.onOpenValueChange();
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearTimeout(this._timeoutRef);
	}

	protected firstUpdated() {
		this.requestUpdate();
		this.dispatchEvent(new CustomEvent("transition-display-directive-init"));
	}

	render() {
		return html`
			<transition-component
				?isActive=${this.isOpen}
				.duration=${this.transitionDuration}
				@transition-display-update-request=${() => {
					this.requestUpdate();
				}}
				${ref(this._transition)}
			>
				${this._transition.value?.displayDirective(html`<slot></slot>`, this.isOpen)}
			</transition-component>
		`;
	}
}
