<template>
  <li
    ref="item"
    class="carousel-item"
  >
    <slot />
  </li>
</template>

<script setup lang="ts">
import { uid } from 'shared/utils/utils';
import { useLinkedItem } from '../../hooks/useLinkedItem';
import { ref } from 'vue';

const item = ref<HTMLElement | null>(null);
useLinkedItem(uid, item);
</script>
