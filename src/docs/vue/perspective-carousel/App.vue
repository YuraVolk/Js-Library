<template>
	<header-component />
	<sidebar-component active-link="Perspective Carousel" />
	<main class="main">
		<h1 class="heading">Perspective Carousel</h1>
		<perspective-carousel-component>
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
        </perspective-carousel-component>
	</main>
</template>

<script setup lang="ts">
import PerspectiveCarouselComponent from "../../../modules/vue-components/perspective-carousel/PerspectiveCarousel.vue";
import CarouselItemComponent from "../../../modules/interfaces/generic/carousel/CarouselItem.vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";

import image1 from "../../../assets/img/slide0.png";
import image2 from "../../../assets/img/slide1.png";
import image3 from "../../../assets/img/slide2.png";
import image4 from "../../../assets/img/slide3.png";
import image5 from "../../../assets/img/slide4.png";
import image6 from "../../../assets/img/slide5.png";
</script>

<style scoped>
.carousel-item {
	width: 370px;
	height: 220px;
    transition: 0.3s linear left, 0.3s linear width, 0.3s linear height, 0.3s linear top, 0.3s linear opacity;
}

img {
    width: 100%;
    height: 100%;
}
</style>
