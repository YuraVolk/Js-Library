export interface ModifyingTextConfiguration {
	strings: string[];
	repetitions?: number;
	interval?: number;
	typingSpeed?: number;
}

export interface ModifyingTextContext {
	onInterval: () => void;
}

export type TriggerTextAnimationCallback<T extends ModifyingTextContext> = (parameters: {
	context: T;
	fromText: string;
	toText: string;
}) => void | Promise<void>;
export type SplitTextCallback<T extends ModifyingTextContext> = (parameters: {
	context: T;
	toText?: string;
	fromText?: string;
}) => void | Promise<void>;

export interface SelfModifyingTextInterface<T extends ModifyingTextContext> extends Required<ModifyingTextConfiguration> {
	splitText?: SplitTextCallback<T>;
	triggerTextAnimation: TriggerTextAnimationCallback<T>;
}

export type LetterState = (typeof LetterState)[keyof typeof LetterState];
export const LetterState = {
	idle: "idle",
	changing: "changing",
	finished: "finished"
} as const;

export interface LetterSettings {
	letter: string;
	letterState: LetterState;
}

export function* nextStringsGenerator<T extends ModifyingTextContext>(
	startingString: string,
	options: SelfModifyingTextInterface<T>
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

export const splitTextAlgorithm = (currentString: LetterSettings[], newString: string): LetterSettings[] => {
	return [...currentString.map(({ letter }) => letter).filter(Boolean), ...newString.split("").slice(currentString.length).fill(" ")].map(
		(letter) => ({ letter, classes: [], letterState: "idle" })
	);
};
