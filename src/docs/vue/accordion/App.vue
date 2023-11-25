<template>
    <header-component />
    <sidebar-component active-link="Accordion" />
    <main class="main">
        <h1 class="heading">Accordion</h1>
        <accordion-component>
            <accordion-item-component label="">
                <template #title>
                    <p>Accordion 1</p>
                </template>
                <template #content>
                    <p>Lorem ipsum dolor</p>
                </template>
            </accordion-item-component>
            <accordion-item-component label="">
                <template #title>
                    <p>Accordion 2</p>
                </template>
                <template #content>
                    <p>Lorem ipsum dolor</p>
                </template>
            </accordion-item-component>
            <accordion-item-component label="">
                <template #title>
                    <p>Accordion 3</p>
                </template>
                <template #content>
                    <p>Lorem ipsum dolor</p>
                </template>
            </accordion-item-component>
        </accordion-component>
    </main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import AccordionComponent from "../../../modules/vue-components/accordion/Accordion.vue";
import AccordionItemComponent from "../../../modules/vue-components/accordion/AccordionItem.vue";
</script>