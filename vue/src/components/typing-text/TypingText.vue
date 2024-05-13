<template>
  <TransitionGroup tag="pre">
    <slot :letters="currentTextValue">
      <span
        v-for="letter, i in currentTextValue"
        :key="i"
        v-text="letter.letter"
      />
    </slot>
  </TransitionGroup>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { TypingTextConfiguration } from "shared/component/typingText";
import { ModifyingTextContext, useSelfModifyingText } from "../../interfaces/hooks/useSelfModifyingText";
import { LetterSettings, TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";

const props = withDefaults(defineProps<TypingTextConfiguration>(), {
	repetitions: 1,
	interval: 4500,
	typingSpeed: 35
});

const timeout = ref<number | undefined>();

const triggerTextAnimation: TriggerTextAnimationCallback<ModifyingTextContext> = async ({ context, toText, fromText }) => {
	const fromArray = fromText.split("").map<LetterSettings>((letter) => ({ letter, letterState: 'idle' }));
	const toArray = toText.split("").map<LetterSettings>((letter) => ({ letter, letterState: 'idle' }));

	for (let i = 1; i < fromText.length + 1; i++) {
		await new Promise<void>(
			(resolve) =>
				(timeout.value = window.setTimeout(() => {
					context.currentTextValue.value = fromArray.slice(0, -i);
					resolve();
				}, props.unTypingSpeed ?? props.typingSpeed))
		);
	}

	for (let i = 1; i < toText.length + 1; i++) {
		await new Promise<void>(
			(resolve) =>
				(timeout.value = window.setTimeout(() => {
					context.currentTextValue.value = toArray.slice(0, i);
					resolve();
				}, props.typingSpeed))
		);
	}

	timeout.value = window.setTimeout(() => {
		timeout.value = undefined;
		context.onInterval();
	}, props.interval);
};

const { currentTextValue } = useSelfModifyingText({
	strings: props.strings,
	repetitions: props.repetitions,
	interval: props.interval,
	typingSpeed: props.typingSpeed,
	triggerTextAnimation
});

onUnmounted(() => {
	clearTimeout(timeout.value);
});
</script>
