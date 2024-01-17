import { customElement, property } from "lit/decorators.js";
import { SelfModifyingText, TriggerTextParams } from "../../interfaces/generic/selfModifyingText";
const RebuildingTextModule = import("shared/component/rebuildingText");

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

	async triggerTextAnimation({ context, fromText, toText }: TriggerTextParams) {
		const { createRebuildingTextSteps } = await RebuildingTextModule;
		const steps = createRebuildingTextSteps(fromText, toText);

		for (let i = 0; i < steps.length; i++) {
			setTimeout(() => {
				for (const element of this._elements) {
					element.textContent = steps[i].filter(Boolean).join("");
					if (i !== steps.length - 1) continue;

					setTimeout(() => {
						context.onInterval();
					}, this.interval);
				}
			}, this.typingSpeed * i);
		}
	}
}
