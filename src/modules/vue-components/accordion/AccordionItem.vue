<template>
    <li class="accordion" ref="accordion">
        <button @click="toggleContent" class="accordion__heading" ref="header">
            <slot name="title"></slot>
        </button>
        <div class="accordion__content" ref="content">
            <slot name="content"></slot>
        </div>
    </li>
</template>

<script lang="ts" setup>
import { uid } from "src/modules/utils";
import { ref, inject, onMounted, watch } from "vue";

const props = defineProps<{
    isOpen?: boolean
}>();
const id = ref(uid());
const isExpanded = ref(props.isOpen ?? false);
const header = ref<HTMLButtonElement | null>(null);
const content = ref<HTMLDivElement | null>(null);
const accordion = ref<HTMLLIElement | null>(null);
const allowMultiple = inject<boolean>("multiple") ?? false;
const selectedIndex = inject<{ value: string[] }>("selectedIndex") ?? { value: [] };
const expandedIndex = inject<{ value: string[] | string }>("expandedIndex") ?? { value: allowMultiple ? [] : "" };

const expand = (firstInit = false) => {
    if (allowMultiple) {
        if (isExpanded.value) {
            expandedIndex.value = [...selectedIndex.value, id.value];
        } else expandedIndex.value = selectedIndex.value.filter(i => i !== id.value);
    } else if (!firstInit || props.isOpen) expandedIndex.value = id.value;
};

const toggleContent = () => {
    isExpanded.value = !isExpanded.value;
    expand();
    updateHeight();
};

const updateHeight = () => {
    if (!accordion.value) return;
    const headerHeight = header.value?.offsetHeight ?? 0;
    if (isExpanded.value) {
        const contentHeight = content.value?.offsetHeight ?? 0;
        accordion.value.style.maxHeight = `${headerHeight + contentHeight}px`;
    } else accordion.value.style.maxHeight = `${headerHeight}px`;
};

onMounted(() => {
    expand(true);
    updateHeight();
});

watch(
    () => expandedIndex.value,
    () => {
        if (Array.isArray(expandedIndex.value)) {
            isExpanded.value = expandedIndex.value.includes(id.value);
        } else isExpanded.value = expandedIndex.value === id.value;
        updateHeight();
    }
);
</script>

<style scoped>
.accordion {
    width: 100%;
    overflow: hidden;
    background-color: #000000;
    border-radius: .4rem;
    -webkit-transition: max-height 0.4s linear;
    transition: max-height 0.4s linear;
}

.accordion:not(:last-child) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
}

.accordion__content {
    color: #fff;
    font-size: 15px;
    padding: 4px 12px;
    -webkit-transition: max-height 0.2s linear forwards;
    transition: max-height 0.2s linear forwards;
}

.accordion__heading {
    position: relative;
    z-index: 1;
    display: block;
    width: 100%;
    border: none;
    font-size: 1.6rem;
    color: rgba(255, 255, 255, .8);
    text-decoration: none;
    background-color: #000000;
    padding: 0.25rem 1rem;
    text-transform: uppercase;
    text-align: left;
    font-family: Segoe UI;
    cursor: pointer;
}
</style>