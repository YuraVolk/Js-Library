<template>
  <header-component />
  <sidebar-component active-link="Sticky Header" />
  <main class="main">
    <h1 class="heading">
      Sticky Header
    </h1>
    <p>
      The sticky header component is a component that makes use of the IntersectionObserver API and wrapper custom component to keep track
      of when intersection changes and quickly keep track of which state the header should be in. The custom component represents the
      scrolling point, and its first nested element is the sticky header. As soon as header is not fully visible as specified by user, the
      sticky header is then automatically re-updated. Another feature of this component is the smooth animation from the non-sticky state to
      the fixed state. This component accepts the following props:
    </p>
    <ul>
      <li>rootMargin, a string that is passed to the IntersectionObserver as the root margin.</li>
      <li>
        ratio, a number in range of 0 to 1 that specifies which ratio of the component should be fully visible for state to change. The
        default value is 0.25.
      </li>
    </ul>
    <p>Here you can see an example of this component with default settings:</p>
    <sticky-header-component class="sticky-header-wrap">
      <sticky-header-element-component class="sticky-header">
        <p>Sticky Header</p>
      </sticky-header-element-component>
    </sticky-header-component>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, veritatis soluta eligendi inventore ratione autem praesentium
      asperiores accusamus recusandae, alias quos deserunt adipisci voluptate pariatur error fuga dicta esse facilis.
    </p>
  </main>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));
import StickyHeaderComponent from "../../../components/sticky-header/StickyHeader.vue";
import StickyHeaderElementComponent from "../../../components/sticky-header/StickyHeaderElement.vue";
</script>

<style scoped>
.sticky-header {
	position: relative;
	font-size: 24px;
	line-height: 54px;
	background-color: #e2e2e2;
	text-align: center;
	color: #333;
	margin: 0;
	z-index: 99;
	transition: all 0.3s ease-in-out;
}

.sticky-header p {
	margin: 0;
}

.sticky-header-wrap ~ p {
	margin: 46px;
}
</style>
