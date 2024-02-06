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
  setNewsList(state, data) {
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
  async nuxtServerInit({ commit }) {
    try {
      const response = await fetch("http://localhost:3000/api/news");
      if (!response.ok) {
        throw new Error("Ошибка при загрузке новостей");
      }
      const data = await response.json();
      commit("setNewsList", data);
    } catch (error) {
      console.error(error.message);
    }
  }
};
