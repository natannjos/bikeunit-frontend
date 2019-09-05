import { base_urls } from "../env";
export const state = () => ({
  all: []
});
export const mutations = {
  GET_ALL(state, pedals) {
    state.all = pedals;
  }
};

export const actions = {
  async getAll({ commit }) {
    await this.$axios
      .get(`${base_urls.API_URL}/pedais/`)
      .then(res => {
        if (res.status == 200) {
          commit("GET_ALL", res.data.results);
        }
      })
      .catch(err => {
        console.log("ERRO:", err);
      });
  }
};

export const getters = {
  allPedais: state => {
    return state.all;
  }
};
