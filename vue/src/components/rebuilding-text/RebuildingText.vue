<template>
  <TransitionGroup
    tag="pre"
    @before-leave="beforeLeave"
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
				.filter<LetterSettings>((s): s is LetterSettings => Boolean(s?.letter));
			if (i === steps.length - 1) {
				setTimeout(() => {
					context.onInterval();
				}, props.interval);
			}
		}, props.typingSpeed * i);
	}
};

const beforeLeave = (el: Element) => {
	if (el instanceof HTMLElement) {
		el.style.left = `0`
		el.style.top = `0`
		el.style.width = ''
		el.style.height = ''
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
