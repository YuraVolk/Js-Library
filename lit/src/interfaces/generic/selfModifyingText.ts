import { LitElement, html, css, CSSResult } from "lit";
import { property, state } from "lit/decorators.js";
import { map } from "lit/directives/map.js";
import {
	LetterSettings,
	ModifyingTextContext,
	SelfModifyingTextInterface,
	SplitTextCallback,
	TriggerTextAnimationCallback,
	nextStringsGenerator
} from "shared/interfaces/selfModifyingText";

export type TriggerTextParams = Parameters<TriggerTextAnimationCallback<ModifyingTextContext>>[0];
export type SplitTextParams = Parameters<SplitTextCallback<ModifyingTextContext>>[0];

export abstract class SelfModifyingText extends LitElement implements SelfModifyingTextInterface<ModifyingTextContext> {
	static styles: CSSResult | CSSResult[] = css`
		:host {
			display: block;
			font-family: monospace;
			unicode-bidi: isolate;
			font-size: 24px;
			line-height: 54px;
		}
	`;

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
		this._currentTextValue = this.strings[0].split("").map((letter) => ({ letter, classes: [] }));

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
		return html`${map(this._currentTextValue, (letter) => html`<span class=${letter.classes.join(" ")}>${letter.letter}</span>`)}`;
	}
}
