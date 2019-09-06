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
  pedaisParaParticipar: (state, getters, rootState, rootGetters) => {
    var pedaisMarcados = [];
    if (Array.isArray(rootGetters["perfil/pedaisMarcados"])) {
      pedaisMarcados = rootGetters["perfil/pedaisMarcados"];
      var diferentes = [];
      state.all.forEach(pedalListaCompleta => {
        pedaisMarcados.forEach(meuPedal => {
          if (pedalListaCompleta.id != meuPedal.id) {
            diferentes.push(pedalListaCompleta);
          }
        });
      });
    }
    return diferentes;
  }
};
