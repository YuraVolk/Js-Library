<template>
    <Transition :name="transitionName">
        <slot v-if="isOpen"></slot>
    </Transition>
</template>

<script setup lang="ts">
import { activeTabKey } from 'src/modules/interfaces/component/tabs/types-vue';
import { inject, computed } from 'vue';

const props = defineProps<{
    tabId: number;
    transitionName: string;
}>();

const activeTab = inject<{ value: number }>(activeTabKey) ?? { value: 0 };
const isOpen = computed(() => props.tabId === activeTab.value);
</script>
