import { customElement, property } from "lit/decorators.js";
import { SelfModifyingText } from "../../interfaces/selfModifyingText";

declare global {
	interface HTMLElementTagNameMap {
		"typing-text-component": TypingTextComponent;
	}
}

@customElement("typing-text-component")
export class TypingTextComponent extends SelfModifyingText {
	@property({ type: Number })
	interval = 4500;
	@property({ type: Number })
	typingSpeed = 35;
	@property({ type: Number })
	unTypingSpeed?: number;
	@property({ type: Boolean })
	eachLetterAsSpan = false;

	splitText(newString?: string) {
        if (this.eachLetterAsSpan) super.splitTextAlgorithm(newString);
	}

	async triggerTextAnimation(fromText: string, toText: string) {
		const elements = this._elements;
		for (let i = 1; i < fromText.length + 1; i++) {
			await new Promise<void>((resolve) =>
				setTimeout(() => {
                    if (this.eachLetterAsSpan) {
                        for (const element of elements) {
                            element.lastChild?.remove();
                        }
                    } else for (const element of elements) element.textContent = fromText.slice(0, -i);
					resolve();
				}, this.unTypingSpeed ?? this.typingSpeed)
			);
		}

		for (let i = 1; i < toText.length + 1; i++) {
			await new Promise<void>((resolve) =>
				setTimeout(() => {
                    if (this.eachLetterAsSpan) {
                        const spanElement = document.createElement("span");
                        spanElement.textContent = toText[i - 1];
                        for (const element of elements) element.append(spanElement);
                    } else for (const element of elements) element.textContent = toText.slice(0, i);
					resolve();
				}, this.typingSpeed)
			);
		}

		setTimeout(() => { this.onInterval(); }, this.interval);
	}
}
