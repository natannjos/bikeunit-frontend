<template>
  <v-layout column wrap class="my-5" align-center>
    <v-flex xs12>
      <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
        <span class="super-bold">
          pedais
          <span class="orange--text">Agendados</span>
        </span>
      </h2>
    </v-flex>

    <v-container style="margin-top:20px">
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
    </v-container>
  </v-layout>
</template>


<script>
import CardPedal from "./CardPedal";
export default {
  components: {
    CardPedal
  },
  data() {
    return {
      pedais: [
        {
          nome: "Pedal Alto da XV",
          logo:
            "http://bikeunit.com.br/wp-content/uploads/2019/06/12039543_910551375696359_7434603031156574201_n-150x150.jpg",
          nivel: "Medio",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto",
          destino: "Quiriri",
          preco: "70,00",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Clique no botão de edição para alterar esse texto. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
        },
        {
          nome: "Pedal Alto da XV",
          logo:
            "http://bikeunit.com.br/wp-content/uploads/2019/06/20375801_472083346507028_3001683953445299279_n-150x150.jpg",
          nivel: "avançado",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto",
          destino: "Quiriri",
          preco: ""
        },
        {
          nome: "Pedal Alto da XV",
          logo:
            "http://bikeunit.com.br/wp-content/uploads/2019/06/21432777_1487481278028893_8987553334530296972_n-150x150.jpg",
          nivel: "Medio",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto",
          destino: "Quiriri",
          preco: ""
        },
        {
          nome: "Pedal Alto da XV",
          logo:
            "http://bikeunit.com.br/wp-content/uploads/2019/06/240-150x150.jpg",
          nivel: "Medio",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto",
          destino: "Quiriri",
          preco: ""
        }
      ]
    };
  }
};
</script>
<style scope>
.lista-pequena {
  height: 35px;
}
</style>
