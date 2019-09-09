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
      break; // remove this line if there could be multiple matching elements
    }
}

export const getters = {
  pedaisParaParticipar: (state, getters, rootState, rootGetters) => {
    var todosPedais = state.all;
    var listaPedais = state.all.slice();
    if (
      rootState.auth.loggedIn &&
      Array.isArray(rootGetters["perfil/pedaisMarcados"])
    ) {
      var pedaisMarcados = rootGetters["perfil/pedaisMarcados"];
      todosPedais.forEach((pedal, index) => {
        pedaisMarcados.forEach(pedalMarcado => {
          removeItem(listaPedais, pedalMarcado);
        });
      });

      return listaPedais;
    }

    return state.all;
  }
};
