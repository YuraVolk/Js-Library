<template>
	<header-component />
	<sidebar-component active-link="Zooming Image" />
	<main class="main">
		<h1 class="heading">Zooming Image</h1>
		<p>
            The zooming image component is a component that allows users to create an image magnifier effect on their
            web pages. The main configuration is done automatically, and requires only two children to be passed:
            one for slot name "image", representing the image, and another one for slot name "glass", representing
            the zooming glass. This implementation is overall more robust and works best with using CSS transformations,
            and as such works better for rectangular shapes and worse for non-rectangular glasses, better for
            showing the zoom on hover on image via CSS, and much worse on without it. In general these are two important
            differences you should understand when thinking about zooming image vs magnifier components. This component
            accepts the following props:
        </p>
        <ul>
            <li>moveRatio: A number that defines the scaling factor of moving the glass, and which position to reference
                by shift, only affects background. Defaults to 0.15.</li>
            <li>backgroundShift: Shifts the background to the specified percentage number to top left, defaults to 9.</li>
            <li>positionShift: Shifts the x, y coordinates of the glass to top left, defaults to 34.</li>
        </ul>
        <p>Here is a basic usage of the component with CSS opacity animation:</p>
		<zooming-image-component class="zoom-wrap" ref="zoomingImage" :image-source="image1">
			<template #image>
				<img class="zoom-image" :src="image1" alt="Example Image" />
			</template>
			<template #glass>
				<zooming-image-glass-component class="zoom-glass" @glass-move="(e) => zoomingImage?.onMouseMove(e)">
				</zooming-image-glass-component>
			</template>
		</zooming-image-component>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import ZoomingImageComponent from "../../../modules/vue-components/zooming-image/ZoomingImage.vue";
import ZoomingImageGlassComponent from "../../../modules/vue-components/zooming-image/ZoomingImageGlass.vue";

import image1 from "../../../assets/img/slide0.png";
const zoomingImageUrl = `url("${image1}")`;

const zoomingImage = ref<InstanceType<typeof ZoomingImageComponent> | null>(null);
</script>

<style>
.zoom-wrap {
	display: block;
	width: 370px;
	height: 220px;
}

.zoom-image {
	width: 100%;
	box-sizing: border-box;
	border: 16px solid #333;
	height: auto;
}

.zoom-glass {
	width: 60px;
	height: 60px;
	pointer-events: none;
	z-index: 99;
	transform: scale(1.5);
	transition: opacity 0.2s;
	box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.3);
	background-image: v-bind('zoomingImageUrl');
	opacity: 0;
}

.zoom-image:hover + .zoom-glass {
	opacity: 1;
}
</style>
