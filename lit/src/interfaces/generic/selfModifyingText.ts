import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { SelfModifyingTextInterface } from "shared/interfaces/selfModifyingText";
const SelfModifyingTextModule = import("shared/interfaces/selfModifyingText");

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

	splitText?(newString?: string): void;
	abstract triggerTextAnimation(fromText: string, toText: string): void | Promise<void>;

	async onInterval() {
		const { done, value } = await this.generator.next();
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
			this.onInterval().catch(e => {
                console.trace(e);
            });
		}, this.interval);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
        clearInterval(this.windowInterval);
		this.generator.return(["", ""]).catch(e => {
            console.trace(e);
        });
	}

	render() {
		return html`<slot></slot>`;
	}
}
