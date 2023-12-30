import { ref, onMounted, onUnmounted } from 'vue';
import { SelfModifyingTextInterface, nextStringsGenerator } from 'shared/interfaces/selfModifyingText';

export const splitTextAlgorithm = (currentString: LetterSettings[], newString: string): LetterSettings[] => {
    return [...currentString.map(({ letter }) => letter).filter(Boolean), 
        ...newString.split("").slice(currentString.length).fill(" ")]
        .map(letter => ({ letter, classes: [] }));
};

export interface LetterSettings {
    letter: string;
    classes: string[];
}

export function useSelfModifyingText(settings: SelfModifyingTextInterface) {
    const interval = ref<number | undefined>(undefined);
    const generator = ref(nextStringsGenerator(settings.strings[0], settings));
    const currentTextValue = ref<LetterSettings[]>(settings.strings[0].split("").map(letter => ({ letter, classes: [] })));

    const onInterval = () => {
        const { done, value } = generator.value.next();
        if (done) {
            window.clearTimeout(interval.value);
            interval.value = undefined;
        } else void settings.triggerTextAnimation(...value);
    };

    onMounted(() => {
        settings.splitText?.();
        interval.value = window.setTimeout(() => {
            onInterval();
        }, settings.interval);
    });
    onUnmounted(() => {
        generator.value.return(["", ""]);
        window.clearInterval(settings.interval);
    });

    return {
        interval,
        currentTextValue,
        settings,
        onInterval
    };
}
