<template>
  <header-component />
  <sidebar-component active-link="Backface Carousel" />
  <main class="main">
      <h1 class="heading">Backface Carousel</h1>
      <image-magnifier-component>
        <template #image>
          
        </template>
        <template #glass>
          
        </template>
      </image-magnifier-component>
  </main>
</template>

<script setup lang="ts">
import ImageMagnifierComponent from "../../../modules/vue-components/magnifier/Magnifier.vue";
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";

import image1 from "../../../assets/img/slide0.png";

defineExpose({ image1 });
</script>

<style scoped>
.magnifier {
  position: relative;
  display: block;
  border: 3px solid #333333;
  width: 370px;
  height: 220px;
}

.magnifier__glass {
  position: absolute;
  top: -25px;
  left: -25px;
  width: 70px;
  height: 70px;
  border: 2px solid #222;
  border-radius: 50%;
  cursor: zoom-in;
  background-repeat: no-repeat;
}

</style>