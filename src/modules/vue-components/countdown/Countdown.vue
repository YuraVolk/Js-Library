<template>
    <span class="countdown">{{ text }}</span>
</template>

<script setup lang="ts">
import { useInterval } from "../../interfaces/generic/hooks/useInterval.vue";
import { onMounted, ref, computed } from 'vue';
import { defaultTimeUnits, reduceTimeUnits, TimeUnit } from 'src/modules/interfaces/component/countdown/types';

const props = defineProps<{
    units?: TimeUnit[];
    date?: Date;
}>();
const text = ref<string>("");

const defaultedProps = computed(() => ({
    units: props.units ?? reduceTimeUnits(defaultTimeUnits),
    date: props.date ?? new Date('May 6, 2085 11:00:00')
}));
const renderTexts = (units: TimeUnit[]) => {
    let timeString = "", distance = defaultedProps.value.date.getTime() - new Date().getTime();
    for (const { timeFactor, name } of units) {
        const value = Math.floor(distance / timeFactor);
        timeString += value <= 0 ? '' : `${value} ${String(value).slice(-1) === '1' ? name : name + 's'} `;
        distance %= timeFactor;
    }
    
    text.value = timeString ? timeString.trim() : "0 seconds";
};

useInterval(() => {
    renderTexts(defaultedProps.value.units);
}, 1000);

onMounted(() => {
    renderTexts(defaultedProps.value.units);
});
</script>

<style scoped>
.countdown {
    display: block;
}
</style>