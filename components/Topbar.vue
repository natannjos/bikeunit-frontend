<template>
  <v-toolbar fixed app color="yellow lighten-5" style="z-index:20">
    <v-layout align-center justify-center>
      <v-flex xs6>
        <v-flex xs12>
          <v-layout align-center justify-center>
            <a href="/">
              <img src="/images/logo2.png" alt="logo2" height="50px" />
            </a>
          </v-layout>
        </v-flex>
      </v-flex>

      <v-flex xs6>
        <v-flex xs12>
          <v-layout align-center justify-center v-if="userIsLogged">
            <pedais-menu></pedais-menu>
            <v-btn icon>
              <v-icon>person</v-icon>
            </v-btn>
          </v-layout>
          <v-layout align-center justify-center v-else>
            <login-dialog></login-dialog>
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
import PedaisMenu from "./PedaisMenu";
import LoginDialog from "./auth/LoginDialog";
export default {
  components: {
    PedaisMenu,
    LoginDialog
  },
  computed: {
    userIsLogged() {
      return this.$auth.loggedIn;
    }
  }
};
</script>