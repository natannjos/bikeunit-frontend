<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn v-on="on" icon>
          <v-badge color="amber accent-4">
            <template v-slot:badge>
              <span>{{ pedais.length }}</span>
            </template>
            <v-icon large color="grey" medium>directions_bike</v-icon>
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
  </div>
</template>

<script>
import PedalDialogMenu from "../dialogs/PedalDialogMenu";
export default {
  components: {
    PedalDialogMenu
  },
  computed: {
    pedais() {
      let pedaisAgendados = this.$store.state.pedais.all;
      let grupos = this.$store.state.grupos.all;
      pedaisAgendados.forEach(pedal => {
        let grupo = grupos.find(x => x.id == pedal.grupoId);
        pedal.grupo = grupo.nome;
        pedal.logo = grupo.logo;
        pedal.divider = true;
        pedal.inset = true;
      });

      return pedaisAgendados;
    }
  }
};
</script>