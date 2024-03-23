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

	const steps: Array<string | undefined>[] = [fromTextArray];
	const furtherQueue: number[] = [];
	for (let i = 0; i < fromTextArray.length - 1; i++) {
		const currentState = [...steps[steps.length - 1]];
		if (i % 2 === 0) {
			[currentState[i], currentState[i + 1]] = [toTextArray[i], currentState[i]];
		} else furtherQueue.push(i);
		if (furtherQueue.includes(i - 2)) {
			const index = furtherQueue.shift() ?? 0;
			currentState[index] = toTextArray[index];
		}

		steps.push(currentState);
	}
	steps.push(toTextArray);

	return steps;
};
