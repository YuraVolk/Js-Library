<template>
  <div
    ref="wrap"
    class="wrap"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ParallaxConfiguration } from "shared/component/parallax";
import { getFirstScrollableParent } from "shared/utils/domUtils";
import { ref, onMounted, onUnmounted, reactive, CSSProperties } from "vue";

const wrap = ref<HTMLElement | null>(null);
const styles = reactive<CSSProperties>({});
const props = withDefaults(defineProps<Partial<ParallaxConfiguration>>(), {
	isHorizontal: false,
	isHorizontalTranslation: false,
	effect: 1.968,
	speed: 2.7,
	margin: 0
});

const scrollListener = ref<EventListener | undefined>();

const rerender = () => {
	if (!wrap.value) return;
	const parent = getFirstScrollableParent(wrap.value, props.isHorizontal);
	if (scrollListener.value) parent.removeEventListener("scroll", scrollListener.value);
	const getScrollPoint = (parent: HTMLElement | Window) => {
		if (parent instanceof HTMLElement) {
			return props.isHorizontal ? parent.scrollLeft : parent.scrollTop;
		} else return props.isHorizontal ? parent.scrollX : parent.scrollY;
	};

	const animationOffset = wrap.value.getBoundingClientRect()[props.isHorizontal ? "left" : "top"] + getScrollPoint(parent);
	const innerHeight =
		(parent instanceof HTMLElement
			? props.isHorizontal
				? parent.clientWidth
				: parent.clientHeight
			: props.isHorizontal
			? parent.innerWidth
			: parent.innerHeight) / props.effect;

	const scrollEventListener = () => {
        if (!wrap.value) return;
		const scrollPoint = getScrollPoint(getFirstScrollableParent(wrap.value, props.isHorizontal));
		if (scrollPoint > animationOffset - innerHeight * 2 && scrollPoint < animationOffset + innerHeight) {
			const point = (scrollPoint - (animationOffset - innerHeight)) / props.speed - props.margin;
			styles.transform = `translate${props.isHorizontalTranslation ? "X" : "Y"}(${String(point)}px)`;
		}
	};

	scrollListener.value = scrollEventListener;
	parent.addEventListener("scroll", scrollEventListener, { passive: true });
	scrollEventListener();
};

onMounted(() => {
	rerender();
	window.addEventListener("resize", rerender);
});

onUnmounted(() => {
	window.removeEventListener("resize", rerender);
});
</script>

<style scoped>
.wrap {
	position: relative;
	transition: 0.1s;
}
</style>
