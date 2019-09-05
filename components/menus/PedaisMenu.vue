<template>
  <v-menu offset-y class="text-xs-center">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon class="pt-2">
        <v-badge color="orange white--text" overlap left>
          <template v-slot:badge>
            <span color>{{pedais.length}}</span>
          </template>
          <v-icon color="grey" medium>directions_bike</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="#fbb809" dark>
        <v-toolbar-title>Pedais que você confirmou</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <pedal-dialog-menu :pedais="pedais" />
    </v-card>
  </v-menu>
</template>

<script>
import PedalDialogMenu from "../dialogs/PedalDialogMenu";
export default {
  components: {
    PedalDialogMenu
  },
  computed: {
    pedais() {
      var marcados = this.$store.getters["perfil/pedaisMarcados"];
      if (marcados) return marcados;
      return [];
    }
  }
};
</script>