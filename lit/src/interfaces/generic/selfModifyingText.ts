import { LitElement, html, css, TemplateResult, render } from "lit";
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
import { assertNonUndefinedDevOnly } from "shared/utils/utils";
import { map } from "lit/directives/map.js";

export type TriggerTextParams = Parameters<TriggerTextAnimationCallback<ModifyingTextContext>>[0];
export type SplitTextParams = Parameters<SplitTextCallback<ModifyingTextContext>>[0];
export type SelfModifyingTextRenderer = (
	letter: LetterSettings,
	index: number
) => {
	key: string;
	value: TemplateResult<1>;
};

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
		`
	];

	@property({ type: Array })
	strings: string[] = [];
	@property({ type: Number })
	repetitions = Infinity;
	@property({ type: Number })
	duration?: number;
	@property({ attribute: false })
	renderElements?: SelfModifyingTextRenderer;

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
		if (this.duration && this.renderElements) {
			const transitionGroup = html`<transition-group-component
				.renderElements=${this._currentTextValue.map<TransitionGroupRenderer>((letter, index) => {
					assertNonUndefinedDevOnly(this.renderElements);
					assertNonUndefinedDevOnly(this.duration);
					const { key, value } = this.renderElements(letter, index);
					const duration = this.duration;

					return {
						key,
						isActive: true,
						render: ({ isActive, onExited }) =>
							html`<transition-component @finished=${onExited} ?isActive=${isActive} .duration=${duration}>
								${value}
							</transition-component>`,
						onExited: () => {}
					};
				})}
			></transition-group-component>`;

			render(transitionGroup, this);
			return html`<slot></slot>`;
		} else if (this.renderElements) {
			const elements = this._currentTextValue.map((letter, index) => {
				assertNonUndefinedDevOnly(this.renderElements);
				return this.renderElements(letter, index).value;
			});

			render(elements, this);
			return html`<slot></slot>`;
		} else {
			return html`${map(this._currentTextValue, (letter) => html`<span>${letter.letter}</span>`)}`;
		}
	}
}
