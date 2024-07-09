import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { createRef, ref } from "lit/directives/ref.js";
import { when } from "lit/directives/when.js";
import { extractRealSlotContents } from "../../utils/extractRealSlotContents";
import { TransitionState } from "./enum";
import { defaultClassNames } from "./interface";

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
	@property({ type: Object })
	classNames = defaultClassNames();

	protected _transitionState = TransitionState.ENTERED;
	private timeoutId?: number;
	private _slot = createRef<HTMLSlotElement>();
	private _didRequestUpdate = false;

	connectedCallback(): void {
		super.connectedCallback();
		this._transitionState = this.isActive ? TransitionState.ENTERED : TransitionState.EXITED;
	}

	obtainRealElement(): Element | undefined {
		const slot = this._slot.value;
		if (!slot) {
			return;
		}

		return extractRealSlotContents(slot);
	}

	private scheduleNextState(transitionState: TransitionState) {
		this.timeoutId = window.setTimeout(() => {
			if (transitionState === TransitionState.EXITED) {
				this.dispatchEvent(new CustomEvent('finished'));
			}

			this._transitionState = transitionState;
			this._didRequestUpdate = true;
			this.requestUpdate();
			this.timeoutId = undefined;
		}, this.duration);
	}

	protected async updateElementStyles() {
		const hasUpdated = this.hasUpdated;
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

		if (!hasUpdated) {
			element.classList.add("appear-active");
			element.scrollTop;
			element.classList.add("appear");
		}

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
				this.dispatchEvent(new CustomEvent('finished'));
				break;
		}
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		if (this.timeoutId !== undefined) {
			this.dispatchEvent(new CustomEvent('finished'));
		}
		
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
