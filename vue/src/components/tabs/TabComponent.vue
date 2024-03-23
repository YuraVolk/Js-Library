<template>
  <Transition :name="transitionName">
    <slot v-if="isOpen" />
  </Transition>
</template>

<script setup lang="ts">
import { activeTabKey } from '../../interfaces/component/tabs';
import { inject, computed } from 'vue';

const props = defineProps<{
    tabId: number;
    transitionName: string;
}>();

const activeTab = inject<{ value: number }>(activeTabKey) ?? { value: 0 };
const isOpen = computed(() => props.tabId === activeTab.value);
</script>
