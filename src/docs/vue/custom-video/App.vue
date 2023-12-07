<template>
    <header-component />
    <sidebar-component active-link="Custom Video" />
    <main class="main">
        <h1 class="heading">Custom Video</h1>
        <p>
            Making your own custom video component is an important and required foundation if you
            want to extend default browser's video settings with your own settings and give the design
            you like. This approach requires a custom Vue-implemented behavior, and as such this component
            provides the basics to work with, as it automatically configures the vital video settings,
            like pausing and playing, muting, changing volume, resetting video, changing current video time,
            and overall smooth animations.
        </p>
        <p>
            This component is configurable through inheriting from it and adding functionality atop,
            here is a default configuration example, with only width and height set:
        </p>
        <div class="video-wrap">
            <custom-video-component>
                <source :src="videoLink" type="video/mp4">
            </custom-video-component>
        </div>
        <p>
            The Vue version of this component is working with emitted events of range input components,
            and is using an approach to bind time update event handler and work with the video. Here, the Vue
            props are all almost fully delegated to the inner video component, so you can specify all video
            element props on the component itself. AS the slot content, you only need to pass the sources
            for thee video for it to work. Through this scheme, the video is configured to be highly customizable
            and easy to style.
        </p>
    </main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import CustomVideoComponent from "../../../modules/vue-components/custom-video/CustomVideo.vue";
import videoLink from "../../../assets/video/sample-mp4-file-small.mp4";

defineExpose({ videoLink });
</script>

<style scoped>
.video-wrap {
    display: block;
    width: 320px;
    height: 240px;
}
</style>