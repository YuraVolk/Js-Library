import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { SelfModifyingTextInterface, nextStringsGenerator } from "./selfModifyingText";

export abstract class SelfModifyingText extends LitElement implements SelfModifyingTextInterface {
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

	protected *generateNextStrings(startingString: string): Generator<[string, string], [string, string], [string, string]> {
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

	splitText?(newString?: string): void;
	abstract triggerTextAnimation(fromText: string, toText: string): void | Promise<void>;

	onInterval() {
		const { done, value } = this.generator.next();
		if (done) {
			window.clearTimeout(this.windowInterval);
			this.windowInterval = undefined;
		} else void this.triggerTextAnimation(...value);
	}

	get _elements() {
		return Array.from(this.querySelectorAll("pre")).filter(SelfModifyingText.validateElement);
	}

	connectedCallback() {
		super.connectedCallback();
		const result = this._elements[0].textContent ?? "";
		this.splitText?.();
		this.generator = this.generateNextStrings(result);
		this.windowInterval = window.setTimeout(() => {
			this.onInterval();
		}, this.interval);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		this.generator.return(["", ""]);
		clearInterval(this.windowInterval);
	}

	render() {
		return html`<slot></slot>`;
	}
}