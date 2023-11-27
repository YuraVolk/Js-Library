<template>
    <header-component />
    <sidebar-component active-link="Range Input" />
    <main class="main">
        <h1 class="heading">Range Input</h1>
        <range-input-component></range-input-component>
    </main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import RangeInputComponent from "../../../modules/vue-components/range-input/RangeInput.vue";
</script>
