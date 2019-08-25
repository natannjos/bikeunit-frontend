<template>
  <v-toolbar fixed app color="yellow lighten-5" style="z-index:20" height="50">
    <v-layout align-center justify-space-around>
      <v-spacer></v-spacer>
      <v-flex>
        <v-layout justify-center>
          <nuxt-link :to="{name: 'index'}">
            <img src="/images/logo2.png" alt="logo2" height="50px" />
          </nuxt-link>
        </v-layout>
      </v-flex>
      <v-spacer></v-spacer>
      <v-flex>
        <v-layout align-end justify-center v-if="userIsLogged">
          <pedais-menu />

          <profile-menu />
        </v-layout>
        <v-layout v-else>
          <login-dialog></login-dialog>
        </v-layout>
      </v-flex>
      <v-spacer></v-spacer>
    </v-layout>
  </v-toolbar>
</template>

<script>
import PedaisMenu from "../menus/PedaisMenu";
import ProfileMenu from "../menus/ProfileMenu";
import LoginDialog from "../auth/LoginDialog";
export default {
  components: {
    PedaisMenu,
    LoginDialog,
    ProfileMenu
  },
  computed: {
    userIsLogged() {
      return this.$store.state.auth.loggedIn;
    }
  }
};
</script>