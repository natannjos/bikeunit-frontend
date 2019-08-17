<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <password-reset-form :redirect="{ name: 'auth-info' }" @success="successReset" />
        <br />
        <p>
          Lembra-se da senha?
          <nuxt-link :to="{ name: 'auth-login' }">Entrar!</nuxt-link>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PasswordResetForm from "~/components/auth/PasswordResetForm.vue";
export default {
  name: "auth-password-reset",
  auth: false,
  methods: {
    successReset() {
      global.console.log("successReset");
    }
  },
  components: { PasswordResetForm }
};
</script>
