import { property } from "lit/decorators.js";
import { SelfModifyingText, TriggerTextParams } from "../../interfaces/generic/selfModifyingText";
import { TypingTextConfiguration } from "shared/component/typingText";
import { LetterSettings, LetterState } from "shared/interfaces/selfModifyingText";

export class TypingTextComponent extends SelfModifyingText implements TypingTextConfiguration {
	@property({ type: Number })
	interval = 4500;
	@property({ type: Number })
	typingSpeed = 35;
	@property({ type: Number })
	unTypingSpeed?: number;

	private _timeout?: number;

	async triggerTextAnimation({ context, fromText, toText }: TriggerTextParams) {
		const fromArray = fromText.split("").map<LetterSettings>((letter) => ({ letter, letterState: LetterState.idle }));
		const toArray = toText.split("").map<LetterSettings>((letter) => ({ letter, letterState: LetterState.idle }));

		for (let i = 1; i < fromText.length + 1; i++) {
			await new Promise<void>(
				(resolve) =>
					(this._timeout = window.setTimeout(() => {
						this._currentTextValue = fromArray.slice(0, -i);
						resolve();
					}, this.unTypingSpeed ?? this.typingSpeed))
			);
		}

		for (let i = 1; i < toText.length + 1; i++) {
			await new Promise<void>(
				(resolve) =>
					(this._timeout = window.setTimeout(() => {
						this._currentTextValue = toArray.slice(0, i);
						resolve();
					}, this.typingSpeed))
			);
		}

		this._timeout = window.setTimeout(() => {
			this._timeout = undefined;
			context.onInterval();
		}, this.interval);
	}

	disconnectedCallback(): void {
		super.disconnectedCallback();
		window.clearTimeout(this._timeout);
	}
}
