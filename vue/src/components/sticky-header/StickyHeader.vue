<template>
  <div ref="outerWrap">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { generateThreshold } from "shared/interfaces/intersectionObserved";
import { StickyHeaderConfiguration } from "shared/component/stickyHeader";
import { useInjectedLinkedItems } from "../../interfaces/hooks/useLinkedItem";

const props = withDefaults(defineProps<Partial<StickyHeaderConfiguration>>(), {
	rootMargin: "0px",
	ratio: 0.25
});

const headerElements = useInjectedLinkedItems();

const outerWrap = ref<HTMLElement | null>(null);
const isFixed = ref(false);
const intersectionObserver = ref<IntersectionObserver | undefined>();

onMounted(() => {
	const wrap = headerElements["sticky-header"];
	if (!outerWrap.value) return;

	const intersectionObserverInstance = new IntersectionObserver(
		([entry]) => {
			(async () => {
				if (!outerWrap.value) return;

				if (entry.intersectionRatio <= props.ratio && !isFixed.value) {
					isFixed.value = true;
					const { top, left, width, height } = wrap.element.getBoundingClientRect();
					wrap.styles = {
						...wrap.styles,
						position: "fixed",
						top: `${String(top)}px`,
						left: `${String(left)}px`,
						width: `${String(width)}px`,
						height: `${String(height)}px`,
						zIndex: 9999
					};

					await nextTick();
					wrap.element.getBoundingClientRect();

					setTimeout(() => {
						wrap.styles = {
							...wrap.styles,
							top: 0,
							left: 0,
							right: 0,
							width: "auto",
							height: "auto"
						};
					}, 1);
				} else if (entry.intersectionRatio > props.ratio && isFixed.value) {
					isFixed.value = false;
					wrap.styles = {
						...wrap.styles,
						position: "static",
						top: "0",
						left: "0",
						right: "0"
					};
				}
			})().catch((e: unknown) => {
				console.trace(e);
			});
		},
		{
			rootMargin: props.rootMargin,
			threshold: generateThreshold()
		}
	);
	intersectionObserverInstance.observe(outerWrap.value);
	intersectionObserver.value = intersectionObserverInstance;
});

onUnmounted(() => {
	intersectionObserver.value?.disconnect();
});
</script>
