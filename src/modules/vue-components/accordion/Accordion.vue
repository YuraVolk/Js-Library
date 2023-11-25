<template>
    <ul class="accordions">
        <slot></slot>
    </ul>
</template>

<script setup lang="ts">
import { AccordionListConfiguration } from "src/modules/interfaces/component/accordion/types";
import { provide, ref, computed } from "vue";

const props = defineProps<AccordionListConfiguration>();
const expandedIndex = ref<string[] | string>(props.multiple ? [] : "");
const selectedIndex = computed({
   get() {
    return expandedIndex.value;
   },
   set(value: unknown) {
    if (typeof value === "string" && typeof expandedIndex.value === "string") {
        expandedIndex.value = value;
    } else if (Array.isArray(value) && value.every(s => typeof s === "string")) expandedIndex.value = value;
   }
});

provide("multiple", props.multiple);
provide("selectedIndex", selectedIndex);
provide("expandedIndex", expandedIndex);
</script>

<style>
.accordions {
    margin: 0;
    padding-left: 0;
    list-style-type: none;
}
</style>