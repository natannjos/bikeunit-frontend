<template>
  <v-card elevation="2" transparent class="colored-border">
    <v-flex xs12>
      <v-card-text>
        <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
          <span style="letter-spacing: 1px;" class="super-bold">
            <span class="orange--text">Cadastro</span>
          </span>
        </h2>
      </v-card-text>
    </v-flex>
    <v-flex xs12>
      <v-layout style="padding:10px">
        <v-card-text>
          <form @keyup.enter="submit">
            <v-layout row align-center wrap>
              <v-flex xs12 md3>
                <h3>Sua Foto</h3>
                <v-layout justify-center align-center column>
                  <no-ssr placeholder="Carregando...">
                    <picture-input
                      ref="pictureInput2"
                      accept="image/jpeg, image/png"
                      :custom-strings="{
                  upload: '<h1>Bummer!</h1>',
                  }"
                      :crop="false"
                      :toggleAspectRatio="true"
                      @change="onChange"
                      :zIndex="0"
                      v-model="userImage"
                      width="100"
                      height="100"
                      radius="50"
                      margin="0"
                    ></picture-input>
                  </no-ssr>
                </v-layout>
              </v-flex>
              <v-flex xs12 md9 class="mt-5">
                <v-text-field
                  class="my-input"
                  outline
                  v-model.trim="username"
                  :error-messages="usernameErrors"
                  color="orange"
                  height="10px"
                  label="Nome de usuário"
                  prepend-inner-icon="alternate_username"
                  placeholder="Obrigatório"
                  hint="Apenas letras, números e símbolos @ /. / + / - / _."
                  :counter="15"
                  :max="15"
                  @input="$v.username.$touch()"
                  @blur="$v.username.$touch()"
                ></v-text-field>
              </v-flex>
            </v-layout>
            <v-text-field
              class="my-input"
              outline
              v-model.trim="email"
              :error-messages="emailErrors"
              color="orange"
              height="10px"
              label="Seu Email*"
              prepend-inner-icon="alternate_email"
              placeholder="Obrigatório"
              @input="$v.email.$touch()"
              @blur="$v.email.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="password"
              class="my-input"
              outline
              name="password"
              label="Senha"
              counter
              color="orange"
              :error-messages="passwordErrors"
              :type="show ? 'text' : 'password'"
              @input="$v.password.$touch()"
              @blur="$v.password.$touch()"
              prepend-inner-icon="lock"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              @click:append="show = !show"
            ></v-text-field>
            <v-text-field
              v-model="password2"
              class="my-input"
              outline
              name="password2"
              label="Senha"
              counter
              color="orange"
              :error-messages="password2Errors"
              :type="show ? 'text' : 'password'"
              @input="$v.password2.$touch()"
              @blur="$v.password2.$touch()"
              prepend-inner-icon="lock"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              @click:append="show = !show"
            ></v-text-field>
            <v-flex xs12>
              <v-btn
                large
                round
                class="orange"
                dark
                ripple
                @click.native="submit"
                v-if="!disableButton"
              >Cadastre-se</v-btn>
              <v-btn v-else large disabled round>Cadastre-se</v-btn>
            </v-flex>
          </form>
        </v-card-text>
      </v-layout>
    </v-flex>
  </v-card>
</template>

<script>
import getProperty from "~/utils/getProperty"; // eslint-disable-line
import { checkExist } from "~/api/auth"; // eslint-disable-line
import PictureInput from "../PictureInput";
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs
} from "vuelidate/lib/validators";
export default {
  components: {
    PictureInput
  },
  props: ["redirect"],
  data: () => ({
    username: "",
    email: "",
    password: "",
    password2: "",
    errors: [],
    show: false,
    userImage: ""
  }),
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(15)
    },
    password: {
      required,
      minLength: minLength(3)
    },
    password2: {
      required,
      sameAsPassword: sameAs("password")
    },
    email: {
      required,
      email
    }
  },
  methods: {
    async submit() {
      const { username, email, password, password2 } = this.$data;
      try {
        await this.$store.dispatch("auth/registration", {
          fields: { username, email, password, password2 }
        });
        this.$emit("success", email);
        this.resetData();
      } catch (error) {
        const backendErrors = getProperty(error, "response.data");
        if (backendErrors) this.showBackendErrors(backendErrors);
      }
    },
    onChange(logo) {
      console.log("New picture selected!");
      if (logo) {
        console.log("Picture loaded.");
        this.logo = logo;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    }
  },
  computed: {
    disableButton() {
      return (
        this.usernameErrors.length > 0 ||
        this.emailErrors.length > 0 ||
        this.passwordErrors.length > 0 ||
        this.password2Errors.length > 0 ||
        !this.email ||
        !this.password ||
        !this.password2
      );
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.minLength &&
        errors.push("Campo deve ter no mínimo 3 caracteres");
      !this.$v.username.maxLength &&
        errors.push("Campo deve ter no máximo 15 caracteres");
      !this.$v.username.required && errors.push("Campo Obrigatório.");
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Email Inválido");
      !this.$v.email.required && errors.push("Campo Obrigatório");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Campo deve ter no mínimo 3 caracteres");
      !this.$v.password.required && errors.push("Campo Obrigatório.");
      return errors;
    },

    password2Errors() {
      const errors = [];
      if (!this.$v.password2.$dirty) return errors;
      !this.$v.password2.required && errors.push("Campo Obrigatório.");
      !this.$v.password2.sameAsPassword &&
        errors.push("As senhas devem ser iguais.");
      return errors;
    }
  }
};
</script>