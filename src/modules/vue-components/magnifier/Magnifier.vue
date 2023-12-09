<template>
    <div class="magnifier">
        <slot name="image"></slot>
        <slot name="glass" ></slot>
    </div>
</template>

<script setup lang="ts">
import { useInjectedLinkedItems } from "src/modules/interfaces/generic/hooks/useLinkedItem.vue";

const elements = useInjectedLinkedItems();

const onMouseMove = (event: MouseEvent) => {
  
};

defineExpose({ onMouseMove });
</script>

<style scoped>
.magnifier {
  position: relative;
}

.magnifier__glass {
  position: absolute;
  top: -25px;
  left: -25px;
  width: 70px;
  height: 70px;
  border: 2px solid #222;
  border-radius: 50%;
  cursor: zoom-in;
  background-repeat: no-repeat;
}
</style>