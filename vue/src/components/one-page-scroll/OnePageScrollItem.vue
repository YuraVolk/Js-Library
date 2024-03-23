<template>
  <section
    ref="item"
    class="one-page-scroll-item"
  >
    <slot />
  </section>
</template>

<script setup lang="ts">
import { uid } from 'shared/utils/utils';
import { useLinkedItem } from '../../interfaces/hooks/useLinkedItem';
import { ref } from 'vue';

const item = ref<HTMLElement | null>(null);
useLinkedItem(uid, item);
</script>

<style scoped>
.one-page-scroll-item {
    flex: 1 0 0;
    box-sizing: border-box;
}
</style>