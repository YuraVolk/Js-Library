<template>
  <slot name="filters" />
  <TransitionGroup v-bind="$attrs">
    <slot
      :active-filter="activeFilter"
      :filtered-items="filteredItems"
    />
  </TransitionGroup>
</template>

<script setup lang="ts" generic="T, V">
import { computed, provide, toRef, ref } from 'vue';
import { activeFilterKey } from "../../interfaces/component/filtering"
import { FilteringWrapperConfiguration } from "shared/component/filtering";

const props = defineProps<FilteringWrapperConfiguration<T, V>>();
const items = toRef(props.items);
const activeFilter = ref(props.activeFilter);

const filteredItems = computed(() => {
  if (activeFilter.value === undefined) {
    return items.value;
  }

  return items.value.filter((item) => item.filter === activeFilter.value);
});

provide(activeFilterKey, activeFilter);
</script>