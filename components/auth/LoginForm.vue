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
        type="email"
        v-model="email"
        :error-messages="emailErrors"
        color="orange"
        height="10px"
        label="Seu Email*"
        prepend-inner-icon="alternate_email"
        placeholder="Obrigatório"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>
      <v-text-field
        v-model="password"
        class="my-input"
        outline
        name="password"
        label="Senha"
        counter
        color="orange"
        :error-messages="passwordErrors"
        :type="show ? 'text' : 'password'"
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
        prepend-inner-icon="lock"
        :append-icon="show ? 'visibility' : 'visibility_off'"
        @click:append="show = !show"
      ></v-text-field>
    </form>
    <v-flex xs12>
      <v-btn large round dark ripple @click.native="submit" v-if="!disableButton" class="orange">
        <b>Login</b>
        <v-icon right dark>check</v-icon>
      </v-btn>
      <v-btn v-else large disabled round>Login</v-btn>
    </v-flex>
  </div>
</template>

<script>
import getProperty from "../../utils/getProperty";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs
} from "vuelidate/lib/validators";
export default {
  props: ["redirect"],
  data: () => ({
    email: "",
    password: "",
    errors: [],
    show: false
  }),
  validations: {
    password: {
      required,
      minLength: minLength(3)
    },

    email: {
      required,
      email
    }
  },
  mounted() {
    if (!this.redirect) {
      this.redirect = localStorage.getItem("auth.redirect") || "/";
    }
  },
  methods: {
    async submit() {
      const fields = {
        email: this.email,
        password: this.password
      };
      await this.$auth
        .loginWith("local", {
          data: fields
        })
        .then(() => {
          this.email = "";
          this.password = "";

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
  },
  computed: {
    disableButton() {
      return (
        this.emailErrors.length > 0 ||
        this.passwordErrors.length > 0 ||
        !this.email ||
        !this.password
      );
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Email Inválido");
      !this.$v.email.required && errors.push("Campo Obrigatório");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Campo deve ter no mínimo 3 caracteres");
      !this.$v.password.required && errors.push("Campo Obrigatório.");
      return errors;
    }
  }
};
</script>