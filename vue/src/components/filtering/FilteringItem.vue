<template>
  <div v-if="filter === activeFilter || activeFilter === undefined">
    <slot />
  </div>
</template>

<script setup lang="ts" generic="T">
import { inject } from 'vue';
import { activeFilterKey } from '../../interfaces/component/filtering';

defineProps<{
  filter: T;
}>();

const activeFilter = inject<T>(activeFilterKey);
</script>