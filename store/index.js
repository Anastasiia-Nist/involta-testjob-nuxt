export const state = () => ({
  newsList: [],
  isLoading: false,
});

export const getters = {
  getNewsList(state) {
    return state.newsList;
  },
};

export const mutations = {
  gotData(state, data) {
    state.newsList = data;
  },
  setIsLoading(state, data) {
    state.isLoading = data;
  },
};

export const actions = {
  async setNewsList({ commit }) {
    commit("setIsLoading", true);
    await this.$axios
      .$get("/api/news")
      .then((response) => commit("gotData", response))
      .finally(() => commit("setIsLoading", false));
  },
};
