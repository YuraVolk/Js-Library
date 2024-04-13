import { ReactiveController, noChange, nothing } from "lit";
import { Directive, Part, PartInfo, PartType, directive } from "lit/async-directive.js";
import { until } from "lit/directives/until.js";
import { Transition } from "../transition";

enum TransitionState {
	ENTERING,
	ENTERED,
	EXITING,
	EXITED
}

interface TransitionDirectiveOptions {
	controller: TransitionController;
	transitionState: TransitionState;
}

class TransitionDirective extends Directive {
	private previousState?: TransitionState;

	constructor(partInfo: PartInfo) {
		super(partInfo);
		if (partInfo.type !== PartType.ATTRIBUTE || partInfo.name !== "class") {
			throw new Error("The `transition` directive must be used in the `class` attribute");
		}
	}

	render({ transitionState }: TransitionDirectiveOptions) {
		if (this.previousState === transitionState) {
			return noChange;
		}

		switch (transitionState) {
			case TransitionState.ENTERING:
				return "enter-active enter";
			case TransitionState.EXITING:
				return "leave-active leave";
			case TransitionState.ENTERED:
				return "enter-done";
			case TransitionState.EXITED:
				return "leave-done";
		}
	}

	update(_part: Part, [options]: Parameters<typeof this.render>) {
		const { transitionState, controller } = options;
		if (_part.type !== PartType.ATTRIBUTE || !(_part.element instanceof HTMLElement)) {
			return this.render(options);
		}

		const element = _part.element;
		switch (transitionState) {
			case TransitionState.ENTERING:
				element.classList.add("enter-active");
				element && element.scrollTop;
				controller.scheduleNextState(TransitionState.ENTERED);
				break;
			case TransitionState.ENTERED:
				element.classList.remove("enter-active");
				break;
			case TransitionState.EXITING:
				element.classList.add("leave-active");
				element && element.scrollTop;
				controller.scheduleNextState(TransitionState.EXITED);
				break;
			case TransitionState.EXITED:
				element.classList.remove("leave-active");
				break;
		}

		return this.render(options);
	}
}

interface TransitionDisplayDirectiveOptions extends TransitionDirectiveOptions {
	template: unknown;
}

class TransitionDisplayDirective extends Directive {
	render({ template, transitionState }: TransitionDisplayDirectiveOptions) {
		return transitionState === TransitionState.EXITED ? nothing : template;
	}
}

export class TransitionController implements ReactiveController {
	transitionState?: TransitionState;
	private timeoutId?: number;
	private directivePromiseResolver?: (directive: unknown) => void;
	private directivePromise?: Promise<unknown>;

	constructor(
		private readonly host: Transition,
		private readonly duration: () => number,
		private readonly isVisible: () => boolean
	) {
		host.addController(this);
		this.initializeDirectivePromise();
	}

	initializeDirectivePromise() {
		this.directivePromise = new Promise((resolve) => {
			this.directivePromiseResolver = resolve;
		});
	}

	hostConnected(): void {
		this.transitionState = this.isVisible() ? TransitionState.ENTERED : TransitionState.EXITED;
	}

	hostDisconnected(): void {
		window.clearTimeout(this.timeoutId);
	}

	setTransitionState(transitionState: TransitionState) {
		this.transitionState = transitionState;
	}

	scheduleNextState(transitionState: TransitionState) {
		this.timeoutId = window.setTimeout(() => {
			this.setTransitionState(transitionState);
			this.host.requestTransitionDisplayUpdate();
		}, this.duration());
	}

	private async transitionDirectivePromise() {
		await this.directivePromise;

		if (typeof this.transitionState === "undefined") return nothing;
		return transitionDirective({
			controller: this,
			transitionState: this.transitionState
		});
	}

	transitionDirective() {
		return until(this.transitionDirectivePromise(), "");
	}

	transitionDisplayDirective(template: unknown, isActive: boolean) {
		if (typeof this.transitionState === "undefined") return nothing;

		if (isActive && (this.transitionState === TransitionState.EXITED || this.transitionState === TransitionState.EXITING)) {
			this.transitionState = TransitionState.ENTERING;
		} else if (!isActive && (this.transitionState === TransitionState.ENTERED || this.transitionState === TransitionState.ENTERING)) {
			this.transitionState = TransitionState.EXITING;
		}

		const directive = transitionDisplayDirective({
			controller: this,
			transitionState: this.transitionState,
			template
		});

		if (this.directivePromiseResolver) {
			this.directivePromiseResolver(directive);
			this.initializeDirectivePromise();
		}

		return directive;
	}
}

export const transitionDirective = directive(TransitionDirective);
export const transitionDisplayDirective = directive(TransitionDisplayDirective);

export type { TransitionDirective, TransitionDisplayDirective };
