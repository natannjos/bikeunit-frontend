<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center>
      <v-flex xs12 sm10 md8 lg6 xl6>
        <registration-form :redirect="{ name: 'auth-info' }" @success="successReg" />
        <br />
        <p>
          Você já está registrado?
          <nuxt-link :to="{ name: 'auth-login' }">Entrar!</nuxt-link>
        </p>
      </v-flex>
      <verify-email-dialog
        v-if="dialog"
        :email="email"
        :provider="provider"
        @close="$router.push({ name: 'auth-login' })"
      />
    </v-layout>
  </v-container>
</template>

<script>
import RegistrationForm from "~/components/auth/RegistrationForm.vue";
import VerifyEmailDialog from "~/components/auth/VerifyEmailDialog.vue";
import mailProviders from "~/utils/mailProviders"; //eslint-disable-line
export default {
  name: "auth-registration",
  auth: "guest",
  data: () => ({
    email: "",
    dialog: false
  }),
  methods: {
    successReg(email) {
      this.email = email;
      this.dialog = true;
    }
  },
  computed: {
    provider() {
      return mailProviders(this.email);
    }
  },
  components: { RegistrationForm, VerifyEmailDialog }
};
</script>