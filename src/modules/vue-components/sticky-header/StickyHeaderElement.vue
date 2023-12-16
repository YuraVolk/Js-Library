<template>
    <div ref="header">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { useLinkedItem } from '../../interfaces/generic/hooks/useLinkedItem.vue';
import { ref } from 'vue';

const header = ref<HTMLElement | null>(null);
useLinkedItem(() => "sticky-header", header);
</script>
