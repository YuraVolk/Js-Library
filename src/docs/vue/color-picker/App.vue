<template>
    <header-component />
    <sidebar-component active-link="Color Picker" />
    <main class="main">
        <h1 class="heading">Color Picker</h1>
        <p>
            The custom color picker provides enhanced user experience as it can be manually configured to match the
            overall look of website, providing a seamless user experience through complete control of layout, styling
            and interaction. Custom color pickers allow you to easily integrate with your Vue components,
            without any compatibility issues, need to convert into different color formats, being the same across all
            browsers. Such color pickers may have better performance due to not being anyhow dependent on system UI.
            Here are the props for color picker component:
        </p>
        <ul>
            <li>imageUrl, required to load the image from which you can pick the color.</li>
            <li>width, defines the width of color picker, in pixels. Defaults to 245.</li>
            <li>height, defines the height of color picker, in pixels. Defaults to 245.</li>
            <li>imageWidth, defines the width of color picker in canvas only as image, in pixels. Defaults to the value of
                width.</li>
            <li>imageHeight, defines the height of color picker in canvas only as image, in pixels. Defaults to the value of
                height.</li>
            <li>backgroundColor, a comma-separated list of four values representing the RGBA background color. Defaults to
                black.</li>
            <li>rgba, a comma-separated list of four values representing the default RGBA color. Defaults to black.</li>
        </ul>
        <p>The color picker uses range input component to listen for the opacity value changes, and as such allows for easy
            styling. Here's an example of the component:</p>
        <div class="color-picker">
            <color-picker-component :imageUrl="colorPickerImage" :imageWidth="300" />
        </div>
    </main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import ColorPickerComponent from "../../../modules/vue-components/color-picker/ColorPicker.vue";

import colorPickerImage from "../../../assets/img/picker.jpg";
defineExpose({ colorPickerImage });
</script>

<style scoped>
.color-picker {
    position: relative;
    z-index: 2;
    max-width: 670px;
}</style>