<template>
  <v-card elevation="2" transparent class="colored-border">
    <v-flex xs12>
      <v-card-text>
        <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
          <span style="letter-spacing: 1px;" class="super-bold">
            <span class="orange--text">Redefinição de senha</span>
          </span>
        </h2>
      </v-card-text>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap style="padding:10px">
        <v-card-text>
          <form @keyup.enter="submit">
            <v-text-field
              class="my-input"
              outline
              required
              color="orange"
              v-model="email"
              label="Email"
              name="email"
              type="email"
            />
            <v-flex xs12>
              <v-btn large round class="orange" dark ripple @click.native="submit">Recuperar senha</v-btn>
            </v-flex>
          </form>
        </v-card-text>
      </v-layout>
    </v-flex>
  </v-card>
</template>

<script>
import getProperty from "~/utils/getProperty"; // eslint-disable-line
export default {
  auth: false,
  props: ["redirect"],
  data: () => ({
    email: ""
  }),
  methods: {
    async submit() {
      if (!(await this.$validator.validateAll())) return;
      const fields = { ...this.$data };
      try {
        await this.$store.dispatch("auth/passwordReset", { fields });
        this.$emit("success");
      } catch (error) {
        const backendErrors = getProperty(error, "response.data");
        if (backendErrors) this.showBackendErrors(backendErrors);
      }
    },
    showBackendErrors(obj) {
      this.errors.clear();
      Object.keys(obj).forEach(field => {
        obj[field].forEach(msg => {
          if (field === "non_field_errors") {
            field = "new_password2";
          }
          this.errors.add(field, msg);
        });
      });
    }
  }
};
</script>