<template>
    <div>
        <div :class="['carousel', !isHorizontal && 'carousel--vertical']">
            <ul class="carousel-items" :style="carouselStyles">
                <slot></slot>
            </ul>
        </div>
        <div class="carousel-controls">
            <button class="carousel-controls__previous-button" @click="previousSlide"></button>
            <button class="carousel-controls__perspective-button" @click="switchPerspective">Switch</button>
            <button class="carousel-controls__next-button" @click="nextSlide"></button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted, reactive, CSSProperties } from "vue";
import { INJECTED_ELEMENTS_NAME, CarouselItems } from "../../interfaces/generic/carousel/carousel.vue";
import "../../interfaces/generic/carousel/carouselControlStyles.css";

const props = defineProps<{ isVertical?: boolean }>();
const isHorizontal = ref(!props.isVertical ?? false);
const elements = ref<CarouselItems>({});
const carouselStyles = reactive<CSSProperties>({});
const currentItem = ref(0);
const interval = ref<number | undefined>(undefined);

const rotateCarousel = (newCurrentImage: number) => {
    const items = Object.values(elements.value);
    const length = items.length,
        theta = (2 * Math.PI) / length;
    carouselStyles.transform = `rotate${isHorizontal.value ? "Y" : "X"}(${newCurrentImage * -theta}rad)`;
    currentItem.value = newCurrentImage;
};

const setupCarousel = () => {
    console.log("yay");
    const items = Object.values(elements.value);
    const length = items.length,
        theta = (2 * Math.PI) / length,
        size = parseFloat(getComputedStyle(items[0].element)[isHorizontal.value ? "width" : "height"]);
    const apothem = size / (2 * Math.tan(Math.PI / length));
    carouselStyles.transformOrigin = `50% 50% ${-apothem}px`;

    for (let i = 0; i < length; i++) {
        items[i].styles = {};
        items[i].styles.padding = "0";
        if (i === 0) continue;
        items[i].styles.transformOrigin = `50% 50% ${-apothem}px`;
        items[i].styles.transform = `rotate${isHorizontal.value ? "Y" : "X"}(${i * theta}rad)`;
    }

    rotateCarousel(currentItem.value);
};

const nextSlide = () => {
    rotateCarousel(currentItem.value + 1);
    window.clearInterval(interval.value);
    interval.value = undefined;
};

const previousSlide = () => {
    rotateCarousel(currentItem.value - 1);
    window.clearInterval(interval.value);
    interval.value = undefined;
};

const switchPerspective = () => {
    isHorizontal.value = !isHorizontal.value;
    setupCarousel();
    window.clearInterval(interval.value);
    interval.value = undefined;
};

onMounted(() => {
    setupCarousel();
    interval.value = window.setInterval(() => {
        setupCarousel();
    }, 250);
    window.addEventListener("resize", setupCarousel);
});
onUnmounted(() => {
    window.removeEventListener("resize", setupCarousel);
});

provide(INJECTED_ELEMENTS_NAME, elements);
</script>

<style>
.carousel {
    display: flex;
    width: auto;
    height: 100%;
    flex-direction: column;
    align-items: center;
    perspective: 500px;
    overflow: hidden;
    padding: 20px;
}

.carousel--vertical {
    margin-top: 10%;
    height: 33vw;
    overflow: visible;
}

.carousel * {
    margin: 0 auto;
    flex: 0 0 auto;
}

.carousel-items {
    width: 40%;
    margin: 0;
    transform-style: preserve-3d;
    transition: all 0.5s;
    padding: 0;
    list-style-type: none;
}

.carousel-item {
    position: relative;
    width: 100%;
    height: auto;
    padding: 0;
    opacity: 0.9999;
    backface-visibility: hidden;
}

.carousel-item:not(:first-of-type) {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0 auto;
    padding: 0 auto;
}

.carousel-item>* {
    width: 100%;
    height: 100%;
}
</style>