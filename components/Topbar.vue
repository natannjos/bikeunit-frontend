<template>
  <v-toolbar fixed app color="yellow lighten-5" style="z-index:10000">
    <v-layout align-center justify-center>
      <v-flex xs6>
        <v-flex xs12>
          <v-layout align-center justify-center>
            <a href="/">
              <img src="/images/logo2.png" alt="logo2" height="50px">
            </a>
          </v-layout>
        </v-flex>
      </v-flex>

      <v-flex xs6>
        <v-flex xs12>
          <v-layout align-center justify-center>
            <v-btn icon style="padding-top: 10px">
              <v-badge color="amber accent-4">
                <template v-slot:badge>
                  <span>3</span>
                </template>
                <v-icon large color="grey" medium>directions_bike</v-icon>
              </v-badge>
            </v-btn>
            <v-btn icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
          </v-layout>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-toolbar>
</template>

<script>
export default {};
</script>