import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import {
	ModifyingTextContext,
	SelfModifyingTextInterface,
	SplitTextCallback,
	TriggerTextAnimationCallback
} from "shared/interfaces/selfModifyingText";
const SelfModifyingTextModule = import("shared/interfaces/selfModifyingText");

export type TriggerTextParams = Parameters<TriggerTextAnimationCallback<ModifyingTextContext>>[0];
export type SplitTextParams = Parameters<SplitTextCallback<ModifyingTextContext>>[0];

export abstract class SelfModifyingText extends LitElement implements SelfModifyingTextInterface<ModifyingTextContext> {
	private static validateElement = (element: HTMLElement) => {
		return Number(Array.from(element.childNodes).some((node) => node.nodeType === Node.TEXT_NODE)) ^ Number(element.childElementCount > 0);
	};

	@property({
		type: Array,
		converter: {
			fromAttribute: (string): string[] => string?.split(";") ?? [],
			toAttribute: (strings: string[]): string => strings.join(";")
		}
	})
	strings: string[] = [];
	@property({ type: Number })
	repetitions = 1;

	abstract interval: number;
	abstract typingSpeed: number;

	protected async *generateNextStrings(startingString: string): AsyncGenerator<[string, string], [string, string], [string, string]> {
		const { nextStringsGenerator } = await SelfModifyingTextModule;
		const stringsGenerator = nextStringsGenerator(startingString, this);
		yield* stringsGenerator;
		return ["", ""];
	}

	protected generator!: ReturnType<typeof this.generateNextStrings>;
	protected windowInterval?: number;

	protected splitTextAlgorithm(newString?: string) {
		for (const element of this._elements) {
			const oldContent = element.textContent ?? "";
			element.textContent = "";
			for (const char of oldContent) element.insertAdjacentHTML("beforeend", `<span>${char}</span>`);
			if (newString && newString.length > oldContent.length) {
				for (let i = 0; i < newString.length - oldContent.length; i++) {
					element.insertAdjacentElement("beforeend", document.createElement("span"));
				}
			}
		}
	}

	splitText?(...parameters: Parameters<SplitTextCallback<ModifyingTextContext>>): void;
	abstract triggerTextAnimation(...parameters: Parameters<TriggerTextAnimationCallback<ModifyingTextContext>>): void | Promise<void>;

	async onInterval() {
		const { done, value } = await this.generator.next();
		if (done) {
			window.clearTimeout(this.windowInterval);
			this.windowInterval = undefined;
		} else {
			void this.triggerTextAnimation({
				context: this,
				fromText: value[0],
				toText: value[1]
			});
		}
	}

	get _elements() {
		return Array.from(this.querySelectorAll("pre")).filter(SelfModifyingText.validateElement);
	}

	connectedCallback() {
		super.connectedCallback();
		const result = this._elements[0].textContent ?? "";
		this.splitText?.({ context: this });
		this.generator = this.generateNextStrings(result);
		this.windowInterval = window.setTimeout(() => {
			this.onInterval().catch((e) => {
				console.trace(e);
			});
		}, this.interval);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		clearInterval(this.windowInterval);
		this.generator.return(["", ""]).catch((e) => {
			console.trace(e);
		});
	}

	render() {
		return html`<slot></slot>`;
	}
}
