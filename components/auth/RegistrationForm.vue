<template>
  <v-card elevation="2" transparent class="colored-border">
    <v-flex xs12>
      <v-card-text>
        <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
          <span style="letter-spacing: 1px;" class="super-bold">
            <span class="orange--text">Cadastro</span>
          </span>
        </h2>
      </v-card-text>
    </v-flex>
    <v-flex xs12>
      <v-layout style="padding:10px">
        <v-card-text>
          <form @keyup.enter="submit">
            <v-text-field
              class="my-input"
              outline
              color="orange"
              v-model="username"
              label="Nome de usuário"
              name="username"
              required
              hint="Apenas letras, números e símbolos @ /. / + / - / _."
              max="150"
              :counter="150"
            />
            <v-text-field
              v-model="email"
              label="Email"
              name="email"
              type="email"
              required
              class="my-input"
              outline
              color="orange"
            />
            <v-text-field
              class="my-input"
              outline
              color="orange"
              v-model="password1"
              name="password1"
              label="Senha"
              hint="Sua senha não pode consistir apenas em números."
              :counter="password1.length"
              min="8"
              max="128"
              :append-icon="pw1 ? 'visibility_off' : 'visibility'"
              @click:append="() => (pw1 = !pw1)"
              :type="pw1 ? 'password' : 'text'"
              required
            />
            <v-text-field
              class="my-input"
              outline
              color="orange"
              v-model="password2"
              name="password2"
              label="Confirmação de Senha"
              hint="Redigite sua senha"
              :append-icon="pw2 ? 'visibility_off' : 'visibility'"
              @click:append="() => (pw2 = !pw2)"
              :type="pw2 ? 'password' : 'text'"
              required
            />
            <v-flex xs12>
              <v-btn large round class="orange" dark ripple @click.native="submit">Cadastre-se</v-btn>
            </v-flex>
          </form>
        </v-card-text>
      </v-layout>
    </v-flex>
  </v-card>
</template>

<script>
import getProperty from "~/utils/getProperty"; // eslint-disable-line
import { checkExist } from "~/api/auth"; // eslint-disable-line
export default {
  props: ["redirect"],
  data: () => ({
    username: "",
    email: "",
    password1: "",
    password2: "",
    pw1: true,
    pw2: true
  }),
  methods: {
    resetData() {
      Object.assign(this.$data, this.$options.data());
    },
    async submit() {
      const { username, email, password1, password2 } = this.$data;
      try {
        await this.$store.dispatch("auth/registration", {
          fields: { username, email, password1, password2 }
        });
        this.$emit("success", email);
        this.resetData();
      } catch (error) {
        const backendErrors = getProperty(error, "response.data");
        if (backendErrors) this.showBackendErrors(backendErrors);
      }
    },
    showBackendErrors(obj) {
      this.errors.clear();
      Object.keys(obj).forEach(field => {
        obj[field].forEach(msg => {
          if (field === "non_field_errors") {
            field = "password2";
          }
          this.errors.add(field, msg);
        });
      });
    }
  },
  created() {
    // this.$validator.extend("unique", {
    //   validate: async (input, field) => {
    //     const { data } = await this.$axios(checkExist({ [field]: input }));
    //     return data.valid || { data };
    //   },
    //   getMessage: (field, params, { message }) => message
    // });
  }
};
</script>