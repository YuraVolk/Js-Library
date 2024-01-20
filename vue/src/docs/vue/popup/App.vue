<template>
    <header-component />
    <sidebar-component active-link="Popup" />
    <main class="main">
        <h1 class="heading">Popup</h1>
        <p>
            A popup component is a user interface element that appears on top of the main content to display additional
            information or
            functionality. Interface blocking popups are a very common feature in user interfaces that prevent the
            appearance of pop-up windows or
            dialogs. These popups are typically used to display additional information, request user input, or show
            notifications. This popup
            component accepts two slotted children at user's configuration: slot with name popup, containing the by default
            hidden popup window,
            and slot with name popup-open-button, which acts as a button to open the popup. This popup accepts the following
            props:
        </p>
        <ul>
            <li>open, A boolean property that determines whether the popup is open or closed. Defaults to false.</li>
            <li>displayOpenButton, A boolean property that determines whether to display the open button for the popup.
                Defaults to false.</li>
            <li>
                autoClosingTime, an optional number property that specifies the time in milliseconds after which the popup
                should automatically
                close.
            </li>
        </ul>
        <p>Here is a simple popup with an open button:</p>
        <popup-component display-open-button ref="popup">
            <template #popup-open-button>
                <button class="popup-open-button">Open Popup</button>
            </template>
            <template #popup>
                <div class="popup-wrap">
                    <div class="popup">
                        <img class="popup__close-button" :src="closeImage" alt="Close Button" @click="closePopup" />
                        <p>Sample popup. This is a template for making different popups.</p>
                    </div>
                </div>
            </template>
        </popup-component>
        <p>
            In order to work correctly in all environments, this popup component uses a teleport to the body element to make
            sure the popup would
            be working correctly.
        </p>
    </main>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent } from "vue";
import closeImage from "../../../../../assets/img/close.png";

const PopupComponent = defineAsyncComponent(() => import("../../../components/popup/Popup.vue"));
const HeaderComponent = defineAsyncComponent(() => import("../HeaderComponent.vue"));
const SidebarComponent = defineAsyncComponent(() => import("../SidebarComponent.vue"));

const popup = ref<InstanceType<typeof PopupComponent> | null>(null);
const closePopup = () => {
    popup.value?.close();
};
</script>

<style scoped>
.popup-wrap {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: rgba(0, 0, 0, 0.4);
}

.popup {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 300px;
    box-sizing: border-box;
    padding-top: 12.5px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: center;
    color: #bfbfbf;
    background-color: #676767;
    border: 3px solid #000000;
}

.popup__close-button {
    position: absolute;
    width: 20px;
    height: 20px;
    right: 10px;
    top: 10px;
    cursor: pointer;
}

.popup-open-button {
    background-color: #5b1f1f;
    padding: 12px;
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    color: #e2e2e2;
    font-size: 17px;
    cursor: pointer;
}
</style>
