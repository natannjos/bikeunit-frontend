<template>
  <v-footer dark height="auto">
    <v-card flat tile class="white--text text-xs-center card-gradient">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>
      <v-card-text
        class="white--text pt-0"
      >Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 —
        <strong>bikeUnit</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    icons: [
      "fas fa-facebook",
      "fas fa-twitter",
      "fas fa-google-plus",
      "fas fa-linkedin",
      "fas fa-instagram"
    ]
  })
};
</script>

<style scoped>
.card-gradient {
  background-color: transparent;
  background-image: linear-gradient(360deg, #d68700 0%, #ffffff 100%);
}
</style>
