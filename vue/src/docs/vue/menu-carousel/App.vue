<template>
	<header-component />
	<sidebar-component active-link="Menu Carousel" />
	<main class="main">
		<h1 class="heading">Menu Carousel</h1>
        <p>
            The menu carousel component represents a 3D carousel in which items are rotated around a circular area
            that can be defined and whose X/Y dimensions can be changed by user. The carousel accepts a variety of
            configuration options:
        </p>
        <ul>
            <li>xPos, automatically re-calculated on resize by default.</li>
            <li>yPos, defines Y size of carousel.</li>
            <li>xRadius, defines inner circle X radius.</li>
            <li>yRadius, defines inner circle Y radius.</li>
            <li>farScale, defines the scale between elements, allowing farther elements to appear smaller.</li>
            <li>speed, defines the animation speed.</li>
        </ul>
        <p>
            The carousel accepts special carousel item components to keep track of all the elements, and automatically
            detect width and height. Here's an example of the carousel with all default settings except far scale being
            set to 0.8:
        </p>
		<menu-carousel-component class="carousel" :far-scale="0.8">
			<carousel-item-component class="carousel-item">
                <img :src="image1" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image2" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image3" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image4" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image5" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image6" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image1" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image2" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image3" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image4" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image5" alt="Example Image">
            </carousel-item-component>
            <carousel-item-component class="carousel-item">
                <img :src="image6" alt="Example Image">
            </carousel-item-component>
		</menu-carousel-component>
	</main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

import MenuCarouselComponent from "../../../components/menu-carousel/MenuCarousel.vue";
import CarouselItemComponent from "../../../interfaces/generic/carousel/CarouselItem.vue";
const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));

import image1 from "../../../assets/img/slide0.png";
import image2 from "../../../assets/img/slide1.png";
import image3 from "../../../assets/img/slide2.png";
import image4 from "../../../assets/img/slide3.png";
import image5 from "../../../assets/img/slide4.png";
import image6 from "../../../assets/img/slide5.png";
</script>

<style scoped>
.carousel {
  width: 100%;
  height: 60vh;
}

.carousel-item {
  width: 18vw;
}

img {
    width: 100%;
    height: 100%;
}
</style>
