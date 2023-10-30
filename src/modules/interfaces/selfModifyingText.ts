import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";

export interface SelfModifyingTextInterface {
	strings: string[];
	repetitions: number;
	interval: number;
	typingSpeed: number;
}

export function* nextStringsGenerator(
	startingString: string,
	options: SelfModifyingTextInterface
): Generator<[string, string], [string, string], [string, string]> {
	const newStrings = [...options.strings];
	let index = 1,
		repeated = 0,
		previousValue = startingString;
	while (repeated < options.repetitions) {
		repeated++;
		yield [previousValue, newStrings[index]];
		previousValue = newStrings[index];
		index = (index + 1) % newStrings.length;
	}

	return [previousValue, previousValue];
}

export abstract class SelfModifyingText extends LitElement implements SelfModifyingTextInterface {
	private static validateElement(element: HTMLElement) {
		return !element.firstElementChild && element.textContent;
	}

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

	splitText?(newString?: string): void;
	abstract triggerTextAnimation(fromText: string, toText: string): void;

	onInterval() {
		const { done, value } = this.generator.next();
		if (done) {
			window.clearTimeout(this.windowInterval);
			this.windowInterval = undefined;
		} else this.triggerTextAnimation(...value);
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
