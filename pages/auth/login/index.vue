<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <login-form />
        <br />
        <p>
          Você não tem uma conta?
          <nuxt-link :to="{ name: 'auth-registration' }">Cadastre-se!</nuxt-link>
        </p>
        <br />
        <p>
          Esqueceu a senha?
          <nuxt-link :to="{ name: 'auth-password-reset' }">Recuperar!</nuxt-link>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from "~/components/auth/LoginForm.vue";
export default {
  name: "auth-login",
  auth: false,
  components: { LoginForm }
};
</script>