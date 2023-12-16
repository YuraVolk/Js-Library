import { customElement, property } from "lit/decorators.js";
import { createRebuildingTextSteps } from "src/modules/interfaces/component/rebuilding-text/types";
import { SelfModifyingText } from "src/modules/interfaces/generic/selfModifyingText/selfModifyingText.lit";

declare global {
	interface HTMLElementTagNameMap {
		"rebuilding-text-component": RebuildingTextComponent;
	}
}

@customElement("rebuilding-text-component")
export class RebuildingTextComponent extends SelfModifyingText {
	@property({ type: Number })
	interval = 2500;
	@property({ type: Number })
	typingSpeed = 75;

	triggerTextAnimation(fromText: string, toText: string): void {
		const steps = createRebuildingTextSteps(fromText, toText);

		for (let i = 0; i < steps.length; i++) {
			setTimeout(() => {
				for (const element of this._elements) {
					element.textContent = steps[i].filter(Boolean).join("");
					if (i !== steps.length - 1) continue;

					setTimeout(() => {
						this.onInterval();
					}, this.interval);
				}
			}, this.typingSpeed * i);
		}
	}
}
