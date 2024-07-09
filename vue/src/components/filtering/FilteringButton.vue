<template>
  <button @click="changeActiveFilter">
    <slot />
  </button>
</template>

<script setup lang="ts" generic="T">
import { Ref, inject, toRef } from 'vue';
import { activeFilterKey } from '../../interfaces/component/filtering';
import { FilteringButtonConfiguration } from "shared/component/filtering";

const props = defineProps<FilteringButtonConfiguration<T>>();
const activeFilter = toRef(inject<Ref<T>>(activeFilterKey));
  
const changeActiveFilter = () => {
  activeFilter.value = props.filter;
};
</script>