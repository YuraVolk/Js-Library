<template>
  <slot name="filters" />
  <TransitionGroup>
    <slot />
  </TransitionGroup>
</template>

<script setup lang="ts" generic="T">
import { provide, ref } from 'vue';
import { activeFilterKey } from "../../interfaces/component/filtering"

const props = defineProps<{
  filters: T[];
  defaultFilter: T;
}>();

const activeFilter = ref(props.defaultFilter)

provide(activeFilterKey, activeFilter);
</script>