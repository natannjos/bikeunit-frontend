<template>
  <v-container class="text-xs-center" style="padding:0;" fluid>
    <v-layout column wrap class="my-5 px-4">
      <v-flex xs12>
        <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
          <span class="super-bold">
            pedais<span class="orange--text">Agendados</span>
          </span>
        </h2>
      </v-flex>

      <v-layout row wrap>
        <v-flex xs12 sm12 md12>
          <v-text-field
            class="my-input"
            outline
            color="orange"
            height="25"
            label="Pesquisar Grupo"
            prepend-inner-icon="search"
          ></v-text-field>
        </v-flex>

        <!--Lista de Pedais-->
        <v-flex xs12 sm6 md3 v-for="pedal in pedais" :key="pedal.nome" style="margin-bottom: 20px">
          <!--Card de Pedal-->
          <card-pedal :pedal="pedal"></card-pedal>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import CardPedal from "./cards/CardPedal";
export default {
  components: {
    CardPedal
  },

  computed: {
    pedais() {
      let pedaisAgendados = this.$store.state.pedais.all;
      let grupos = this.$store.state.grupos.all;
      pedaisAgendados.forEach(pedal => {
        let grupo = grupos.find(x => x.id == pedal.grupoId);
        pedal.grupo = grupo.nome;
        pedal.logo = grupo.logo;
      });

      return pedaisAgendados;
    }
  }
};
</script>
<style scope>
.lista-pequena {
  height: 35px;
}
</style>
