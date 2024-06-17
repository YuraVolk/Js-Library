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

<script lang="ts" setup>
import { useSelfModifyingText, ModifyingTextContext } from "../../interfaces/hooks/useSelfModifyingText";
import { LetterSettings, ModifyingTextConfiguration } from "shared/interfaces/selfModifyingText";
import { TriggerTextAnimationCallback } from "shared/interfaces/selfModifyingText";

const props = withDefaults(defineProps<ModifyingTextConfiguration>(), {
    interval: 3000,
    repetitions: 1,
    typingSpeed: 45
});

const triggerTextAnimation: TriggerTextAnimationCallback<ModifyingTextContext> = ({ context, fromText, toText }) => {
    const fromTextArray: Array<LetterSettings | undefined> = fromText.split("").map((letter) => ({ letter, letterState: "idle" }));
    const toTextArray: Array<LetterSettings | undefined> = toText.split("").map((letter) => ({ letter, letterState: "idle" }));

    if (fromTextArray.length < toTextArray.length) {
        let index = 0;
        while (fromTextArray.length < toTextArray.length) {
            if (++index === fromTextArray.length) index = 0;
            fromTextArray.splice(fromTextArray.length, 0, undefined);
        }
    } else if (toTextArray.length < fromTextArray.length) {
        let index = 0;
        while (toTextArray.length < fromTextArray.length) {
            toTextArray.splice(toTextArray.length, 0, undefined);
            if (++index === toTextArray.length) index = 0;
        }
    }

    for (let i = 0; i < fromTextArray.length; i++) {
        setTimeout(() => {
            fromTextArray[i] = {
                letter: toTextArray[i]?.letter ?? " ",
                letterState: toTextArray[i] === undefined || fromTextArray[i] === undefined ? "finished" : "changing"
            };

            context.currentTextValue.value = fromTextArray.filter<LetterSettings>((s): s is LetterSettings => Boolean(s));

            if (i === fromTextArray.length - 1) {
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
	triggerTextAnimation,
});
</script>