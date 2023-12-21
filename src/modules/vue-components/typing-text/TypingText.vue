<template>
	<pre>
        <span v-for="letter in settings.currentTextValue.value" v-text="letter.letter" :class="letter.classes.join('')"></span>
    </pre>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from "vue";
import { TypingTextConfiguration } from "../../interfaces/component/typing-text/types";
import { useSelfModifyingText } from "../../interfaces/generic/selfModifyingText/selfModifyingText.vue";

const props = withDefaults(defineProps<TypingTextConfiguration>(), {
	repetitions: 1,
	interval: 4500,
	typingSpeed: 35
});
const settings = useSelfModifyingText({
	strings: props.strings,
	repetitions: props.repetitions,
	interval: props.interval,
	typingSpeed: props.typingSpeed,
	triggerTextAnimation
});

const timeout = ref<number | undefined>();

async function triggerTextAnimation(fromText: string, toText: string) {
	const fromArray = fromText.split("").map((letter) => ({ letter, classes: [] }));
	const toArray = toText.split("").map((letter) => ({ letter, classes: [] }));

	for (let i = 1; i < fromText.length + 1; i++) {
		await new Promise<void>(
			(resolve) =>
				(timeout.value = window.setTimeout(() => {
					settings.currentTextValue.value = fromArray.slice(0, -i);
					resolve();
				}, props.unTypingSpeed ?? props.typingSpeed))
		);
	}

	for (let i = 1; i < toText.length + 1; i++) {
		await new Promise<void>(
			(resolve) =>
				(timeout.value = window.setTimeout(() => {
					settings.currentTextValue.value = toArray.slice(0, i);
					resolve();
				}, props.unTypingSpeed ?? props.typingSpeed))
		);
	}

	setTimeout(() => {
		clearTimeout(timeout.value);
		settings.onInterval();
	}, props.interval);
}

onUnmounted(() => {
	clearTimeout(timeout.value);
});
</script>
