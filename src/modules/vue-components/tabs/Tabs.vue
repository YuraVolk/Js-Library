<template>
    <div>
        <slot name="headers"></slot>
        <slot name="tabs"></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import { TabsConfiguration } from '../../interfaces/component/tabs/types';

const props = defineProps<TabsConfiguration>();
const currentTab = computed(() => props.currentTab);

provide("activeTab", currentTab);
</script>
