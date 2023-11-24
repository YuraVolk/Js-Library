<template>
    <div class="autocomplete-wrap">
        <slot></slot>
        <ul v-if="isListOpened && filteredOptions.length" class="autocomplete-items">
            <li v-for="option in filteredOptions" :key="option" class="autocomplete-item" @click="setInputValue(option)">
                {{ option }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
    name: 'AutocompleteListComponent',
    props: {
        options: {
            type: Array,
            default: () => [],
        },
    },
    setup(props) {
        const isListOpened = ref(false);
        const filteredOptions = ref([]);

        const onInputHandler = (event) => {
            const value = event.target.value.toLowerCase().trim();
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
        };

        const setInputValue = (newValue) => {
            const input = document.querySelector('input');
            if (input) {
                input.value = newValue;
                isListOpened.value = false;
                filteredOptions.value = [];
            }
        };

        onMounted(() => {
            const input = document.querySelector('input');
            if (input) {
                input.addEventListener('input', onInputHandler);
            }
        });

        onUnmounted(() => {
            const input = document.querySelector('input');
            if (input) {
                input.removeEventListener('input', onInputHandler);
            }
        });

        return {
            isListOpened,
            filteredOptions,
            onInputHandler,
            setInputValue,
        };
    },
};
</script>
  