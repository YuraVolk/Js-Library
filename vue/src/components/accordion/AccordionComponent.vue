<template>
  <ul class="accordions">
    <slot />
  </ul>
</template>

<script setup lang="ts">
import { AccordionListConfiguration } from "shared/component/accordion";
import { provide, ref, computed } from "vue";
import { multiplePropKey, selectedIndexKey, expandedIndexKey } from "../../interfaces/component/accordion";

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

provide(multiplePropKey, props.multiple);
provide(selectedIndexKey, selectedIndex);
provide(expandedIndexKey, expandedIndex);
</script>

<style scoped>
.accordions {
    margin: 0;
    padding-left: 0;
    list-style-type: none;
}
</style>