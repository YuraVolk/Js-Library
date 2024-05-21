import { LitElement, html, css } from "lit";
import { property, state } from "lit/decorators.js";
import {
	LetterSettings,
	LetterState,
	ModifyingTextContext,
	SelfModifyingTextInterface,
	SplitTextCallback,
	TriggerTextAnimationCallback,
	nextStringsGenerator
} from "shared/interfaces/selfModifyingText";
import "../transition/transitionGroup";
import "../transition/transition";
import { TransitionGroupRenderer } from "../transition/transitionGroup";

export type TriggerTextParams = Parameters<TriggerTextAnimationCallback<ModifyingTextContext>>[0];
export type SplitTextParams = Parameters<SplitTextCallback<ModifyingTextContext>>[0];

export abstract class SelfModifyingText extends LitElement implements SelfModifyingTextInterface<ModifyingTextContext> {
	static styles = [
		css`
			:host {
				display: block;
				font-family: monospace;
				unicode-bidi: isolate;
				font-size: 24px;
				line-height: 54px;
			}

			transition-component {
				display: inline-flex;
				white-space: pre;
			}
		`
	];

	@property({ type: Array })
	strings: string[] = [];
	@property({ type: Number })
	repetitions = Infinity;

	abstract interval: number;
	abstract typingSpeed: number;

	splitText?(...parameters: Parameters<SplitTextCallback<ModifyingTextContext>>): Promise<void> | void;
	abstract triggerTextAnimation(...parameters: Parameters<TriggerTextAnimationCallback<ModifyingTextContext>>): Promise<void> | void;

	private _generator = nextStringsGenerator("", this);

	private intervalCurrent?: number;
	@state()
	protected _currentTextValue: LetterSettings[] = [];

	protected firstUpdated(): void {
		this._generator = nextStringsGenerator(this.strings[0], this);
		this._currentTextValue = this.strings[0].split("").map((letter) => ({ letter, letterState: LetterState.idle }));

		void this.splitText?.({ context: this });
		this.intervalCurrent = window.setTimeout(() => {
			this.onInterval();
		}, this.interval);
	}

	disconnectedCallback(): void {
		this._generator.return(["", ""]);
		window.clearTimeout(this.intervalCurrent);
	}

	onInterval() {
		const { done, value } = this._generator.next();
		if (done) {
			window.clearTimeout(this.intervalCurrent);
			this.intervalCurrent = undefined;
		} else void this.triggerTextAnimation({ context: this, fromText: value[0], toText: value[1] });
	}

	render() {
		return html`<transition-group-component
			.renderElements=${this._currentTextValue
				.filter((s) => s.letter.length !== 0)
				.map<TransitionGroupRenderer>((letter, index) => {
					return {
						key: letter.letter + String(index),
						isActive: true,
						render: ({ isActive, onExited }) =>
							html`<transition-component @finished=${onExited} ?isActive=${isActive} .duration=${45}>
								<span>${letter.letter}</span>
							</transition-component>`,
						onExited: () => {}
					};
				})}
		></transition-group-component>`;
	}
}
