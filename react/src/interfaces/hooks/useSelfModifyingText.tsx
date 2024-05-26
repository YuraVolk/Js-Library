import { useRef, useState, useMemo, useEffect, forwardRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
	ModifyingTextContext as RootTextContext,
	LetterSettings,
	SelfModifyingTextInterface,
	nextStringsGenerator,
	LetterState
} from "shared/interfaces/selfModifyingText";
import { GenericReactComponentProps } from "../generic/classNameFallthrough";
import React from "react";
import type { CSSTransitionClassNames } from "react-transition-group/CSSTransition";
import { assertNonUndefinedDevOnly } from "shared/utils/utils";

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

interface SelfModifyingTextBaseProps extends GenericReactComponentProps {
	currentTextValue: LetterSettings[];
	children?(letter: LetterSettings, i: number): JSX.Element;
}

interface SelfModifyingTextTransitionProps extends Required<SelfModifyingTextBaseProps> {
	classNames: string | CSSTransitionClassNames | undefined;
	duration: number;
}

export type SelfModifyingTextProps = Omit<SelfModifyingTextBaseProps | SelfModifyingTextTransitionProps, "currentTextValue">;
export const SelfModifyingText = forwardRef<HTMLPreElement | null, SelfModifyingTextBaseProps | SelfModifyingTextTransitionProps>(
	(props, ref) => {
		if (props.children && "duration" in props) {
			return (
				<TransitionGroup component="pre" className={props.className}>
					{props.currentTextValue.map((letterSettings, i) => {
						const value = props.children(letterSettings, i);

						return (
							<CSSTransition key={value.key} timeout={props.duration} classNames={props.classNames}>
								{value}
							</CSSTransition>
						);
					})}
				</TransitionGroup>
			);
		} else if (props.children) {
			return (
				<pre className={props.className} ref={ref}>
					{props.currentTextValue.map((letterSettings, i) => {
						assertNonUndefinedDevOnly(props.children);
						return props.children(letterSettings, i);
					})}
				</pre>
			);
		} else {
			return (
				<pre className={props.className} ref={ref}>
					{props.currentTextValue.map((letterSettings, i) => (
						<span key={letterSettings.letter + String(i)}>{letterSettings.letter}</span>
					))}
				</pre>
			);
		}
	}
);
