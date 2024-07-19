<template>
  <header-component />
  <sidebar-component active-link="Marquee Carousel" />
  <main class="main">
    <h1 class="heading">
      Marquee Carousel
    </h1>
    <p>
      The Marquee Carousel script is a simple script that sets up an endless marquee scrolling animation,
      duplicates elements and runs
      a keyframes based animation, allowing it to fit any amount of elements, with variable width with just simple
      CSS and minimal JS logic.
      The Marquee Carousel script accepts repetitions to specify how many times to repeat the element, duration of
      animation as string, isPaused and isReversed booleans to allow to set up behaviors.
      Here is a simple example of this component:
    </p>
    <MarqueeCarouselComponent :repetitions="3">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.&nbsp;
    </MarqueeCarouselComponent>
    <p>Here is an example with reversed direction:</p>
    <MarqueeCarouselComponent
      :repetitions="3"
      is-reversed
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.&nbsp;
    </MarqueeCarouselComponent>
    <p>
      And here is an example with pause on hover:
    </p>
    <MarqueeCarouselComponent
      :repetitions="3"
      :is-paused="isPaused"
      @mouseover="isPaused = true"
      @mouseleave="isPaused = false"
    >
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
      dolore magna aliquyam erat, sed diam voluptua.&nbsp;
    </MarqueeCarouselComponent>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const MarqueeCarouselComponent = defineAsyncComponent(() => import("../../../components/marquee-carousel/MarqueeCarousel.vue"));

const isPaused = ref(false);
</script>
