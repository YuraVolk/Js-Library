<template>
  <header-component />
  <sidebar-component active-link="Floating Panel" />
  <main class="main">
    <h1 class="heading">Floating Panel</h1>
    <p>
      The floating panel component is a versatile and customizable UI element that can be easily integrated into web
      applications. It
      provides a convenient way to display content in a floating manner, allowing users to interact with it while
      maintaining its position
      on the screen. The component can be configured through CSS and offers various options to suit different design
      requirements.
    </p>
    <ul>
      <li>
        isOpen: This boolean attribute determines whether the panel is open or closed. When set to true, the panel is
        visible and accessible
        to the user. Conversely, when set to false, the panel is hidden from view.
      </li>
      <li>
        CSS Styling: The component can be styled using CSS to match the desired design aesthetic. This includes options to
        define the
        panel's dimensions, background color, border, and other visual properties. Without the correct styles, like width,
        height and
        position properties, the panel may not work correctly at all, so only the Vue logic is delegated.
      </li>
      <li>
        Positioning: The floating panel component best supports two main CSS position options: fixed and sticky. When the
        fixed position is
        used, the panel remains fixed relative to the viewport, regardless of scrolling. This is useful when the panel
        needs to stay in a
        specific position on the screen, such as a sidebar or a toolbar. On the other hand, the sticky position allows the
        panel to stick to
        a specific position within its parent container as the user scrolls. This is particularly useful when the panel
        needs to stay within
        a certain section of the page, such as a header or a footer.
      </li>
    </ul>
    <floating-panel-component is-open class="floating-panel floating-panel--fixed">
      <h1 class="floating-panel__caption">Fixed Floating Panel</h1>
      <p>
        This panel keeps its alignment through position: fixed. Through this alignment it is possible to keep it atop of
        all other
        components through minimal CSS configuration.
      </p>
      <strong>DRAG ME</strong>
    </floating-panel-component>
    <p>Here is an example of a floating panel with position set to sticky. As you can see it is confined to container.</p>
    <div class="wrap">
      <floating-panel-component is-open class="floating-panel floating-panel--sticky">
        <h1 class="floating-panel__caption">Sticky Floating Panel</h1>
        <p>
          This panel keeps its alignment through position: sticky. This way it stays within the bounds of the container,
          unable to ever
          leave it in a performant way.
        </p>
        <strong>DRAG ME</strong>
      </floating-panel-component>
    </div>
    <p>
      You should use fallthrough attributes, i.e. specifying class directly on the component for the component
      configuration to work as expected.
    </p>
  </main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import FloatingPanelComponent from "../../../modules/vue-components/floating-panel/FloatingPanel.vue";
</script>

<style scoped>
.floating-panel {
  width: 200px;
  height: 210px;
  z-index: 5;
  background-color: #2390bb;
  color: #ffffff;
  font-size: 12px;
  line-height: 22px;
  border: 5px solid #676767;
  text-align: center;
  cursor: grab;
}

.floating-panel__caption {
  font-weight: bold;
  padding: 10px;
  background-color: #00435a;
  font-size: 17px;
}

.floating-panel--sticky {
  position: sticky;
}

.floating-panel--fixed {
  position: sticky;
  position: fixed;
  top: calc(40vh - 210px);
  left: calc(98vw - 200px);
}

.wrap {
  background: rgba(73, 37, 37, 0.7);
  border-radius: 10px;
  height: 300px;
}

.main>p,
li {
  max-width: 85%;
}</style>
