<template>
  <div class="marquee-wrap">
    <div
      class="marquee"
      :class="{ 'marquee--paused': isPaused }"
    >
      <div
        v-for="i in repetitions"
        :key="i"
        class="marquee-text"
        :class="{ 'marquee-text--reversed': isReversed }"
      >
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    duration: string;
    repetitions: number;
    isPaused: boolean;
    isReversed: boolean;
}>(), {
    duration: '15s',
    repetitions: 2,
    isPaused: false,
    isReversed: false
});
</script>

<style scoped>
.marquee-wrap {
    overflow: hidden;
}

.marquee {
    width: 10000vw;
}

.marquee-text {
    animation-name: marquee-scroll-animation;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-duration: v-bind(duration);
    float: left;
}

.marquee--paused .marquee-text {
    animation-play-state: paused;
}

.marquee-text--reversed {
    animation-direction: reverse;
}

@keyframes marquee-scroll-animation {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>
