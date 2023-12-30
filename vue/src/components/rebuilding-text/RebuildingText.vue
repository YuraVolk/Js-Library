<template>
	<pre>
        <span v-for="letter in settings.currentTextValue.value" v-text="letter.letter" :class="letter.classes.join('')"></span>
    </pre>
</template>

<script setup lang="ts">
import { createRebuildingTextSteps } from "shared/component/rebuildingText";
import { ModifyingTextConfiguration } from "shared/interfaces/selfModifyingText";
import { useSelfModifyingText } from "../../interfaces/hooks/useSelfModifyingText";

const props = defineProps<ModifyingTextConfiguration>();
const settings = useSelfModifyingText({
	strings: props.strings,
	repetitions: props.repetitions ?? 1,
	interval: props.interval ?? 2500,
	typingSpeed: props.typingSpeed ?? 75,
	triggerTextAnimation
});

function triggerTextAnimation(fromText: string, toText: string) {
	const steps = createRebuildingTextSteps(fromText, toText);
	for (let i = 0; i < steps.length; i++) {
		setTimeout(() => {
			settings.currentTextValue.value = steps[i]
				.filter<string>((s): s is string => Boolean(s))
				.map((letter) => ({
					letter,
					classes: []
				}));

			if (i === steps.length - 1) {
				setTimeout(() => {
					settings.onInterval();
				}, settings.settings.interval);
			}
		}, settings.settings.typingSpeed * i);
	}
}
</script>
