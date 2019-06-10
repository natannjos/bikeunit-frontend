<template>
  <div id="app">
    <v-app light>
      <topbar></topbar>
      <v-content>
        <nuxt/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Topbar from "~/components/Topbar.vue";
export default {
  components: {
    Topbar
  }
};
</script>
