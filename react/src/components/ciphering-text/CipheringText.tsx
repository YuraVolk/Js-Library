import React, { useCallback, useRef } from "react";
import { ModifyingTextContext, useSelfModifyingText } from "../../interfaces/hooks/useSelfModifyingText";
import { SplitTextCallback, TriggerTextAnimationCallback, splitTextAlgorithm } from "shared/interfaces/selfModifyingText";
import { ReactCipheringTextConfiguration } from "../../interfaces/component/cipheringText";

const defaultCharacters = [
	"!",
	'"',
	"#",
	"$",
	"%",
	"*",
	"0",
	"1",
	":",
	";",
	"?",
	"@",
	"[",
	"]",
	"\\",
	"~",
	"'",
	"/",
	"{",
	"}",
	"|",
	"&",
	"(",
	")",
	"-",
	"<",
	">"
];

export const CipheringText = ({
	characters = defaultCharacters,
	repetitions = 1,
	interval = 3000,
	typingSpeed = 45,
	...props
}: ReactCipheringTextConfiguration) => {
	const element = useRef<HTMLPreElement | null>(null);

	const cipherLetter = useCallback(
		async (context: ModifyingTextContext, properties: { newLetter?: string; delayed: boolean; i: number }) => {
			const { newLetter, delayed, i } = properties;
			const changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
			let isDone = false;
			const definedRandom = Math.random() * 1000 + (delayed ? typingSpeed * i : 0),
				speed = typingSpeed;

			await new Promise((resolve) => {
				setTimeout(resolve, definedRandom);
			});

			for (let index = 0; index <= changeNumber; index++) {
				await new Promise((resolve) => {
					setTimeout(resolve, speed);
				});

				let newValue: string | undefined;
				if (!isDone) newValue = characters[Math.floor(Math.random() * characters.length)];
				if (index >= changeNumber) {
					isDone = true;
					newValue = newLetter ?? "";
				}

				context.setCurrentTextValue((current) => {
					const newCurrentText = [...current];
					if (newValue !== undefined) {
						newCurrentText[i] = {
							letter: newValue,
							classes: isDone ? [] : ["active"]
						};
					}

					return newCurrentText;
				});
			}
		},
		[characters, typingSpeed]
	);

	const splitText = useCallback<SplitTextCallback<ModifyingTextContext>>(({ context, toText, fromText }) => {
		if (toText && fromText) {
			context.setCurrentTextValue(
				splitTextAlgorithm(
					fromText.split("").map((letter) => ({ letter, classes: [] })),
					toText
				)
			);
		}
	}, []);

	const triggerTextAnimation = useCallback<TriggerTextAnimationCallback<ModifyingTextContext>>(
		async ({ context, fromText, toText }) => {
			void splitText({ context, toText, fromText });
			const promises = splitTextAlgorithm(
				fromText.split("").map((letter) => ({ letter, classes: [] })),
				toText
			)
				.map((character, i) => {
					if (character.letter === toText[i]) return;
					return cipherLetter(context, { newLetter: toText[i], i, delayed: element.current?.textContent?.length === 0 });
				})
				.filter(Boolean);
			await Promise.all(promises);

			context.setCurrentTextValue(toText.split("").map((letter) => ({ letter, classes: [] })));
			await new Promise((resolve) => {
				setTimeout(resolve, interval);
			});

			context.onInterval();
		},
		[cipherLetter, interval, splitText]
	);

	const currentTextValue = useSelfModifyingText({
		strings: props.strings,
		repetitions,
		interval,
		typingSpeed,
		splitText,
		triggerTextAnimation
	});

	return (
		<pre ref={element}>
			{currentTextValue.map((letter, i) => (
				<span className={letter.classes.join("")} key={`${letter.letter}-${i}`}>
					{letter.letter}
				</span>
			))}
		</pre>
	);
};
