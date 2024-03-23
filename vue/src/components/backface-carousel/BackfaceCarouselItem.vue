<template>
  <li
    ref="item"
    class="backface-carousel-item"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
import { uid } from 'shared/utils/utils';
import { useLinkedItem } from '../../interfaces/hooks/useLinkedItem';
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