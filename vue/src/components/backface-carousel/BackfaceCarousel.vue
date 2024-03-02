<template>
    <div>
        <div :class="['backface-carousel', !isHorizontal && 'backface-carousel--vertical']">
            <ul class="backface-carousel-items" :style="carouselStyles">
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
import { ref, onMounted, onUnmounted, reactive, CSSProperties } from "vue";
import { useInjectedLinkedItems } from "../../interfaces/hooks/useLinkedItem";

const props = defineProps<{ isVertical?: boolean }>();
const isHorizontal = ref(!props.isVertical);
const elements = useInjectedLinkedItems();
const carouselStyles = reactive<CSSProperties>({});
const currentItem = ref(0);
const interval = ref<number | undefined>(undefined);

const rotateCarousel = (newCurrentImage: number) => {
    const items = Object.values(elements);
    const length = items.length,
        theta = (2 * Math.PI) / length;
    carouselStyles.transform = `rotate${isHorizontal.value ? "Y" : "X"}(${newCurrentImage * -theta}rad)`;
    currentItem.value = newCurrentImage;
};

const setupCarousel = () => {
    const items = Object.values(elements);
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
    window.clearInterval(interval.value);
});
</script>

<style scoped src="../../interfaces/generic/carousel/carouselControlStyles.css"></style>
<style scoped>
.backface-carousel {
    display: flex;
    width: auto;
    height: 100%;
    flex-direction: column;
    align-items: center;
    perspective: 500px;
    overflow: hidden;
    padding: 20px;
}

.backface-carousel--vertical {
    margin-top: 10%;
    height: 33vw;
    overflow: visible;
}

.backface-carousel-items {
    width: 40%;
    flex: 0 0 auto;
    margin: 0;
    transform-style: preserve-3d;
    transition: all 0.5s;
    padding: 0;
    list-style-type: none;
}
</style>