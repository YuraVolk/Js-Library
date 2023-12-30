<template>
    <header-component />
    <sidebar-component active-link="Gallery Carousel" />
    <main class="main">
        <h1 class="heading">Gallery Carousel</h1>
        <p>
          The gallery carousel component represents a 2D carousel that allows items to be cycled through the
          visible area, showing one item at a time by default. This is a classic and the most common carousel type,
          which is commonly seen on websites, and has toggles and arrows to navigate in the carousel.
        </p>
        <ul>
          <li>smoothDiametralTransition: Determines whether the transition between the last item and the
            first item is smooth. By default, this property is set to true.</li>
          <li>current: Specifies the index of the current item being displayed in the carousel.</li>
          <li>frameGap: Defines the gap between each item in the carousel.</li>
          <li>animationDuration: Sets the duration of the animation when transitioning between items.</li>
          <li>showArrows: Determines whether the arrows for navigating to the previous or next item are
            displayed. True by default.</li>
          <li>showToggles: Specifies whether the toggles for switching between items are shown. True by default.</li>
        </ul>
        <p>Here is a carousel with all default options:</p>
        <gallery-carousel-component class="gallery-wrap">
            <carousel-item-component>
                <img :src="image1" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image2" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image3" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image4" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image5" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image6" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image1" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image2" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image3" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component>
                <img :src="image4" alt="Example Image">
            </carousel-item-component>
        </gallery-carousel-component>
        <p>
          This carousel features some advanced auto-configuration: through Vue rendering functions, it automatically
          creates copies of first and last element to ensure seamless transition in default smooth diametral mode.
          In order to customize the class, you need to directly pass it as fallthrough attribute, such as class directly
          on the component.
        </p>
        <p>
          In order for the carousel to track amount of items correctly and as such work correctly it must use
          carousel item components to automatically provide and inject all the element information, as such the only
          valid slot children are carousel item components.
        </p>
    </main>
</template>
  
<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
const GalleryCarouselComponent = defineAsyncComponent(() => import("../../../components/gallery-carousel/GalleryCarousel.vue"));
const CarouselItemComponent = defineAsyncComponent(() => import("../../../interfaces/generic/carousel/CarouselItem.vue"));

import image1 from "../../../assets/img/slide0.png";
import image2 from "../../../assets/img/slide1.png";
import image3 from "../../../assets/img/slide2.png";
import image4 from "../../../assets/img/slide3.png";
import image5 from "../../../assets/img/slide4.png";
import image6 from "../../../assets/img/slide5.png";
</script>
  
<style scoped>
.gallery-wrap {
  display: block;
  width: 370px;
  height: 220px;
  margin: 0 auto 40px;
}

.gallery-item {
  display: inline-block;
  width: 100%;
  height: 100%;
}
</style>