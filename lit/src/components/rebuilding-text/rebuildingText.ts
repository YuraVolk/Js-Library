import { property } from "lit/decorators.js";
import { SelfModifyingText, TriggerTextParams } from "../../interfaces/generic/selfModifyingText";
import { createRebuildingTextSteps } from "shared/component/rebuildingText";

export class RebuildingTextComponent extends SelfModifyingText {
	@property({ type: Number })
	interval = 2500;
	@property({ type: Number })
	typingSpeed = 75;

	triggerTextAnimation({ context, fromText, toText }: TriggerTextParams) {
		const steps = createRebuildingTextSteps(fromText, toText);

		for (let i = 0; i < steps.length; i++) {
			setTimeout(() => {
				this._currentTextValue = steps[i].filter(Boolean).map((letter) => ({
					letter: String(letter),
					classes: []
				}));
				if (i !== steps.length - 1) return;

				setTimeout(() => {
					context.onInterval();
				}, this.interval);
			}, this.typingSpeed * i);
		}
	}
}
