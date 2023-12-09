<template>
    <li class="image-comparator-item" ref="item">
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
.image-comparator-item {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
}
</style>