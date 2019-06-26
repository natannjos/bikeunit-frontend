<template>
  <v-container grid-list-md text-xs-center>
    <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
      <span style="letter-spacing: 1px;" class="super-bold">
        admin
        <span class="orange--text">Grupo</span>
      </span>
    </h2>
    <div v-for="pedal in pedais" :key="pedal.nome" style="margin-top:20px">
      <v-card elevation="2" transparent class="colored-border">
        <v-layout row wrap style="margin-bottom:20px;" justify-center>
          <v-flex xs12 md4 lg4>
            <v-layout row style="margin-top:10px" justify-center>
              <v-flex xs3></v-flex>
              <v-flex xs4 style="padding-left: 10px">
                <v-card
                  style="border-radius:50%; border-style:solid; border-width:1px; border-color: #ffab00"
                  flat
                >
                  <v-img :src="pedal.logo" aspect-ratio="1" class="grey lighten-2"></v-img>
                </v-card>
              </v-flex>
              <v-flex xs2 style="margin-left:10%">
                <v-card tile style="border-radius:50%" flat>
                  <v-img
                    :src="require('../static/images/logo.png')"
                    aspect-ratio="1"
                    class="lighten-2"
                  ></v-img>
                </v-card>
              </v-flex>
            </v-layout>

            <v-layout row wrap justify-center align-center>
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">{{ pedal.grupo }}</div>
              </v-card-title>
              <v-card-text style="padding-top:0">
                <div class="title">
                  {{ pedal.destino }}:
                  <span v-if="pedal.preco">{{ pedal.preco }}</span>
                  <span v-else>Gratuito</span>
                </div>
                <v-list>
                  <v-list-tile>
                    <v-layout align-center justify-start row fill-height>
                      <v-flex xs12>
                        <v-layout align-center justify-center row fill-height>
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
                    <v-layout align-center justify-start row fill-height>
                      <v-flex xs12>
                        <v-layout align-center justify-center row fill-height>
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
                    <v-layout align-center justify-center row fill-height>
                      <v-flex xs12>
                        <v-layout align-center justify-center row fill-height>
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
                <v-layout row justify-center>
                  <v-btn round class="orange mt-3" dark>
                    Editar&nbsp;&nbsp;&nbsp;
                    <v-icon>edit</v-icon>
                  </v-btn>
                </v-layout>
              </v-card-text>
            </v-layout>
          </v-flex>

          <v-flex sm1 :class="dividerClass">
            <v-divider :vertical="$vuetify.breakpoint.mdAndUp"></v-divider>
          </v-flex>

          <v-flex xs12 md6 lg6>
            <v-layout row wrap justify-center align-center style="margin-top:10px">
              <v-flex xs12>
                <v-icon size="70" color="orange">people</v-icon>
              </v-flex>
              <v-flex xs12>
                <div
                  class="title orange--text super-bold"
                >Lista de Participantes Pedal: {{pedal.nome}}</div>
                <span class="title orange--text super-bold">qtd: {{pedal.participantes.length}}</span>
              </v-flex>
              <v-flex xs12 style="max-height:100%">
                <v-layout wrap align-center justify-center row>
                  <v-flex xs12 sm12 offset-sm2>
                    <v-list style="margin-right:20px">
                      <v-list-tile v-for="item in pedal.participantes" :key="item.title" avatar>
                        <v-list-tile-avatar>
                          <img :src="item.avatar">
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title v-text="item.nome"></v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                    <v-layout row justify-center>
                      <v-btn round class="orange" dark style="margin-bottom:20px">
                        Download&nbsp;&nbsp;&nbsp;
                        <v-icon>arrow_downward</v-icon>
                      </v-btn>
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    dividerClass() {
      return this.$vuetify.breakpoint.mdAndUp ? "space-v" : "space-h";
    },

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
.v-list {
  max-height: 250px;
  overflow-y: auto;
}
.space-v {
  margin-top: 35px;
  margin-bottom: 20px;
}
.space-h {
  margin-left: 15px;
  margin-right: 15px;
}
.theme--light.v-divider {
  border-color: rgba(0, 0, 0, 0.5) !important;
}
</style>
