<template>
    <div
        class="magnifier-glass"
        ref="glass"
        @pointermove="(e) => emit('glassMove', e)"
        @mousemove="(e) => emit('glassMove', e)"
    >
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { uid } from 'src/modules/utils';
import { useLinkedItem } from '../../interfaces/generic/hooks/useLinkedItem.vue';
import { ref } from 'vue';

const emit = defineEmits<{
    (e: 'glassMove', event: MouseEvent): void;
}>();
const glass = ref<HTMLElement | null>(null);
useLinkedItem(() => "magnifier-glass", glass);
</script>

<style scoped>
.magnifier-glass {
    position: absolute;
    border-radius: 50%;
    background-repeat: no-repeat;
}
</style>