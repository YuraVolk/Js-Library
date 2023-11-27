<template>
    <div>
        <div class="wrap">
            <div :class="['range-slider', allSameLine && 'range-slider--one-lined']">
                <label class="range-slider__label" :for="uniqueID">{{ label }}</label>
                <input type="range" :min="minimum ?? 0" :max="maximum ?? 100" :value="currentValue" :id="uniqueID"
                    :step="step ?? 1" class="range-slider__input" :style="gradientStyles" />
                <ul class="range-slider-ticks" v-if="ticks?.length">
                    <li v-for="tick in ticks" :style="`--value: ${tick}%`">{{ tick }}</li>
                </ul>
            </div>
            <span class="value" v-if="!hideValue">{{ currentValue }}</span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, CSSProperties, computed } from "vue";
import { uid } from "../../utils";
import { RangeInputConfiguration, defaultActiveColor, defaultHoverColor } from "src/modules/interfaces/component/range-input/types";

const uniqueID = ref(uid());
const gradientStyles = reactive<CSSProperties>({});
const props = defineProps<Partial<RangeInputConfiguration>>();
const currentValue = ref(props.defaultValue ?? 0);

const styles = computed(() => {
    const thumbSize = props.thumbSize ?? "15px";
    const hoverColor = props.hoverColor ?? defaultHoverColor;
    const activeColor = props.activeColor ?? defaultActiveColor;
    return {
        trackColor: props.trackColor ?? "#ccc",
        thumbSize,
        thumbColor: props.thumbColor ?? "#f50",
        boxShadowFirst: `0 0 0 calc(${thumbSize} - (${thumbSize} / 3)) ${hoverColor}`,
        boxShadowSecond: `0 0 0 calc(${thumbSize} - (${thumbSize} / 6)) ${activeColor}`,
        valueSize: props.valueSize ?? "25px"
    };
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
    left: calc(v-bind(currentValue) + v-bind("styles.valueSize") / 4);
    width: 1px;
    height: calc(v-bind("styles.thumbSize") - (v-bind("styles.thumbSize") / 3));
    background: v-bind("styles.trackColor");
    line-height: calc((v-bind("styles.thumbSize") - (v-bind("styles.thumbSize") / 3)) * 4);
}
</style>
