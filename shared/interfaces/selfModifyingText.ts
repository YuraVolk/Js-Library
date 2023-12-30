export interface ModifyingTextConfiguration {
	strings: string[];
	repetitions?: number;
	interval?: number;
	typingSpeed?: number;
}

export interface SelfModifyingTextInterface extends Required<ModifyingTextConfiguration> {
	splitText?(newString?: string): void;
	triggerTextAnimation(fromText: string, toText: string): void | Promise<void>;
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
