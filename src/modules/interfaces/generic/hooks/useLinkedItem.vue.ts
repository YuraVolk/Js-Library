import { inject, ref, onMounted, watch, provide, Ref } from 'vue';
import { assertNonUndefined } from "../../../utils";

const INJECTED_ELEMENTS_NAME = "libraryLinkedItemsRegistry";
type LinkedVueItems = Record<string, {
    element: HTMLElement;
    styles: Partial<CSSStyleDeclaration>;
}>;
export type LinkedVueItem = LinkedVueItems[string];

export function useLinkedItem(generateId: () => string, item: Ref<HTMLElement | null>) {
    const id = ref(generateId());
    const elements = inject<{ value: LinkedVueItems }>(INJECTED_ELEMENTS_NAME) ?? { value: {} };

    onMounted(() => {
        assertNonUndefined(item.value);
        elements.value[id.value] = {
            element: item.value,
            styles: {}
        };
    });

    watch(
        () => elements.value[id.value]?.styles,
        () => {
            if (item.value) Object.assign(item.value.style, elements.value[id.value].styles);
        }
    );
}

export function useInjectedLinkedItems() {
    const elements = ref<LinkedVueItems>({});
    provide(INJECTED_ELEMENTS_NAME, elements);

    return elements;
}