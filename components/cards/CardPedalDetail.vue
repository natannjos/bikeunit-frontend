<template>
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
              :src="pedal.logoGrupo"
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
              :src="require('@/static/images/logo.png')"
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
        >{{ pedal.nome_ou_destino }}</div>
        <div
          class="text-xs-center dark-grey--text orange--text titulos"
          style="font-size: 17px;"
          v-show="pedal.nome_ou_destino"
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
            {{ pedal.data }}
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
    <hr style="margin: 0 20% 0 20%" />
    <v-layout justify-center v-show="pedal.info" class="mt-2">
      <v-flex xs12 class="text-xs-center">
        <v-icon large class="orange--text">directions_bike</v-icon>
        <br />
        <span class="orange--text title">Informações Adicionais</span>
      </v-flex>
    </v-layout>
    <v-card-text class="text-xs-center">{{pedal.info}}</v-card-text>
    <v-layout column justify-center align-center>
      <v-flex shrink>
        <v-btn small round class="orange darken-4" dark @click.stop="sair" v-if="participando">
          Sair da Lista&nbsp;&nbsp;&nbsp;
          <v-icon>close</v-icon>
        </v-btn>
        <v-btn small round class="orange mt-4" dark @click.stop="submit" v-else>
          Participar&nbsp;&nbsp;&nbsp;
          <v-icon>check</v-icon>
        </v-btn>
      </v-flex>
      <v-flex shrink>
        <v-btn small round class="amber accent-3 mt-4" dark @click.stop="voltar">
          Voltar&nbsp;&nbsp;&nbsp;
          <v-icon>reply</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-card>
</template>

<script>
export default {
  props: ["pedal", "participando"],
  methods: {
    submit() {
      this.$store.dispatch("pedais/entrarPedal", this.pedal);
      this.voltar();
    },
    sair() {
      this.$store.dispatch("pedais/sairPedal", this.pedal);
      this.voltar();
    },
    voltar() {
      this.$emit("close");
    }
  }
};
</script>