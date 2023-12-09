<template>
    <li class="carousel-item" ref="item">
        <slot></slot>
    </li>
</template>

<script setup lang="ts">
import { uid } from 'src/modules/utils';
import { useLinkedItem } from '../hooks/useLinkedItem.vue';
import { ref } from 'vue';

const item = ref<HTMLElement | null>(null);
useLinkedItem(uid, item);
</script>
