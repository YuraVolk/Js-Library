<template>
  <div class="color-picker-outer">
    <div class="color-picker-wrap">
      <div class="color-picker">
        <canvas
          ref="canvas"
          class="color-picker__canvas"
          :width="colorInfo.canvasWidth"
          :height="colorInfo.canvasHeight"
          @mousedown="onMouseDown"
        />
      </div>
    </div>
    <div class="color-picker-info">
      <div class="color-picker-info__color-wrap">
        <div
          class="color-picker-info__color"
          :style="{ backgroundColor: colorInfo.rgb }"
        />
      </div>
      <div class="color-picker-info__opacity-range">
        <range-input-component
          :maximum="1"
          :step="0.01"
          :ticks="[0, 100]"
          label="Opacity:"
          :default-value="1"
          @change="onInputChange"
        />
      </div>
      <p>Hex code: {{ colorInfo.hex }}</p>
      <p>RGBA: {{ colorInfo.rgba }}</p>
      <p>RGB: {{ colorInfo.rgb }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue';
import RangeInputComponent from "../range-input/RangeInput.vue";
import { verifyValidRGBAColor } from 'shared/interfaces/colors';
import { ColorPickerVueConfiguration } from '../../interfaces/component/colorPicker';

const props = withDefaults(defineProps<ColorPickerVueConfiguration>(), {
    rgba: () => [0, 0, 0, 1],
    backgroundColor: () => [0, 0, 0, 1],
    width: 245,
    height: 245,
    imageWidth: 245,
    imageHeight: 245
});
const rgba = ref([...props.rgba ?? [0, 0, 0, 1]]);
const canvas = ref<HTMLCanvasElement | null>(null);

const colorInfo = computed(() => {
    const backgroundColor = props.backgroundColor;
    const alpha = 1 - rgba.value[3] / 100, baseAlpha = rgba.value[3] / 100;
    const opacityBackground = rgba.value.map((c, i) => i === 3 ? 1 : Math.round(alpha * backgroundColor[i] + (baseAlpha * c) * 100));
    return {
        hex: "#" + opacityBackground.slice(0, -1).map(color => Number(color).toString(16).padStart(2, "0")).join(""),
        rgb: `rgb(${opacityBackground.slice(0, -1).join(", ")})`,
        rgba: `rgba(${rgba.value.join(", ")})`,
        width: `${props.width}px`,
        height: `${props.height}px`,
        canvasWidth: props.width,
        canvasHeight: props.height,
        halfWidth: `${props.width / 2}px`,
        halfHeight: `${props.height / 2}px`
    };
});

const onMouseDown = (event: MouseEvent) => {
    const ctx = canvas.value?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const color = [...ctx.getImageData(event.offsetX, event.offsetY, 1, 1).data.slice(0, -1), rgba.value[3]];
    if (verifyValidRGBAColor(color)) rgba.value = color;
};

const onInputChange = (value: number) => {
    const ctx = canvas.value?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const color = [...rgba.value.slice(0, -1), value];
    if (verifyValidRGBAColor(color)) rgba.value = color;
};

onMounted(() => {
    const ctx = canvas.value?.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;
    const image = new Image(props.imageWidth, props.imageHeight);
    image.src = props.imageUrl;
    image.onload = () => {
        ctx.drawImage(image, 0, 0, image.width, image.height);
    };
});
</script>

<style scoped>
.color-picker-outer {
    max-width: inherit;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 0.3rem;
}

.color-picker-wrap {
    width: v-bind('colorInfo.width');
    height: v-bind('colorInfo.height');
    border: 3px solid #000000;
    background-color: #000000;
}

.color-picker {
    width: 100%;
    height: 100%;
}

.color-picker__canvas {
    width: inherit;
    height: inherit;
    cursor: crosshair;
}

.color-picker-info__color-wrap {
    width: v-bind('colorInfo.halfWidth');
    height: v-bind('colorInfo.halfHeight');
    border: 3px solid #000000;
}

.color-picker-info__color {
    width: 100%;
    height: 100%;
}

.color-picker-info {
    width: 235px;
}

p {
    margin: 3px 0;
}

.color-picker-info__opacity-range {
    display: block;
    padding: 2rem 0;
}
</style>