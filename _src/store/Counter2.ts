import { defineModule } from "direct-vuex";
import * as Context from "./index";
import Axios from 'axios';
import * as Covid from "@/Entity/Covid"


export interface CounterState {
    count: number;
    prefecture: Covid.RootObject[];
}

export const counterActionContext2 = (context: any) =>
    Context.moduleActionContext(context, counter2);
export const counterRootContext2 = (context: any) =>
    Context.rootActionContext(context);

export const counterGetterContext2 = (args: [CounterState, any, any, any]) => {
    return Context.moduleGetterContext(args, counter2);
};
const counter2 = defineModule({
    namespaced: true,
    state: (): CounterState => {
        return {
            count: 0,
            prefecture: []
        };
    },
    mutations: {
        INCREMENT(state) {
            state.count += 1;
        },
        SET_MESSAGES(state, message: Covid.RootObject[]) {
            state.prefecture = message;
        }
    },
    getters: {
        // // Here, 'getters', 'state', 'rootGetters' and 'rootState' are typed.
        // // Without 'mod1GetterContext' only 'state' would be typed.
        p1OrDefault(...args): number {
            const { state, getters, rootState, rootGetters } = counterGetterContext2(
                args
            );
            return state.count + 100;
        },
        gett(...args): Covid.RootObject[] {
            const { state, getters, rootState, rootGetters } = counterGetterContext2(
                args
            );
            return state.prefecture;
        },
        logoSrcSvg(...args): String {
            const { state, getters, rootState, rootGetters } = counterGetterContext2(
                args
            );
            return require('../assets/logo.svg');
        },
        logoSrcPng(...args): String {
            const { state, getters, rootState, rootGetters } = counterGetterContext2(
                args
            );
            return require('../assets/logo.png');
        }
    },
    actions: {
        increment2(context): number {
            const { commit, state, rootDispatch } = counterActionContext2(context);
            commit.INCREMENT();
            rootDispatch.counter.increment();
            return state.count;
        },
        async loadCovid19(context) {
            const { commit, state, rootDispatch } = counterActionContext2(context); // rootCommitなどもあります
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
    }
});

export default counter2;
