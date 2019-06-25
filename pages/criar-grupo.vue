<template>
  <v-container grid-list-md text-xs-center>
    <v-card elevation="2" transparent class="colored-border">
      <form>
        <v-layout row wrap style="margin-bottom:20px; padding-right:20px; padding-left:20px">
          <v-flex xs12 lg12 md12>
            <v-card-text>
              <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
                <span style="letter-spacing: 1px;" class="super-bold">
                  criar
                  <span class="orange--text">Grupo</span>
                </span>
              </h2>
            </v-card-text>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-layout row wrap style="padding:10px">
              <v-flex xs12 sm3>
                <h3>Sua Foto</h3>
                <v-layout justify-center align-center column>
                  <no-ssr placeholder="Carregando...">
                    <picture-input
                      ref="pictureInput2"
                      accept="image/jpeg, image/png"
                      :custom-strings="{
                  upload: '<h1>Bummer!</h1>',
                  }"
                      crop="false"
                      toggleAspectRatio="true"
                      @change="onChange"
                      zIndex="0"
                      v-model="userImage"
                      width="100"
                      height="100"
                      radius="50"
                      margin="0"
                    ></picture-input>
                  </no-ssr>
                </v-layout>
              </v-flex>
              <v-flex xs12 sm9 style="margin-top:60px">
                <v-text-field
                  v-model="admin"
                  class="my-input"
                  outline
                  @input="$v.admin.$touch()"
                  @blur="$v.admin.$touch()"
                  :error-messages="adminErrors"
                  color="orange"
                  height="10px"
                  label="Seu Nome*"
                  prepend-inner-icon="account_circle"
                  placeholder="Obrigatório"
                ></v-text-field>
              </v-flex>
              <v-flex xs12 md12>
                <v-text-field
                  v-model="nomeGrupo"
                  class="my-input"
                  outline
                  required
                  color="orange"
                  height="10px"
                  label="Nome do Grupo*"
                  @input="$v.nomeGrupo.$touch()"
                  @blur="$v.nomeGrupo.$touch()"
                  :error-messages="nomeGrupoErrors"
                  prepend-inner-icon="directions_bike"
                  placeholder="Nome do Grupo (Obrigatório)"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
                <v-text-field
                  class="my-input"
                  outline
                  v-model="email"
                  :error-messages="emailErrors"
                  color="orange"
                  height="10px"
                  label="Seu Email*"
                  prepend-inner-icon="alternate_email"
                  placeholder="Obrigatório"
                  @input="$v.email.$touch()"
                  @blur="$v.email.$touch()"
                ></v-text-field>
              </v-flex>

              <v-flex xs12>
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
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="password2"
                  class="my-input"
                  outline
                  color="orange"
                  :append-icon="show ? 'visibility' : 'visibility_off'"
                  :type="show ? 'text' : 'password'"
                  name="password2"
                  label="Confirmação de Senha"
                  counter
                  required
                  prepend-inner-icon="lock"
                  @click:append="show = !show"
                  :error-messages="password2Errors"
                  @input="$v.password2.$touch()"
                  @blur="$v.password2.$touch()"
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-flex>
          <v-flex xs12 md6 lg6>
            <v-layout align-center justify-center column>
              <v-flex>
                <h3>Foto do Grupo</h3>
              </v-flex>
              <no-ssr placeholder="Carregando...">
                <picture-input
                  ref="pictureInput"
                  margin="16"
                  accept="image/jpeg, image/png"
                  button-class="btn"
                  :custom-strings="{
                  upload: '<h1>Bummer!</h1>',
                  }"
                  crop="false"
                  toggleAspectRatio="true"
                  @change="onChange"
                  removeButtonClass="red darken-1"
                  radius="50"
                  zIndex="0"
                  height="450"
                  width="450"
                  v-model="image"
                ></picture-input>
              </no-ssr>
            </v-layout>
          </v-flex>

          <v-flex xs12>
            <v-btn large round class="orange" dark ripple @click="submit">
              <b>Salvar</b>
              <v-icon right dark>check</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </form>
    </v-card>
  </v-container>
</template>

<script>
import PictureInput from "~/components/PictureInput.vue";
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";

export default {
  components: {
    PictureInput
  },
  data() {
    return {
      nomeGrupo: "",
      admin: "",
      email: "",
      password: "",
      password2: "",
      show: false,
      image: "",
      userImage: ""
    };
  },
  validations: {
    nomeGrupo: {
      required,
      minLength: minLength(3)
    },
    admin: {
      required,
      minLength: minLength(3)
    },
    password: {
      required,
      minLength: minLength(8)
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
    onChange(image) {
      console.log("New picture selected!");
      if (image) {
        console.log("Picture loaded.");
        this.image = image;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
    submit() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        alert("Formulario enviado");
      }
    }
  },
  computed: {
    nomeGrupoErrors() {
      const errors = [];
      if (!this.$v.nomeGrupo.$dirty) return errors;
      !this.$v.nomeGrupo.minLength &&
        errors.push("Campo deve ter no mínimo 3 caracteres");
      !this.$v.nomeGrupo.required && errors.push("Campo Obrigatório.");
      return errors;
    },
    adminErrors() {
      const errors = [];
      if (!this.$v.admin.$dirty) return errors;
      !this.$v.admin.minLength &&
        errors.push("Campo deve ter no mínimo 3 caracteres");
      !this.$v.admin.required && errors.push("Campo Obrigatório.");
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
        errors.push("Campo deve ter no mínimo 8 caracteres");
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
