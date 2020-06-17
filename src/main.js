import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "normalize.css/normalize.css";
import "element-ui/lib/theme-chalk/index.css";
import waterfall from "vue-waterfall2";

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(waterfall);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
