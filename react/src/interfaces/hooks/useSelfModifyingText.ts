import { useRef, useState, useMemo, useEffect } from "react";
import {
	ModifyingTextContext as RootTextContext,
	LetterSettings,
	SelfModifyingTextInterface,
	nextStringsGenerator,
	LetterState
} from "shared/interfaces/selfModifyingText";

export interface ModifyingTextContext extends RootTextContext {
	interval: React.MutableRefObject<number | undefined>;
	currentTextValue: LetterSettings[];
	setCurrentTextValue: React.Dispatch<React.SetStateAction<LetterSettings[]>>;
}

export function useSelfModifyingText(settings: SelfModifyingTextInterface<ModifyingTextContext>) {
	const interval = useRef<number>();
	const generator = useRef<Generator<[string, string], [string, string], [string, string]>>();
	const [currentTextValue, setCurrentTextValue] = useState<LetterSettings[]>(() => {
		return settings.strings[0].split("").map((letter) => ({ letter, letterState: LetterState.idle }));
	});

	const { context, onInterval } = useMemo(() => {
		const context = {
			interval,
			currentTextValue,
			setCurrentTextValue,
			onInterval
		};

		const scheduleUpdate = (value: [string, string]) => {
			void settings.triggerTextAnimation({ context, fromText: value[0], toText: value[1] });
		};

		function onInterval() {
			generator.current ??= nextStringsGenerator(settings.strings[0], settings);

			const { done, value } = generator.current.next();
			if (done) {
				window.clearTimeout(interval.current);
				interval.current = undefined;
			} else scheduleUpdate(value);
		}

		return { context, onInterval };
	}, [currentTextValue, settings]);

	useEffect(() => {
		return () => {
			generator.current?.return(["", ""]);
			generator.current = nextStringsGenerator(settings.strings[0], settings);
			window.clearTimeout(interval.current);
		};
	}, [settings.strings]);

	useEffect(() => {
		void settings.splitText?.({ context });
		interval.current = window.setTimeout(() => {
			onInterval();
		}, settings.interval);
	}, []);

	return currentTextValue;
}
