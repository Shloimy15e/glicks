import "./style.css";

import { defaultConfig, plugin } from "@formkit/vue";

import App from "./App.vue";
import config from "../formkit.config.js";
import { createApp } from "vue";
import { register } from "swiper/element/bundle";
import router from "./router";

register();

createApp(App).use(plugin, defaultConfig).use(router).mount("#app");
