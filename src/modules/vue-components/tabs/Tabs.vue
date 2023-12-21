<template>
    <div>
        <slot name="headers"></slot>
        <slot name="tabs"></slot>
    </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue';
import { TabsConfiguration } from '../../interfaces/component/tabs/types';
import { activeTabKey } from 'src/modules/interfaces/component/tabs/types-vue';

const props = defineProps<TabsConfiguration>();
const currentTab = computed(() => props.currentTab);

provide(activeTabKey, currentTab);
</script>
