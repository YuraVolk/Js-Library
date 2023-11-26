<template>
    <header-component />
    <sidebar-component active-link="Backface Carousel" />
    <main class="main">
        <h1 class="heading">Backface Carousel</h1>
        <p>
            The backface carousel component represents a 3D-style carousel that appears as a 3D shape with its contents
            being equal-size items.
            Any item can be of any content within the carousel, ranging from simple images to complex HTML structures. The
            items are inserted
            directly into the carousel as children nodes without any configuration. The carousel exposes methods to be
            easily controllable, and
            supports both vertical and horizontal placement. The insertion of children is done through the wrapping all
            images in an automatically
            configured carousel-item-component. You're required to use these two components in a combination:
            backface-carousel-component as the
            wrapper and carousel-item-component as child items.
        </p>
        <backface-carousel-component>
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
        </backface-carousel-component>
        <p>
            It is also possible to set vertical placement to be the default placement:
        </p>
        <backface-carousel-component is-vertical>
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
        </backface-carousel-component>
    </main>
</template>

<script setup lang="ts">
import BackfaceCarouselComponent from "../../../modules/vue-components/backface-carousel/BackfaceCarousel.vue";
import CarouselItemComponent from "../../../modules/interfaces/generic/carousel/CarouselItem.vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";

import image1 from "../../../assets/img/slide0.png";
import image2 from "../../../assets/img/slide1.png";
import image3 from "../../../assets/img/slide2.png";
import image4 from "../../../assets/img/slide3.png";
import image5 from "../../../assets/img/slide4.png";
import image6 from "../../../assets/img/slide5.png";

defineExpose({ image1, image2, image3, image4, image5, image6 });
</script>
