<template>
	<header-component />
	<sidebar-component active-link="Table Filtering" />
	<main class="main">
		<h1 class="heading">Table Filtering</h1>
		
	</main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import TableFilteringComponent from "../../../modules/vue-components/sticky-header/StickyHeader.vue";

import filterIcon from "../../../assets/svg/filter-icon.svg";
const filterIconUrl = `url("${filterIcon}")`;
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
	background-image: v-bind('filterIconUrl');
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
