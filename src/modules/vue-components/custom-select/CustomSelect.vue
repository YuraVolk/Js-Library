<template>
	<select :value="selectedItem?.value ?? ''" :name="selectName">
		<option v-for="option in items" :value="option.value" :disabled="option.isDisabled" :selected="option.isSelected">
			{{ option.innerContent }}
		</option>
	</select>
	<div class="wrap" ref="wrapElement">
		<div class="custom-select-option custom-select-current" :class="{ active: isOpened }" @click="toggleOpened">
			{{ selectedItem?.innerContent ?? "" }}
		</div>
		<ul class="custom-select-options" :class="{ hidden: !(internalItems.length && isOpened) }">
			<li
				v-for="element in internalItems"
				class="custom-select-option"
				:data-disabled="element.isDisabled"
				:data-selected="element.isSelected"
				:value="element.value"
                @click="() => { onItemSelected(element); }"
			>
                {{ element.innerContent }}
            </li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref, onMounted, onUnmounted, computed } from "vue";
import { SelectInternalItem } from "../../interfaces/component/custom-select/types";

const props = defineProps<{
    items: SelectInternalItem[];
    selectName: string;
}>();
const emit = defineEmits<{
    (e: "change", element: SelectInternalItem): void;
}>();
const internalItems = reactive([...props.items]);
const isOpened = ref(false);
const boundDocumentListener = ref<EventListener | undefined>();
const wrapElement = ref<HTMLElement | null>(null);
const selectedItem = computed(() => internalItems.find((item) => item.isSelected));

const toggleOpened = () => {
    isOpened.value = !isOpened.value;
};

const onItemSelected = (element: SelectInternalItem) => {
    isOpened.value = false;
    if (element.isDisabled) return;
    for (const el of internalItems) {
        if (el === element) {
            el.isSelected = true;
			emit("change", el);
        } else el.isSelected = false;
    }
};

onMounted(() => {
    const documentListener: EventListener = (event) => {
        if (!event.composedPath().some((e) => e === wrapElement.value)) isOpened.value = false;
    };
    boundDocumentListener.value = documentListener;
    document.addEventListener("click", documentListener);
});

onUnmounted(() => {
    if (!boundDocumentListener.value) return;
    document.removeEventListener("click", boundDocumentListener.value);
});
</script>

<style scoped>
select {
	display: none;
}

.wrap {
	position: relative;
	width: 150px;
}

.custom-select-current {
	border-radius: 20px;
	transition: all 0.3s;
	background-color: dodgerblue;
}

.custom-select-current::after {
	position: absolute;
	content: "";
	top: 14px;
	right: 10px;
	width: 0;
	height: 0;
	border: 6px solid transparent;
	border-color: #fff transparent transparent transparent;
	transition: all 0.3s;
}

.custom-select-current.active::after {
	border-color: transparent transparent #fff transparent;
	top: 7px;
}

.custom-select-option.active {
	border-bottom-left-radius: 0;
	border-bottom-right-radius: 0;
	background-color: darkcyan;
}

.custom-select-option {
	color: #ffffff;
	padding: 3px 12px;
	border: 1px solid transparent;
	border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
	user-select: none;
	cursor: pointer;
}

.custom-select-options {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	z-index: 99;
	opacity: 1;
	transition: opacity 0.2s linear;
	padding-left: 0;
	list-style-type: none;
	margin: 0;
	background-color: dodgerblue;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
}

.custom-select-options.hidden {
	opacity: 0;
	pointer-events: none;
	cursor: default;
}

.custom-select-options .custom-select-option:hover {
	background-color: rgba(0, 0, 0, 0.15);
}

.custom-select-options .custom-select-option[data-selected="true"] {
	background-color: rgba(0, 0, 0, 0.1);
}

.custom-select-options .custom-select-option[data-disabled="true"] {
	background-color: rgba(0, 0, 0, 0.33);
}

.custom-select-options .custom-select-option:last-child {
	overflow: hidden;
}
</style>
