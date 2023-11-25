<template>
    <li class="carousel-item" ref="item">
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
import { inject, ref, onMounted, watch } from 'vue';
import { assertNonUndefined, uid } from "../../../utils";
import { INJECTED_ELEMENTS_NAME, CarouselItems } from './carousel.vue';

const id = ref(uid());
const item = ref<HTMLElement | null>(null);
const elements = inject<{ value: CarouselItems }>(INJECTED_ELEMENTS_NAME) ?? { value: {} };
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
        if (item.value) Object.assign(item.value.style, elements.value[id.value].styles)
    }
);
</script>
