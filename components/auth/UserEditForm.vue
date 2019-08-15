<template>
  <v-card elevation="2" transparent class="colored-border">
    <v-flex xs12>
      <v-card-text>
        <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
          <span style="letter-spacing: 1px;" class="super-bold">
            <span class="orange--text">Meus Dados</span>
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
                      v-model="avatar_url"
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
                  v-model="username"
                  :error-messages="usernameErrors"
                  color="orange"
                  height="10px"
                  label="Nome de usuário"
                  prepend-inner-icon="person"
                  placeholder="Obrigatório"
                  hint="Apenas letras, números e símbolos @ /. / + / - / _."
                  :counter="100"
                  :max="100"
                  @input="$v.username.$touch()"
                  @blur="$v.username.$touch()"
                ></v-text-field>
              </v-flex>
            </v-layout>

            <v-flex xs12>
              <v-btn
                large
                round
                class="orange"
                dark
                ripple
                @click.native="submit"
                v-if="!disableButton"
              >Salvar</v-btn>
              <v-btn v-else large disabled round>Salvar</v-btn>
              <v-btn large round class="orange darken-4" dark ripple>
                <nuxt-link :to="{ name: 'index' }" class="no-decoration">Cancelar</nuxt-link>
              </v-btn>
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
import PictureInput from "~/components/PictureInput.vue";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
export default {
  props: ["redirect", "user"],
  validations: {
    username: {
      required,
      minLength: minLength(3),
      maxLength: maxLength(100)
    }
  },
  components: {
    PictureInput
  },
  data: () => ({
    avatar_url: "",
    username: ""
  }),
  computed: {
    formChanged() {
      return Object.keys(this.$props.user).some(
        field => this.$props.user[field] !== this.$data[field]
      );
    },

    disableButton() {
      return this.usernameErrors.length > 0 || !this.username;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      !this.$v.username.minLength &&
        errors.push("Campo deve ter no mínimo 3 caracteres");
      !this.$v.username.maxLength &&
        errors.push("Campo deve ter no máximo 100 caracteres");
      !this.$v.username.required && errors.push("Campo Obrigatório.");
      return errors;
    }
  },
  methods: {
    cancel() {
      this.$emit("cancel");
      this.$router.back();
    },
    onChange(logo) {
      console.log("New picture selected!");
      if (logo) {
        console.log("Picture loaded.");
        this.avatar_url = logo;
      } else {
        console.log("FileReader API not supported: use the <form>, Luke!");
      }
    },
    async submit() {
      if (!(await this.$validator.validateAll())) return;
      try {
        await this.$store.dispatch("auth/editUser", {
          fields: { ...this.$data }
        });
        this.$emit("success");
        this.$router.push(this.$props.redirect);
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
            field = "password2";
          }
          this.errors.add(field, msg);
        });
      });
    }
  },
  created() {
    this.username = this.$auth.user.username;
  }
};
</script>

<style scoped>
.no-decoration {
  text-decoration: none;
}
</style>