import React, { useRef } from "react";
import { SelfModifyingTextReactReturnType, useSelfModifyingText } from "../../interfaces/hooks/useSelfModifyingText";
import { splitTextAlgorithm } from "shared/interfaces/selfModifyingText";
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

	async function cipherLetter(this: SelfModifyingTextReactReturnType, properties: { newLetter?: string; delayed: boolean; i: number }) {
		const { newLetter, delayed, i } = properties;
		const changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
		let isDone = false;
		const definedRandom = Math.random() * 1000 + (delayed ? this.settings.typingSpeed * i : 0),
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

			this.setCurrentTextValue((current) => {
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
	}

	function splitText(this: SelfModifyingTextReactReturnType, newString: string, fromText?: string) {
		if (newString && fromText) {
			this.setCurrentTextValue(
				splitTextAlgorithm(
					fromText.split("").map((letter) => ({ letter, classes: [] })),
					newString
				)
			);
		}
	}

	async function triggerTextAnimation(this: SelfModifyingTextReactReturnType, fromText: string, toText: string) {
		splitText.call(this, toText, fromText);
		const promises = splitTextAlgorithm(
			fromText.split("").map((letter) => ({ letter, classes: [] })),
			toText
		)
			.map((character, i) => {
				if (character.letter === toText[i]) return;
				return cipherLetter.call(this, { newLetter: toText[i], i, delayed: element.current?.textContent?.length === 0 });
			})
			.filter(Boolean);
		await Promise.all(promises);

		this.setCurrentTextValue(toText.split("").map((letter) => ({ letter, classes: [] })));
		await new Promise((resolve) => {
			setTimeout(resolve, this.settings.interval);
		});

		this.onInterval();
	}

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
