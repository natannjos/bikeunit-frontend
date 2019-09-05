import { auth as api } from "~/api"; // eslint-disable-line

// main auth store in 'modules/nuxtjs/auth'

export const getters = {};

export const actions = {
  async registration({}, { fields }) {
    await this.$axios(api.registration(fields)).then(res => {
      var fields = JSON.parse(res.config.data);
      this.$auth
        .loginWith("local", {
          data: {
            email: fields.email,
            password: fields.password1
          }
        })
        .then(() => {})
        .catch(err => console.log(err));
    });
  },

  async editUser({ commit }, { fields } = {}) {
    const { data } = await this.$axios(api.editUser(fields));
    commit("SET_USER", data);
    commit("users/SET_USER", data, { root: true });
  },

  async passwordChange(ctx, { fields }) {
    await this.$axios(api.passwordChange(fields));
  },

  async passwordReset(ctx, { fields }) {
    await this.$axios(api.passwordReset(fields));
  },

  async passwordResetConfirm(ctx, { fields }) {
    const { data } = await this.$axios(api.passwordResetConfirm(fields));
    global.console.log(data);
  }
};
