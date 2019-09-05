import { base_urls } from "../env";
export const state = () => ({
  perfil: {}
});
export const mutations = {
  GET(state, perfil) {
    state.perfil = perfil;
  }
};

export const actions = {
  async get({ commit, rootState }) {
    let userId = rootState.auth.user.id;
    await this.$axios
      .get(`${base_urls.API_URL}/perfis/${userId}/`)
      .then(res => {
        if (res.status == 200) {
          commit("GET", res.data);
        }
      })
      .catch(err => {
        console.log("ERRO:", err);
      });
  }
};

export const getters = {
  pedaisMarcados: state => {
    return state.perfil.pedais;
  }
};
