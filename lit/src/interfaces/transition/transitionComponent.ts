import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";
import { extractRealSlotContents } from "../../utils/extractRealSlotContents";

declare global {
	interface HTMLElementTagNameMap {
		"transition-element-component": Transition;
	}
}

export enum TransitionState {
	ENTERING = "ENTERING",
	ENTERED = "ENTERED",
	EXITING = "EXITING",
	EXITED = "EXITED"
}

@customElement("transition-element-component")
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
	@property({ type: Object })
	classNames = {
		[TransitionState.ENTERING]: "enter-active",
		[TransitionState.EXITING]: "leave-active",
		[TransitionState.ENTERED]: "enter-done",
		[TransitionState.EXITED]: "leave-done"
	};

	protected _transitionState = TransitionState.ENTERED;
	private timeoutId?: number;
	private _slot = createRef<HTMLSlotElement>();
	private _didRequestUpdate = false;

	connectedCallback(): void {
		super.connectedCallback();
		this._transitionState = this.isActive ? TransitionState.ENTERED : TransitionState.EXITED;
	}

	protected obtainRealElement() {
		const slot = this._slot.value;
		if (!slot) {
			return;
		}

		return extractRealSlotContents(slot);
	}

	private scheduleNextState(transitionState: TransitionState) {
		this.timeoutId = window.setTimeout(() => {
			this._transitionState = transitionState;
			this._didRequestUpdate = true;
			this.requestUpdate();
		}, this.duration);
	}

	protected async updateElementStyles() {
		if (!this._didRequestUpdate) {
			await this.updateComplete;
		} else this._didRequestUpdate = false;

		const element = this.obtainRealElement();
		if (!element) {
			return;
		}

		const state: string = this._transitionState;
		element.classList.remove(
			...Object.entries(this.classNames)
				.filter(([key]) => key !== state)
				.map(([, value]) => value)
		);

		switch (this._transitionState) {
			case TransitionState.ENTERING:
				element.classList.add(this.classNames[TransitionState.ENTERING]);
				element.scrollTop;
				element.classList.add(this.classNames[TransitionState.ENTERED]);
				this.scheduleNextState(TransitionState.ENTERED);
				break;
			case TransitionState.ENTERED:
				element.classList.add(this.classNames[TransitionState.ENTERED]);
				break;
			case TransitionState.EXITING:
				element.classList.add(this.classNames[TransitionState.EXITING]);
				element.scrollTop;
				element.classList.add(this.classNames[TransitionState.EXITED]);
				this.scheduleNextState(TransitionState.EXITED);
				break;
			case TransitionState.EXITED:
				element.classList.add(this.classNames[TransitionState.EXITED]);
				break;
		}
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearTimeout(this.timeoutId);
	}

	render() {
		if (this.isActive && (this._transitionState === TransitionState.EXITED || this._transitionState === TransitionState.EXITING)) {
			this._transitionState = TransitionState.ENTERING;
		} else if (
			!this.isActive &&
			(this._transitionState === TransitionState.ENTERED || this._transitionState === TransitionState.ENTERING)
		) {
			this._transitionState = TransitionState.EXITING;
		}

		this.updateElementStyles().catch((e: unknown) => {
			console.trace(e);
		});

		return when(this._transitionState !== TransitionState.EXITED, () => html`<slot ${ref(this._slot)}></slot>`);
	}
}
