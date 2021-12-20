import Vue from "vue";
import Vuex from "vuex";

import { studentsList } from "./posts";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    students: studentsList,
  },
});
