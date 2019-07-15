<template>
  <v-toolbar fixed app color="yellow lighten-5" style="z-index:20">
    <v-layout align-center justify-center>
      <v-flex xs6>
        <v-flex xs12>
          <v-layout align-center justify-center>
            <a href="/">
              <img src="/images/logo2.png" alt="logo2" height="50px">
            </a>
          </v-layout>
        </v-flex>
      </v-flex>

      <v-flex xs6>
        <v-flex xs12>
          <v-layout align-center justify-center>
            <pedais-menu></pedais-menu>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
import PedaisMenu from "./PedaisMenu";
export default {
  components: {
    PedaisMenu
  }
};
</script>