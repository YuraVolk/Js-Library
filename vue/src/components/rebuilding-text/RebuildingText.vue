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
import { createRebuildingTextSteps } from "shared/component/rebuildingText";
import { LetterSettings, ModifyingTextConfiguration, TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";
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
				.filter<LetterSettings>((s): s is LetterSettings => Boolean(s));
			if (i === steps.length - 1) {
				setTimeout(() => {
					context.onInterval();
				}, props.interval);
			}
		}, props.typingSpeed * i);
	}
};

const { currentTextValue } = useSelfModifyingText({
	strings: props.strings,
	repetitions: props.repetitions,
	interval: props.interval,
	typingSpeed: props.typingSpeed,
	triggerTextAnimation
});
</script>
