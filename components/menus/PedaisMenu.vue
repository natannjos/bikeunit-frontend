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
        <v-list two-line>
          <template v-for="item in pedais">
            <v-list-tile :key="item.grupo" avatar @click="showDialog">
              <v-list-tile-avatar>
                <img :src="item.logo" />
              </v-list-tile-avatar>

              <v-list-tile-content>
                <v-list-tile-title v-html="item.destino"></v-list-tile-title>
                <v-list-tile-sub-title>{{item.dia}} - {{item.hora}}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
        </v-list>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  methods: {
    showDialog() {}
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