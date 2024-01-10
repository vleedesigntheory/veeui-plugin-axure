import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAxure: false || window.isAxure,
  },
  mutations: {
    changeAxure(state, flag) {
      state.isAxure = flag;
    },
  },
  actions: {

  },
  modules: {

  },
});

export default store;
