<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <v-card elevation="2" transparent class="colored-border">
          <v-flex xs12>
            <v-card-text>
              <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
                <span style="letter-spacing: 1px;" class="super-bold">
                  <span class="orange--text">Login</span>
                </span>
              </h2>
            </v-card-text>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap style="padding:10px">
              <v-card-text>
                <login-form />
              </v-card-text>
            </v-layout>
          </v-flex>
        </v-card>
        <br />
        <p>
          Você não tem uma conta?
          <nuxt-link :to="{ name: 'auth-cadastro' }">Cadastre-se!</nuxt-link>
        </p>
        <br />
        <p>
          Esqueceu a senha?
          <nuxt-link :to="{ name: 'auth-senha-reset' }">Recuperar!</nuxt-link>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import LoginForm from "~/components/auth/LoginForm.vue";
export default {
  name: "auth-login",
  auth: "guest",
  components: { LoginForm }
};
</script>