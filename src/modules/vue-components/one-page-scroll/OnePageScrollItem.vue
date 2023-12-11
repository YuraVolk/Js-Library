<template>
    <section class="one-page-scroll-item" ref="item">
        <slot></slot>
    </section>
</template>

<script setup lang="ts">
import { uid } from 'src/modules/utils';
import { useLinkedItem } from '../../interfaces/generic/hooks/useLinkedItem.vue';
import { ref } from 'vue';

const item = ref<HTMLElement | null>(null);
useLinkedItem(uid, item);
</script>

<style scoped>
.one-page-scroll-item {
    flex: 1 0 0;
    box-sizing: border-box;
}
</style>