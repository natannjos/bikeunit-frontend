<template>
  <v-card elevation="2" transparent class="colored-border">
    <v-container grid-list-md>
      <form @keyup.enter="submit">
        <v-layout row wrap>
          <v-flex xs12>
            <v-layout justify-center align-center row>
              <v-flex xs3>
                <h3>Sua Foto</h3>
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
              </v-flex>
              <v-flex xs9>
                <v-text-field
                  outline
                  color="orange"
                  class="my-input"
                  v-model.trim="username"
                  label="Nome de usuário"
                  name="username"
                  prepend-inner-icon="perm_identity"
                  required
                  hint="Apenas letras, números e símbolos @ /. / + / - / _."
                  max="150"
                  :counter="150"
                />
              </v-flex>
            </v-layout>
          </v-flex>

          <v-flex xs12 sm6>
            <v-text-field
              outline
              color="orange"
              class="my-input"
              v-model="first_name"
              label="Primeiro Nome"
              name="first_name"
              data-vv-as="o nome"
              :counter="30"
            />
          </v-flex>
          <v-flex xs12 sm6>
            <v-text-field
              outline
              color="orange"
              class="my-input"
              v-model="last_name"
              label="Último Nome"
              name="last_name"
              :counter="30"
            />
          </v-flex>

          <v-flex xs12>
            <v-text-field
              outline
              color="orange"
              class="my-input"
              v-model="location"
              prepend-inner-icon="location_city"
              label="Cidade"
              name="location"
              :counter="30"
            />
          </v-flex>
          <v-flex xs12>
            <v-menu
              lazy
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              :nudge-left="40"
              max-width="290px"
            ></v-menu>
          </v-flex>
          <!-- <v-flex xs12> -->
          <!-- <v-spacer /> -->
          <v-flex xs12>
            <v-btn @click.native="submit" round dark color="orange" large>Salvar</v-btn>
            <v-btn @click.native="cancel" round dark color="orange" large>Cancelar</v-btn>
          </v-flex>
          <!-- </v-flex> -->
        </v-layout>
      </form>
    </v-container>
  </v-card>
</template>

<script>
import getProperty from "~/utils/getProperty"; // eslint-disable-line
import { checkExist } from "~/api/auth"; // eslint-disable-line
import PictureInput from "~/components/PictureInput.vue";
export default {
  props: ["redirect", "user"],
  components: {
    PictureInput
  },
  data: () => ({
    menu: false,
    avatar_url: "",
    username: "",
    first_name: "",
    last_name: "",
    location: ""
  }),
  computed: {
    formChanged() {
      return Object.keys(this.$props.user).some(
        field => this.$props.user[field] !== this.$data[field]
      );
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
    },
    setUserData() {
      Object.assign(this.$data, { ...this.$props.user });
    }
  },
  created() {
    //this.$validator.extend("unique", {
    //  validate: async (input, field) => {
    //    if (input === this.user[field]) {
    //      return true;
    //    }
    //    const { data } = await this.$axios(checkExist({ [field]: input }));
    //    return data.valid || { data };
    //  },
    //  getMessage: (field, params, { message }) => message
    //});
    this.setUserData();
  }
};
</script>