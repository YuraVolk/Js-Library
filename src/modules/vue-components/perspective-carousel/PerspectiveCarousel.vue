<template>
	<div class="wrap">
		<div class="images" :style="imagesStyles" ref="parent">
			<slot></slot>
		</div>
		<div class="carousel-controls">
			<button class="carousel-controls__previous-button" @click="previousItem"></button>
			<button v-if="props.allowSwitchingOrientation" class="carousel-controls__perspective-button" @click="switchOrientation"></button>
			<button class="carousel-controls__next-button" @click="nextItem"></button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { PerspectiveCarouselConfiguration, PerspectiveCarouselItemState, resetInternalState } from "src/modules/interfaces/component/perspective-carousel/types";
import "../../interfaces/generic/carousel/carouselControlStyles.css";
import { CSSProperties, computed, onMounted, onUnmounted, ref } from "vue";
import { useInjectedLinkedItems } from "src/modules/interfaces/generic/hooks/useLinkedItem.vue";

const props = withDefaults(defineProps<Partial<PerspectiveCarouselConfiguration>>(), {
	imageSize: "300px",
	margin: "250px auto",
	startingItem: 1,
	separation: 175,
	separationMultiplier: 0.6,
	horizonOffset: 0,
	horizonOffsetMultiplier: 1,
	sizeMultiplier: 0.7,
	opacityMultiplier: 0.87,
	horizon: 0,
	flankingItems: 3,
	isVertical: false,
	preloadImages: true,
	forcedImageWidth: 0,
	forcedImageHeight: 0,
	animationLength: 300,
	centralItemClassName: "active",
	allowSwitchingOrientation: false
});
const imagesStyles = computed<CSSProperties>(() => ({
	margin: props.margin,
	height: props.imageSize
}));

const state = ref(resetInternalState());
const elements = useInjectedLinkedItems();
const parent = ref<HTMLElement | null>(null);
const elementsState = ref<Record<string, Partial<PerspectiveCarouselItemState>>>({});

const previousItem = () => {

};

const switchOrientation = () => {
	if (!props.allowSwitchingOrientation) return;
};

const nextItem = () => {

};

const initializeCarouselData = (parent: HTMLElement) => {
	const parentStyle = window.getComputedStyle(parent);
	state.value.totalItems = Object.keys(elements).length;
	state.value.containerDimensions = [parseInt(parentStyle.width, 10), parseInt(parentStyle.height, 10)];
};

const forceImageDimensionsIfEnabled = () => {
    for (const image of Object.values(elements)) {
        image.styles = { display: "none" };
        if (!props.forcedImageWidth || !props.forcedImageHeight) continue;
        image.styles = {
            ...image.styles,
            width: `${props.forcedImageWidth}px`,
            height: `${props.forcedImageHeight}px`
        };
    }
};

const preload = (callback: () => void) => {
    if (!props.preloadImages) {
        callback();
        return;
    }

    let loadedImages = 0;
    Object.values(elements).forEach((image, _, arr) => {
        image.element.addEventListener("load", () => {
            image.styles = {
                ...image.styles,
                display: ""
            };
            if (++loadedImages === arr.length) callback();
        });
    });
};

const setOriginalItemDimensions = () => {
    for (const [key, image] of Object.entries(elements)) {
        const state = elementsState.value[key];
        if (!state.originalWidth || props.forcedImageWidth > 0) {
            
        }

        if (!state.originalHeight || props.forcedImageHeight > 0) {

        }
    }
};

const initCarousel = () => {
	if (!parent.value) return;
	state.value = resetInternalState();
    for (const key of Object.keys(elements)) elementsState.value[key] = {};
	initializeCarouselData(parent.value);
	forceImageDimensionsIfEnabled();
    preload(() => {
        setOriginalItemDimensions();
    });
};

onMounted(() => {
	initCarousel();
	window.addEventListener("resize", initCarousel);
});

onUnmounted(() => {
	window.removeEventListener("resize", initCarousel);
});
</script>

<style scoped>
.wrap {
	position: relative;
}

.images {
	width: 80%;
}

.carousel-controls {
	position: absolute;
	left: 40%;
	transform: translateX(-50%);
	bottom: -5%;
	z-index: 99;
}
</style>
