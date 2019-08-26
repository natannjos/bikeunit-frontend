<template>
  <v-container grid-list-md text-xs-center>
    <v-card elevation="2" transparent class="colored-border">
      <v-layout row wrap style="margin-bottom:20px; padding-right:20px; padding-left:20px">
        <v-flex xs12 lg12 md12>
          <v-card-text>
            <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
              <span style="letter-spacing: 1px;" class="super-bold">
                agendar<span class="orange--text">Pedal</span>
              </span>
            </h2>
          </v-card-text>
        </v-flex>
      </v-layout>
      <create-pedal></create-pedal>
    </v-card>
  </v-container>
</template>

<script>
import CreatePedal from "~/components/forms/CreatePedal";
export default {
  components: {
    CreatePedal
  }
};
</script>
