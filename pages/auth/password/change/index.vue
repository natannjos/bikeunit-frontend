<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12>
        <password-change-form :redirect="{ name: 'auth-info' }" @success="successChange" />
        <br />
        <p>
          Esqueceu sua senha?
          <nuxt-link :to="{ name: 'auth-password-reset' }">Recuperar!</nuxt-link>
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PasswordChangeForm from "~/components/auth/PasswordChangeForm.vue";
export default {
  name: "auth-password-change",
  //middleware: "auth",
  // data: () => ({
  // }),
  methods: {
    successChange() {
      global.console.log("successChange");
    }
  },
  components: { PasswordChangeForm }
};
</script>