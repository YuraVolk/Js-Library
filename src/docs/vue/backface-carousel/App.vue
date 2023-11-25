<template>
	<header-component />
	<sidebar-component active-link="Backface Carousel" />
	<main class="main">
		<h1 class="heading">Backface Carousel</h1>
		<p>
			The backface carousel component represents a 3D-style carousel that appears as a 3D shape with its contents being equal-size items.
			Any item can be of any content within the carousel, ranging from simple images to complex HTML structures. The items are inserted
			directly into the carousel as children nodes without any configuration. The carousel exposes methods to be easily controllable, and
			supports both vertical and horizontal placement. The insertion of children is done through the wrapping all images in an automatically
			configured carousel-item-component. You're required to use these two components in a combination: backface-carousel-component as the
			wrapper and carousel-item-component as child items.
		</p>
		<backface-carousel-component>
			<carousel-item-component>
				<img src="/img/slide0.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide1.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide2.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide3.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide4.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide5.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide0.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide1.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide2.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide3.png" alt="Example Image" />
			</carousel-item-component>
		</backface-carousel-component>
		<p>It is possible to set vertical placement to be the default placement:</p>
		<backface-carousel-component is-vertical>
			<carousel-item-component>
				<img src="/img/slide0.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide1.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide2.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide3.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide4.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide5.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide0.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide1.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide2.png" alt="Example Image" />
			</carousel-item-component>
			<carousel-item-component>
				<img src="/img/slide3.png" alt="Example Image" />
			</carousel-item-component>
		</backface-carousel-component>
	</main>
</template>

<script setup lang="ts">
import BackfaceCarouselComponent from "../../../modules/vue-components/backface-carousel/BackfaceCarousel.vue";
import CarouselItemComponent from "../../../modules/interfaces/generic/carousel/CarouselItem.vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";

import "../../../assets/img/slide0.png";
import "../../../assets/img/slide1.png";
import "../../../assets/img/slide2.png";
import "../../../assets/img/slide3.png";
import "../../../assets/img/slide4.png";
import "../../../assets/img/slide5.png";
</script>

<style>
.autocomplete-input {
	width: 100%;
	height: 40px;
	background-color: #ffffff;
	border: 2px solid #333333;
	color: #222;
	padding: 7px;
	box-sizing: border-box;
}

.autocomplete-label {
	position: relative;
	display: block;
	width: 260px;
	height: 40px;
}
</style>
