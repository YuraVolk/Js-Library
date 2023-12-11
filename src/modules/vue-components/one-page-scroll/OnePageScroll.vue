<template>
    <article>
        <div class="wrap" :class="{ 'wrap--horizontal': isHorizontal }" @wheel="onWheel">
            <slot></slot>
        </div>
    </article>
</template>

<script setup lang="ts">
import { OnePageScrollConfiguration } from 'src/modules/interfaces/component/one-page-scroll/types';
import { useInjectedLinkedItems } from 'src/modules/interfaces/generic/hooks/useLinkedItem.vue';
import { computed, ref } from 'vue';

const props = withDefaults(defineProps<Partial<OnePageScrollConfiguration>>(), {
    isHorizontal: false,
	noScrollbar: true
});
const elements = useInjectedLinkedItems();
const elementsLength = computed(() => Object.keys(elements).length);
const selectedItem = ref(0);

const onWheel = (event: WheelEvent) => {
	
};
</script>

<style scoped>
.wrap {
	width: 100%;
	height: 100%;
	min-height: 100%;
	max-height: 100%;
	overflow-x: hidden;
	overflow-y: scroll;
}

.wrap--horizontal {
	display: flex;
	overflow-x: scroll;
	overflow-y: hidden;
}
</style>
