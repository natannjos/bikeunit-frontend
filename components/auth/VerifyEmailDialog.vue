<template>
  <v-dialog v-model="dialog" persistent width="100%">
    <v-card elevation="2" transparent class="colored-border text-xs-center">
      <v-card-text class="headline">Registro bem sucedido</v-card-text>
      <v-card-text>
        <div class="subheading">
          Um email de confirmação foi enviado para o seu email {{email}}.
          <br />Por favor, confirme sua conta com o link no e-mail e retorne.
        </div>
        <div>
          <a class="title" v-if="provider" :href="provider.href">{{ provider.name }}</a>
        </div>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="orange--text darken-1" flat="flat" round>@click.native="closeCallback">OK</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "emailSendedInfo",
  data: () => ({
    dialog: true
  }),
  props: {
    closeCallback: {
      type: Function,
      default() {
        this.$emit("close");
      }
    },
    email: {
      type: String
    },
    provider: {
      type: Object
    }
  }
};
</script>