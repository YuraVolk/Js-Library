<template>
  <ul class="wrap">
    <slot />
    <div
      v-for="elementKey in Object.keys(elements).slice(1)"
      :key="elementKey"
      class="comparison-slider"
      :style="imageData[elementKey].style"
      @mousedown="(e) => onMouseStart(e, elementKey)"
      @pointerdown="(e) => onMouseStart(e, elementKey)"
    />
  </ul>
</template>

<script setup lang="ts">
import { useInjectedLinkedItems } from '../../interfaces/hooks/useLinkedItem';
import { onMounted, onUnmounted, reactive, computed, CSSProperties } from 'vue';
import { ImageComparisonData } from "shared/component/imageComparator";

const elements = useInjectedLinkedItems();
const imageData = reactive<Record<string, ImageComparisonData<CSSProperties>>>({});
const clickedElement = computed(() => Object.keys(elements).find((key) => imageData[key].isClicked));

const slide = (elementKey: string, difference: number) => {
    const element = elements[elementKey];
    const imageComparisonData = imageData[elementKey];
    element.styles = {
        width: String(difference) + "px"
    };
    imageComparisonData.style.left = String(difference) + "px";
};

const onMouseStart = (event: Event, elementKey: string) => {
    event.preventDefault();
    imageData[elementKey].isClicked = true;
};

const onMouseMove = (event: MouseEvent | PointerEvent) => {
    if (!clickedElement.value) return;
    const { element, styles } = elements[clickedElement.value];
    styles.left = "0";
    let pos = event.pageX - element.getBoundingClientRect().left - window.scrollX;
    if (pos < 0) pos = 0;
    if (pos > imageData[clickedElement.value].offsetWidth) {
        pos = imageData[clickedElement.value].offsetWidth;
    }

    slide(clickedElement.value, pos);
};

const onMouseUp = () => {
    for (const key of Object.keys(imageData)) imageData[key].isClicked = false;
};

onMounted(() => {
    Object.entries(elements).forEach(([key, { element: { offsetWidth } }], index, arr) => {
        imageData[key] = {
            isClicked: false,
            offsetWidth,
            style: {}
        };
        slide(key, offsetWidth - (offsetWidth / (arr.length) * (index)));
    });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    window.addEventListener("pointerup", onMouseUp, { passive: true });
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("pointermove", onMouseMove, { passive: true });
});

onUnmounted(() => {
    window.removeEventListener("mouseup", onMouseUp);
    window.removeEventListener("pointerup", onMouseUp);
    window.removeEventListener("mousemove", onMouseMove);
    window.removeEventListener("pointermove", onMouseMove);
});
</script>

<style scoped>
.wrap {
    position: relative;
    width: 100%;
    height: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
}

.comparison-slider {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    width: 40px;
    height: 40px;
    background-color: #333;
    border-radius: 50%;
    cursor: ew-resize;
}
</style>