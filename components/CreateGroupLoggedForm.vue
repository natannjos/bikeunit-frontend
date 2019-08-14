<template>
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
      <v-layout wrap align-center justify-center>
        <v-flex xs12 md6 lg6>
          <v-layout wrap align-center justify-center style="padding:10px">
            <v-flex xs12>
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
            <v-layout>
              <v-flex xs4>
                <v-select
                  v-model="estadoGrupo"
                  :items="siglas"
                  color="orange"
                  height="10px"
                  label="Estado"
                  required
                  outline
                  @input="$v.estadoGrupo.$touch()"
                  @blur="$v.estadoGrupo.$touch()"
                  :error-messages="estadoGrupoErrors"
                  prepend-inner-icon="map"
                ></v-select>
              </v-flex>
              <v-flex xs8>
                <v-text-field
                  v-model="cidadeGrupo"
                  class="my-input"
                  outline
                  required
                  color="orange"
                  height="10px"
                  label="Cidade do Grupo*"
                  @input="$v.cidadeGrupo.$touch()"
                  @blur="$v.cidadeGrupo.$touch()"
                  :error-messages="cidadeGrupoErrors"
                  prepend-inner-icon="place"
                  placeholder="Cidade do Grupo(Obrigatório)"
                ></v-text-field>
              </v-flex>
            </v-layout>
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
                :crop="false"
                :toggleAspectRatio="true"
                @change="onChange"
                removeButtonClass="red darken-1"
                radius="50"
                :zIndex="0"
                height="450"
                width="450"
                v-model="logo"
              ></picture-input>
            </no-ssr>
          </v-layout>
        </v-flex>
      </v-layout>
      <v-flex xs12>
        <v-btn large round class="orange" dark ripple @click="submit">
          <b>Salvar</b>
          <v-icon right dark>check</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </form>
</template>

<script>
import PictureInput from "./PictureInput";
import { required, minLength, maxLength } from "vuelidate/lib/validators";
import axios from "axios";
export default {
  components: {
    PictureInput
  },
  data() {
    return {
      nomeGrupo: "",
      estadoGrupo: "",
      cidadeGrupo: "",
      logo: "",
      estados: []
    };
  },
  validations: {
    nomeGrupo: {
      required,
      minLength: minLength(3)
    },
    cidadeGrupo: {
      required,
      minLength: minLength(2)
    },
    estadoGrupo: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(2)
    }
  },
  methods: {
    onChange(logo) {
      console.log("New picture selected!");
      if (logo) {
        console.log("Picture loaded.");
        this.logo = logo;
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
    estadoGrupoErrors() {
      const errors = [];
      if (!this.$v.estadoGrupo.$dirty) return errors;
      !this.$v.estadoGrupo.minLength &&
        errors.push("Campo deve ter no mínimo 2 caracteres");
      !this.$v.estadoGrupo.required && errors.push("Campo Obrigatório.");
      return errors;
    },
    cidadeGrupoErrors() {
      const errors = [];
      if (!this.$v.cidadeGrupo.$dirty) return errors;
      !this.$v.cidadeGrupo.minLength &&
        errors.push("Campo deve ter no mínimo 3 caracteres");
      !this.$v.cidadeGrupo.required && errors.push("Campo Obrigatório.");
      return errors;
    },

    siglas() {
      return this.estados.map(estado => estado.sigla);
    }
  },
  mounted() {
    var headers = {
      "Access-Control-Allow-Origin": "*",
      Accept: "application/json",
      "Content-Type": "application/json"
    };
    axios
      .get(
        "https://servicodados.ibge.gov.br/api/v1/localidades/estados/",
        headers
      )
      .then(res => (this.estados = res.data))
      .catch(err => console.log("Errou: ", err.response));
  }
};
</script>
