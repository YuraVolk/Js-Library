<template>
    <tr ref="row">
        <slot></slot>
    </tr>
</template>

<script setup lang="ts">
import { useLinkedItem } from '../../interfaces/generic/hooks/useLinkedItem.vue';
import { ref } from 'vue';
import { uid } from '../../utils';

const row = ref<HTMLElement | null>(null);
useLinkedItem(() => `table-row-${uid()}`, row);
</script>
