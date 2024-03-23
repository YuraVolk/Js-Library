<template>
  <tr ref="row">
    <slot />
  </tr>
</template>

<script setup lang="ts">
import { useLinkedItem } from '../../interfaces/hooks/useLinkedItem';
import { ref } from 'vue';
import { uid } from 'shared/utils/utils';

const row = ref<HTMLElement | null>(null);
useLinkedItem(() => `table-row-${uid()}`, row);
</script>
