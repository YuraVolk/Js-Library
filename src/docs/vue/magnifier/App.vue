<template>
  <header-component />
  <sidebar-component active-link="Backface Carousel" />
  <main class="main">
    <h1 class="heading">Backface Carousel</h1>
    <image-magnifier-component class="magnifier" ref="magnifier">
      <template #image>
        <img :src="image1" alt="Example Image" />
      </template>
      <template #glass>
        <image-magnifier-glass-component class="magnifier-glass" @glass-move="(e) => magnifier?.onMouseMove(e)">
        </image-magnifier-glass-component>
      </template>
    </image-magnifier-component>
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
