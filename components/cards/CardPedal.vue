<template>
  <v-card elevation="2" transparent class="colored-border">
    <v-layout row style="margin-top:10px">
      <v-flex xs7 style="padding-left: 10px">
        <v-card
          tile
          style="border-radius:50%; border-style:solid; border-width:1px; border-color: #ffab00"
          flat
        >
          <v-img
            :src="pedal.logoGrupo"
            lazy-src="https://picsum.photos/id/1077/200?blur=4"
            aspect-ratio="1"
            class="grey lighten-2"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="orange lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs3 style="margin-left:10%">
        <v-card tile style="border-radius:50%" flat>
          <v-img :src="require('@/static/images/logo.png')" aspect-ratio="1" class="lighten-2"></v-img>
        </v-card>
      </v-flex>
    </v-layout>
    <v-card-title primary-title class="layout justify-center">
      <div class="text-md-center">
        <div class="text-xs-center dark-grey--text title">{{ pedal.nomeGrupo }}</div>
      </div>
    </v-card-title>
    <v-card-text>
      <div class="title text-xs-center dark-grey--text font-weight-bold">
        {{ pedal.nome_ou_destino }}:
        <span v-if="pedal.preco">R$ {{ pedal.preco }}</span>
        <span v-else>Gratuito</span>
      </div>
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
              <strong>Data:</strong>
              {{ pedal.data }}
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

      <pedal-dialog :pedal="pedal" v-show="pedal.info" participando="false"></pedal-dialog>

      <v-layout row justify-center v-show="!pedal.info">
        <v-btn round class="amber accent-4 mt-5" dark @click="entrar">
          Participar&nbsp;&nbsp;&nbsp;
          <v-icon>check</v-icon>
        </v-btn>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
import PedalDialog from "../dialogs/PedalDialog";
export default {
  components: {
    PedalDialog
  },
  props: ["pedal"],
  methods: {
    entrar() {
      this.$store.dispatch("pedais/entrarPedal", this.pedal);
    }
  }
};
</script>