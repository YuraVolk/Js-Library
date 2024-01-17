import { ref, onMounted, onUnmounted, computed } from "vue";
import {
	LetterSettings,
	SelfModifyingTextInterface,
	nextStringsGenerator,
	splitTextAlgorithm as algorithm,
	ModifyingTextContext as RootTextContext
} from "shared/interfaces/selfModifyingText";

export interface ModifyingTextContext extends RootTextContext {
	currentTextValue: {
		value: LetterSettings[];
	};
}

export const splitTextAlgorithm = algorithm;
export function useSelfModifyingText(settings: SelfModifyingTextInterface<ModifyingTextContext>) {
	const interval = ref<number | undefined>(undefined);
	const generator = ref(nextStringsGenerator(settings.strings[0], settings));
	const currentTextValue = ref<LetterSettings[]>(settings.strings[0].split("").map((letter) => ({ letter, classes: [] })));

	const context = computed(() => ({
		currentTextValue,
		onInterval
	}));

	function onInterval() {
		const { done, value } = generator.value.next();
		if (done) {
			window.clearTimeout(interval.value);
			interval.value = undefined;
		} else void settings.triggerTextAnimation({ context: context.value, fromText: value[0], toText: value[1] });
	}

	onMounted(() => {
		settings.splitText?.({ context: context.value });
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
