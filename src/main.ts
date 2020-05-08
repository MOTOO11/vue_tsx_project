import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import VuetifyMixin from "@/mixin/vuetify"
// Vue.mixin(VuetifyMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store: store.original,
  vuetify,
  render: h => h(App)
}).$mount("#app");
