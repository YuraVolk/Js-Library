<template>
  <div class="magnifier">
    <div class="magnifier__image" @mousemove="onMouseMove" ref="image">
      <slot name="image"></slot>
    </div>
    <slot name="glass"></slot>
  </div>
</template>

<script setup lang="ts">
import { useInjectedLinkedItems } from "src/modules/interfaces/generic/hooks/useLinkedItem.vue";
import { onMounted, ref } from "vue";

interface MagnifierConfiguration {
  imageSource: string;
  zoomScale?: number;
}

const props = withDefaults(defineProps<MagnifierConfiguration>(), {
  zoomScale: 2
});
const elements = useInjectedLinkedItems();
const image = ref<HTMLElement | null>(null);

const moveMagnifier = (x: number, y: number) => {
  if (!image.value) return;
  const glass = elements.value["magnifier-glass"];
  const width = glass.element.offsetWidth / 2,
    height = glass.element.offsetHeight / 2;
  if (x > image.value.offsetWidth) {
    x = image.value.offsetWidth;
  } else if (x < 0) x = 0;
  if (y > image.value.offsetHeight) {
    y = image.value.offsetHeight;
  } else if (y < 0) y = 0;

  glass.styles = {
    ...glass.styles,
    left: `${x - width}px`,
    top: `${y - height}px`,
    backgroundPosition: "-" + (x * props.zoomScale - width) + "px -" + (y * props.zoomScale - height) + "px"
  };
};

const onMouseMove = (event: MouseEvent) => {
  if (!image.value) return;
  event.preventDefault();
  const rect = image.value.getBoundingClientRect();
  moveMagnifier(event.pageX - rect.left - window.scrollX, event.pageY - rect.top - window.scrollY);
};

onMounted(() => {
  if (!image.value) return;
  const glass = elements.value["magnifier-glass"];
  glass.styles = {
    backgroundImage: `url("${props.imageSource}")`,
    backgroundSize: `${image.value.offsetWidth * props.zoomScale}px ${image.value.offsetHeight * props.zoomScale}px`
  };
});

defineExpose({ onMouseMove });
</script>

<style scoped>
.magnifier {
  position: relative;
}

.magnifier__image {
  width: 100%;
  height: 100%;
}

.magnifier__glass {
  position: absolute;
  top: -25px;
  left: -25px;
  width: 70px;
  height: 70px;
  border: 2px solid #222;
  border-radius: 50%;
  cursor: zoom-in;
  background-repeat: no-repeat;
}
</style>
