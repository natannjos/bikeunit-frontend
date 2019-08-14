<template>
  <v-container grid-list-md text-xs-center>
    <v-card elevation="2" transparent class="colored-border">
      <create-group-logged-form v-if="isLoggedIn"></create-group-logged-form>
      <create-group-form v-else></create-group-form>
    </v-card>
  </v-container>
</template>
<script>
import CreateGroupForm from "~/components/forms/CreateGroupForm";
import CreateGroupLoggedForm from "~/components/forms/CreateGroupLoggedForm";
export default {
  components: { CreateGroupForm, CreateGroupLoggedForm },
  computed: {
    isLoggedIn() {
      return this.$auth.loggedIn;
    }
  }
};
</script>