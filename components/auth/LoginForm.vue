<template>
  <div>
    <v-alert
      v-for="err in errors"
      :key="err.index"
      color="error"
      icon="warning"
      outline
      dismissible
      transition="scale-transition"
      :value="true"
    >{{err}}</v-alert>
    <form @keyup.enter="submit">
      <v-text-field
        class="my-input"
        outline
        required
        color="orange"
        height="10px"
        v-model="usernameOrEmail"
        :name="type"
        :label="type === 'email' ? 'Informe seu Email' : 'Informe seu nome'"
      />
      <v-text-field
        class="my-input"
        outline
        required
        color="orange"
        height="10px"
        v-model="password"
        name="password"
        label="Senha"
        type="password"
      />
    </form>
    <v-flex xs12>
      <v-btn large round class="orange" dark ripple @click.native="submit">
        <b>Login</b>
        <v-icon right dark>check</v-icon>
      </v-btn>
    </v-flex>
  </div>
</template>

<script>
import getProperty from "../../utils/getProperty";
export default {
  props: ["redirect"],
  data: () => ({
    type: "email",
    usernameOrEmail: "",
    password: "",
    errors: []
  }),
  mounted() {
    if (!this.redirect) {
      this.redirect = localStorage.getItem("auth.redirect") || "/";
    }
  },
  methods: {
    async submit() {
      const fields = {
        [this.type]: this.usernameOrEmail,
        password: this.password
      };
      await this.$auth
        .loginWith("local", {
          data: fields
        })
        .then(() => {
          this.$emit("toggleDialog");
          console.log(this.redirect);
          this.$router.push(this.redirect);
        })
        .catch(err => {
          this.errors = getProperty(err, "response.data.non_field_errors") || [
            getProperty(err, "response.data.email"),
            getProperty(err, "response.data.password")
          ];
        });
    }
  }
};
</script>