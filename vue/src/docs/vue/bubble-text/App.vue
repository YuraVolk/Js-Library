<template>
  <header-component />
  <sidebar-component active-link="Bubble Text" />
  <main class="main">
    <h1 class="heading">
      Bubble Text
    </h1>
    <p>
      The Bubble Text Component is a component that allows you to display text in a swapping manner: one by one
      each letter is replaced by
      a different letter from the new text, as such creating a swapping effect. This component makes most sense
      with Transition Group
      component, which is activated through setting a duration prop and passing a render function to the
      component. This way one can make
      smooth animations with letters actually being swapped. Here's an example below that demonstrates this
      effect:
    </p>
    <bubble-text-component
      v-slot="{ letters }"
      class="bubble-text"
      :strings="['Lorem ipsum dolor', 'sit amet dolor consecteur']"
      :repetitions="Infinity"
      :typing-speed="175"
      :duration="175"
      name="list"
    >
      <span
        v-for="letter, i in letters"
        :key="letter?.letter + String(i)"
        v-text="letter?.letter"
      />
    </bubble-text-component>
    <p>
      Here's an another example of the component, but this time with faster typing speed than transition speed:
    </p>
    <bubble-text-component
      v-slot="{ letters }"
      class="bubble-text"
      :strings="['Lorem ipsum dolor', 'sit amet dolor consecteur']"
      :repetitions="Infinity"
      :typing-speed="75"
      :duration="175"
      name="list"
    >
      <span
        v-for="letter, i in letters"
        :key="letter?.letter + String(i)"
        v-text="letter?.letter"
      />
    </bubble-text-component>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const BubbleTextComponent = defineAsyncComponent(() => import("../../../components/bubble-text/BubbleText.vue"));
</script>

<style scoped>
.bubble-text {
	font-size: 24px;
	line-height: 54px;
}

.bubble-text span {
	display: inline-block;
	white-space: pre;
	font-size: 24px;
	line-height: 54px;
	overflow: hidden;
	transition: all 175ms linear;
}

.list-enter-to,
.list-leave-from {
  max-width: 1ch;
  min-width: 1ch;
}

.list-enter-from,
.list-leave-to {
  max-width: 0;
  min-width: 0
}
</style>