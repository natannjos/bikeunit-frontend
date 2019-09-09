<template>
  <v-container class="text-xs-center px-0">
    <v-layout column wrap class="my-5 px-2">
      <v-flex xs12>
        <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
          <span class="super-bold">
            pedais
            <span class="orange--text">Agendados</span>
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
        <v-flex
          xs12
          sm6
          md3
          v-for="pedal in pedais"
          :key="pedal.nome_ou_destino"
          style="margin-bottom: 20px"
        >
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
  mounted() {
    this.$store.dispatch("pedais/getAll");
  },
  computed: {
    pedais() {
      return this.$store.getters["pedais/pedaisParaParticipar"];
    }
  }
};
</script>
<style scope>
.lista-pequena {
  height: 35px;
}
</style>
