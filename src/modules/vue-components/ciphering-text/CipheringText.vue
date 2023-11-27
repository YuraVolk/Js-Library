<template>
    <pre ref="element">
        <span v-for="letter in settings.currentTextValue.value" v-text="letter.letter" :class="letter.classes.join('')"></span>
    </pre>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { ModifyingTextConfiguration } from 'src/modules/interfaces/generic/selfModifyingText/selfModifyingText';
import { useSelfModifyingText, splitTextAlgorithm } from 'src/modules/interfaces/generic/selfModifyingText/selfModifyingText.vue';

interface CipheringTextConfiguration extends ModifyingTextConfiguration {
    characters?: string[];
}

const props = defineProps<CipheringTextConfiguration>();
const element = ref<HTMLElement | null>(null);
const characters = computed(() => props.characters ?? ['!', '"', '#', '$', '%', '*', '0', '1', ':', ';', '?', '@', '[', ']', '\\', '~', "'", '/', '{', '}', '|', '&', '(', ')', '-', '<', '>']);
const settings = useSelfModifyingText({
    strings: props.strings,
    repetitions: props.repetitions ?? 1,
    interval: props.interval ?? 3000,
    typingSpeed: props.typingSpeed ?? 45,
    triggerTextAnimation,
    splitText
});

const cipherLetter = (properties: { newLetter?: string, delayed: boolean, i: number }) => {
    const { newLetter, delayed, i } = properties;
    const changeNumber = Math.round(Math.random() * ((delayed ? 44 : 14) - 6) + 6);
    let isDone = false, index = 0;
    const definedRandom = (Math.random() * 1000) + (delayed ? settings.settings.typingSpeed * i : 0), speed = 65;
    setTimeout(() => {
        while (index <= changeNumber) {
            (function (index) {
                setTimeout(() => {
                    let newValue: string | undefined;
                    if (!isDone) newValue = characters.value[Math.floor(Math.random() * characters.value.length)];
                    if (index >= changeNumber) {
                        isDone = true;
                        newValue = newLetter ?? "";
                    }

                    if (newValue !== undefined) settings.currentTextValue.value[i] = {
                        letter: newValue,
                        classes: isDone ? [] : ["active"]
                    };
                }, speed * index);
            })(index++);
        }
    }, definedRandom);

    return changeNumber * speed + speed;
};

function splitText(newString?: string) {
    if (newString) settings.currentTextValue.value = splitTextAlgorithm(settings.currentTextValue.value, newString);
}

function triggerTextAnimation(_: string, toText: string) {
    splitText(toText);
    const speeds: number[] = [];
    settings.currentTextValue.value.forEach((character, i) => {
        if (character.letter === toText[i]) return;
        speeds.push(cipherLetter({ newLetter: toText[i], i, delayed: element.value?.textContent?.length === 0 }));
    });

    setTimeout(() => {
        settings.currentTextValue.value = settings.currentTextValue.value.filter(v => Boolean(v.letter));
        settings.onInterval();
    }, Math.max(...speeds) + settings.settings.interval);
}
</script>

<style>
pre {
    white-space: normal;
}
</style>