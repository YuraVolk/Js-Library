<template>
	<header-component />
	<sidebar-component active-link="Tabs" />
	<main class="main">
		<h1 class="heading">Tabs</h1>
		<p>
            The tabs component is a quite popular component that allows to view multiple panes of content
            out of which only one is visible initially. This component encapsulates away the animation logic,
            automatically applying the click listeners and animation classes in order to allow for creating
            more complex tabs animations, like the one demonstrated here. This component accepts two slotted children:
            a slot with name "headers", for tab headers parent, and a slot with name "tabs", for the tabs parent.
            Additionally this component may accept the following props:
		</p>
		<ul>
            <li>currentTab, a number that specifies the default visible tab index, defaults to 0. Use this prop to change the visible t</li>
		</ul>
		<p>Here you can see an example of default component settings with external CSS styling:</p>
		<tabs-component class="tabs-wrap" :current-tab="openTab">
			<template #headers>
				<div class="tabs-headers">
					<div
						v-for="i in 3"
						class="tab-header"
						:class="{
							active: openTab === i - 1
						}"
						@click="() => (openTab = i - 1)"
					>
						Tab {{ i }}
					</div>
				</div>
			</template>
			<template #tabs>
				<div class="tabs">
					<tab-component :tab-id="0" transition-name="tab">
						<div class="tab">
							<h3>Tab 1</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
								officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
							</p>
						</div>
					</tab-component>
					<tab-component class="tab" :tab-id="1" transition-name="tab">
						<div class="tab">
							<h3>Tab 2</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
								officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
							</p>
						</div>
					</tab-component>
					<tab-component class="tab" :tab-id="2" transition-name="tab">
						<div class="tab">
							<h3>Tab 3</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad minus maiores eos quidem. Distinctio consequatur repellat,
								officiis magnam quia odit voluptatum ipsam possimus quae eum fugit veniam quibusdam commodi consectetur.
							</p>
						</div>
					</tab-component>
				</div>
			</template>
		</tabs-component>
		<p>
			You should use the provided tab component along with parent tabs component, as the tab component
			also wraps around a Transition component, and automatically detects when parent's active tab has changed.
		</p>
	</main>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const TabsComponent = defineAsyncComponent(() => import("../../../components/tabs/Tabs.vue"));
const TabComponent = defineAsyncComponent(() => import("../../../components/tabs/Tab.vue"));

const openTab = ref(0);
</script>

<style scoped>
.tabs-wrap {
	display: block;
	width: 320px;
}

.tabs-headers {
	display: flex;
	justify-content: space-around;
	width: inherit;
	border-radius: 4px;
	border: 1px solid #333;
}

.tabs {
	position: relative;
	width: inherit;
	border: 2px solid #222;
	box-sizing: border-box;
}

.tab {
	position: relative;
	width: 100%;
	height: 320px;
	box-sizing: border-box;
	padding: 20px;
	transition: all 0.3s ease-in-out;
	background-color: #222;
	overflow: hidden;
	clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
}

.tab-header {
	flex: 1 1 0;
	text-align: center;
	cursor: pointer;
}

.tab-header:nth-child(even) {
	background-color: #e2e2e2;
	color: #222;
}

.tab-header:nth-child(odd) {
	color: #e2e2e2;
	background-color: #333;
}

.tab-header.active {
	font-weight: 700;
	text-transform: uppercase;
}

.tab.tab-leave-active {
	position: absolute;
	top: 0;
	bottom: 0;
	width: 0;
	padding: 0;
	z-index: 999;
}

h3 {
	margin: 0;
}
</style>
