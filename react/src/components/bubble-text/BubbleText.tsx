import { useCallback, useRef } from "react";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";
import {
	ModifyingTextContext,
	SelfModifyingText,
	SelfModifyingTextProps,
	useSelfModifyingText
} from "../../interfaces/hooks/useSelfModifyingText";
import { LetterSettings, ModifyingTextConfiguration, TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";
import React from "react";

export const BubbleText = ({
	repetitions = 1,
	interval = 3000,
	typingSpeed = 45,
	strings,
	...props
}: ModifyingTextConfiguration & GenericReactComponentProps & SelfModifyingTextProps) => {
	const triggerTextAnimation = useCallback<TriggerTextAnimationCallback<ModifyingTextContext>>(
		({ context, fromText, toText }) => {
			const fromTextArray: Array<LetterSettings | undefined> = fromText.split("").map((letter) => ({ letter, letterState: "idle" }));
			const toTextArray: Array<LetterSettings | undefined> = toText.split("").map((letter) => ({ letter, letterState: "idle" }));

			if (fromTextArray.length < toTextArray.length) {
				let index = 0;
				while (fromTextArray.length < toTextArray.length) {
					if (++index === fromTextArray.length) index = 0;
					fromTextArray.splice(fromTextArray.length, 0, undefined);
				}
			} else if (toTextArray.length < fromTextArray.length) {
                let index = 0;
                while (toTextArray.length < fromTextArray.length) {
                    toTextArray.splice(toTextArray.length, 0, undefined);
                    if (++index === toTextArray.length) index = 0;
                }
            }

			for (let i = 0; i < fromTextArray.length; i++) {
				setTimeout(() => {
					fromTextArray[i] = {
						letter: toTextArray[i]?.letter ?? " ",
						letterState: toTextArray[i] === undefined || fromTextArray[i] === undefined ? "finished" : "changing"
					};

					context.setCurrentTextValue([...fromTextArray].filter<LetterSettings>((s): s is LetterSettings => Boolean(s)));

					if (i === fromTextArray.length - 1) {
						setTimeout(() => {
							context.onInterval();
						}, interval);
					}
				}, typingSpeed * i);
			}
		},
		[interval, typingSpeed]
	);

	const currentTextValue = useSelfModifyingText({
		strings,
		repetitions,
		interval,
		typingSpeed,
		triggerTextAnimation
	});

	return <SelfModifyingText ref={useRef(null)} currentTextValue={currentTextValue} {...props} />;
};
