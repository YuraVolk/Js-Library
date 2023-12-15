<template>
	<header-component />
	<sidebar-component active-link="Perspective Carousel" />
	<main class="main">
		<h1 class="heading">Perspective Carousel</h1>
        <p>
            This component creates a representation of a carousel with lined up images, showing multiple images at the
            same time if configured.
            This carousel creates a visually compelling effect, with central image being fully visible and flanking
            images surrounding the
            central images, shifting and flowing as needed when restructuring or rotating the carousel. This component
            has numerous
        </p>
        <ul>
            <li>
                imageSize, a string that sets the height for the carousel images container, effectively sets carousel
                horizontal orientation
                width. Defaults to "300px".
            </li>
            <li>
                margin, a string that sets the margin applied to the carousel images container, needed to correctly
                handle the switch between
                orientations if set. Defaults to "250px auto".
            </li>
            <li>startingItem, a number that sets the default item, starts with index 1, defaults to 1.</li>
            <li>separation, a number that defines the separation constant between images. Defaults to 175.</li>
            <li>separationMultiplier, a number that defines the multiplier for separation via images from center.
                Defaults to 0.6.</li>
            <li>horizonOffset, a number that sets the offset to the carousel horizon. Defaults to 0.</li>
            <li>horizonOffsetMultiplier, a number that sets the multiplier on flanking items for the horizon constant.
                Defaults to 1.</li>
            <li>sizeMultiplier, a number that sets the scaling for the more distant images. Defaults to 0.7.</li>
            <li>opacityMultiplier, a number that sets the opacity multiplier for the more distant images. Defaults to
                0.87.</li>
            <li>horizon, a number that sets the horizon constant (main axis), defaults to 0.</li>
            <li>flankingItems, a number that sets how many items are visible to left or right from the central item.
                Defaults to 3.</li>
            <li>isVertical, a boolean value that allows to set carousel orientation to vertical. Defaults to false.</li>
            <li>
                forcedImageWidth and forcedImageHeight, are used to enforce image width and height, by default are
                disabled through being set to
                0. Requires both properties to be set to work.
            </li>
            <li>
                animationLength, specifies the transition between items length in milliseconds. The smooth transition is
                set through CSS property
                on images. Defaults to 300.
            </li>
            <li>centralItemClassName, gives a class name to the central item. Defaults to "active".</li>
            <li>allowSwitchingOrientation, a boolean value that allows to switch orientation of carousel through button.
                Defaults to false.</li>
        </ul>
        <p>Here is a carousel only with allow switching orientation option:</p>
		<perspective-carousel-component allow-switching-orientation>
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
