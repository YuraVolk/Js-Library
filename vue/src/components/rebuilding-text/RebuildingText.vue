<template>
	<pre>
        <span v-for="letter in settings.currentTextValue.value" v-text="letter.letter" :class="letter.classes.join('')"></span>
    </pre>
</template>

<script setup lang="ts">
import { createRebuildingTextSteps } from "shared/component/rebuildingText";
import { ModifyingTextConfiguration, TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";
import { ModifyingTextContext, useSelfModifyingText } from "../../interfaces/hooks/useSelfModifyingText";

const props = withDefaults(defineProps<ModifyingTextConfiguration>(), {
	repetitions: 1,
	interval: 2500,
	typingSpeed: 75
});

const triggerTextAnimation: TriggerTextAnimationCallback<ModifyingTextContext> = ({ context, fromText, toText }) => {
	const steps = createRebuildingTextSteps(fromText, toText);
	for (let i = 0; i < steps.length; i++) {
		setTimeout(() => {
			context.currentTextValue.value = steps[i]
				.filter<string>((s): s is string => Boolean(s))
				.map((letter) => ({
					letter,
					classes: []
				}));

			if (i === steps.length - 1) {
				setTimeout(() => {
					context.onInterval();
				}, props.interval);
			}
		}, props.typingSpeed * i);
	}
};

const settings = useSelfModifyingText({
	strings: props.strings,
	repetitions: props.repetitions,
	interval: props.interval,
	typingSpeed: props.typingSpeed,
	triggerTextAnimation
});
</script>
