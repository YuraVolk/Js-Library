import { inject, ref, onMounted, watch, provide, Ref, reactive, CSSProperties } from "vue";
import { assertNonUndefined } from "shared/utils/utils";
import { LinkedRegistryRecord } from "shared/hooks/useLinkedItem";

export const injectedElementsRegistryKey = Symbol();
type LinkedVueItems = LinkedRegistryRecord<keyof CSSProperties, CSSProperties>;
export type LinkedVueItem = LinkedVueItems[string];

export function useLinkedItem(generateId: () => string, item: Ref<HTMLElement | null>) {
	const id = ref(generateId());
	const elements = inject<LinkedVueItems>(injectedElementsRegistryKey) ?? {};

	onMounted(() => {
		assertNonUndefined(item.value);
		elements[id.value] = {
			element: item.value,
			styles: {}
		};
	});

	watch(
		() => elements[id.value]?.styles,
		() => {
			if (item.value) Object.assign(item.value.style, elements[id.value].styles);
		}
	);
}

export function useInjectedLinkedItems() {
	const elements = reactive<LinkedVueItems>({});
	provide(injectedElementsRegistryKey, elements);

	return elements;
}
