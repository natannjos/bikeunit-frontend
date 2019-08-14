<template>
  <v-container grid-list-md text-xs-center>
    <v-card elevation="2" transparent class="colored-border">
      <create-group-form></create-group-form>
    </v-card>
  </v-container>
</template>
<script>
import CreateGroupForm from "~/components/CreateGroupForm";
export default {
  components: { CreateGroupForm }
};
</script>