<template>
	<header-component />
	<sidebar-component active-link="One Page Scroll" />
	<main class="main">
		<h1 class="heading">One Page Scroll</h1>
        <one-page-scroll-component class="one-page-scroll">
            <one-page-scroll-item-component>

            </one-page-scroll-item-component>
        </one-page-scroll-component>
	</main>
</template>

<script setup lang="ts">
import OnePageScrollComponent from "../../../modules/vue-components/one-page-scroll/OnePageScroll.vue";
import OnePageScrollItemComponent from "../../../modules/vue-components/one-page-scroll/OnePageScrollItem.vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
</script>

<style scoped>
.one-page-scroll {
  display: block;
  width: 500px;
  height: 500px;
  border: 3px solid #333;
}

.one-page-scroll-slide {
  min-width: 500px;
  height: 500px;
  box-sizing: border-box;
  border: 3px solid #2390bb;
  background-color: #62626253;
  flex: 1 0 0;
}

.one-page-scroll-slide__heading {
  margin: 0;
  font-size: 32px;
  line-height: 54px;
}
</style>
