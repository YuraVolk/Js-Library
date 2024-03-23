<template>
  <th ref="header">
    <slot />
  </th>
</template>

<script setup lang="ts">
import { useLinkedItem } from '../../interfaces/hooks/useLinkedItem';
import { ref } from 'vue';
import { uid } from 'shared/utils/utils';

const header = ref<HTMLElement | null>(null);
useLinkedItem(() => `table-header-${uid()}`, header);
</script>
