<template>
	<article>
		<div class="wrap" :class="{ 'wrap--horizontal': isHorizontal, 'wrap--no-scrollbar': noScrollbar }" @wheel="onWheel" ref="wrap">
			<slot></slot>
		</div>
	</article>
</template>

<script setup lang="ts">
import { OnePageScrollConfiguration, easeInOutQuad } from "shared/component/onePageScroll";
import { useInjectedLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import { computed, onUnmounted, ref } from "vue";
import { CarouselDirection } from "shared/interfaces/carousel";

const props = withDefaults(defineProps<Partial<OnePageScrollConfiguration>>(), {
	isHorizontal: false,
	noScrollbar: true,
	increment: 6,
	duration: 500
});
const elements = useInjectedLinkedItems();
const elementsLength = computed(() => Object.keys(elements).length);
const firstElement = computed(() => Object.values(elements)[0].element);
const selectedItem = ref(0);
const isScrolling = ref(false);
const wrap = ref<HTMLElement | null>(null);
const animationTimeout = ref<number | undefined>();

const smoothScrollTo = (to: number) => {
	if (!wrap.value) return;
	isScrolling.value = true;
	const property = props.isHorizontal ? "scrollLeft" : "scrollTop";
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
			setTimeout(animateScroll, props.increment);
		} else if (currentTime >= props.duration) {
			wrap.value[property] = to;
			isScrolling.value = false;
		}
	};
	animateScroll();
};

const scrollSlide = (direction: CarouselDirection) => {
	if (isScrolling.value) return;
	selectedItem.value += direction;
	smoothScrollTo(
		Object.values(elements)[selectedItem.value].element[props.isHorizontal ? "offsetWidth" : "offsetHeight"] * selectedItem.value
	);
};

const onWheel = (event: WheelEvent) => {
	if (event.deltaY > 0) {
		if (selectedItem.value >= elementsLength.value - 1) {
			if (isScrolling.value) return;
			selectedItem.value = 0;
			smoothScrollTo(0);
		} else scrollSlide(CarouselDirection.FORWARDS);
	} else {
		if (selectedItem.value === 0) {
			if (isScrolling.value || !wrap.value) return;
			selectedItem.value = elementsLength.value - 1;
			smoothScrollTo(
				(props.isHorizontal ? wrap.value.scrollWidth : wrap.value.scrollHeight) -
					(props.isHorizontal ? firstElement.value.offsetWidth : firstElement.value.offsetHeight)
			);
		} else scrollSlide(CarouselDirection.BACKWARDS);
	}
};

onUnmounted(() => {
	window.clearTimeout(animationTimeout.value);
});
</script>

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
</style>
