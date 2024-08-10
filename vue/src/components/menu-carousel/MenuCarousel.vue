<template>
  <ul ref="carousel">
    <slot />
    <li
      v-if="allowSwitchingOrientation || showArrows"
      class="carousel-controls"
    >
      <button
        v-if="showArrows"
        class="carousel-controls__previous-button"
        @click="onNextSlide"
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
        @click="onPreviousSlide"
      />
    </li>
    <li
      v-if="showToggles"
      class="carousel-toggles carousel-controls__toggles"
    >
      <div
        v-for="i in currentItemSettings.childrenLength"
        :key="i"
        class="carousel-controls__toggle"
        :class="{ 'carousel-controls__toggle--active': currentItemSettings.realCurrentItem === i - 1 }"
        @click="() => {
          abortTimeout();
          const difference = (currentItemSettings.getCurrentItem(i - 1) % currentItemSettings.childrenLength) - (currentItem % currentItemSettings.childrenLength);
          go(difference);
          currentItem += difference;
        }"
      />
    </li>
  </ul>
</template>

<script setup lang="ts">
import { MenuCarouselConfiguration, MenuCarouselInternalItem } from 'shared/component/menuCarousel';
import { useInjectedLinkedItems, LinkedVueItem } from '../../interfaces/hooks/useLinkedItem';
import { assertNonUndefinedDevOnly } from "shared/utils/utils";
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue';
import { CarouselDirection } from 'shared/interfaces/carousel';
import { getCurrentItemInfo } from "shared/utils/carousel";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";

const props = withDefaults(defineProps<MenuCarouselConfiguration>(), {
    yPos: 112,
    yRadius: 128,
    farScale: 0.9,
    speed: 0.11,
    showArrows: true,
    showToggles: false,
    allowSwitchingOrientation: false,
    isVertical: false
});

const rotation = ref(Math.PI / 2);
const destRotation = ref(Math.PI / 2);
const frameTimer = ref<number | undefined>();
const xRadius = ref(props.xRadius);
const yRadius = ref<number | undefined>(props.yRadius);
const xPos = ref(props.xPos);
const yPos = ref(props.yPos);
const currentItem = ref(0);
const isVertical = ref(props.isVertical);
const currentItemSettings = computed(() => {
    return getCurrentItemInfo({ childrenLength: Object.keys(elements).length, currentItem: currentItem.value });
});

const orientationXRadius = computed({
    get() {
        return isVertical.value ? yRadius.value : xRadius.value
    },
    set(newValue: number | undefined) {
        if (isVertical.value) {
            yRadius.value = newValue;
        } else xRadius.value = newValue;
    }
});
const orientationYRadius = computed({
    get() {
        return isVertical.value ? xRadius.value : yRadius.value
    },
    set(newValue: number | undefined) {
        if (isVertical.value) {
            xRadius.value = newValue;
        } else yRadius.value = newValue;
    }
});

const carousel = ref<HTMLElement | null>(null);
const elements = useInjectedLinkedItems();
const items = reactive<Item[]>([]);
class Item extends MenuCarouselInternalItem {
    constructor(private elementData: LinkedVueItem) {
        super(elementData.element);
    }

    initStyles() {
        this.elementData.styles = {
            position: "absolute"
        };
        return this;
    }

    setMovingStyle(x: number, y: number, scale: number) {
        this.elementData.styles = {
            ...this.elementData.styles,
            width: String(this.width) + "px",
            left: String(x) + "px",
            top: String(y) + "px",
            zIndex: String((scale * 100) | 0)
        };
    }
}

const rotateItem = (itemIndex: number, rotation: number) => {
    const item = items[itemIndex];
    const sin = Math.sin(rotation);
    const scale = props.farScale + (1 - props.farScale) * (sin + 1) * 0.5;
    assertNonUndefinedDevOnly(xPos.value);
    assertNonUndefinedDevOnly(xRadius.value);
    item.moveTo(
        xPos.value + scale * (Math.cos(rotation) * xRadius.value - item.fullWidth / 2),
        yPos.value + scale * sin * (yRadius.value ?? 1) + yPos.value / 2.3,
        scale
    );
};

const playFrame = () => {
    const change = destRotation.value - rotation.value;
    if (Math.abs(change) <= 0) {
        rotation.value = destRotation.value;
        window.clearTimeout(frameTimer.value);
        frameTimer.value = undefined;
    } else {
        rotation.value += change * props.speed;
        scheduleNextFrame();
    }

    carouselRender();
};

const scheduleNextFrame = () => {
    frameTimer.value = window.setTimeout(() => {
        playFrame();
    }, 32);
};

const go = (count: number) => {
    destRotation.value += ((2 * Math.PI) / items.length) * count;
    if (frameTimer.value === undefined) scheduleNextFrame();
};

const carouselRender = () => {
    const count = items.length;
    const spacing = (2 * Math.PI) / count;
    let radians = rotation.value;
    for (let i = 0; i < count; i++) {
        rotateItem(i, radians);
        radians += spacing;
    }
};

const setupCarousel = () => {
    if (!carousel.value) return;
    xPos.value ??= carousel.value.offsetWidth * 0.5;
    yPos.value = carousel.value.offsetHeight * 0.1;
    orientationXRadius.value ??= carousel.value.offsetWidth / 2.3;
    orientationYRadius.value = carousel.value.offsetHeight / 6;
    items.splice(0, items.length);
    for (const image of Object.values(elements)) {
        image.element.removeAttribute("style");
        items.push(new Item(image).initStyles());
    }

    carouselRender();
};

const onResize = () => {
    orientationXRadius.value = undefined;
    xPos.value = undefined;
    setupCarousel();
};

const nextSlide = () => {
    go(CarouselDirection.BACKWARDS);
    currentItem.value--;
};

const previousSlide = () => {
    go(CarouselDirection.FORWARDS);
    currentItem.value++;
};

const switchOrientation = () => {
    isVertical.value = !isVertical.value;
    onResize();
};

const { abortTimeout } = useAutoplay({ autoplay: props.autoplay, nextSlide: previousSlide, previousSlide: nextSlide });

const onNextSlide = () => {
    abortTimeout();
    nextSlide();
};

const onPreviousSlide = () => {
    abortTimeout();
    previousSlide();
};

onMounted(() => {
    setupCarousel();
    window.addEventListener("resize", onResize);
});

onUnmounted(() => {
    window.removeEventListener("resize", onResize);
    window.clearTimeout(frameTimer.value);
});
</script>

<style scoped src="../../interfaces/generic/carousel/carouselControlStyles.css"></style>
<style scoped>
.carousel {
    position: relative;
    overflow: hidden;
    padding: 0;
    list-style-type: none;
}

.carousel-controls {
    z-index: 999;
    top: 80%;
}

.carousel-toggles {
    z-index: 999;
    top: calc(80% + 40px);
}
</style>