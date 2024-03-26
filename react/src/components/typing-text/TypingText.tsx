import React, { useCallback, useEffect, useRef } from "react";
import { ModifyingTextContext, useSelfModifyingText } from "../../interfaces/hooks/useSelfModifyingText";
import { TypingTextConfiguration } from "shared/component/typingText";
import { TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";
import { GenericReactComponentProps } from "react/src/interfaces/generic/classNameFallthrough";

export const TypingText = ({
	repetitions = 1,
	interval = 4500,
	typingSpeed = 35,
	...props
}: TypingTextConfiguration & GenericReactComponentProps) => {
	const timeout = useRef<number>();

	const triggerTextAnimation = useCallback<TriggerTextAnimationCallback<ModifyingTextContext>>(
		async ({ context, toText, fromText }) => {
			const fromArray = fromText.split("").map((letter) => ({ letter, classes: [] }));
			const toArray = toText.split("").map((letter) => ({ letter, classes: [] }));

			for (let i = 1; i < fromText.length + 1; i++) {
				await new Promise<void>(
					(resolve) =>
						(timeout.current = window.setTimeout(() => {
							context.setCurrentTextValue(fromArray.slice(0, -i));
							resolve();
						}, props.unTypingSpeed ?? typingSpeed))
				);
			}

			for (let i = 1; i < toText.length + 1; i++) {
				await new Promise<void>(
					(resolve) =>
						(timeout.current = window.setTimeout(() => {
							context.setCurrentTextValue(toArray.slice(0, i));
							resolve();
						}, typingSpeed))
				);
			}

			timeout.current = window.setTimeout(() => {
				timeout.current = undefined;
				context.onInterval();
			}, interval);
		},
		[interval, props.unTypingSpeed, typingSpeed]
	);

	useEffect(() => {
		return () => {
			window.clearTimeout(timeout.current);
		};
	}, []);

	const currentTextValue = useSelfModifyingText({
		strings: props.strings,
		repetitions,
		interval,
		typingSpeed,
		triggerTextAnimation
	});

	return (
		<pre className={props.className}>
			{currentTextValue.map((letter, i) => (
				<span className={letter.classes.join("")} key={`${letter.letter}-${String(i)}`}>
					{letter.letter}
				</span>
			))}
		</pre>
	);
};
