<template>
    <li class="image-comparator-item" ref="item">
        <slot></slot>
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
.image-comparator-item {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
}
</style>