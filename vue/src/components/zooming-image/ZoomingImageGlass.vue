<template>
    <div
        class="zooming-image-glass"
        ref="glass"
        @pointermove="(e) => emit('glassMove', e)"
        @mousemove="(e) => emit('glassMove', e)"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { useLinkedItem } from '../../interfaces/hooks/useLinkedItem';
import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'glassMove', event: MouseEvent): void;
}>();
const glass = ref<HTMLElement | null>(null);
useLinkedItem(() => "zooming-image-glass", glass);
</script>

<style scoped>
.zooming-image-glass {
    position: absolute;
    z-index: 99;
    overflow: hidden;
    display: block;
}
</style>