import { createApp } from "vue";
import App from "./App.vue";
// 导入router
import router from "./router";
// 导入Element Plus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
// 导入pinia
import { createPinia } from "pinia";
const pinia = createPinia();

const app = createApp(App);

// 使用router
app.use(router);
// 使用pinia
app.use(pinia);
// 使用Element Plus
app.use(ElementPlus);

app.mount("#app");
