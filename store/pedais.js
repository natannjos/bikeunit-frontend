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

function removeItem(array, item) {
  for (var i = array.length - 1; i >= 0; i--)
    if (array[i].id === item.id) {
      array.splice(i, 1);
      break;
    }
}

export const getters = {
  listaPedais: (state, getters, rootState, rootGetters) => {
    var listaPedais = state.all.slice();
    var pedaisMarcados = rootGetters["perfil/pedaisMarcados"];
    if (Array.isArray(pedaisMarcados) && rootState.auth.loggedIn) {
      pedaisMarcados.forEach(pedalMarcado =>
        removeItem(listaPedais, pedalMarcado)
      );
    }

    return listaPedais;
  }
};
