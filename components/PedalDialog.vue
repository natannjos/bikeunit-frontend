<template>
  <v-layout row justify-center>
    <v-btn round class="amber accent-4 mt-5" dark @click.stop="dialog = true">
      Saber Mais&nbsp;&nbsp;&nbsp;
      <v-icon>directions_bike</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="510">
      <v-card class="colored-border">
        <v-layout row class="mt-4" justify-center>
          <v-flex xs3 offset-xs0></v-flex>
          <v-flex xs6 md8>
            <v-layout align-center justify-center row fill-height>
              <v-card
                tile
                style="border-radius:50%; border-style:solid; border-width:1px; border-color: #ffab00"
                flat
              >
                <v-img
                  :src="pedal.logo"
                  aspect-ratio="1"
                  class="grey lighten-2"
                  height="120"
                  width="120"
                ></v-img>
              </v-card>
            </v-layout>
          </v-flex>
          <v-flex xs3>
            <v-layout align-center justify-center row fill-heigh style="padding-right:15px">
              <v-card tile style="border-radius:50%" flat>
                <v-img
                  :src="require('@/assets/img/logo.png')"
                  aspect-ratio="1"
                  class="lighten-2"
                  width="70"
                  height="70"
                ></v-img>
              </v-card>
            </v-layout>
          </v-flex>
        </v-layout>
        <div primary-title class="justify-center mt-3">
          <div class="text-md-center">
            <div
              class="text-xs-center dark-grey--text orange--text titulos"
              style="font-size: 20px;"
            >{{ pedal.nome }}</div>
            <div
              class="text-xs-center dark-grey--text orange--text titulos"
              style="font-size: 17px;"
              v-show="pedal.destino"
            >
              {{ pedal.destino }}
              <span v-show="pedal.preco">: R${{ pedal.preco }}</span>
            </div>
          </div>
        </div>

        <v-list>
          <v-list-tile>
            <v-layout align-center justify-center row fill-height>
              <v-flex xs12>
                <v-layout align-center justify-end row fill-height style="margin-right:20px">
                  <strong>Nível:</strong>
                  {{ pedal.nivel }}
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <strong>Dia:</strong>
                {{ pedal.dia }}
              </v-flex>
            </v-layout>
          </v-list-tile>

          <v-list-tile>
            <v-layout align-center justify-space-around row fill-height>
              <v-flex xs12>
                <v-layout align-center justify-end row fill-height style="margin-right:20px">
                  <strong>Distância:</strong>
                  {{ pedal.distancia }}
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <strong>Hora:</strong>
                {{ pedal.hora }}
              </v-flex>
            </v-layout>
          </v-list-tile>

          <v-list-tile>
            <v-layout align-center justify-space-around row fill-height>
              <v-flex xs12>
                <v-layout align-center justify-end row fill-height style="margin-right:20px">
                  <strong>Terreno:</strong>
                  {{ pedal.terreno }}
                </v-layout>
              </v-flex>
              <v-flex xs12>
                <strong>Enc:</strong>
                {{ pedal.encontro }}
              </v-flex>
            </v-layout>
          </v-list-tile>
        </v-list>
        <hr style="margin: 0 20% 0 20%">
        <v-card-text v-show="pedal.info">
          <v-flex xs12>
            <v-layout align-center justify-space-around>
              <v-flex xs12 align-center flexbox>
                <p class="text-xs-center" style="margin-bottom:0">
                  <v-icon large class="orange--text">directions_bike</v-icon>
                </p>
                <p
                  class="text-xs-center dark-grey--text orange--text titulos"
                  style="font-size: 20px;margin-bottom:0"
                >Informações Adicionais</p>
              </v-flex>
            </v-layout>
            <v-card-text>
              {{pedal.info}}
              <v-layout row justify-center>
                <v-btn round class="orange mt-4" dark @click.stop="dialog = false">
                  Participar&nbsp;&nbsp;&nbsp;
                  <v-icon>check</v-icon>
                </v-btn>
                <v-btn round class="amber accent-3 mt-4" dark @click.stop="dialog = false">
                  Voltar&nbsp;&nbsp;&nbsp;
                  <v-icon>cancel</v-icon>
                </v-btn>
              </v-layout>
            </v-card-text>
          </v-flex>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  props: ["pedal"],
  data() {
    return {
      dialog: false
    };
  }
};
</script>

<style scoped>
.titulos {
  font-family: "Roboto", Sans-serif;
  font-weight: 600;
}
</style>

