import { inject, ref, onMounted, watch, provide, Ref, reactive, CSSProperties } from 'vue';
import { assertNonUndefined } from "../../../utils";

const INJECTED_ELEMENTS_NAME = "libraryLinkedItemsRegistry";
type LinkedVueItems = Record<string, {
    element: HTMLElement;
    styles: Partial<CSSProperties>;
}>;
export type LinkedVueItem = LinkedVueItems[string];

export function useLinkedItem(generateId: () => string, item: Ref<HTMLElement | null>) {
    const id = ref(generateId());
    const elements = inject<LinkedVueItems>(INJECTED_ELEMENTS_NAME) ?? {};

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
    provide(INJECTED_ELEMENTS_NAME, elements);

    return elements;
}