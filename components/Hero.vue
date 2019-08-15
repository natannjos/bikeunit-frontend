<template>
  <v-parallax :src="require('../static/images/hero.jpg')" height="600" style="padding-top: 20px">
    <v-layout column align-center row justify-center class="white--text">
      <img src="/images/logo.png" alt="bikeunit" height="300" />
      <h1 class="white--text mb-2 display-1 text-xs-center" style="margin-top: 20px">
        <span class="letra-espacada">
          Bem Vindo
          <span v-show="username">{{username}}</span>
        </span>
      </h1>
      <v-flex xs12 md4 xs2 class="text-xs-center">
        <nuxt-link :to="{ name: 'auth-registration' }" class="no-decoration" v-show="!loggedIn">
          <v-btn round class="yellow darken-4 lighten-2 mt-5" dark>
            Cadastre-se&nbsp;&nbsp;&nbsp;
            <v-icon>person_add</v-icon>
          </v-btn>
        </nuxt-link>

        <nuxt-link :to="{ name: 'criar-grupo' }" class="no-decoration">
          <v-btn round class="yellow darken-4 lighten-2 mt-5" dark>
            Criar Grupo de Ciclismo&nbsp;&nbsp;&nbsp;
            <v-icon>directions_bike</v-icon>
          </v-btn>
        </nuxt-link>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$auth.loggedIn;
    },
    username() {
      return this.$auth.user.username;
    }
  }
};
</script>

<style>
.v-parallax__image {
  filter: brightness(40%);
}
.letra-espacada {
  letter-spacing: 10px;
}
.no-decoration {
  color: #ffffff;
  text-decoration: none;
}
</style>
