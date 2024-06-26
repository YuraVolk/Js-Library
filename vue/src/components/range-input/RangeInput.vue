<template>
  <div class="range-input">
    <div class="wrap">
      <div :class="['range-slider', allSameLine && 'range-slider--one-lined']">
        <label
          class="range-slider__label"
          :for="uniqueID"
        >{{ label }}</label>
        <input
          :id="uniqueID"
          type="range"
          :min="minimum"
          :max="maximum"
          :value="currentValue"
          :step="step"
          class="range-slider__input"
          :style="gradientStyles"
          @input="onValueChange"
        >
        <ul
          v-if="ticks?.length"
          class="range-slider-ticks"
        >
          <li
            v-for="tick in ticks"
            :key="tick"
            :style="`--value: ${tick}%`"
            class="range-slider-ticks__tick"
          >
            {{ tick }}
          </li>
        </ul>
      </div>
      <span
        v-if="!hideValue"
        class="value"
      >{{ currentValue }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, CSSProperties, computed, onMounted, watch } from "vue";
import { assertDevOnly, uid } from "shared/utils/utils";
import { RangeInputConfiguration, defaultActiveColor, defaultHoverColor } from "shared/component/rangeInput";

const uniqueID = ref(uid());
const gradientStyles = ref<CSSProperties>({});
const props = withDefaults(defineProps<Partial<RangeInputConfiguration>>(), {
    minimum: 0,
    maximum: 100,
    defaultValue: 0,
    step: 1,
    ticks: () => [],
    label: "",
    thumbSize: "15px",
    trackColor: "#ccc",
    thumbColor: "#f50",
    hoverColor: defaultHoverColor,
    activeColor: defaultActiveColor,
    valueSize: "25px",
    hideValue: false,
    allSameLine: false
});
const currentValue = ref(props.defaultValue);
const propsValue = computed(() => props.defaultValue);
const emit = defineEmits<{
    (e: 'change', value: number): void
}>();

watch(
    propsValue,
    (newValue) => {
        currentValue.value = Number(newValue);
        setGradientStyle();
    }
);

const styles = computed(() => {
    const thumbSize = props.thumbSize;
    const hoverColor = props.hoverColor;
    const activeColor = props.activeColor;
    return {
        trackColor: props.trackColor,
        thumbSize,
        thumbColor: props.thumbColor,
        boxShadowFirst: `0 0 0 calc(${thumbSize} - (${thumbSize} / 3)) ${hoverColor}`,
        boxShadowSecond: `0 0 0 calc(${thumbSize} - (${thumbSize} / 6)) ${activeColor}`,
        valueSize: props.valueSize
    };
});

const setGradientStyle = () => {
    const progress = (currentValue.value / props.maximum) * 100;
    gradientStyles.value = {
		background: `linear-gradient(to right, ${styles.value.thumbColor} ${String(progress)}%, ${styles.value.trackColor} ${String(progress)}%)`
	};
};

const onValueChange = (event: Event) => {
    assertDevOnly(event.target instanceof HTMLInputElement);
    currentValue.value = Number(event.target.value);
    setGradientStyle();
    emit("change", currentValue.value);
};

onMounted(() => {
    setGradientStyle();
});
</script>

<style scoped>
.range-slider__input {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    background: v-bind("styles.trackColor");
    cursor: pointer;
    outline: none;
    border-radius: v-bind("styles.thumbSize");
}

.range-slider__input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: v-bind("styles.thumbSize");
    height: v-bind("styles.thumbSize");
    background-color: v-bind("styles.thumbColor");
    border-radius: 50%;
    border: none;
    transition: 0.35s ease-in-out;
}

.range-slider__input::-moz-range-thumb {
    width: v-bind("styles.thumbSize");
    height: v-bind("styles.thumbSize");
    background-color: v-bind("styles.thumbColor");
    border-radius: 50%;
    border: none;
    transition: 0.35s ease-in-out;
}

.range-slider__input::-webkit-slider-thumb:hover {
    box-shadow: v-bind("styles.boxShadowFirst");
}

.range-slider__input::-moz-range-thumb:hover {
    box-shadow: v-bind("styles.boxShadowFirst");
}

.range-slider__input:active::-webkit-slider-thumb {
    box-shadow: v-bind("styles.boxShadowSecond");
}

.range-slider__input:active::-moz-range-thumb {
    box-shadow: v-bind("styles.boxShadowSecond");
}

.range-slider__input:focus::-webkit-slider-thumb {
    box-shadow: v-bind("styles.boxShadowSecond");
}

.range-slider__input:focus::-moz-range-thumb {
    box-shadow: v-bind("styles.boxShadowSecond");
}

.wrap {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
}

.value {
    font-size: v-bind("styles.valueSize");
    width: calc(v-bind("styles.valueSize") * 2);
    text-align: center;
}

.range-slider__label {
    display: block;
    font-size: calc(v-bind("styles.valueSize") / 2);
}

.range-slider {
    flex-grow: 1;
    height: 100%;
}

.range-slider--one-lined {
    display: flex;
    align-items: center;
}

.range-slider-ticks {
    position: relative;
    margin: 0;
    padding: 0 10px;
    list-style-type: none;
}

.range-slider-ticks__tick {
    position: absolute;
    top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: calc(var(--value) + v-bind("styles.valueSize") / 4);
    width: 1px;
    height: calc(v-bind("styles.thumbSize") - (v-bind("styles.thumbSize") / 3));
    background: v-bind("styles.trackColor");
    line-height: calc((v-bind("styles.thumbSize") - (v-bind("styles.thumbSize") / 3)) * 4);
}
</style>
