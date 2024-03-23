<template>
  <div ref="header">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useLinkedItem } from '../../interfaces/hooks/useLinkedItem';
import { ref } from 'vue';

const header = ref<HTMLElement | null>(null);
useLinkedItem(() => "sticky-header", header);
</script>
