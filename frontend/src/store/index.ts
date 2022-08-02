import { createStore } from "vuex";
import news from "./modules/news";
import auth from "./modules/auth";

const store = createStore({
  modules: {
    news,
    auth,
  },
});

export default store;
