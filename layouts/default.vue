<template>
  <div id="app">
    <v-app light>
      <topbar></topbar>
      <v-content class="mb-4">
        <nuxt />
      </v-content>
      <my-footer></my-footer>
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
