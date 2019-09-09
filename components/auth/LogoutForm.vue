<template>
  <v-btn @click.native="logout" round large color="orange" dark>Logout</v-btn>
</template>

<script>
export default {
  props: ["redirect"],
  methods: {
    logout() {
      //await this.$store.dispatch("/auth/logout");
      this.$auth.logout();
      this.$router.push(this.redirect);
    }
  }
};
</script>