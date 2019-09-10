import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vueCflMobile from "../plugins/index";

Vue.config.productionTip = false;

// 组件注册
Vue.use(vueCflMobile);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
