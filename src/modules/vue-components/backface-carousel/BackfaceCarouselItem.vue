<template>
    <li class="backface-carousel-item" ref="item">
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
import { uid } from 'src/modules/utils';
import { useLinkedItem } from '../../interfaces/generic/hooks/useLinkedItem.vue';
import { ref } from 'vue';

const item = ref<HTMLElement | null>(null);
useLinkedItem(uid, item);
</script>

<style scoped>
.backface-carousel-item {
    position: relative;
    width: 100%;
    height: auto;
    padding: 0;
    opacity: 0.9999;
    backface-visibility: hidden;
}

.backface-carousel-item:not(:first-of-type) {
    position: absolute;
    left: 0;
    top: 0;
    margin: 0 auto;
    padding: 0 auto;
}
</style>