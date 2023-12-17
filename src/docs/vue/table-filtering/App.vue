<template>
	<header-component />
	<sidebar-component active-link="Table Filtering" />
	<main class="main">
		<h1 class="heading">Table Filtering</h1>
		<p>
			The table filtering component is a component that allows you to add filters to a table, through getting all unique values in a table
			column and allowing the user to cross out certain values. While this is rarely needed, it is still a useful widget to have when you're
			displaying real tabular data, as this component allows you to easily customize the table filtering process, making it very easy to
			setup and configure: you need to use three provided components in conjunction for it to work correctly. Firstly, you should create a
			table filtering component, and get the component as a ref. Next, you need to create base table structure: two exceptions is to use
			table filtering header instead of normal table headers and table filtering row instead of normal table rows. In order to configure
			clicking on headers, attach a click event listener to each header and call the table component's exposed onHeaderClicked function:
			pass a zero-based index as the parameter. Then you can attach an event listener to the tbody and make it call table component's
			exposed closeSelect method. The filtering works through the text contents of the td elements, so ensure table cells are having a text
			content. In order to configure non-filterable headers, just omit click listeners for specific headers.
		</p>
		<p>Here you can see an example of this component with filtering for all headers enabled:</p>
		<table-filtering-component class="table-wrap" ref="table">
			<table class="table">
				<thead class="table-head">
					<table-filtering-header-component class="table-head__heading" @click="() => onHeaderClicked(0)"
						>Name</table-filtering-header-component
					>
					<table-filtering-header-component class="table-head__heading" @click="() => onHeaderClicked(1)"
						>Country</table-filtering-header-component
					>
					<table-filtering-header-component class="table-head__heading" @click="() => onHeaderClicked(2)"
						>Specialty</table-filtering-header-component
					>
				</thead>
				<tbody class="table-body" @click="onTableBodyClicked">
					<table-filtering-row-component class="table-body-row">
						<td class="table-body-row__cell">John</td>
						<td class="table-body-row__cell">Austria</td>
						<td class="table-body-row__cell">Designer</td>
					</table-filtering-row-component>
					<table-filtering-row-component class="table-body-row">
						<td class="table-body-row__cell">Mary</td>
						<td class="table-body-row__cell">Ireland</td>
						<td class="table-body-row__cell">Architect</td>
					</table-filtering-row-component>
					<table-filtering-row-component class="table-body-row">
						<td class="table-body-row__cell">Jane</td>
						<td class="table-body-row__cell">Australia</td>
						<td class="table-body-row__cell">QA Tester</td>
					</table-filtering-row-component>
					<table-filtering-row-component class="table-body-row">
						<td class="table-body-row__cell">Mark</td>
						<td class="table-body-row__cell">Russia</td>
						<td class="table-body-row__cell">Game Developer</td>
					</table-filtering-row-component>
					<table-filtering-row-component class="table-body-row">
						<td class="table-body-row__cell">Paul</td>
						<td class="table-body-row__cell">France</td>
						<td class="table-body-row__cell">Backend Developer</td>
					</table-filtering-row-component>
				</tbody>
			</table>
		</table-filtering-component>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import TableFilteringComponent from "../../../modules/vue-components/table-filtering/TableFiltering.vue";
import TableFilteringHeaderComponent from "../../../modules/vue-components/table-filtering/TableFilteringHeader.vue";
import TableFilteringRowComponent from "../../../modules/vue-components/table-filtering/TableFilteringRow.vue";

import filterIcon from "../../../assets/svg/filter-icon.svg";
const filterIconUrl = `url("${filterIcon}")`;

const table = ref<InstanceType<typeof TableFilteringComponent> | null>(null);

const onHeaderClicked = (headerIndex: number) => {
	table.value?.onHeaderClicked(headerIndex);
};

const onTableBodyClicked = () => {
	table.value?.closeSelect();
};
</script>

<style scoped>
.table-wrap {
	display: block;
	width: 400px;
}

.table {
	width: 100%;
}

.table-head {
	background-color: #e2e2e2;
	color: #333;
	cursor: pointer;
}

.table-head__heading::after {
	display: inline-block;
	width: 15px;
	height: 15px;
	margin-left: 5px;
	background-image: v-bind("filterIconUrl");
	background-repeat: no-repeat;
	background-size: cover;
	transform: translateY(12.5%);
	content: "";
}

.table-body-row:nth-child(even) {
	background-color: #e6e6e6;
	color: #333;
}

.table-body-row:nth-child(odd) {
	background-color: #555;
}

.table-body-row__cell {
	text-align: center;
}
</style>
