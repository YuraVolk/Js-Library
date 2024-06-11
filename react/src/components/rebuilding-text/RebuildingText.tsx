import React, { useCallback, useRef } from "react";
import { LetterSettings, ModifyingTextConfiguration, TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";
import {
	ModifyingTextContext,
	SelfModifyingText,
	SelfModifyingTextProps,
	useSelfModifyingText
} from "../../interfaces/hooks/useSelfModifyingText";
import { createRebuildingTextSteps } from "shared/component/rebuildingText";
import { GenericReactComponentProps } from "../../interfaces/generic/classNameFallthrough";

export const RebuildingText = ({
	repetitions = 1,
	interval = 2500,
	typingSpeed = 75,
	strings,
	...props
}: ModifyingTextConfiguration & GenericReactComponentProps & SelfModifyingTextProps) => {
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
		strings,
		repetitions,
		interval,
		typingSpeed,
		triggerTextAnimation
	});

	return <SelfModifyingText ref={useRef(null)} currentTextValue={currentTextValue} {...props} />;
};
