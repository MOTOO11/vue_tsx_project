import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import MyComponent from "@/components/MyComponent";

Vue.config.productionTip = false;

Vue.component("MyComponent", MyComponent);
new Vue({
  router,
  store: store.original,
  vuetify,
  render: h => h(App)
}).$mount("#app");
