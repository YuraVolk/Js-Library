<template>
  <header-component />
  <sidebar-component active-link="Rebuilding Text" />
  <main class="main">
    <h1 class="heading">
      Rebuilding Text
    </h1>
    <p>
      The rebuilding text component is a custom component that allows you to display text in a rebuilding manner. It takes an array of
      strings and displays them one by one, with each string being rebuilt and revealed gradually. This component adds an interesting visual
      effect to your web application or website. You could think of the core logic of this effect to bridge the gap in difference between
      the two words through swapping the letters, bridging the middle gap between two words. Here are the component props:
    </p>
    <ul>
      <li>strings: the main configuration prop that is passed as an array of strings.</li>
      <li>
        repetitions: the amount of repetitions the rebuilding text component will get rebuilt. Defaults to one
        repetition.
      </li>
      <li>interval: the delay between text animations, defaults to 2500 milliseconds.</li>
      <li>typingSpeed: the rebuilding speed of an individual character. Defaults to 75 milliseconds.</li>
    </ul>
    <p>Here is an example of this component:</p>
    <rebuilding-text-component
      :strings="['Test text', 'The new resulting text', 'Small']"
      :repetitions="Infinity"
      class="rebuilding-text"
    />
    <p>Here is another example of the component with two same length words:</p>
    <rebuilding-text-component
      :strings="['Hello', 'World']"
      :repetitions="Infinity"
      :typing-speed="45"
      class="rebuilding-text"
    />
    <p>
      In this example, the rebuilding text component is used to display the strings "Hello" and "World" in a swapped
      manner. The strings will be repeated twice with an interval of 3 seconds between repetitions. The typing speed
      is set to 45 characters per second. The pre element is used as the target element for displaying the rebuilt text.
      Here you can closely observe how the algorithm works:
    </p>
    <rebuilding-text-component
      :strings="['Test text', 'The new resulting text', 'Small']"
      :repetitions="Infinity"
      :typing-speed="300"
      class="rebuilding-text"
    />
    <p>In addition, you can use TransitionGroup component in order to create more powerful animations:</p>
    <rebuilding-text-component
      v-slot="{ letters }"
      :strings="['Test text', 'The new resulting text', 'Small']"
      :repetitions="Infinity"
      :typing-speed="75"
      class="rebuilding-text"
      name="list"
    >
      <span
        v-for="letter, i in letters"
        :key="letter.letterState === 'idle' ? letter + String(i) : i"
      >
        <span>{{ letter.letter }}</span>
      </span>
    </rebuilding-text-component>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const RebuildingTextComponent = defineAsyncComponent(() => import("../../../components/rebuilding-text/RebuildingText.vue"));
</script>

<style scoped>
.rebuilding-text {
	font-size: 24px;
	line-height: 54px;
	white-space: nowrap;
}

.rebuilding-text span {
  display: inline-block;
  overflow: hidden;
  transition: all 300ms ease;
  white-space: preserve;
}

.list-enter-active > span {
	max-width: 0;
	min-width: 0;
}

.list-enter-to > span {
	max-width: 1ch;
	min-width: 1ch;
}

.list-leave-active > span {
	max-width: 1ch;
	min-width: 1ch;
}

.list-leave-to > span {
	max-width: 0;
	min-width: 0;
}
</style>
