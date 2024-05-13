<template>
  <TransitionGroup
    tag="pre"
  >
    <slot :letters="currentTextValue">
      <span
        v-for="letter, i in currentTextValue"
        :key="i"
        v-text="letter.letter"
      />
    </slot>
  </TransitionGroup>
</template>

<script lang="ts" setup>
import { useSelfModifyingText, splitTextAlgorithm, ModifyingTextContext } from "../../interfaces/hooks/useSelfModifyingText";
import { CipheringTextConfiguration } from "shared/component/cipheringText";
import { SplitTextCallback, TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";

const props = withDefaults(defineProps<CipheringTextConfiguration>(), {
	characters: () => [
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
	],
	repetitions: 1,
	interval: 5000,
	typingSpeed: 45
});

const cipherLetter = (context: ModifyingTextContext, properties: { newLetter?: string; delayed: boolean; i: number }) => {
	const { newLetter, delayed, i } = properties;
	const changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
	let isDone = false,
		index = 0;
	const definedRandom = Math.random() * 1000 + (delayed ? props.typingSpeed * i : 0),
		speed = props.typingSpeed;
	setTimeout(() => {
		while (index <= changeNumber) {
			(function (index) {
				setTimeout(() => {
					let newValue: string | undefined;
					if (!isDone) newValue = props.characters[Math.floor(Math.random() * props.characters.length)];
					if (index >= changeNumber) {
						isDone = true;
						newValue = newLetter ?? "";
					}

					if (newValue !== undefined) {
						context.currentTextValue.value[i] = {
							letter: newValue,
							letterState: isDone ? 'finished' : 'changing'
						};
					}
				}, speed * index);
			})(index++);
		}
	}, definedRandom);

	return changeNumber * speed + speed;
};

const splitText: SplitTextCallback<ModifyingTextContext> = ({ context, toText }) => {
	if (toText) context.currentTextValue.value = splitTextAlgorithm(context.currentTextValue.value, toText);
};

const triggerTextAnimation: TriggerTextAnimationCallback<ModifyingTextContext> = ({ context, toText }) => {
	void splitText({ context, toText });
	const speeds: number[] = [];
	context.currentTextValue.value.forEach((character, i) => {
		if (character.letter === toText[i]) return;
		speeds.push(cipherLetter(context, { newLetter: toText[i], i, delayed: false }));
	});

	setTimeout(() => {
		context.currentTextValue.value = context.currentTextValue.value.filter((v) => Boolean(v.letter));
		context.onInterval();
	}, Math.max(...speeds) + props.interval);
};

const { currentTextValue } = useSelfModifyingText({
	strings: props.strings,
	repetitions: props.repetitions,
	interval: props.interval,
	typingSpeed: props.typingSpeed,
	triggerTextAnimation,
	splitText
});
</script>

<style scoped>
pre {
	white-space: normal;
}

pre span {
	display: inline-block;
	overflow: hidden;
	white-space: pre;
}
</style>
