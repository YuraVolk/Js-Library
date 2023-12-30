<template>
    <header-component />
    <sidebar-component active-link="Countdown" />
    <main class="main">
        <h1 class="heading">Countdown</h1>
        <p>
            The countdown component is a common component and has many applications. Many countdowns have fixed
            formats, however this countdown component can be easily extended to give a custom format with minimum
            configuration required. If you want to use standard word-based text rendering, all you have to do is to
            specify the date prop to be a real date string in the countdown-component element.
            The countdown can be easily customized through external CSS, thus making it very easy to configure.
            Here is a working example of the component:
        </p>
        <countdown-component></countdown-component>
        <p>
            This Vue version of the countdown component is configured to accept TimeUnit interface array,
            thus allowing you to easily customize the output format and the total output settings.
        </p>
    </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const CountdownComponent = defineAsyncComponent(() => import("../../../components/countdown/Countdown.vue"));
</script>

<style scoped>
.countdown {
	margin: 0 auto;
	font-size: 38px;
	color: #e2e2e2;
	text-align: left;
}
</style>