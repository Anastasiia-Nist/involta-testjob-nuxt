export const state = () => ({
  newsList: [],
  newsSlice:[],
  isLoading: false,
});

export const getters = {
  getNewsList(state) {
    return state.newsList;
  },
  getNewsSlice(state) {
    return state.newsSlice;
  },
};

export const mutations = {
  gotData(state, data) {
    state.newsList = data;
  },
  setIsLoading(state, data) {
    state.isLoading = data;
  },
  setNewsSlice(state, data) {
    state.newsSlice = data;
  },
};

export const actions = {
  async setNewsList({ commit }, data) {
    commit("gotData", data)
  },
};
