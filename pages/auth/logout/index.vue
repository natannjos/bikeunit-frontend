<template>
  <v-layout column wrap align-center justify-center>
    <v-flex xs12>
      <h4>Tem certeza que quer sair??</h4>
    </v-flex>
    <v-flex xs6>
      <logout-form :redirect="{ name: 'index' }" />
    </v-flex>
    <v-flex xs6>
      <v-btn round color="amber accent-3 mt-4" dark>
        <nuxt-link :to="{name:'index'}" class="no-decoration">Voltar</nuxt-link>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import LogoutForm from "~/components/auth/LogoutForm.vue";
export default {
  name: "auth-logout",
  components: { LogoutForm }
};
</script>

<style scope>
</style>