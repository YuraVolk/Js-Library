import { property } from "lit/decorators.js";
import { SelfModifyingText, TriggerTextParams } from "../../interfaces/generic/selfModifyingText";
import { LetterSettings } from "shared/interfaces/selfModifyingText";

export class BubbleTextComponent extends SelfModifyingText {
	@property({ type: Number })
	interval = 2500;
	@property({ type: Number })
	typingSpeed = 75;

	triggerTextAnimation({ context, fromText, toText }: TriggerTextParams) {
		const fromTextArray: Array<LetterSettings | undefined> = fromText.split("").map((letter) => ({ letter, letterState: "idle" }));
		const toTextArray: Array<LetterSettings | undefined> = toText.split("").map((letter) => ({ letter, letterState: "idle" }));

		if (fromTextArray.length < toTextArray.length) {
			let index = 0;
			while (fromTextArray.length < toTextArray.length) {
				if (++index === fromTextArray.length) index = 0;
				fromTextArray.splice(fromTextArray.length, 0, undefined);
			}
		} else if (toTextArray.length < fromTextArray.length) {
			let index = 0;
			while (toTextArray.length < fromTextArray.length) {
				toTextArray.splice(toTextArray.length, 0, undefined);
				if (++index === toTextArray.length) index = 0;
			}
		}

		for (let i = 0; i < fromTextArray.length; i++) {
			setTimeout(() => {
				fromTextArray[i] = {
					letter: toTextArray[i]?.letter ?? " ",
					letterState: toTextArray[i] === undefined || fromTextArray[i] === undefined ? "finished" : "changing"
				};

				this._currentTextValue = [...fromTextArray].filter<LetterSettings>((s): s is LetterSettings => Boolean(s));

				if (i === fromTextArray.length - 1) {
					setTimeout(() => {
						context.onInterval();
					}, this.interval);
				}
			}, this.typingSpeed * i);
		}
	}
}
