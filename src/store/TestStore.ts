import { defineModule } from "direct-vuex";
import Axios from 'axios';
import * as Context from "./index";
import * as Covid from "@/Entity/Covid"

export interface CounterState {
  count: number;
  prefecture: Covid.Prefecture[];
  total: Covid.Total;
  positivesLocalAchievements: Covid.PositivesLocalAchievement[];
}

const testStore = defineModule({
  namespaced: true,
  state: (): CounterState => {
    return {
      count: 0,
      prefecture: [],
      total: new Covid.Total(),
      positivesLocalAchievements: []
    };
  },
  mutations: {
    INCREMENT(state, more: number) {
      state.count += 1;
      state.count += more;
    },
    SET_PREFECTURE(state, message: Covid.Prefecture[]) {
      state.prefecture = message;
    },
    SET_TOTAL(state, total: Covid.Total) {
      state.total = total;
    },
    ADD_POSITIVES(state, payload: {
      name: string, positives: Covid.Positive[]
    }) {
      console.log("before", state.positivesLocalAchievements);

      var value = state.positivesLocalAchievements.find(e => e.name == name)
        ?? new Covid.PositivesLocalAchievement(payload.name, payload.positives);
      state.positivesLocalAchievements = state.positivesLocalAchievements
        .filter(e => e.name != payload.name).concat(value);
      console.log("after", state.positivesLocalAchievements);
    }
  },
  actions: {
    async  increment(context): Promise<number> {
      const { commit, state, rootDispatch } = constantActionContext(context); // rootCommitなどもあります
      commit.INCREMENT(10);
      return await rootDispatch.Counter.increment();
    },
    async fetchPrefectures(context) {
      const { commit, state, rootDispatch } = constantActionContext(context); // rootCommitなどもあります
      // const result = await Axios.get('https://covid19-japan-web-api.now.sh/api/v1/prefectures');
      // var msg = result.data as Covid.Prefecture[];
      // var dd = { method: "get", mode: "cors" } as RequestInit;
      const res2 = await (await fetch('https://covid19-japan-web-api.now.sh/api/v1/prefectures')).json() as Covid.Prefecture[];

      var sort = res2.sort((a, b) => {
        if (a.deaths < b.deaths) return -1;
        if (a.deaths > b.deaths) return 1;
        return 0;
      });
      console.log(sort);
      commit.SET_PREFECTURE(sort);
    },
    async getTotal(context) {
      const { commit, state, rootDispatch } = constantActionContext(context); // rootCommitなどもあります
      // const result = await Axios.get('https://covid19-japan-web-api.now.sh/api/v1/total');
      // var msg = result.data as Covid.Total;
      // var dd = { method: "get", mode: "cors" } as RequestInit;
      const res2 = await (await fetch('https://covid19-japan-web-api.now.sh/api/v1/total')).json() as Covid.Total;
      console.log(res2);
      commit.SET_TOTAL(res2);
    },
    async getPositives(context, prefecture: string): Promise<Covid.Positive[]> {
      const { commit, state, rootDispatch } = constantActionContext(context); // rootCommitなどもあります
      // const result = await Axios.get('https://covid19-japan-web-api.now.sh/api/v1/positives');
      // var msg = result.data as Covid.Total;
      // var dd = { method: "get", mode: "cors" } as RequestInit;
      var find = state.positivesLocalAchievements.find(e => e.name == prefecture);
      console.log("find:" + prefecture, find);
      if (find != null) {//&& find.compare()
        return new Promise(() => {
          return find;
        });
      }

      const params = new URLSearchParams();
      params.set('prefecture', prefecture);
      const res2 = (await fetch('https://covid19-japan-web-api.now.sh/api/v1/positives?'
        + params.toString())).json()
      var result = await res2 as Covid.Positive[];
      console.log(res2);
      commit.ADD_POSITIVES({ name: prefecture, positives: result });
      return res2 as Promise<Covid.Positive[]>;
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

export default testStore;

export const constantActionContext = (context: any) =>
  Context.moduleActionContext(context, testStore);
export const constantRootContext = (context: any) =>
  Context.rootActionContext(context);

export const constantGetterContext = (args: [CounterState, any, any, any]) => {
  return Context.moduleGetterContext(args, testStore);
};
