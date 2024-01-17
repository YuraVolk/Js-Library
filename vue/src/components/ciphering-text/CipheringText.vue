<template>
    <pre ref="element">
        <span v-for="letter in settings.currentTextValue.value" v-text="letter.letter" :class="letter.classes.join('')"></span>
    </pre>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useSelfModifyingText, splitTextAlgorithm, ModifyingTextContext } from '../../interfaces/hooks/useSelfModifyingText';
import { CipheringTextConfiguration } from 'shared/component/cipheringText';
import { SplitTextCallback, TriggerTextAnimationCallback } from 'shared/interfaces/selfModifyingText';

const props = withDefaults(
    defineProps<CipheringTextConfiguration>(),
    {
        characters: () => ['!', '"', '#', '$', '%', '*', '0', '1', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>'],
        repetitions: 1,
        interval: 3000,
        typingSpeed: 45
    }
);
const element = ref<HTMLElement | null>(null);

const cipherLetter = (context: ModifyingTextContext, properties: { newLetter?: string, delayed: boolean, i: number }) => {
    const { newLetter, delayed, i } = properties;
    const changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
    let isDone = false, index = 0;
    const definedRandom = (Math.random() * 1000) + (delayed ? props.typingSpeed * i : 0), speed = props.typingSpeed;
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

                    if (newValue !== undefined) context.currentTextValue.value[i] = {
                        letter: newValue,
                        classes: isDone ? [] : ["active"]
                    };
                }, speed * index);
            })(index++);
        }
    }, definedRandom);

    return changeNumber * speed + speed;
};

const splitText: SplitTextCallback<ModifyingTextContext> = ({ context, newString }) => {
    if (newString) context.currentTextValue.value = splitTextAlgorithm(context.currentTextValue.value, newString);
};

const triggerTextAnimation: TriggerTextAnimationCallback<ModifyingTextContext> = ({ context, toText }) => {
    splitText({ context, newString: toText });
    const speeds: number[] = [];
    context.currentTextValue.value.forEach((character, i) => {
        if (character.letter === toText[i]) return;
        speeds.push(cipherLetter(context, { newLetter: toText[i], i, delayed: element.value?.textContent?.length === 0 }));
    });

    setTimeout(() => {
        context.currentTextValue.value = context.currentTextValue.value.filter(v => Boolean(v.letter));
        context.onInterval();
    }, Math.max(...speeds) + props.interval);
};

const settings = useSelfModifyingText({
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
</style>
