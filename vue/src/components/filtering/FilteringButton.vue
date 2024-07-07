<template>
  <button @click="changeActiveFilter">
    <slot />
  </button>
</template>

<script setup lang="ts" generic="T">
import { Ref, inject, toRef } from 'vue';
import { activeFilterKey } from '../../interfaces/component/filtering';

const props = defineProps<{
    filter?: T;
}>();

const activeFilter = toRef(inject<Ref<T>>(activeFilterKey));

const changeActiveFilter = () => {
  activeFilter.value = props.filter;
};
</script>