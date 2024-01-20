<template>
	<div class="wrap" ref="wrap">
		<slot></slot>
		<div
			class="wrap-select"
			v-if="openSelect"
			:style="{
				top: `${openSelect.top}px`,
				left: `${openSelect.left}px`,
				width: `${openSelect.width}px`,
				height: `${openSelect.height}px`
			}"
		>
			<div
				v-for="option in openSelect.options"
				:key="option"
				class="wrap-select__option"
				:class="{
					'wrap-select__option--crossed': excludedCriteria[openSelect.index].includes(option)
				}"
				@click="() => toggleCriterion(option)"
				v-text="option"
			></div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { TableSelectInformation } from "shared/component/tableFiltering";
import { LinkedVueItem, useInjectedLinkedItems } from "../../interfaces/hooks/useLinkedItem";
import { assertNonUndefined } from "shared/utils/utils";
import { computed, onMounted, ref } from "vue";

const wrap = ref<HTMLElement | null>(null);
const elements = useInjectedLinkedItems();
const elementsAccessors = computed(() => {
	const headers: LinkedVueItem[] = [],
		rows: LinkedVueItem[] = [];
	for (const [key, value] of Object.entries(elements)) {
		if (key.startsWith("table-header-")) {
			headers.push(value);
		} else if (key.startsWith("table-row-")) rows.push(value);
	}

	return { headers, rows };
});

const openSelect = ref<TableSelectInformation | undefined>();
const excludedCriteria = ref<Array<string | null>[]>([]);

const toggleCriterion = (option: string) => {
	assertNonUndefined(openSelect.value);
	const index = openSelect.value.index;
	const newExcludedCriteria = [...excludedCriteria.value];
	if (newExcludedCriteria[index].includes(option)) {
		newExcludedCriteria[index].splice(newExcludedCriteria[index].indexOf(option), 1);
	} else newExcludedCriteria[index].push(option);

	excludedCriteria.value = newExcludedCriteria;
	updateExcludedRows();
};

const updateExcludedRows = () => {
	for (const row of elementsAccessors.value.rows) {
		if (Array.from(row.element.children).some((element, i) => excludedCriteria.value[i].includes(element.textContent ?? ""))) {
			row.styles = {
				display: "none"
			};
		} else {
			row.styles = {
				display: "revert"
			};
		}
	}
};

const onHeaderClicked = (index: number) => {
	if (!wrap.value) return;
	const headerRect = elementsAccessors.value.headers[index].element.getBoundingClientRect();
	const wrapRect = wrap.value.getBoundingClientRect();
	const top = headerRect.top - wrapRect.top,
		left = headerRect.left - wrapRect.left;

	openSelect.value = {
		index,
		top,
		left,
		width: headerRect.width,
		height: headerRect.height,
		options: [...new Set(elementsAccessors.value.rows.map(({ element }) => element.children[index].textContent ?? ""))]
	};
};

const closeSelect = () => {
	openSelect.value = undefined;
};

onMounted(() => {
	excludedCriteria.value = Array.from({ length: elementsAccessors.value.headers.length }, () => []);
});

defineExpose({ onHeaderClicked, closeSelect });
</script>

<style scoped>
.wrap {
	position: relative;
}

.wrap-select {
	position: absolute;
}

.wrap-select__option {
	background-color: #333;
	height: inherit;
	cursor: pointer;
}

.wrap-select__option--crossed {
	text-decoration: line-through;
}
</style>
