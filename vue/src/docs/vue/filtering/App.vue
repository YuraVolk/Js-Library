<template>
  <header-component />
  <sidebar-component active-link="Filtering" />
  <main class="main">
    <h1 class="heading">
      Filtering
    </h1>
    <p>
      Animated filtering component is a component that allows you to automatically obtain a list of filtered items for
      simpler cases, allows you to change the active filter through button or change items through the items prop for
      the more complicated cases. The key feature is that it also wraps a Transition Group with bound attributes,
      allowing you to customize the transition group, the item appearance and seamlessly create semantically correct lists
      due to multiple root slots. This allows you to easily create stunning animations with use of Transition Group and minimal effort.
    </p>
    <div class="items-list">
      <FilteringWrapperComponent
        name="item"
        tag="ul"
        class="items-list-inner"
        :items="items"
      >
        <template #filters>
          <div class="buttons">
            <FilteringButtonComponent
              :filter="undefined"
              class="button"
            >
              All
            </FilteringButtonComponent>
            <FilteringButtonComponent
              v-for="filter in filters"
              :key="filter"
              :filter="filter"
              class="button"
            >
              {{ filter }}
            </FilteringButtonComponent>
          </div>
        </template>
        <template #default="{ activeFilter, filteredItems }">
          <li
            v-for="item, i in filteredItems"
            :key="item.value + String(i) + activeFilter"
            class="item"
            :filter="item.value"
          >
            <div
              class="item-inner"
              v-text="item.value"
            />
          </li>
        </template>
      </FilteringWrapperComponent>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { shuffle } from "shared/utils/array";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
import FilteringButtonComponent from "../../../components/filtering/FilteringButton.vue";
import FilteringWrapperComponent from "../../../components/filtering/FilteringWrapper.vue";

const filters = ['First Category', 'Second Category', 'Third Category', 'Fourth Category'];
const items = shuffle(Array.from({ length: 16 }, (_, i) => ({
  value: `Item ${String(i + 1)}`,
  filter: filters[i % filters.length]
})));
</script>

<style scoped>
.items-list> :deep(.items-list-inner) {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  list-style-type: none;
  margin: 0;
  padding: 0;
  transition: all 0.24s ease-in;
  min-width: 100%;
}

.item {
  width: 320px;
  height: 240px;
  margin: 0.8rem;
  box-shadow: 0px 2px 6px #555555;
  border-radius: 2px;
  background-color: #222;
  transition: all 0.35s ease-in-out;
}

.item-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 1;
  color: #e2e2e2;
  transition: all 0.25s ease-out;
}

.item-enter-from {
  position: absolute;
}

.item-enter-active {
  position: absolute;
  margin: 0;
  opacity: 0;
  transform: scale(0.5) translateY(-80px);
}

.item-enter-to {
  position: relative;
  margin: 0.8rem;
  opacity: 1;
  transform: scale(1) translateY(0);
}

.item-leave-from {
  transform: scale(1) translateY(0);
}

.item-leave-active {
  position: absolute;
  margin: 0;
  opacity: 0;
  transform: scale(0.5) translateY(-80px);
}

.buttons {
  width: fit-content;
  margin: 0 auto 24px;
}

.button {
  appearance: button;
  backface-visibility: hidden;
  background-color: #405cf5;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .1) 0 2px 5px 0, rgba(0, 0, 0, .07) 0 1px 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-family: -apple-system, system-ui, "Segoe UI", Roboto, "Helvetica Neue", Ubuntu, sans-serif;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 25px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s, box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 175px;
  margin-right: 10px;
}

.button:focus {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}
</style>