import { createApp } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { router } from "./router";

import App from "./app.vue";

import "modern-normalize/modern-normalize.css";
import "./style.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(createPersistedState());

app.use(pinia).use(router);
app.mount("#app");
