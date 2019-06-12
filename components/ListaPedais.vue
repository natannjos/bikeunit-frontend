<template>
  <v-layout column wrap class="my-5" align-center>
    <v-container style="padding-bottom:0; padding-top:0" grid-list-xl text-xs-center>
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 sm12 md12>
          <h2 class="display-1">
            <span style="letter-spacing: 7px;">
              pedais
              <span class="orange--text">Agendados</span>
            </span>
          </h2>
        </v-flex>
      </v-layout>
    </v-container>
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
        <v-flex xs12 sm6 md3 v-for="pedal in pedais" :key="pedal.nome" style="margin-bottom: 20px">
          <v-card elevation="2" transparent class="colored-border">
            <v-layout row style="margin-top:10px">
              <v-flex xs7 style="padding-left: 10px">
                <v-card
                  tile
                  style="border-radius:50%; border-style:solid; border-width:1px; border-color: #ffab00"
                  flat
                >
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
                <div class="text-xs-center dark-grey--text title">{{ pedal.nome }}</div>
              </div>
            </v-card-title>
            <v-card-text>
              <div class="title text-xs-center dark-grey--text font-weight-bold">Sábado</div>
              <ul>
                <v-list-tile class="lista-pequena">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <strong>Nível:</strong>
                      {{ pedal.nivel }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="lista-pequena">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <strong>Distância:</strong>
                      {{ pedal.distancia }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="lista-pequena">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <strong>Terreno:</strong>
                      {{ pedal.terreno }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="lista-pequena">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <strong>Dia:</strong>
                      {{ pedal.dia }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="lista-pequena">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <strong>Hora:</strong>
                      {{ pedal.hora }}
                    </v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile class="lista-pequena">
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <strong>Encontro:</strong>
                    </v-list-tile-title>
                    <v-list-tile-sub-title class="black--text">{{ pedal.encontro }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </ul>
              <v-btn round class="amber accent-4 mt-5 layout justify-center" dark href="#">
                Saber Mais
                <v-icon>directions_bike</v-icon>
              </v-btn>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-layout>
</template>

<style>
.theme--light.v-sheet {
  background-color: #fff;
  border-color: #fc8600;
  color: rgba(0, 0, 0, 0.87);
}

.colored-border {
  border-color: #fc8600;
  border-style: solid;
  border-width: 1px 1px 1px 1px;
  transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
  margin: 0px 05px 0px 05px;
  border-radius: 20px;
}

.lista-pequena {
  height: 35px;
}

.v-text-field--outline > .v-input__control > .v-input__slot {
  background: transparent !important;
  border-radius: 40px;
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