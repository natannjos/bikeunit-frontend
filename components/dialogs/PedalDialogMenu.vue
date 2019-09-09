<template>
  <span>
    <v-list two-line>
      <template v-for="item in pedais">
        <v-list-tile :key="item.id" avatar @click.stop="openDialog(item)">
          <v-list-tile-avatar>
            <img :src="item.logoGrupo" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.nome_ou_destino"></v-list-tile-title>
            <v-list-tile-sub-title>{{item.data}} - {{item.hora}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>

    <v-dialog v-model="dialog" max-width="510">
      <card-pedal-detail :pedal="currentPedal" v-on:close="dialog=false" :participando="true" />
    </v-dialog>
  </span>
</template>

<script>
import CardPedalDetail from "../cards/CardPedalDetail";
export default {
  props: ["pedais"],

  components: {
    CardPedalDetail
  },
  data() {
    return {
      dialog: false,
      currentPedal: ""
    };
  },
  methods: {
    openDialog(item) {
      this.dialog = true;
      this.currentPedal = item;
    }
  }
};
</script>