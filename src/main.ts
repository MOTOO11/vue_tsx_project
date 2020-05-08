import Vue from "vue";
import App from "./App";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import GeneralMixin from "@/mixin/general";

Vue.config.productionTip = false;
Vue.mixin(GeneralMixin);

new Vue({
  router,
  store: store.original,
  vuetify,
  render: h => h(App)
}).$mount("#app");
