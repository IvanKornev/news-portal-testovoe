import api from "@/api";

const state = () => ({
  list: [],
});

const mutations = {
  setList(state, list: News[] = []) {
    state.list = list;
  },
  addNews(state, news: News) {
    state.list.push(news);
  },
};

const actions = {
  async getAll(context) {
    await api.news.getAll().then((result: any) => {
      context.commit("setList", result.data.allNews);
    });
  },
  async addNews(context, form) {
    await api.news.add(form).then((result: any) => {
      context.commit("addNews", result.data.createdNews);
    });
  },
};

const news = {
  namespaced: true,
  state,
  mutations,
  actions,
};
export default news;
