<template>
  <div class="autocomplete-wrap">
    <slot />
    <ul
      v-if="isListOpened && filteredOptions.length"
      class="autocomplete-items"
    >
      <li
        v-for="option in filteredOptions"
        :key="option"
        class="autocomplete-item"
        @click="setInputValue(option)"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { AutocompleteListConfiguration } from "shared/component/autocompleteList";

const props = defineProps<AutocompleteListConfiguration>();
const emit = defineEmits<{
    (e: "changeInputValue", value: string): void;
}>();

const isListOpened = ref(false);
const filteredOptions = ref<string[]>([]);
const inputValue = computed(() => props.inputValue);

watch(inputValue, () => {
    const value = inputValue.value.toLowerCase().trim();
    if (!value.length) return;
    const newFilteredOptions = props.options.filter((option) => {
        const lowerOption = option.toLowerCase();
        return lowerOption !== value && lowerOption.startsWith(value);
    });

    if (newFilteredOptions.length) {
        isListOpened.value = true;
        filteredOptions.value = newFilteredOptions;
    } else {
        isListOpened.value = false;
        filteredOptions.value = [];
    }
});

const setInputValue = (newValue: string) => {
    isListOpened.value = false;
    filteredOptions.value = [];
    emit("changeInputValue", newValue);
};
</script>

<style scoped>
.autocomplete-items {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    z-index: 9999;
    overflow-y: scroll;
    width: 100%;
    max-height: 200px;
    padding-left: 0;
    margin: 0;
    list-style-type: none;
}

.autocomplete-item {
    padding: 10px;
    cursor: pointer;
    background-color: #ffffff;
    border-bottom: 1px solid #d4d4d4;
}

.autocomplete-wrap {
    position: relative;
}
</style>