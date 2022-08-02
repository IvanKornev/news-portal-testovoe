import api from "@/api";

const state = () => ({
  wasAuthorized: false,
});

const mutations = {
  setAuthorizeStatus(state, status = false) {
    state.wasAuthorized = status;
  },
};

const actions = {
  async registration(context, form) {
    await api.auth.registration(form);
  },
  async authorization(context, form) {
    await api.auth.authorization(form).then((results: any) => {
      localStorage.setItem("token", results.data.token);
      context.commit("setAuthorizeStatus", true);
    });
  },
};

const auth = {
  namespaced: true,
  state,
  mutations,
  actions,
};
export default auth;
