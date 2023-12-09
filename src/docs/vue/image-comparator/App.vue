<template>
    <header-component />
    <sidebar-component active-link="Image Comparator" />
    <main class="main">
        <h1 class="heading">Image Comparator</h1>
        <image-comparator-component class="comparator">
            <carousel-item-component class="comparator-element">
                <img :src="image1" alt="Example Image" class="comparator-element__image">
            </carousel-item-component>
            <carousel-item-component class="comparator-element">
                <img :src="image2" alt="Example Image" class="comparator-element__image">
            </carousel-item-component>
            <carousel-item-component class="comparator-element">
                <img :src="image3" alt="Example Image" class="comparator-element__image">
            </carousel-item-component>
            <carousel-item-component class="comparator-element">
                <img :src="image4" alt="Example Image" class="comparator-element__image">
            </carousel-item-component>
        </image-comparator-component>
    </main>
</template>
  
<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import ImageComparatorComponent from "../../../modules/vue-components/image-comparator/ImageComparator.vue";
import CarouselItemComponent from "../../../modules/interfaces/generic/carousel/CarouselItem.vue";

import image1 from "../../../assets/img/slide0.png";
import image2 from "../../../assets/img/slide1.png";
import image3 from "../../../assets/img/slide2.png";
import image4 from "../../../assets/img/slide3.png";

defineExpose({ image1, image2, image3, image4 });
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

.comparator-element {
  position: absolute;
  width: auto;
  height: auto;
  overflow: hidden;
}

.comparator-element__image {
  display: block;
  width: 350px;
  height: 200px;
  box-sizing: border-box;
}
</style>