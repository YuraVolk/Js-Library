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

	private directivePromiseResolver?: (directive: unknown) => void;
	private directivePromise?: Promise<unknown>;

	initializeDirectivePromise() {
		this.directivePromise = new Promise((resolve) => {
			this.directivePromiseResolver = resolve;
		});
	}

	async invalidateCache() {
		this.initializeDirectivePromise();
		const directive = await this.directivePromise;
		this.transitionController.invalidatePromise(directive);
	}

	protected transitionController: TransitionController = new TransitionController(
		this,
		() => this.duration,
		() => this.isActive
	);

	directive() {
		const directive = this.transitionController.transitionDirective();
		if (this.directivePromiseResolver) {
			this.directivePromiseResolver(directive);
			this.initializeDirectivePromise();
		}

		return directive;
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
