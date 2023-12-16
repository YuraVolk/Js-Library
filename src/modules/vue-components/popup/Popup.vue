<template>
    <teleport to="body">
        <div class="popup" v-if="isOpen">
            <slot name="popup"></slot>
        </div>
    </teleport>
    <div v-if="displayOpenButton" @click="open">
        <slot name="popup-open-button"></slot>
    </div>
</template>

<script setup lang="ts">
import { PopupConfiguration } from "src/modules/interfaces/component/popup/types";
import { ref } from "vue";

const props = withDefaults(defineProps<Partial<PopupConfiguration>>(), {
    open: false,
    displayOpenButton: false
});
const isOpen = ref(props.open);

const open = () => {
    isOpen.value = true;
    if (!props.autoClosingTime) return;
    setTimeout(() => {
        close();
    }, props.autoClosingTime);
};

const close = () => {
    isOpen.value = false;
};

defineExpose({ open, close });
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
}
</style>
