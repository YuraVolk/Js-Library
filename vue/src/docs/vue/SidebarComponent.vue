<template>
    <aside class="navigation">
        <nav class="wrap">
            <div class="list" v-for="linkList in Object.entries(links)">
                <details class="list-item" open>
                    <summary class="list__heading">
                        <span>{{ linkList[0] }}</span>
                        <svg aria-hidden="true" fill="none" focusable="false" height="1em" role="presentation"
                            viewBox="0 0 24 24" width="1em">
                            <path d="M15.5 19l-7-7 7-7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="1.5"></path>
                        </svg>
                    </summary>
                    <div class="list-sublist-wrap">
                        <ul class="list-sublist">
                            <li v-for="link in linkList[1]"
                                :class="`list-sublist__item ${link.name === $props.activeLink ? 'list-sublist__item--active' : ''}`">
                                <a
                                    class="list-sublist__item-link"
                                    :href="isLocalhost ? link.link.replace(/\.\.\//g, './') : link.link"
                                    v-text="link.name"
                                ></a>
                            </li>
                        </ul>
                    </div>
                </details>
            </div>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { isLocalhostEnvironment, SidebarConfiguration } from "shared/component/sidebar";
import importedLinks from "../data/sidebar.json";

interface Links {
    [key: string]: {
        name: string;
        link: string;
    }[];
}

const isLocalhost = isLocalhostEnvironment();
const links: Links = importedLinks;
defineProps<SidebarConfiguration>();
</script>

<style scoped>
.navigation {
    position: relative;
    z-index: 2;
    width: 230px;
    height: calc(100vh - 50px);
    background: rgba(0, 0, 0, 0.25);
}

@media (max-width: 800px) {
    .navigation {
        width: 100%;
        height: 25vh;
    }
}

.wrap {
    mask-image: linear-gradient(to top,
            transparent 0%,
            rgb(0, 0, 0) 10%,
            rgb(0, 0, 0) 100%,
            transparent 100%);
    -webkit-mask-image: linear-gradient(to top,
            transparent 0%,
            rgb(0, 0, 0) 10%,
            rgb(0, 0, 0) 100%,
            transparent 100%);
    overflow-y: scroll;
    height: 100%;
    scrollbar-width: none;
    display: flex;
    flex-direction: column;
    gap: 2vh;
    font-family: Helvetica, Segoe UI, Arial, system-ui;
}

@media (max-width: 800px) {
    .wrap {
        flex-direction: row;
    }
}

* {
    transition: all 0.1s ease-in;
}

*:hover {
    color: #57c9e5;
}

details:not([open]) svg {
    transform: rotate(-90deg);
}

.wrap::-webkit-scrollbar {
    display: none;
}

.list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin: 0;
    padding: 2rem 0 1.5rem 2rem;
    list-style-type: none;
}

.list-item {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    cursor: pointer;
}

.list__heading {
    display: flex;
    font-size: 16px;
    color: rgb(236, 237, 238);
    gap: 0.5rem;
    align-items: center;
    text-transform: uppercase;
}

.list-sublist {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
    margin: 0;
    padding: 0;
    list-style-type: none;
}

.list-sublist__item {
    margin-left: 2.25rem;
}

.list-sublist__item-link {
    position: relative;
    color: rgba(236, 237, 238);
    text-decoration: none;
    font-size: 16px;
    opacity: 0.6;
}

.list-sublist__item--active {
    width: 100%;
    margin-left: 0;
    padding-left: 2.25rem;
    border-left: rgb(255, 112, 127) 2px solid;
    padding: 0.25rem 0.25rem 0.25rem 0.5rem;
    background-color: #ff2a5130;
}

.list-sublist__item--active .list-sublist__item-link::before {
    content: none;
}

.list-sublist__item-link::before {
    position: absolute;
    left: -1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 4px;
    background-color: #eee;
    opacity: 0.75;
    border-radius: 50%;
    content: "";
}

.list-sublist__item-link:hover {
    opacity: 0.75;
}
</style>