<template>
  <v-container grid-list-md text-xs-center>
    <v-card elevation="2" transparent class="colored-border">
      <v-layout row wrap style="margin-bottom:20px; padding-right:20px; padding-left:20px" >
        <v-flex xs12 lg12 md12>
          <v-card-text>
            <h2 class="display-1" style="margin-top:20px; margin-bottom:20px">
              <span style="letter-spacing: 1px;" class="super-bold">
                criar<span class="orange--text">Grupo</span>
              </span>
            </h2>
          </v-card-text>
        </v-flex>
        <v-flex xs12 md6 lg6>
          <v-layout row wrap style="padding:10px">
            <v-flex xs12 md12>
              <v-text-field
                class="my-input"
                outline
                color="orange"
                height="10px"
                :rules="[rules.required]"
                label="Nome do Grupo*"
                prepend-inner-icon="directions_bike"
                placeholder="Nome do Grupo (Obrigatório)"
              ></v-text-field>
            </v-flex>
            <v-flex 12 xs12>
              <v-text-field
                class="my-input"
                outline
                :rules="[rules.required]"
                color="orange"
                height="10px"
                label="Seu Nome*"
                prepend-inner-icon="account_circle"
                placeholder="Obrigatório"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                class="my-input"
                outline
                v-model="email"
                :rules="[rules.required, rules.email]"
                color="orange"
                height="10px"
                label="Seu Email*"
                prepend-inner-icon="alternate_email"
                placeholder="Obrigatório"
              ></v-text-field>
            </v-flex>

            <v-flex xs12>
              <v-text-field
                v-model="password"
                class="my-input"
                outline
                color="orange"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="senha"
                label="Senha"
                hint="Pelo menos 8 caracteres"
                counter
                prepend-inner-icon="lock"
                @click:append="show1 = !show1"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="password2"
                class="my-input"
                outline
                color="orange"
                :append-icon="show2 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="senha2"
                label="Confirmação de Senha"
                hint="Pelo menos 8 caracteres"
                counter
                prepend-inner-icon="lock"
                @click:append="show2 = !show2"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex xs12 md6 lg6>
          <v-layout align-center justify-center fill-height>
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
                removable
                toggleAspectRatio=true
                @change="onChange"
                removeButtonClass="red darken-1"
                radius=50
                ></picture-input>
            </no-ssr>
          </v-layout>
        </v-flex>

          <v-flex xs12>
              <v-btn large round class="orange" dark><b>Salvar</b>
                <v-icon right dark>check</v-icon>
              </v-btn>
            </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
import PictureInput from "~/components/PictureInput.vue";

export default {
  components: {
    PictureInput
  },
  data() {
    return {
      email: "",
      password: "",
      password2: "",
      show1: false,
      show2: false,
      rules: {
        required: value => !!value || "Campo Obrigatório.",
        counter: value => value.length <= 20 || "Max 20 caracteres",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "Email Inválido";
        },
        min: v => v.length >= 8 || "Mínimo 8 caracteres"
      }
    };
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
    }
  }
};
</script>

<style scope>
</style>
