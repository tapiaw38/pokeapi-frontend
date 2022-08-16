import { createStore } from "vuex";

import pokemon from "../modules/pokemon/store/pokemon";

const store = createStore({
  modules: {
    pokemon,
  },
});

export default store;
