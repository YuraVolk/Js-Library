<template>
	<header-component />
	<sidebar-component active-link="Toast" />
	<main class="main">
		<h1 class="heading">Toast</h1>
		<p>
            The toast component which represents a panel that smoothly transitions in and then smoothly transitions out
            is commonly used and has many applications: notifications, cookie requests, and et cetera. This is a very
            simplistic,
            basic component that closes the toast whenever any button is pressed in it if closeOnButtonClick attribute
            is passed,
            and just gives the necessary attributes to quickly setup a smooth animation. The basic configuration is to
            insert all
            required content inside the component. This component accepts the following props:
        </p>
		<ul>
            <li>isOpen, specifies whether the toast is open.</li>
            <li>autoCloseDelay, a feature by default disabled that automatically closes the toast after the milliseconds
                passed to this attribute.</li>
			<li>transitionName, that specifies the name of Vue transition to use in CSS transitions.</li>
        </ul>
		<p>In the bottom of a page you can see a toast with external CSS styling:</p>
		<toast-component :is-open="isOpen" transition-name="toast" ref="toast">
			<div class="toast">
                <div class="toast-content">
                    <span>Some Toast Content Here</span>
                    <div class="toast-buttons">
                        <button class="toast-button" @click="closeToast">OK</button>
                        <button class="toast-button" @click="closeToast">Cancel</button>
                    </div>
                </div>
            </div>
		</toast-component>
	</main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import ToastComponent from "../../../modules/vue-components/toast/Toast.vue";
import { ref } from "vue";

const isOpen = ref(true);
const closeToast = () => {
	isOpen.value = false;
};
</script>

<style scoped>
.toast {
	position: fixed;
	bottom: -200px;
	left: 50%;
	width: 50%;
	transform: translateX(-50%);
	min-width: 300px;
	background-color: #8a2be2;
	opacity: 0.95;
	padding: 8px;
	border-radius: 25px;
	height: 200px;
	color: #e6e6e6;
	z-index: 9999;
	font-family: 'Lucida Console', Geneva, Verdana, 'sans-serif';
	box-sizing: border-box;
	padding-top: 16px;
	animation: slide-up 0.8s ease-out forwards;
	transition: all 0.8s ease-in;
}

.toast-content {
	display: flex;
	justify-content: space-between;
}

.toast-buttons {
	display: flex;
	justify-content: space-around;
	width: 200px;
}

.toast-button {
	display: inline-block;
	margin: 0;
	white-space: nowrap;
	text-align: center;
	color: #222;
	background-color: #ccc;
	border-radius: 5px;
	border: none;
	cursor: pointer;
	padding: 7px;
	box-sizing: border-box;
}

.toast.toast-leave-active {
	transform: translate(-50%, 50%);
}

@keyframes slide-up {
	from {
		bottom: -200px;
	}

	to {
		bottom: -150px;
	}
}
</style>
