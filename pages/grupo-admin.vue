<template>
  <v-container grid-list-md text-xs-center>
    <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
      <span style="letter-spacing: 1px;" class="super-bold">
        admin
        <span class="orange--text">Grupo</span>
      </span>
    </h2>
    <div v-for="pedal in pedais" :key="pedal.nome_ou_destino" style="margin-top:20px">
      <pedal-card-admin :pedal="pedal"></pedal-card-admin>
    </div>
  </v-container>
</template>

<script>
import PedalCardAdmin from "~/components/cards/PedalCardAdmin";
export default {
  components: {
    PedalCardAdmin
  },
  computed: {
    pedais() {
      return this.$store.getters["pedais/allPedais"];
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
