import { ref, onMounted, onUnmounted } from "vue";
import {
	LetterSettings,
	SelfModifyingTextInterface,
	nextStringsGenerator,
	splitTextAlgorithm as algorithm
} from "shared/interfaces/selfModifyingText";

export const splitTextAlgorithm = algorithm;
export function useSelfModifyingText(settings: SelfModifyingTextInterface) {
	const interval = ref<number | undefined>(undefined);
	const generator = ref(nextStringsGenerator(settings.strings[0], settings));
	const currentTextValue = ref<LetterSettings[]>(settings.strings[0].split("").map((letter) => ({ letter, classes: [] })));

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
		window.clearTimeout(settings.interval);
	});

	return {
		interval,
		currentTextValue,
		settings,
		onInterval
	};
}
