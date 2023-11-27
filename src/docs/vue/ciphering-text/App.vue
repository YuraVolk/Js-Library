<template>
    <header-component />
    <sidebar-component active-link="Ciphering Text" />
    <main class="main">
        <h1 class="heading">Ciphering Text</h1>
        <p>
            The Ciphering Text Component is a custom component that allows you to display text in a ciphered manner. It
            takes an array of strings
            and displays them one by one, with each string being ciphered and revealed gradually. This component adds an
            interesting visual effect
            to your web application or website. The ciphering text component can be configured through a variety of
            configuration settings:
        </p>
        <ul>
            <li>strings: the main configuration prop that is passed as an array of strings.</li>
            <li>repetitions: the amount of repetitions the ciphering text component will get re-ciphered. Defaults to one
                repetition.</li>
            <li>interval: the delay between text animations, defaults to 3000 milliseconds.</li>
            <li>typingSpeed: the ciphering speed of an individual character. Defaults to 45 milliseconds.</li>
            <li>characters: an optional configuration prop that is passed as an array of strings. It contains all ciphering
                characters.</li>
        </ul>
        <p>
            An actively ciphering letter is given the active class. Here you can see a ciphering text with two phrases in
            action:
        </p>
        <ciphering-text-component :strings="['Lorem ipsum dolor', 'sit amet']"
            :repetitions="Infinity"></ciphering-text-component>
        <p>Here is another example of it animating Hello and World phrases:</p>
        <ciphering-text-component :strings="['Hello', 'World']" :repetitions="Infinity"
            :interval="2000"></ciphering-text-component>
        <p>Here is an example with custom characters:</p>
        <ciphering-text-component :strings="['Hello', 'World', 'New Text', 'Something else']" :repetitions="Infinity"
            :characters="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')"></ciphering-text-component>
        <p>
            In this example, the Ciphering Text Component is configured to use custom characters for ciphering the text. The
            characters are set to "ABCDEFGHIJKLMNOPQRSTUVWXYZ", which means the ciphered text will only contain uppercase
            letters.
        </p>
    </main>
</template>

<script setup lang="ts">
import HeaderComponent from "../HeaderComponent.vue";
import SidebarComponent from "../SidebarComponent.vue";
import CipheringTextComponent from "../../../modules/vue-components/ciphering-text/CipheringText.vue";
</script>

<style>
pre {
    font-size: 24px;
    line-height: 54px;
}

pre>span {
    transition: all 50ms ease-in-out;
}

pre>span.active {
    color: #e3caca;
}
</style>