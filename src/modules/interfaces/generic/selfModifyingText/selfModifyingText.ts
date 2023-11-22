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

