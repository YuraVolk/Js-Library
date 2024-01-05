import React, { useCallback, useEffect, useRef, useState } from "react";
import { LetterSettings, SelfModifyingTextInterface, nextStringsGenerator } from "shared/interfaces/selfModifyingText";

export interface SelfModifyingTextReactReturnType {
	onInterval: () => void;
	interval: React.MutableRefObject<number | undefined>;
	settings: SelfModifyingTextInterface;
	currentTextValue: LetterSettings[];
	setCurrentTextValue: React.Dispatch<React.SetStateAction<LetterSettings[]>>;
}

export function useSelfModifyingText(settings: SelfModifyingTextInterface) {
	const interval = useRef<number>();
	const generator = useRef<Generator<[string, string], [string, string], [string, string]>>();
	const [currentTextValue, setCurrentTextValue] = useState<LetterSettings[]>(() => {
		return settings.strings[0].split("").map((letter) => ({ letter, classes: [] }))
	});

	const onInterval = useCallback(() => {
		generator.current ??= nextStringsGenerator(settings.strings[0], settings);

		const { done, value } = generator.current.next();
		if (done) {
			window.clearTimeout(interval.current);
			interval.current = undefined;
		} else scheduleUpdate(value);
	}, [generator, settings.triggerTextAnimation]);

	function scheduleUpdate(value: [string, string]) {
		void settings.triggerTextAnimation.call(
			{
				interval,
				settings,
				currentTextValue,
				setCurrentTextValue,
				onInterval
			} satisfies SelfModifyingTextReactReturnType,
			...value
		);
	}

	useEffect(() => {
		return () => {
			generator.current?.return(["", ""]);
			generator.current = nextStringsGenerator(settings.strings[0], settings);
			window.clearTimeout(interval.current);
		};
	}, [settings.interval]);

	useEffect(() => {
		settings.splitText?.();
		interval.current = window.setTimeout(() => {
			onInterval();
		}, settings.interval);
	}, []);

	return currentTextValue;
}
