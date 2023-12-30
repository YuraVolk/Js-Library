import { createApp } from "vue";
import "../../../components/vueEntry";
import("./App.vue").then((App) => {
    createApp(App.default).mount("#app");
}).catch((e) => {
    console.trace(e);
});
