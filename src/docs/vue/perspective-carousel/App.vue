<template>
	<header-component />
	<sidebar-component active-link="Perspective Carousel" />
	<main class="main">
		<h1 class="heading">Perspective Carousel</h1>
	</main>
</template>

<script setup lang="ts">
import PerspectiveCarouselComponent from "../../../modules/vue-components/perspective-carousel/PerspectiveCarousel.vue";
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
    transition: 0.3s linear left, 0.3s linear width, 0.3s linear height, 0.3s linear top, 0.3s linear opacity;
}
</style>
