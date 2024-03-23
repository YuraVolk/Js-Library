<template>
  <div
    ref="wrap"
    :style="styles"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, onMounted, onUnmounted, reactive, ref } from "vue";
import { useInterval } from "../../interfaces/hooks/useInterval";
import { ScrollingAdConfiguration } from "shared/component/scrollingAd";
import { getFirstScrollableParent } from "shared/utils/domUtils";
import { generateThreshold } from "shared/interfaces/intersectionObserved";

const props = withDefaults(defineProps<Partial<ScrollingAdConfiguration>>(), {
	rootMargin: 0,
	checkInterval: 0
});

const styles = reactive<CSSProperties>({});

const wrap = ref<HTMLElement | null>(null);
const intersectionObserver = ref<IntersectionObserver | undefined>();

useInterval(() => {
	if (!wrap.value) return;

	const scrollableParent = getFirstScrollableParent(wrap.value, false);
	const top = scrollableParent instanceof HTMLElement ? scrollableParent.scrollTop : scrollableParent.scrollY;
	styles.top = `${String(top + wrap.value.offsetHeight + props.rootMargin)}px`;
}, props.checkInterval);

onMounted(() => {
    if (!wrap.value) return;

	const intersectionObserverInstance = new IntersectionObserver(
		([entry]) => {
			if (!wrap.value) return;

			const scrollableParent = getFirstScrollableParent(wrap.value, false);
			if (entry.intersectionRatio < 1) {
				const top = scrollableParent instanceof HTMLElement ? scrollableParent.scrollTop : scrollableParent.scrollY;
				styles.top = `${String(top + wrap.value.offsetHeight + props.rootMargin)}px`;
			}
		},
		{
			rootMargin: `${String(props.rootMargin)}px`,
			threshold: generateThreshold()
		}
	);
    intersectionObserverInstance.observe(wrap.value);
    intersectionObserver.value = intersectionObserverInstance;
});

onUnmounted(() => {
    intersectionObserver.value?.disconnect();
});
</script>
