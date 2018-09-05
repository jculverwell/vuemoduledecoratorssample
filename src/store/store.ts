import Vue from 'vue';
import Vuex from 'vuex';
import counter from '@/store/Counter2';

Vue.use(Vuex);

export default new Vuex.Store({
  state: { version: 1 },
  modules: {
    counter,
  },
  mutations: {},
  actions: {},
});
