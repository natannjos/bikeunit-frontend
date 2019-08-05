<template>
  <v-layout justify-center align-center column>
    <template v-if="status === 'success'">
      <h3>Conta verificada com sucesso</h3>
      <p>
        Agora você pode
        <router-link :to="{ name: 'auth-login' }">logar</router-link>.
      </p>
    </template>

    <template v-else-if="status === 'fail'">
      <h3>Conta não confirmada.</h3>
      <p>Verifique se o link atual corresponde ao link no email..</p>
      <p>Erro: dados inválidos.</p>
    </template>
  </v-layout>
</template>

<script>
import { emailVerify } from "~/api/auth"; // eslint-disable-line
export default {
  name: "auth-registration-confirm-email",
  middleware: "no-auth",
  async asyncData({ app, params }) {
    let status;
    try {
      await app.$axios(emailVerify(params));
      status = "success";
    } catch (error) {
      status = "fail";
    }
    return { status };
  }
};
</script>