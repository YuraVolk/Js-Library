<template>
    <div class="panel" ref="panel" @mousemove="changePosition" :style="panelStyles" v-if="isOpen">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, reactive, CSSProperties } from "vue";
import { FloatingPanelConfiguration, FloatingPanelInternalSettings } from "shared/component/floatingPanel";

const props = defineProps<FloatingPanelConfiguration>();
const panel = ref<HTMLDivElement | null>(null);
const panelProperties = reactive<FloatingPanelInternalSettings>({
    panelX: panel.value?.offsetLeft ?? 0,
    panelY: panel.value?.offsetTop ?? 0,
    clientX: 0,
    clientY: 0,
    dragging: false
});
const panelStyles = reactive<CSSProperties>({});

const changePosition = ({ clientX, clientY }: MouseEvent) => {
    if (!panelProperties.dragging || !props.isOpen) return;
    panelStyles.left = panelProperties.panelX + clientX - panelProperties.clientX + "px";
    panelStyles.top = panelProperties.panelY + clientY - panelProperties.clientY + "px";
};

const onMouseDown = ({ clientX, clientY }: MouseEvent) => {
    if (!panel.value || !props.isOpen) return;
    panelProperties.panelX = panel.value.offsetLeft;
    panelProperties.panelY = panel.value.offsetTop;
    panelProperties.clientX = clientX;
    panelProperties.clientY = clientY;
    panelProperties.dragging = true;
};

const onMouseUp = () => {
    panelProperties.dragging = false;
};

onMounted(() => {
    window.addEventListener("mouseup", onMouseUp, false);
    document.addEventListener("mousedown", onMouseDown);
});

onUnmounted(() => {
    window.removeEventListener("mouseup", onMouseUp, false);
    document.removeEventListener("mousedown", onMouseDown);
});
</script>