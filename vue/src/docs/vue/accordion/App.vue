<template>
  <header-component />
  <sidebar-component active-link="Accordion" />
  <main class="main">
    <h1 class="heading">
      Accordion
    </h1>
    <p>
      The accordion component represents multiple options that user may pick to read more about, initially being able to see only headings.
      The basic idea is to make the component accordion items automatically managed by themselves: through wrapper elements the accordion
      persists the reference to header and content, thus allowing to easily detect maximum height and only header/content with smooth
      animation. Accordion is configured to automatically detect height for both header and all the content, and detects so precisely. This
      component requires no writing your own code except for adding styles to configuration to use even in most advanced use cases. You
      create a base accordion-component element and then pass accordion-item-component items to it, each item having two slots: title and
      content. The slots usage allows for extensive configuration, and thus allows to create custom accordion HTML and CSS.
    </p>
    <accordion-component>
      <accordion-item-component>
        <template #title>
          <span>Accordion 1</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
      <accordion-item-component>
        <template #title>
          <span>Accordion 2</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
      <accordion-item-component>
        <template #title>
          <span>Accordion 3</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
      <accordion-item-component>
        <template #title>
          <span>Accordion 4</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
    </accordion-component>
    <p>
      You can also create accordions with multiple possible select options. In addition, you can open some accordion tabs by default through
      is-open attribute.
    </p>
    <accordion-component multiple>
      <accordion-item-component>
        <template #title>
          <span>Accordion 1</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
      <accordion-item-component is-open>
        <template #title>
          <span>Accordion 2</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
      <accordion-item-component is-open>
        <template #title>
          <span>Accordion 3</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
      <accordion-item-component>
        <template #title>
          <span>Accordion 4</span>
        </template>
        <template #content>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
        </template>
      </accordion-item-component>
    </accordion-component>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const AccordionComponent = defineAsyncComponent(() => import("../../../components/accordion/AccordionComponent.vue"));
const AccordionItemComponent = defineAsyncComponent(() => import("../../../components/accordion/AccordionItem.vue"));
</script>
