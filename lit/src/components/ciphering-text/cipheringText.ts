import { property } from "lit/decorators.js";
import { CipheringTextConfiguration } from "shared/component/cipheringText";
import { SelfModifyingText, SplitTextParams, TriggerTextParams } from "../../interfaces/generic/selfModifyingText";
import { splitTextAlgorithm } from "shared/interfaces/selfModifyingText";

export class CipheringTextComponent extends SelfModifyingText implements CipheringTextConfiguration {
	@property({ type: Number })
	interval = 3000;
	@property({ type: Number })
	typingSpeed = 45;
	@property({ type: Array })
	characters: string[] = [
		"!",
		'"',
		"#",
		"$",
		"%",
		"*",
		"0",
		"1",
		":",
		";",
		"?",
		"@",
		"[",
		"]",
		"\\",
		"~",
		"'",
		"/",
		"{",
		"}",
		"|",
		"&",
		"(",
		")",
		"-",
		"<",
		">"
	];

	splitText({ toText }: SplitTextParams) {
		if (toText) this._currentTextValue = splitTextAlgorithm(this._currentTextValue, toText);
	}

	cipherLetter(properties: { newLetter?: string; delayed: boolean; i: number }) {
		const { newLetter, delayed, i } = properties;
		const changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
		let isDone = false,
			index = 0;
		const definedRandom = Math.random() * 1000 + (delayed ? this.typingSpeed * i : 0),
			speed = this.typingSpeed;
		setTimeout(() => {
			while (index <= changeNumber) {
				((index) => {
					setTimeout(() => {
						let newValue: string | undefined;
						if (!isDone) newValue = this.characters[Math.floor(Math.random() * this.characters.length)];
						if (index >= changeNumber) {
							isDone = true;
							newValue = newLetter ?? "";
						}

						if (newValue !== undefined) {
              this._currentTextValue[i] = {
								letter: newValue,
								classes: isDone ? [] : ["active"]
							};
            }

            this._currentTextValue = [...this._currentTextValue];
					}, speed * index);
				})(index++);
			}
		}, definedRandom);

		return changeNumber * speed + speed;
	}

	triggerTextAnimation({ context, toText }: TriggerTextParams) {
		this.splitText({ context, toText });
		const speeds: number[] = [];
		this._currentTextValue.forEach((character, i) => {
			if (character.letter === toText[i]) return;
			speeds.push(this.cipherLetter({ newLetter: toText[i], i, delayed: false }));
		});

    setTimeout(() => {
      this._currentTextValue = this._currentTextValue.filter(v => Boolean(v.letter));
      this.onInterval();
    }, Math.max(...speeds) + this.interval);
	}
}
