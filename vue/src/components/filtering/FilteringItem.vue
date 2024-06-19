<template>
  <slot v-if="filter === activeFilter" />
</template>

<script setup lang="ts">
import { Ref, inject, toRef } from 'vue';
import { activeFilterKey } from '../../interfaces/component/filtering';

defineProps<{
    filter: unknown;
}>();

const activeFilter = toRef(inject<Ref<unknown>>(activeFilterKey));
</script>