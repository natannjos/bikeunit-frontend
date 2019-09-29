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
  },

  async sairPedal({ commit, rootState, dispatch }, pedal) {
    var userId = rootState.auth.user.id;
    var urlSairPedal = `${base_urls.API_URL}/entra-sai-pedal/${pedal.id}/`;
    this.$axios.get(urlSairPedal).then(res => {
      let participantes = res.data.participantes;
      let novaLista = participantes.filter(x => x != userId);
      this.$axios.put(urlSairPedal, { participantes: novaLista }).then(res => {
        dispatch("getAll");
      });
    });
  },
  async entrarPedal({ commit, rootState, dispatch }, pedal) {
    var userId = rootState.auth.user.id;
    var urlEntrarPedal = `${base_urls.API_URL}/entra-sai-pedal/${pedal.id}/`;
    this.$axios.get(urlEntrarPedal).then(res => {
      let participantes = res.data.participantes;
      participantes.push(userId);
      this.$axios
        .put(urlEntrarPedal, { participantes: participantes })
        .then(res => {
          dispatch("getAll");
        });
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
