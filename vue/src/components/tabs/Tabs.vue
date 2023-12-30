<template>
    <div>
        <slot name="headers"></slot>
        <slot name="tabs"></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import { TabsConfiguration } from 'shared/component/tabs';
import { activeTabKey } from '../../interfaces/component/tabs';

const props = defineProps<TabsConfiguration>();
const currentTab = computed(() => props.currentTab);

provide(activeTabKey, currentTab);
</script>
