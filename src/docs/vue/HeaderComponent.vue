<template>
    <header class="header">
        <nav class="navigation">
            <span class="navigation__name">JS Components Library</span>
            <ul class="navigation-links">
                <a href="#" class="navigation-link">Components</a>
                <a href="#" class="navigation-link">About</a>
                <a href="#" class="navigation-link">React Version</a>
                <a href="#" class="navigation-link">Lit Version</a>
            </ul>
            <a class="navigation-icon" href="#">
                <svg height="24" viewBox="0 0 24 24" width="24">
                    <path clip-rule="evenodd"
                        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                        fill="currentColor" fill-rule="evenodd"></path>
                </svg>
            </a>
        </nav>
    </header>
</template>

<style>
body {
    margin: 0;
    padding: 0;
}

#app {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  background: linear-gradient(161deg, rgb(6, 5, 5) 14%, rgb(23, 15, 41) 79%);
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 100vh;
  font-family: Helvetica, Segoe UI, Arial, sans-serif;
}

.header {
    position: relative;
    z-index: 2;
    min-width: 95vw;
    min-height: 50px;
    flex: 1 1 0;
    background-color: rgba(0, 0, 0, 0.25);
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 50px;
    box-sizing: border-box;
    color: #fff;
    font-family: Helvetica, Segoe UI, Arial, sans-serif;
    padding: 2rem 1rem 1rem;
}

.navigation__name {
    font-size: 24px;
    text-transform: uppercase;
}

.navigation-links {
    display: flex;
    gap: 0.8rem;
}

.navigation-link {
    font-size: 16px;
    color: #fff;
    text-decoration: none;
    transition: color 0.1s ease-in;
}

.navigation-link:hover {
    color: #57c9e5;
}

.main {
  position: relative;
  max-width: calc(100% - 230px - 6rem);
  height: calc(100vh - 50px - 6rem);
  margin: 1rem;
  padding: 2rem;
  flex-grow: 1;
  color: #cacaca;
  border-radius: 10px;
  overflow-y: auto;
}

.main::before {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  mix-blend-mode: hard-light;
  background: rgba(22, 22, 22, 0.525);
  content: "";
  opacity: 0.5;
  pointer-events: none;
}

.heading {
  font-weight: 800;
  font-size: 2.25em;
  margin-top: 0;
  margin-bottom: .8888889em;
  line-height: 1.1111111;
  letter-spacing: -.025em;
}

*::-webkit-scrollbar {
  width: 8px;
  border-radius: 10px;
  background-color: #222;
}

*::-webkit-scrollbar-thumb {
  background-color: rgb(164, 123, 203);
  border-radius: 10px;
}

@media (max-width: 700px) {
    .navigation {
        height: auto;
        justify-content: flex-start;
        flex-direction: column;
    }

    .main {
        overflow-y: hidden;
        height: auto;
        max-width: 100%;
    }
}
</style>
