import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TransitionController } from "./hooks/transitionController";

declare global {
	interface HTMLElementTagNameMap {
		"transition-component": Transition;
	}
}

@customElement("transition-component")
export class Transition extends LitElement {
	static styles = css`
		:host {
			display: contents;
		}
	`;

	@property({ type: Boolean })
	isActive = false;
	@property({ type: Number })
	duration = 300;

	protected transitionController: TransitionController = new TransitionController(
		this,
		this.duration,
		() => {
			return this.isActive;
		}
	);

	directive() {
		return this.transitionController.transitionDirective();
	}

	displayDirective(template: unknown, isActive: boolean) {
		return this.transitionController.transitionDisplayDirective(template, isActive);
	}

	requestTransitionDisplayUpdate() {
		this.dispatchEvent(new CustomEvent("transition-display-update-request"));
	}

	render() {
		return html`<slot></slot>`;
	}
}
