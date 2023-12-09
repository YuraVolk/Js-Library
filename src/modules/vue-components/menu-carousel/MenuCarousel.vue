<template>
    <ul ref="carousel">
        <slot></slot>
        <li class="carousel-controls">
            <button class="carousel-controls__previous-button" @click="goBack"></button>
            <button class="carousel-controls__next-button" @click="goForward"></button>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { CarouselDirection } from "src/modules/interfaces/generic/carousel/carousel";
import "../../interfaces/generic/carousel/carouselControlStyles.css";
import { MenuCarouselConfiguration, MenuCarouselInternalItem } from 'src/modules/interfaces/component/menu-carousel/types';
import { useInjectedLinkedItems, LinkedVueItem } from 'src/modules/interfaces/generic/hooks/useLinkedItem.vue';
import { assertNonUndefinedDevOnly } from "src/modules/utils";
import { onMounted, onUnmounted, reactive, ref } from 'vue';

const props = withDefaults(defineProps<Partial<MenuCarouselConfiguration>>(), {
    yPos: 112,
    yRadius: 128,
    farScale: 0.9,
    speed: 0.11
});
const rotation = ref(Math.PI / 2);
const destRotation = ref(Math.PI / 2);
const frameTimer = ref<number | undefined>();
const xRadius = ref(props.xRadius);
const yRadius = ref(props.yRadius);
const xPos = ref(props.xPos);
const yPos = ref(props.yPos);

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
            width: this.width + "px",
            left: x + "px",
            top: y + "px",
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
        yPos.value + scale * sin * yRadius.value + yPos.value / 2.3,
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
    xRadius.value ??= carousel.value.offsetWidth / 2.3;
    yRadius.value = carousel.value.offsetHeight / 6;
    items.splice(0, items.length);
    for (const image of Object.values(elements.value)) {
        image.element.removeAttribute("style");
        items.push(new Item(image).initStyles());
    }

    carouselRender();
};

const onResize = () => {
    xRadius.value = undefined;
    xPos.value = undefined;
    setupCarousel();
};

const goBack = () => {
    go(CarouselDirection.BACKWARDS);
};

const goForward = () => {
    go(CarouselDirection.FORWARDS);
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
</style>