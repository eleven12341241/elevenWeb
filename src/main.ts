import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import { createPinia } from "pinia";

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(ElementPlus);
app.mount("#app");
