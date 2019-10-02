<template>
  <v-menu offset-y class="text-xs-center">
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" icon class="pt-2">
        <v-badge color="orange white--text" overlap left>
          <template v-slot:badge v-if="pedais.length">
            <span color>{{pedais.length}}</span>
          </template>
          <template v-slot:badge v-else></template>
          <v-icon color="grey" medium>directions_bike</v-icon>
        </v-badge>
      </v-btn>
    </template>
    <v-card>
      <v-toolbar color="#fbb809" dark v-if="pedais.length">
        <v-toolbar-title>Pedais que você confirmou</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar color="orange darken-3" dark v-else>
        <v-toolbar-title>Você não marcou nenhum pedal</v-toolbar-title>
      </v-toolbar>
      <pedal-dialog-menu v-show="pedais.length" :pedais="pedais" v-on:close="getMarcados()" />
    </v-card>
  </v-menu>
</template>

<script>
import PedalDialogMenu from "../dialogs/PedalDialogMenu";
export default {
  components: {
    PedalDialogMenu
  },
  created() {
    this.getMarcados();
  },
  methods: {
    getMarcados() {
      this.$store.dispatch("perfil/get");
    }
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