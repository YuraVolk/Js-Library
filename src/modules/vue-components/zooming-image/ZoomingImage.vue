<template>
	<div class="wrap" ref="wrap" @mousemove="onMouseMove" @pointermove="onMouseMove">
		<slot name="image"></slot>
		<slot name="glass"></slot>
	</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { ZoomingImageConfiguration } from "../../interfaces/component/zooming-image/types";
import { useInjectedLinkedItems } from "../../interfaces/generic/hooks/useLinkedItem.vue";

const props = withDefaults(defineProps<Partial<ZoomingImageConfiguration>>(), {
	moveRatio: 0.15,
	backgroundShift: 9,
	positionShift: 34
});
const elements = useInjectedLinkedItems();
const glass = computed(() => elements["zooming-image-glass"]);
const wrap = ref<HTMLElement | null>(null);

const onMouseMove = (event: MouseEvent) => {
	if (!wrap.value) return;
	const { top, left } = wrap.value.getBoundingClientRect();
	const x = event.x - left,
		y = event.pageY - top;
	const { offsetWidth, offsetHeight } = wrap.value;
	let xMove = (x / offsetWidth) * 100,
		yMove = (y / offsetHeight) * 100;
	if (x >= 0.01 * offsetWidth) xMove += props.moveRatio * xMove;
	if (y >= 0.01 * offsetHeight) yMove += props.moveRatio * yMove;

	glass.value.styles = {
		backgroundPositionX: `${xMove - props.backgroundShift}%`,
		backgroundPositionY: `${yMove - props.backgroundShift}%`,
		left: `${x - props.positionShift}px`,
		top: `${y - props.positionShift}px`
	};
};

defineExpose({ onMouseMove });
</script>

<style scoped>
.wrap {
	position: relative;
}
</style>
