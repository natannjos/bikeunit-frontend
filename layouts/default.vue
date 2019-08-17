<template>
  <div id="app">
    <v-app light>
      <v-container-fluid>
        <topbar></topbar>
        <v-content>
          <nuxt />
        </v-content>
        <my-footer></my-footer>
      </v-container-fluid>
    </v-app>
  </div>
</template>

<script>
import Topbar from "~/components/navigation/Topbar.vue";
import MyFooter from "~/components/MyFooter.vue";
export default {
  components: {
    Topbar,
    MyFooter
  }
};
</script>
