<template>
  <header-component />
  <sidebar-component active-link="Image Comparator" />
  <main class="main">
    <h1 class="heading">
      Image Comparator
    </h1>
    <p>
      The purpose of the image comparator component is to create a visual comparison between two images.
      The current implementation supports comparing an arbitrary amount of images as demonstrated in the widget below.
      The base requirement to compare images is to make images absolute positioned and occupy auto width and height.
      The component allows users to slide a comparison slider horizontally to reveal different portions of the two
      images. The component is built using. It includes CSS styles for positioning and styling the comparison
      slider. The component dynamically adjusts the width of the images and the position of the slider based on user
      interaction. It also handles mouse and pointer events for smooth sliding functionality. The component only gives
      basic styling, such as a relative wrapper element and required interactions. Other than that, you can achieve full
      customization only through experimenting with CSS properties.
    </p>
    <image-comparator-component class="comparator">
      <carousel-item-component>
        <img
          :src="image1"
          alt="Example Image"
          class="comparator-element__image"
        >
      </carousel-item-component>
      <carousel-item-component>
        <img
          :src="image2"
          alt="Example Image"
          class="comparator-element__image"
        >
      </carousel-item-component>
      <carousel-item-component>
        <img
          :src="image3"
          alt="Example Image"
          class="comparator-element__image"
        >
      </carousel-item-component>
      <carousel-item-component>
        <img
          :src="image4"
          alt="Example Image"
          class="comparator-element__image"
        >
      </carousel-item-component>
    </image-comparator-component>
    <p>
      This component requires you use special carousel item components as children to automatically provide and inject
      all the element data. In order to get default styling and configuration out of the box, it is suggested you use
      the specific to this component ImageComparatorItem that comes in with pre-bundled styles to work correctly.
    </p>
  </main>
</template>
  
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
import ImageComparatorComponent from "../../../components/image-comparator/ImageComparator.vue";
import CarouselItemComponent from "../../../components/image-comparator/ImageComparatorItem.vue";

import image1 from "../../../../../assets/img/slide0.png";
import image2 from "../../../../../assets/img/slide1.png";
import image3 from "../../../../../assets/img/slide2.png";
import image4 from "../../../../../assets/img/slide3.png";
</script>

<style scoped>
.comparator {
  display: block;
  width: 350px;
  height: 200px;
  border: 4px solid #333;
  background-size: cover;
  background-repeat: no-repeat;
}

.comparator-element__image {
  display: block;
  width: 350px;
  height: 200px;
  box-sizing: border-box;
}
</style>