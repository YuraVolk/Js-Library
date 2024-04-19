import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { TransitionController } from "./refTransitionController";
import { TransitionConfiguration, defaultClassNames } from "./interface";

declare global {
	interface HTMLElementTagNameMap {
		"ref-transition-component": Transition;
	}
}

@customElement("ref-transition-component")
export class Transition extends LitElement implements TransitionConfiguration {
	static styles = css`
		:host {
			display: contents;
		}
	`;

	@property({ type: Boolean })
	isActive = false;
	@property({ type: Number })
	duration = 300;
	@property({ type: Object })
	classNames = defaultClassNames();

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
		const directive = this.transitionController.transitionDirective(this.classNames);
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
