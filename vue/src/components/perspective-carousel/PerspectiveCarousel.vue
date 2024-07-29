<template>
  <div class="wrap">
    <ul
      ref="parent"
      class="images"
      :style="imagesStyles"
    >
      <slot />
    </ul>
    <div class="carousel-controls">
      <button
        class="carousel-controls__previous-button"
        @click="previousItem"
      />
      <button
        v-if="props.allowSwitchingOrientation"
        class="carousel-controls__perspective-button"
        @click="switchOrientation"
      >
        Switch
      </button>
      <button
        class="carousel-controls__next-button"
        @click="nextItem"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { PerspectiveCarouselConfiguration, PerspectiveCarouselItemState, resetInternalState } from "shared/component/perspectiveCarousel";
import { CSSProperties, computed, onMounted, onUnmounted, ref, nextTick } from "vue";
import { useInjectedLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import { CarouselDirection } from "shared/interfaces/carousel";

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
	forcedImageWidth: 0,
	forcedImageHeight: 0,
	animationLength: 300,
	allowSwitchingOrientation: false
});
const imagesStyles = computed<CSSProperties>(() => ({
	margin: props.margin,
	height: props.imageSize
}));

const emit = defineEmits<{
	(e: "movingToCenter"): void;
	(e: "movingFromCenter", elementIndex?: number): void;
}>();

const state = ref(resetInternalState<number>());
const elements = useInjectedLinkedItems();
const elementsAccessors = computed(() => ({
	keys: Object.keys(elements),
	values: Object.values(elements),
	entries: Object.entries(elements)
}));
const parent = ref<HTMLElement | null>(null);
const elementsState = ref<Record<string, Partial<PerspectiveCarouselItemState>>>({});
const horizon = ref(props.horizon);
const startingItem = ref(props.startingItem);
const isVertical = ref(props.isVertical);

const calculatePositionProperties = async () => {
	let horizonOffset = props.horizonOffset;
	let separation = props.separation;
	for (let i = 1; i <= props.flankingItems + 2; i++) {
		if (i > 1) {
			horizonOffset *= props.horizonOffsetMultiplier;
			separation *= props.separationMultiplier;
		}

		const { distance, offset, opacity } = state.value.calculations[i - 1];
		state.value.calculations[i] = {
			distance: distance + separation,
			offset: offset + horizonOffset,
			opacity: opacity * props.opacityMultiplier
		};
		await nextTick();
	}

	state.value.calculations[props.flankingItems + 1] = {
		distance: 0,
		offset: 0,
		opacity: 0
	};
};

const performCalculations = (elementIndex: number, newPosition: number) => {
	const itemState = elementsState.value[elementsAccessors.value.keys[elementIndex]];

	const newDistanceFromCenter = Math.abs(newPosition);
	const calculations =
		newDistanceFromCenter < props.flankingItems + 1
			? state.value.calculations[newDistanceFromCenter]
			: state.value.calculations[props.flankingItems + 1];
	const distanceFactor = props.sizeMultiplier ** newDistanceFromCenter;
	const newWidth = distanceFactor * Number(itemState.originalWidth);
	const newHeight = distanceFactor * Number(itemState.originalHeight);
	const newDistance = newPosition < 0 ? -calculations.distance : calculations.distance;

	const center = state.value.containerDimensions[Number(isVertical.value)] / 2;
	let top: number, left: number;
	if (isVertical.value) {
		left = horizon.value - calculations.offset - newWidth / 2;
		top = center + newDistance - newHeight / 2;
	} else {
		left = center + newDistance - newWidth / 2;
		top = horizon.value - calculations.offset - newHeight / 2;
	}

	itemState.width = newWidth;
	itemState.height = newHeight;
	itemState.top = top;
	itemState.left = left;
	itemState.oldPosition ??= 0;
	itemState.depth = props.flankingItems + 2 - newDistanceFromCenter;
	itemState.opacity = newPosition ? calculations.opacity : 1;
};

const rotateCarousel = async () => {
	if (state.value.currentlyMoving) return;
	state.value.currentlyMoving = true;
	state.value.itemsAnimating = 0;
	state.value.carouselRotationsLeft++;
	await nextTick();

	elementsAccessors.value.keys.forEach((key, i) => {
		const currentPosition = elementsState.value[key].currentPosition ?? NaN;
		let newPosition = currentPosition + -Number(state.value.currentDirection);
		if (Math.abs(newPosition) > state.value[newPosition > 0 ? "rightItemsCount" : "leftItemsCount"]) {
			newPosition = -currentPosition;
			if (state.value.totalItems % 2 === 0) newPosition++;
		}

		moveItem(i, newPosition).catch((e: unknown) => { 
			console.trace(e);
		});
	});
};

const itemAnimationComplete = async (elementIndex: number, newPosition: number) => {
	const itemState = elementsState.value[elementsAccessors.value.keys[elementIndex]];

	state.value.itemsAnimating--;
	itemState.currentPosition = newPosition;
	if (newPosition === 0) state.value.currentCenterItem = elementIndex;
	if (state.value.itemsAnimating) return;
	state.value.currentlyMoving = false;

	await nextTick();
	if (--state.value.carouselRotationsLeft <= 0) {
		if (!state.value.performingSetup) {
			emit("movingToCenter");
		} else state.value.performingSetup = false;
	} else await rotateCarousel();
};

const moveItem = async (elementIndex: number, newPosition: number) => {
	const item = elementsAccessors.value.values[elementIndex];
	const itemState = elementsState.value[elementsAccessors.value.keys[elementIndex]];

	const assignToItem = () => {
		item.styles = {
			...item.styles,
			left: `${String(itemState.left)}px`,
			width: `${String(itemState.width)}px`,
			height: `${String(itemState.height)}px`,
			top: `${String(itemState.top)}px`,
			opacity: String(itemState.opacity)
		};
	};

	if (Math.abs(newPosition) <= props.flankingItems + 1) {
		performCalculations(elementIndex, newPosition);
		state.value.itemsAnimating++;
		await nextTick();

		item.styles = {
			...item.styles,
			zIndex: itemState.depth ?? ""
		};
		assignToItem();
		setTimeout(() => {
			itemAnimationComplete(elementIndex, newPosition).catch((e: unknown) => {
				console.trace(e);
			});
		}, props.animationLength);
	} else {
		itemState.currentPosition = newPosition;
		if (!itemState.oldPosition) {
			await nextTick();
			performCalculations(elementIndex, newPosition);
			assignToItem();
		}
	}
};

const moveOnce = (direction: CarouselDirection) => {
	if (state.value.currentlyMoving) return;
	if (direction === CarouselDirection.BACKWARDS && state.value.currentCenterItem !== undefined) {
		emit("movingFromCenter", state.value.currentCenterItem - 1 < 0 ? undefined : state.value.currentCenterItem - 1);
	} else if (direction === CarouselDirection.FORWARDS && state.value.currentCenterItem !== undefined) {
		emit("movingFromCenter", state.value.currentCenterItem + 1 > state.value.totalItems ? undefined : state.value.currentCenterItem + 1);
	} else emit("movingFromCenter", state.value.currentCenterItem);

	state.value.currentDirection = direction;
};

const previousItem = () => {
	moveOnce(CarouselDirection.BACKWARDS);
	rotateCarousel().catch((e: unknown) => { 
		console.trace(e);
	});
};

const switchOrientation = () => {
	if (!props.allowSwitchingOrientation) return;
	isVertical.value = !isVertical.value;
	rotateCarousel().catch((e: unknown) => { 
		console.trace(e);
	});
};

const nextItem = () => {
	moveOnce(CarouselDirection.FORWARDS);
	rotateCarousel().catch((e: unknown) => { 
		console.trace(e);
	});
};

const initializeCarouselData = (parent: HTMLElement) => {
	const parentStyle = window.getComputedStyle(parent);
	state.value.totalItems = elementsAccessors.value.values.length;
	state.value.containerDimensions = [parseInt(parentStyle.width, 10), parseInt(parentStyle.height, 10)];
};

const forceImageDimensionsIfEnabled = async () => {
	for (const image of elementsAccessors.value.values) {
		image.styles = { display: "none" };
		if (!props.forcedImageWidth || !props.forcedImageHeight) continue;
		image.styles = {
			...image.styles,
			width: `${String(props.forcedImageWidth)}px`,
			height: `${String(props.forcedImageHeight)}px`
		};
	}

	await nextTick();
};

const setOriginalItemDimensions = async () => {
	for (const [key, image] of elementsAccessors.value.entries) {
		const state = elementsState.value[key];
		if ((!state.originalWidth && !state.originalHeight) || props.forcedImageWidth > 0 || props.forcedImageHeight > 0) {
			image.styles = {
				...image.styles,
				display: ""
			};
			await nextTick();
			if (!state.originalWidth || props.forcedImageWidth > 0) state.originalWidth = image.element.clientWidth;
			if (!state.originalHeight || props.forcedImageHeight > 0) state.originalHeight = image.element.clientHeight;
			image.styles = {
				...image.styles,
				display: "none"
			};
		}
	}
};

const setupCarousel = async () => {
	if (horizon.value === 0) horizon.value = state.value.containerDimensions[Number(!isVertical.value)] / 2;
	await nextTick();

	for (const [key, item] of elementsAccessors.value.entries) {
		const itemState = elementsState.value[key];
		let left, top;
		if (isVertical.value) {
			left = horizon.value - Number(itemState.originalWidth) / 2;
			top = state.value.containerDimensions[1] / 2 - Number(itemState.originalHeight) / 2;
		} else {
			left = state.value.containerDimensions[0] / 2 - Number(itemState.originalWidth) / 2;
			top = horizon.value - Number(itemState.originalHeight) / 2;
		}

		item.styles = {
			...item.styles,
			left: `${String(left)}px`,
			top: `${String(top)}px`,
			visibility: "visible",
			position: "absolute",
			"z-index": 0,
			opacity: 0,
			display: ""
		};
	}

	await nextTick();
};

const setupStarterRotation = async () => {
	startingItem.value ||= Math.round(state.value.totalItems / 2);
	state.value.rightItemsCount = Math.ceil((state.value.totalItems - 1) / 2);
	state.value.leftItemsCount = Math.floor((state.value.totalItems - 1) / 2);
	state.value.carouselRotationsLeft = 1;
	await nextTick();

	let itemIndex = startingItem.value - 1;
	const moveToIndex = async (pos: number) => {
		elementsAccessors.value.values[itemIndex].styles = {
			...elementsAccessors.value.values[itemIndex].styles,
			opacity: 1
		};
		await moveItem(itemIndex, pos);
	};
	await moveToIndex(0);

	for (let pos = 1; pos <= state.value.rightItemsCount; pos++) {
		itemIndex < state.value.totalItems - 1 ? itemIndex++ : (itemIndex = 0);
		await moveToIndex(pos);
	}
	itemIndex = startingItem.value - 1;
	for (let pos = -1; pos >= -state.value.leftItemsCount; pos--) {
		itemIndex > 0 ? itemIndex-- : (itemIndex = state.value.totalItems - 1);
		await moveToIndex(pos);
	}
};

const initCarousel = () => {
	(async () => {
		if (!parent.value) return;
		state.value = resetInternalState();
		for (const key of elementsAccessors.value.keys) elementsState.value[key] ??= {};
		await nextTick();

		initializeCarouselData(parent.value);
		await forceImageDimensionsIfEnabled();
		await setOriginalItemDimensions();
		await calculatePositionProperties();
		await setupCarousel();
		await setupStarterRotation();
	})().catch((e: unknown) => {
		console.trace(e);
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

<style scoped src="../../interfaces/generic/carousel/carouselControlStyles.css"></style>
<style scoped>
.wrap {
	position: relative;
}

.images {
	width: 80%;
	padding: 0;
	margin: 0;
	list-style-type: none;
}

.carousel-controls {
	position: absolute;
	left: 40%;
	transform: translateX(-50%);
	bottom: -5%;
	z-index: 99;
}
</style>
