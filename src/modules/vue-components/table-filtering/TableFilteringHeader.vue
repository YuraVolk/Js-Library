<template>
    <th ref="header">
        <slot></slot>
    </th>
</template>

<script setup lang="ts">
import { useLinkedItem } from '../../interfaces/generic/hooks/useLinkedItem.vue';
import { ref } from 'vue';
import { uid } from '../../utils';

const header = ref<HTMLElement | null>(null);
useLinkedItem(() => `table-header-${uid()}`, header);
</script>
