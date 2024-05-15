import React, { useCallback } from "react";
import { LetterSettings, ModifyingTextConfiguration, TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";
import { ModifyingTextContext, useSelfModifyingText } from "../../interfaces/hooks/useSelfModifyingText";
import { createRebuildingTextSteps } from "shared/component/rebuildingText";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";

export const RebuildingText = ({
	repetitions = 1,
	interval = 2500,
	typingSpeed = 75,
	...props
}: ModifyingTextConfiguration & GenericReactComponentProps) => {
	const triggerTextAnimation = useCallback<TriggerTextAnimationCallback<ModifyingTextContext>>(
		({ context, fromText, toText }) => {
			const steps = createRebuildingTextSteps(fromText, toText);
			for (let i = 0; i < steps.length; i++) {
				setTimeout(() => {
					context.setCurrentTextValue(steps[i].filter<LetterSettings>((s): s is LetterSettings => Boolean(s)));

					if (i === steps.length - 1) {
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
		strings: props.strings,
		repetitions,
		interval,
		typingSpeed,
		triggerTextAnimation
	});

	return (
		<pre className={props.className}>
			{currentTextValue.map((letter, i) => (
				<span key={`${letter.letter}-${String(i)}`}>
					{letter.letter}
				</span>
			))}
		</pre>
	);
};
