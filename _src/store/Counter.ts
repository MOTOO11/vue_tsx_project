import { defineModule } from "direct-vuex";
import { moduleActionContext } from "./index";

export interface CounterState {
  count: number;
}

export const counterActionContext = (context: any) =>
  moduleActionContext(context, counter);

const counter = defineModule({
  namespaced: true,
  state: (): CounterState => {
    return {
      count: 0
    };
  },
  mutations: {
    INCREMENT(state) {
      state.count += 1;
    }
  },
  actions: {
    increment(context): number {
      const { commit, state } = counterActionContext(context); // rootCommitなどもあります
      commit.INCREMENT();
      return state.count;
    }
  }
});

export default counter;
