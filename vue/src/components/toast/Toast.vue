<template>
  <Teleport to="body">
    <Transition :name="transitionName">
      <slot v-if="isOpen" />
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref, watch } from "vue";
import { ToastVueConfiguration } from "../../interfaces/component/toast";

const props = defineProps<ToastVueConfiguration>();
const timeout = ref<number | undefined>();
const isToastOpen = ref(props.isOpen);

const close = () => {
    isToastOpen.value = false;
    window.clearTimeout(timeout.value);
    timeout.value = undefined;
};

watch(
    () => props.isOpen,
    (_, newValue) => {
        isToastOpen.value = newValue;
        if (!props.autoCloseDelay || !newValue) return;
        timeout.value = window.setTimeout(() => {
            close();
        }, props.autoCloseDelay);
    }
);

onMounted(() => {
    if (isToastOpen.value) {
        timeout.value = window.setTimeout(() => {
            close();
        }, props.autoCloseDelay);
    }
});

onUnmounted(() => {
    window.clearTimeout(timeout.value);
});
</script>
