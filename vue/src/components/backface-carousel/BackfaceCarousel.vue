<template>
  <div>
    <div :class="['backface-carousel', !isHorizontal && 'backface-carousel--vertical']">
      <ul
        class="backface-carousel-items"
        :style="carouselStyles"
      >
        <slot />
      </ul>
    </div>
    <div
      v-if="showArrows || showToggles"
      class="carousel-controls"
    >
      <button
        v-if="showArrows"
        class="carousel-controls__previous-button"
        @click="onPreviousSlide"
      />
      <button
        v-if="allowSwitchingOrientation"
        class="carousel-controls__perspective-button"
        @click="switchPerspective"
      >
        Switch
      </button>
      <button
        v-if="showArrows"
        class="carousel-controls__next-button"
        @click="onNextSlide"
      />
    </div>
    <ul
      v-if="showToggles"
      class="carousel-controls__toggles"
    >
      <li
        v-for="i in currentItemSettings.childrenLength"
        :key="i"
        class="carousel-controls__toggle"
        :class="{ 'carousel-controls__toggle--active': currentItemSettings.realCurrentItem === i - 1 }"
        @click="() => {
          abortTimeout();
          rotateCarousel(currentItemSettings.getCurrentItem(i - 1));
        }"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, CSSProperties, computed } from "vue";
import { useInjectedLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import { CarouselConfiguration } from "shared/interfaces/carousel";
import { getCurrentItemInfo } from "shared/utils/carousel";
import { useAutoplay } from "../../interfaces/hooks/useAutoplay";

const props = withDefaults(
  defineProps<CarouselConfiguration>(),
  {
    isVertical: false,
    allowSwitchingOrientation: true,
    showArrows: true,
    showToggles: false,
  }
);

const isHorizontal = ref(!props.isVertical);
const elements = useInjectedLinkedItems();
const carouselStyles = reactive<CSSProperties>({});
const currentItem = ref(0);
const interval = ref<number | undefined>(undefined);
const currentItemSettings = computed(() => {
  return getCurrentItemInfo({ childrenLength: Object.keys(elements).length, currentItem: currentItem.value });
});

const rotateCarousel = (newCurrentImage: number) => {
  const items = Object.values(elements);
  const length = items.length,
    theta = (2 * Math.PI) / length;
  carouselStyles.transform = `rotate${isHorizontal.value ? "Y" : "X"}(${String(newCurrentImage * -theta)}rad)`;
  currentItem.value = newCurrentImage;
};

const setupCarousel = () => {
  const items = Object.values(elements);
  const length = items.length,
    theta = (2 * Math.PI) / length,
    size = parseFloat(getComputedStyle(items[0].element)[isHorizontal.value ? "width" : "height"]);
  const apothem = size / (2 * Math.tan(Math.PI / length));
  carouselStyles.transformOrigin = `50% 50% ${String(-apothem)}px`;

  for (let i = 0; i < length; i++) {
    items[i].styles = {};
    items[i].styles.padding = "0";
    if (i === 0) continue;
    items[i].styles.transformOrigin = `50% 50% ${String(-apothem)}px`;
    items[i].styles.transform = `rotate${isHorizontal.value ? "Y" : "X"}(${String(i * theta)}rad)`;
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

const { abortTimeout } = useAutoplay({ autoplay: props.autoplay, nextSlide, previousSlide });

const onNextSlide = () => {
  abortTimeout();
  nextSlide();
};

const onPreviousSlide = () => {
  abortTimeout();
  previousSlide();
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