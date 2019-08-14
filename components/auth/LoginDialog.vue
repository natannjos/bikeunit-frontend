<template>
  <v-layout row justify-center>
    <v-btn round class="yellow darken-4 lighten-2" small dark @click.stop="dialog = true">
      <v-icon>lock</v-icon>Login
    </v-btn>

    <v-dialog v-model="dialog" max-width="510">
      <v-card elevation="2" transparent class="colored-border">
        <v-layout align-center justify-center>
          <v-flex xs12>
            <v-flex xs12>
              <v-card-text class="text-xs-center">
                <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
                  <span style="letter-spacing: 1px;" class="super-bold">
                    <span class="orange--text">Login</span>
                  </span>
                </h2>
              </v-card-text>
            </v-flex>
            <v-flex xs12>
              <v-layout row wrap style="padding:10px">
                <v-card-text class="text-xs-center">
                  <login-form redirect="/" />
                </v-card-text>
              </v-layout>
            </v-flex>

            <v-card-text class="text-xs-center" @click.stop="dialog = false">
              Você não tem uma conta?
              <nuxt-link :to="{ name: 'auth-registration' }">Cadastre-se!</nuxt-link>
            </v-card-text>
            <v-card-text class="text-xs-center" @click.stop="dialog = false">
              Esqueceu a senha?
              <nuxt-link :to="{ name: 'auth-password-reset' }">Recuperar!</nuxt-link>
            </v-card-text>
          </v-flex>
        </v-layout>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import LoginForm from "~/components/auth/LoginForm.vue";
export default {
  components: { LoginForm },
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
.titulos {
  font-family: "Roboto", Sans-serif;
  font-weight: 600;
}
</style>

