import Vue from 'vue';
import Vuex from 'vuex';
import CounterModule from '@/store/Counter2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { version: 1 },
  modules: {
    CounterModule,
  },
  mutations: {},
  actions: {},
});
