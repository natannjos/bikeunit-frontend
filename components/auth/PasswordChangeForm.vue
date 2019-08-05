<template>
  <v-card elevation="2" transparent class="colored-border">
    <v-flex xs12>
      <v-card-text>
        <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
          <span style="letter-spacing: 1px;" class="super-bold">
            <span class="orange--text">Alterar Senha</span>
          </span>
        </h2>
      </v-card-text>
    </v-flex>
    <v-flex xs12>
      <v-card-text>
        <form @keyup.enter="submit">
          <v-text-field
            class="my-input"
            outline
            color="orange"
            v-model="new_password1"
            name="new_password1"
            label="Nova Senha"
            hint="Informe a nova senha"
            :counter="new_password1.length"
            min="8"
            max="128"
            :append-icon="pw1 ? 'visibility_off' : 'visibility'"
            @click:append="() => (pw1 = !pw1)"
            :type="pw1 ? 'password' : 'text'"
            required
          />
          <v-text-field
            class="my-input"
            outline
            color="orange"
            v-model="new_password2"
            name="new_password2"
            label="Confirmação de Senha"
            hint="Confirme a nova senha"
            :append-icon="pw2 ? 'visibility_off' : 'visibility'"
            @click:append="() => (pw2 = !pw2)"
            :type="pw2 ? 'password' : 'text'"
            required
          />
          <v-text-field
            class="my-input"
            outline
            color="orange"
            v-model="old_password"
            name="old_password"
            label="Senha Antiga"
            hint="Informe a senha antiga"
            :append-icon="old ? 'visibility_off' : 'visibility'"
            @click:append="() => (old = !old)"
            :type="old ? 'password' : 'text'"
            required
          />
          <v-btn @click.native="submit" large round class="orange" dark>Campos inválidos</v-btn>
        </form>
      </v-card-text>
    </v-flex>
  </v-card>
</template>

<script>
import getProperty from "~/utils/getProperty"; // eslint-disable-line
export default {
  props: ["redirect"],
  data: () => ({
    new_password1: "",
    new_password2: "",
    old_password: "",
    pw1: true,
    pw2: true,
    old: true
  }),
  methods: {
    resetData() {
      Object.assign(this.$data, this.$options.data());
    },
    async submit() {
      if (!(await this.$validator.validateAll())) return;
      const fields = { ...this.$data };
      try {
        await this.$store.dispatch("auth/passwordChange", { fields });
        this.$emit("success");
        this.resetData();
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