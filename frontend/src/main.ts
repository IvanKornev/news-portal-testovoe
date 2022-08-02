import { createApp } from "vue";
import App from "./App.vue";

import store from "@/store";
import { uiCollection } from "./ui-collection";
import { router } from "@/router";

import "@/assets/css/normalize.css";
import "@/assets/css/reset.css";
import "ant-design-vue/dist/antd.css";

const app = createApp(App);

app.use(store);
app.use(router);
uiCollection.forEach((component) => {
  app.use(() => component);
});
app.mount("#app");
