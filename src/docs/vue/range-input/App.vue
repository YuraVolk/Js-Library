<template>
    <header-component />
    <sidebar-component active-link="Range Input" />
    <main class="main">
        <h1 class="heading">Custom Range Input</h1>
        <p>
            The range input component provides a
            customizable range input slider with various features such as ticks, labels, and styling options. This component
            allows users to select a value within a specified range. Through the Vue's emit mechanism, it allows you to
            easily
            react on dynamic value changes without any issues, thus fully functioning as a custom range input component.
        </p>
        <ul>
            <li>minimum, number as the minimum value.</li>
            <li>maximum, number as the maximum value.</li>
            <li>defaultValue, defines the default range value.</li>
            <li>step, defines the range step.</li>
            <li>ticks, a number array defining the breakpoints from 0 to 100 of the ticks, no matter the range minimum and
                maximum.</li>
            <li>label, a label for the range input, empty string by default.</li>
            <li>thumbSize, trackColor, thumbColor, hoverColor, activeColor and valueSize. Colors to give range styles: all
                of these are strings and have default values.</li>
        </ul>
        <p>Here is an example of basic usage with default value of 50 and step 5:</p>
        <range-input-component :default-value="50" :step="5"></range-input-component>
        <p>This is a range input with added ticks:</p>
        <range-input-component :ticks="[0, 25, 50, 75, 100]"></range-input-component>
        <p>Here is an example of custom styled colors:</p>
        <range-input-component thumb-size="20px" track-color="#ddd" thumb-color="#0f0" hover-color="#ff0"
            active-color="#f00" value-size="30px"></range-input-component>
    </main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import RangeInputComponent from "../../../modules/vue-components/range-input/RangeInput.vue";
</script>

<style>
.range-input {
    padding-bottom: 1rem;
}
</style>