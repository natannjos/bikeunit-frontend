<template>
  <v-parallax :src="require('@/assets/img/hero.jpg')" height="600">
    <v-layout column align-center row justify-center class="white--text">
      <img src="../assets/img/logo.png" alt="bikeunit" height="200">
      <h1 class="white--text mb-2 display-1 text-xs-center">Seja Bem Vindo</h1>
      <v-flex xs12 md4 xs2>
        <v-btn round class="yellow darken-4 lighten-2 mt-5" dark href="#">
          Criar Grupo de Ciclismo
          <v-icon>directions_bike</v-icon>
        </v-btn>
        <v-btn round class="yellow darken-4 lighten-2 mt-5" dark href="#">
          Procurar Por Grupo
          <v-icon>search</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<script>
export default {
  data() {
    return {
      image: "../static/images/hero.jpg"
    };
  }
};
</script>

<style>
.v-parallax__image {
  filter: brightness(50%);
}
</style>
