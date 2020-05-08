import { defineModule } from "direct-vuex";
import Axios from 'axios';
import * as Context from "./index";
import * as Covid from "@/Entity/Covid"

export interface CounterState {
  count: number;
  prefecture: Covid.RootObject[];
}

const constant = defineModule({
  namespaced: true,
  state: (): CounterState => {
    return {
      count: 0,
      prefecture: []
    };
  },
  mutations: {
    INCREMENT(state, more: number) {
      state.count += 1;
      state.count += more;
    },
    SET_MESSAGES(state, message: Covid.RootObject[]) {
      state.prefecture = message;
    }
  },
  actions: {
    increment(context): number {
      const { commit, state } = constantActionContext(context); // rootCommitなどもあります
      commit.INCREMENT(10);
      return state.count;
    },
    async loadCovid19(context) {
      const { commit, state, rootDispatch } = constantActionContext(context); // rootCommitなどもあります
      const result = await Axios.get('https://covid19-japan-web-api.now.sh/api/v1/prefectures');
      var msg = result.data as Covid.RootObject[];
      // var dd = { method: "get", mode: "cors" } as RequestInit;
      const res2 = await (await fetch('https://covid19-japan-web-api.now.sh/api/v1/prefectures')).json() as Covid.RootObject[];

      var sort = res2.sort((a, b) => {
        if (a.deaths < b.deaths) return -1;
        if (a.deaths > b.deaths) return 1;
        return 0;
      });
      console.log(sort);
      commit.SET_MESSAGES(sort);
    }
  },
  getters: {
    logoSrcSvg(...args): String {
      const { state, getters, rootGetters, rootState } = constantGetterContext(
        args
      );
      return require("../assets/logo.svg");
    },
    logoSrcPng(...args): String {
      const { state, getters, rootGetters, rootState } = constantGetterContext(
        args
      );
      return require("../assets/logo.png");
    },
  },
});

export default constant;

export const constantActionContext = (context: any) =>
  Context.moduleActionContext(context, constant);
export const constantRootContext = (context: any) =>
  Context.rootActionContext(context);

export const constantGetterContext = (args: [CounterState, any, any, any]) => {
  return Context.moduleGetterContext(args, constant);
};
