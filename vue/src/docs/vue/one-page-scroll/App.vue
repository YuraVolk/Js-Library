<template>
  <header-component />
  <sidebar-component active-link="One Page Scroll" />
  <main class="main">
    <h1 class="heading">
      One Page Scroll
    </h1>
    <p>
      The one page scroll component provides a smooth scrolling experience for a single-page application. It allows users to navigate
      through different sections of the page by scrolling vertically or horizontally. Its additional plus is that you do not need to depend
      on custom animations, specific CSS styles. The internal formulas automatically adapt to most common scenarios.
    </p>
    <ul>
      <li>
        isHorizontal: A boolean property that determines whether the scrolling should be horizontal (true) or vertical (false). By default,
        it is set to false.
      </li>
      <li>
        duration: A number property that specifies the duration of the smooth scrolling animation in milliseconds. The default value is 500.
      </li>
      <li>
        increment: A number property that determines the increment value for each step of the smooth scrolling animation. The default value
        is 6.
      </li>
      <li>
        noScrollbar: A boolean property that controls whether the scrollbars should be hidden (true) or visible (false). Enabled by default.
      </li>
    </ul>
    <one-page-scroll-component class="one-page-scroll">
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          First slide. Scroll down...
        </p>
      </one-page-scroll-item-component>
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          Second slide.
        </p>
      </one-page-scroll-item-component>
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          Third slide.
        </p>
      </one-page-scroll-item-component>
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          Fourth slide.
        </p>
      </one-page-scroll-item-component>
    </one-page-scroll-component>
    <p>Here is an example of horizontal one-page scroll:</p>
    <one-page-scroll-component
      class="one-page-scroll"
      is-horizontal
    >
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          First slide. Scroll down...
        </p>
      </one-page-scroll-item-component>
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          Second slide.
        </p>
      </one-page-scroll-item-component>
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          Third slide.
        </p>
      </one-page-scroll-item-component>
      <one-page-scroll-item-component class="one-page-scroll-slide">
        <p class="one-page-scroll-slide__heading">
          Fourth slide.
        </p>
      </one-page-scroll-item-component>
    </one-page-scroll-component>
    <p>
      In order to get some default styling, it is highly recommended you use the local provided one page scroll item component along with
      the one page scroll component in order to get the one page scroll work right away with minimum configuration.
    </p>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const OnePageScrollComponent = defineAsyncComponent(() => import("../../../components/one-page-scroll/OnePageScroll.vue"));
const OnePageScrollItemComponent = defineAsyncComponent(() => import("../../../components/one-page-scroll/OnePageScrollItem.vue"));
const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
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
