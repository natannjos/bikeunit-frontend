<template>
  <v-layout row justify-center>
    <v-btn round class="amber accent-4 mt-5" dark @click.stop="dialog = true">
      Saber Mais&nbsp;&nbsp;&nbsp;
      <v-icon>directions_bike</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" max-width="510">
      <card-pedal-detail :pedal="pedal" v-on:close="close" />
    </v-dialog>
  </v-layout>
</template>

<script>
import CardPedalDetail from "../cards/CardPedalDetail";
export default {
  props: ["pedal"],
  components: {
    CardPedalDetail
  },
  data() {
    return {
      dialog: false
    };
  },
  methods: {
    close() {
      this.dialog = false;
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.titulos {
  font-family: "Roboto", Sans-serif;
  font-weight: 600;
}
</style>

