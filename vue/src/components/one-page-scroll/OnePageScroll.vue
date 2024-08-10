<template>
  <article>
    <div
      ref="wrap"
      class="wrap"
      :class="{ 'wrap--horizontal': !isVertical, 'wrap--no-scrollbar': noScrollbar }"
      @wheel="onWheel"
    >
      <slot />
    </div>
    <div
      v-if="allowSwitchingOrientation || showArrows"
      class="carousel-controls"
    >
      <button
        v-if="showArrows"
        class="carousel-controls__previous-button"
        @click="onPreviousSlide"
      />
      <button
        v-if="allowSwitchingOrientation"
        class="carousel-controls__perspective-button"
        @click="switchOrientation"
      >
        Switch
      </button>
      <button
        v-if="showArrows"
        class="carousel-controls__next-button"
        @click="onNextSlide"
      />
    </div>
    <ul
      v-if="showToggles"
      class="carousel-controls__toggles"
    >
      <li
        v-for="i in Object.keys(elements).length"
        :key="i"
        class="carousel-controls__toggle"
        :class="{ 'carousel-controls__toggle--active': currentItem === i - 1 }"
        @click="() => {
          navigateToItem(i - 1);
        }"
      />
    </ul>
  </article>
</template>

<script setup lang="ts">
import { OnePageScrollConfiguration, easeInOutQuad } from "shared/component/onePageScroll";
import { useInjectedLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import { computed, nextTick, onUnmounted, ref } from "vue";
import { CarouselDirection } from "shared/interfaces/carousel";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";

const props = withDefaults(defineProps<Partial<OnePageScrollConfiguration>>(), {
	isVertical: true,
	noScrollbar: true,
	increment: 6,
	duration: 500,
	allowSwitchingOrientation: false,
	showArrows: false,
	showToggles: false
});
const elements = useInjectedLinkedItems();
const elementsLength = computed(() => Object.keys(elements).length);
const firstElement = computed(() => Object.values(elements)[0].element);
const currentItem = ref(0);
const previousItem = ref(0);
const isScrolling = ref(false);
const wrap = ref<HTMLElement | null>(null);
const animationTimeout = ref<number | undefined>();
const isVertical = ref(props.isVertical);

const smoothScrollTo = (to: number) => {
	if (!wrap.value) return;
	isScrolling.value = true;
	const property = isVertical.value ? "scrollTop" : "scrollLeft";
	const start = wrap.value[property],
		change = to - start;
	let currentTime = 0;

	const animateScroll = () => {
		if (!wrap.value) return;
		currentTime += props.increment;
		const quad = easeInOutQuad(currentTime, start, change, props.duration);
		if (quad > props.increment) {
			wrap.value[property] = quad - props.increment / 2;
		} else wrap.value[property] = quad;

		if (currentTime < props.duration) {
			animationTimeout.value = window.setTimeout(animateScroll, props.increment);
		} else if (currentTime >= props.duration) {
			wrap.value[property] = to;
			isScrolling.value = false;
		}
	};

	animateScroll();
};

const scrollSlide = (direction: CarouselDirection) => {
	if (isScrolling.value) return;
	currentItem.value += direction;
	smoothScrollTo(
		Object.values(elements)[currentItem.value].element[props.isVertical ? "offsetHeight" : "offsetWidth"] * currentItem.value
	);
};

const nextSlide = () => {
	if (currentItem.value >= elementsLength.value - 1) {
		if (isScrolling.value) return;
		currentItem.value = 0;
		smoothScrollTo(0);
	} else scrollSlide(CarouselDirection.FORWARDS);
};

const previousSlide = () => {
	if (currentItem.value === 0) {
		if (isScrolling.value || !wrap.value) return;
		currentItem.value = elementsLength.value - 1;
		smoothScrollTo(
			(props.isVertical ? wrap.value.scrollHeight : wrap.value.scrollWidth) -
			(props.isVertical ? firstElement.value.offsetHeight : firstElement.value.offsetWidth)
		);
	} else scrollSlide(CarouselDirection.BACKWARDS);
};

const { abortTimeout } = useAutoplay({ autoplay: props.autoplay, nextSlide, previousSlide });
const navigateToItem = (item: number) => {
	if (isScrolling.value) return;
	const element = Object.values(elements)[0].element;
	currentItem.value = item;
	smoothScrollTo(element[isVertical.value ? "offsetHeight" : "offsetWidth"] * item);
	abortTimeout();
};

const onWheel = (event: WheelEvent) => {
	if (event.deltaY > 0) {
		nextSlide();
	} else previousSlide();
	abortTimeout();
};

const switchOrientation = async () => {
	if (isScrolling.value || !wrap.value) return;
    isVertical.value = !isVertical.value;
    previousItem.value = currentItem.value;
	currentItem.value = 0;
	abortTimeout();
	await nextTick();
	navigateToItem(previousItem.value);
};

const onNextSlide = () => {
    abortTimeout();
    nextSlide();
};

const onPreviousSlide = () => {
    abortTimeout();
    previousSlide();
};

onUnmounted(() => {
	window.clearTimeout(animationTimeout.value);
});
</script>

<style scoped src="../../interfaces/generic/carousel/carouselControlStyles.css"></style>
<style scoped>
.wrap {
	width: 100%;
	height: 100%;
	min-height: 100%;
	max-height: 100%;
	overflow-x: hidden;
	overflow-y: scroll;
}

.wrap--horizontal {
	display: flex;
	overflow-x: scroll;
	overflow-y: hidden;
}

.wrap--no-scrollbar {
	overflow: hidden;
}

.carousel-controls {
	margin-top: 12px;
}
</style>
