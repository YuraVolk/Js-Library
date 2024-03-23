<template>
  <div class="wrap">
    <div class="gallery">
      <ul
        class="gallery-list"
        :style="galleryListStyle"
      >
        <first-element />
        <slot />
        <last-element />
      </ul>
    </div>
    <div
      v-if="props.showArrows"
      class="gallery-controls"
    >
      <button
        class="gallery-controls__previous-button"
        @click="() => { changeCurrentSlide(currentSlide - 1); }"
      />
      <button
        class="gallery-controls__next-button"
        @click="() => { changeCurrentSlide(currentSlide + 1); }"
      />
    </div>
    <ul
      v-if="props.showToggles && itemsLength > 1"
      class="gallery-toggles"
    >
      <li
        v-for="i in itemsLength - 2"
        :key="i"
        class="gallery-toggle"
        :class="{ 'gallery-toggle--active': currentSlide - 1 === i - 1 }"
        @click="() => { changeCurrentSlide(i); }"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { GalleryCarouselConfiguration } from 'shared/component/galleryCarousel';
import { useInjectedLinkedItems } from '../../interfaces/hooks/useLinkedItem';
import { computed, ref, createVNode, VNode, onUnmounted, CSSProperties } from 'vue';

const props = withDefaults(defineProps<Partial<GalleryCarouselConfiguration>>(), {
    smoothDiametralTransition: true,
    current: 1,
    frameGap: 20,
    animationDuration: 500,
    showArrows: true,
    showToggles: true
});

const slots = defineSlots<{
    default(): VNode[];
}>();

const firstElement = () => {
    const defaultSlot = slots.default();
    const lastElement = defaultSlot[defaultSlot.length - 1];
    return createVNode(lastElement.type, lastElement.props, lastElement.children);
};

const lastElement = () => {
    const firstElement = slots.default()[0];
    return createVNode(firstElement.type, firstElement.props, firstElement.children);
};

const currentSlide = ref(props.current);
const elements = useInjectedLinkedItems();
const isAnimating = ref(false);
const interval = ref<number | undefined>();

const itemsLength = computed(() => Object.keys(elements).length);
const galleryLeft = ref(currentSlide.value * -100);
const galleryListStyle = computed<CSSProperties>(() => ({
    left: `${String(galleryLeft.value)}%`
}));

const checkCurrentSlide = (value: number) => {
    if (value === 0 || value > itemsLength.value - 2) return value === 0 ? itemsLength.value - 2 : 1;
	return value;
};

const slideTo = (position: number, newPosition: number) => {
    isAnimating.value = true;
    const start = new Date();
    interval.value = window.setInterval(() => {
        let progress = (new Date().getTime() - start.getTime()) / props.animationDuration;
        if (progress > 1) progress = 1;
        galleryLeft.value = position + Math.abs(newPosition - position) * progress ** 2 * (position > newPosition ? -1 : 1);
        if (progress === 1) {
            window.clearInterval(interval.value);
            isAnimating.value = false;
            const newSlide = checkCurrentSlide(currentSlide.value);
            currentSlide.value = newSlide;
            galleryLeft.value = newSlide * -100;
        }
    }, props.frameGap);
};

const changeCurrentSlide = (newSlide: number) => {
    if (itemsLength.value <= 1) return;
    if (!props.smoothDiametralTransition) newSlide = checkCurrentSlide(newSlide);
    const newPosition = newSlide * -100;
    if (!isAnimating.value && galleryLeft.value !== newPosition) {
        currentSlide.value = newSlide;
        slideTo(galleryLeft.value, newPosition);
    }
};

onUnmounted(() => {
    window.clearInterval(interval.value);
});
</script>

<style scoped>
.wrap {
    position: relative;
}

.gallery {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
}

.gallery-list {
    position: relative;
    display: flex;
    width: inherit;
    height: inherit;
    margin: 0;
    padding: 0;
    list-style-type: none;
    font-size: 0;
    white-space: nowrap;
    line-height: 1;
    z-index: 10;
}

.gallery-item {
    display: inline-block;
    width: 100%;
    height: 100%;
}

.gallery-toggles {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style-type: none;
    padding: 0;
    gap: 0.3rem;
}

.gallery-toggle {
    width: 10px;
    height: 10px;
    cursor: pointer;
    border: 1px solid #e2e2e2;
    border-radius: 50%;
}

.gallery-toggle--active {
    background-color: #2390bb;
}

.gallery-controls {
    position: absolute;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    left: -10%;
    right: -10%;
    top: 0;
    bottom: 0;
}

.gallery-controls__next-button {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7.5px 0 7.5px 13px;
    border-color: transparent transparent transparent #fff;
    background: none;
    cursor: pointer;
}

.gallery-controls__previous-button {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7.5px 13px 7.5px 0;
    border-color: transparent #fff transparent transparent;
    background: none;
    cursor: pointer;
}
</style>