<template>
	<header-component />
	<sidebar-component active-link="Scrolling Ad" />
	<main class="main">
		<h1 class="heading">Scrolling Ad</h1>
		<p>
			The scrolling ad component is without a doubt one of the most annoying components there are, but nonetheless this component is
			maximally automated to work autonomously, and has two main mechanisms that allow it to be maximally performant to scroll into user's
			view: intersection observer and an interval timer to check its current scroll point within the closest scroll parent. This component
			accepts children elements as the content and the following props:
		</p>
		<ul>
			<li>rootMargin, a number in pixels that specifies the top margin of the component that is applied through CSS. Defaults to 0.</li>
			<li>checkInterval, a number that specifies the milliseconds of automatic scroll window check. Defaults to 500.</li>
		</ul>
        <p>Here is an example component with default settings:</p>
		<div class="scrollable-container">
			<scrolling-ad-component class="scrolling-ad-wrap">
				<div class="scrolling-ad">
					<p>This message scrolls to the user, even if you scroll away from it.</p>
				</div>
			</scrolling-ad-component>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A
				scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate
				odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor.
				Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A
				scelerisque purus semper eget duis at tellus.
			</p>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A
				scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate
				odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus. Lorem ipsum dolor sit amet, consectetur
				adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Condimentum mattis pellentesque id nibh tortor.
				Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A scelerisque purus semper eget duis at tellus.
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				Condimentum mattis pellentesque id nibh tortor. Lacinia at quis risus sed vulputate odio ut. Eget mi proin sed libero enim sed. A
				scelerisque purus semper eget duis at tellus.
			</p>
		</div>
	</main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const ScrollingAdComponent = defineAsyncComponent(() => import("../../../components/scrolling-ad/ScrollingAd.vue"));
</script>

<style scoped>
.scrollable-container {
	position: relative;
	width: 500px;
	max-width: 100%;
	height: 500px;
	overflow-x: hidden;
	overflow-y: scroll;
}

.scrolling-ad-wrap {
	position: absolute;
	z-index: 1;
	top: 0;
	text-align: center;
	border: 2px solid #222;
	padding: 30px 12px;
	background-color: #e2e2e2;
	transition: all 0.9s ease-in-out;
	color: #222;
}

.scrollable-container > p:first-of-type {
	margin-top: 260px;
}
</style>
