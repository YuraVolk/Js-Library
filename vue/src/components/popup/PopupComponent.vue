<template>
  <teleport to="body">
    <div
      v-if="isOpen"
      class="popup"
    >
      <slot name="popup" />
    </div>
  </teleport>
  <div
    v-if="displayOpenButton"
    @click="open"
  >
    <slot name="popup-open-button" />
  </div>
</template>

<script setup lang="ts">
import { PopupConfiguration } from "shared/component/popup";
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
