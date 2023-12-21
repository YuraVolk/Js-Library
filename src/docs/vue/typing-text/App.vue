<template>
	<header-component />
	<sidebar-component active-link="Typing Text" />
	<main class="main">
		<h1 class="heading">Typing Text</h1>
		<p>
			The typing text, or typewriter text effect is an interesting effect to add to your website. This component represents a visually
			appealing self-typing text effect that firstly erases any existing text and then types the new text. Through configuration options you
			may tweak the default settings and even apply animation to the text. This component accepts the following props
		</p>
		<ul>
			<li>strings, specifies the phrase list, with semicolon separated sentences. Empty by default.</li>
			<li>repetitions, allows you to repeat and cycle through phrases by the number specified. Defaults to 1.</li>
			<li>interval, sets the initial delay and interval between the text animation.</li>
			<li>typingSpeed, sets the speed at which letters are typed in milliseconds, defaults to 35.</li>
			<li>unTypingSpeed, an optional number that sets the speed at which letters are deleted in milliseconds, defaults to 35.</li>
		</ul>
		<p>In the bottom of a page you can see a typing text with external CSS styling:</p>
		<typing-text-component
			class="typing-text"
			:repetitions="Infinity"
			:unTypingSpeed="15"
			:strings="[
				'Nulla facilisi. Cras venenatis nulla non erat luctus ultrices. In facilisis tincidunt tristique. Curabitur lobortis sapien a metus lobortis, et lobortis nunc suscipit. Fusce orci mauris, bibendum et vehicula ac, fringilla at elit.',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque nam! Perferendis non, deleniti tempore soluta magnam expedita nulla? Est repudiandae error rerum dolorum dolor ducimus ex tempore aut temporibus.'
			]"
		></typing-text-component>
		<p>And here is an animated version of this text:</p>
		<typing-text-component
			class="typing-text typing-text--animated"
			:repetitions="Infinity"
			:unTypingSpeed="15"
			:strings="[
				'',
				'Nulla facilisi. Cras venenatis nulla non erat luctus ultrices. In facilisis tincidunt tristique. Curabitur lobortis sapien a metus lobortis, et lobortis nunc suscipit. Fusce orci mauris, bibendum et vehicula ac, fringilla at elit.',
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, atque nam! Perferendis non, deleniti tempore soluta magnam expedita nulla? Est repudiandae error rerum dolorum dolor ducimus ex tempore aut temporibus.'
			]"
		></typing-text-component>
	</main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import TypingTextComponent from "../../../modules/vue-components/typing-text/TypingText.vue";
</script>

<style>
.typing-text {
	display: block;
	max-width: 50vw;
	white-space: unset;
	font-size: 24px;
	line-height: 54px;
	min-height: 5lh;
	color: #e2e2e2;
}

.typing-text--animated > span {
	animation: 0.5s color infinite;
}

@keyframes color {
	50% {
		color: #57bb9d;
	}
}
</style>
