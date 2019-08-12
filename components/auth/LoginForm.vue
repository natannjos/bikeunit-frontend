<template>
  <div>
    <h6 v-if="error" class="error--text">{{ error }}</h6>
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
  //props: ["redirect"],
  data: () => ({
    type: "email",
    usernameOrEmail: "",
    password: "",
    error: "",
    redirect: ""
  }),
  mounted() {
    this.redirect = localStorage.getItem("auth.redirect") || "/";
  },
  methods: {
    async submit() {
      //if (!(await this.$validator.validateAll())) return;

      const fields = {
        [this.type]: this.usernameOrEmail,
        password: this.password
      };
      this.$auth
        .loginWith("local", {
          data: fields
        })
        .then(() => {
          console.log(this.redirect);
          this.$router.push(this.redirect);
        });
      /*  try {
        await this.$store.dispatch("/auth/login", {
          fields
          //endpoint: "/auth/login/"
        });
        //this.$router.push(this.redirect);
      } catch (error) {
        [this.error] = getProperty(error, "response.data.non_field_errors") || [
          error.toString()
        ];
      } */
    }
  }
};
</script>