<template>
  <v-layout column wrap class="my-5" align-center>
    <v-flex xs12 sm4 class="my-4">
      <div class="text-xs-center">
        <h2 class="display-2">
          Pedais
          <span class="yellow--text text--darken-4 font-weight-medium">Agendados</span>
        </h2>
      </div>
    </v-flex>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md3 v-for="pedal in pedais" :key="pedal.nome">
          <v-card elevation="2" transparent class="colored-border">
            <v-layout row>
              <v-flex xs7>
                <v-card tile style="border-radius:50%" flat>
                  <v-img :src="pedal.logo" aspect-ratio="1" class="grey lighten-2"></v-img>
                </v-card>
              </v-flex>
              <v-flex xs3 style="margin-left:10%">
                <v-card tile style="border-radius:50%" flat>
                  <v-img :src="require('@/assets/img/logo.png')" aspect-ratio="1" class="lighten-2"></v-img>
                </v-card>
              </v-flex>
            </v-layout>
            <v-card-title primary-title class="layout justify-center">
              <div class="text-md-center">
                <div class="headline text-xs-center dark-grey--text">{{ pedal.nome}}</div>
                <span>Sábado</span>
              </div>
            </v-card-title>
            <v-card-text>
              <v-list>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Nível: {{ pedal.nivel }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Distância: {{ pedal.distancia }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Terreno: {{ pedal.terreno }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Dia: {{ pedal.dia }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Hora:{{ pedal.hora }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Encontro:</v-list-tile-title>
                    <v-list-tile-sub-title class="black--text">{{ pedal.encontro }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<style scoped>
.colored-border {
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  border-color: #fc8600;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin: 0px 05px 0px 05px;
  border-radius: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      pedais: [
        {
          nome: "Pedal Alto da XV",
          logo: require("@/assets/img/alto.jpg"),
          nivel: "Medio",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto"
        },
        {
          nome: "Pedal Alto da XV",
          logo: require("@/assets/img/norte.jpg"),
          nivel: "avançado",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto"
        },
        {
          nome: "Pedal Alto da XV",
          logo: require("@/assets/img/acc.jpg"),
          nivel: "Medio",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto"
        },
        {
          nome: "Pedal Alto da XV",
          logo: require("@/assets/img/bikecheri.jpg"),
          nivel: "Medio",
          distancia: "70Km",
          terreno: "Misto",
          dia: "10/05",
          hora: "14:30",
          encontro: "Largo Isaak Lazarotto"
        }
      ]
    };
  }
};
</script>