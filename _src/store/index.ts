import Vue from "vue";
import Vuex from "vuex";
import { createDirectStore } from "direct-vuex";
import counter from "./Counter";
import counter2 from "./Counter2";

Vue.use(Vuex);

const {
  store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
} = createDirectStore({
  modules: {
    counter,
    counter2
  }
});

export default store;
export {
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
};

export type AppStore = typeof store;
declare module "vuex" {
  interface Store<S> {
    direct: AppStore;
  }
}
