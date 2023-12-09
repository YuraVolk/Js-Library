<template>
	<header-component />
	<sidebar-component active-link="Magnifier" />
	<main class="main">
		<h1 class="heading">Magnifier</h1>
		<p>
			The image magnifier component is a component that allows users to create an image magnifier effect on their web pages. The main
			configuration is supplied automatically if you're using the correct configuration settings. This component is customizable to the
			point you can control the magnifier glass programmatically without any issues and give any custom styles without any issues, with all
			styling being available through CSS. In order to understand how to customize the component, you need to define two templates for two
			slots: #image slot that contains an image or any content you'd like to zoom, and #glass slot that contains imported image magnifier
			glass component. Then, in order to ensure correct behavior you need to listen emitted event glass-move and make a call to image
			magnifier's component onMouseMove, you would need to persist the reference to magnifier through a Vue ref. After this is set up, you'd
			need to setup the props for the image magnifier component:
		</p>
		<ul>
			<li>zoomScale: A number that defines the scale of the magnified image. The default value is 2.</li>
			<li>
				imageSource: A string that defines the image URL for the magnifier, a required value for the setup to work correctly. You may give
				this a different value from original image, i.e. image increased in quality.
			</li>
		</ul>
    <p>Here is an example of correctly set up component:</p>
		<image-magnifier-component class="magnifier" ref="magnifier" :image-source="image1">
			<template #image>
				<img :src="image1" alt="Example Image" />
			</template>
			<template #glass>
				<image-magnifier-glass-component class="magnifier-glass" @glass-move="(e) => magnifier?.onMouseMove(e)">
				</image-magnifier-glass-component>
			</template>
		</image-magnifier-component>
    <p>
      After this default configuration, you're able to fully customize the magnifier glass mouse coordinates, shifts, and 
      you are able to give any CSS styles to the components. You should use fallthrough attributes on the image magnifier
      and image magnifier glass components to achieve full styling control.
    </p>
    <p>
      Next, you may see a very similar implementation that is called Zooming Image, with a lot of aspects being shared
      with this implementation. However, there are important algorithmic differences between the two: this implementation
      is overall less robust and works better when magnifying glass does not appear when not hovered. The other implementation
      provides a fallback effect that shows an empty background when near to edge or moving from edge, while this implementation
      may not give such accurate results for edges. This implementation on the other hand is much better for non-rectangular glass
      shapes, and is overall a perfect implementation for statically visible non-rectangular glass.
    </p>
	</main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ImageMagnifierComponent from "../../../modules/vue-components/magnifier/Magnifier.vue";
import ImageMagnifierGlassComponent from "../../../modules/vue-components/magnifier/MagnifierGlass.vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";

import image1 from "../../../assets/img/slide0.png";

const magnifier = ref<InstanceType<typeof ImageMagnifierComponent> | null>(null);
</script>

<style scoped>
.magnifier {
	border: 3px solid #333333;
	width: 370px;
	height: 220px;
}

.magnifier-glass {
	top: -25px;
	left: -25px;
	width: 70px;
	height: 70px;
	border: 2px solid #222;
	cursor: zoom-in;
}
</style>
