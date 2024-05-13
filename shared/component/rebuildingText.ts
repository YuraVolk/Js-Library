import { LetterSettings, LetterState } from "../interfaces/selfModifyingText";

export const createRebuildingTextSteps = (fromText: string, toText: string) => {
	const fromTextArray: Array<string | undefined> = fromText.split("");
	const toTextArray: Array<string | undefined> = toText.split("");
	if (fromTextArray.length < toTextArray.length) {
		let index = 0;
		while (fromTextArray.length < toText.length) {
			if (++index === fromTextArray.length) index = 0;
			fromTextArray.splice(index, 0, undefined);
		}
	} else if (toTextArray.length < fromTextArray.length) {
		let index = 0;
		while (toTextArray.length < fromTextArray.length) {
			toTextArray.splice(index, 0, undefined);
			if (++index === toTextArray.length) index = 0;
		}
	}

	const steps: Array<LetterSettings | undefined>[] = [
		fromTextArray.map((letter) => (letter !== undefined ? { letter, letterState: LetterState.idle } : letter))
	];

	const furtherQueue: number[] = [];
	for (let i = 0; i < fromTextArray.length - 1; i++) {
		const currentState = [...steps[steps.length - 1]].map((settings) => (settings ? { ...settings } : settings));
		if (i % 2 === 0) {
			const item = toTextArray[i];
			if (item !== undefined) {
				currentState[i] = {
					letter: item,
					letterState: currentState[i]?.letter === item ? LetterState.finished : LetterState.changing
				};
			} else currentState[i] = item;

			currentState[i + 1] = {
				letter: currentState[i]?.letter ?? "",
				letterState: LetterState.changing
			};
		} else furtherQueue.push(i);
		if (furtherQueue.includes(i - 2)) {
			const index = furtherQueue.shift() ?? 0;
			const item = toTextArray[index];
			if (item !== undefined) {
				currentState[index] = {
					letter: item,
					letterState: currentState[index]?.letter === item ? LetterState.finished : LetterState.changing
				};
			} else currentState[index] = item;
		}

		steps.push(currentState);
	}

	steps.push(toTextArray.map((letter) => (letter !== undefined ? { letter, letterState: LetterState.finished } : letter)));

	return steps;
};
