<template>
  <form>
    <v-layout row wrap style="margin-bottom:20px; padding-right:20px; padding-left:20px">
      <v-flex xs12 md6 lg6>
        <v-layout row wrap style="padding:10px">
          <v-flex xs12 md12>
            <v-text-field
              v-model="destino"
              class="my-input"
              outline
              required
              color="orange"
              height="10px"
              label="Nome ou Destino*"
              @input="$v.destino.$touch()"
              @blur="$v.destino.$touch()"
              :error-messages="destinoErrors"
              prepend-inner-icon="directions_bike"
            ></v-text-field>
          </v-flex>
          <v-flex xs12 d-flex>
            <v-flex xs12>
              <v-select
                :items="niveis"
                label="Nível"
                color="orange"
                outline
                v-model="nivelEscolhido"
                prepend-inner-icon="trending_up"
              ></v-select>
            </v-flex>
          </v-flex>
          <v-flex xs12>
            <v-select
              :items="terrenos"
              label="Terreno"
              color="orange"
              outline
              v-model="terrenoEscolhido"
              prepend-inner-icon="terrain"
            ></v-select>
          </v-flex>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-currency-field
                label="Distância"
                outline
                color="orange"
                height="10px"
                v-bind="distancy_config"
                :error-messages="distanciaErrors"
                v-model="distancia"
                prepend-inner-icon="navigation"
                @input="$v.distancia.$touch()"
                @blur="$v.distancia.$touch()"
              ></v-currency-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field
                style="border-radius:20px"
                v-model="encontro"
                outline
                required
                color="orange"
                height="10px"
                label="Local de Encontro*"
                @input="$v.encontro.$touch()"
                @blur="$v.encontro.$touch()"
                :error-messages="encontroErrors"
                prepend-inner-icon="gps_fixed"
              ></v-text-field>
            </v-flex>
          </v-layout>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6 lg6>
        <v-layout row wrap style="padding:10px">
          <v-flex xs12 md6>
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              lazy
              full-width
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  ref="dialog"
                  v-model="dateFormatted"
                  label="Data do Pedal"
                  prepend-inner-icon="event"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                  outline
                  required
                  color="orange "
                  height="10px"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="date"
                scrollable
                locale="pt-br"
                color="amber lighten-1"
                header-color="amber lighten-1"
                :allowed-dates="allowedDates"
              >
                <v-spacer></v-spacer>
                <v-btn flat color="orange" @click="modal = false">Cancel</v-btn>
                <v-btn flat color="orange" @click="$refs.dialog.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
          </v-flex>
          <v-flex xs12 md6>
            <v-dialog
              ref="dialog2"
              v-model="modal2"
              :return-value.sync="hora"
              persistent
              lazy
              full-width
              width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  v-model="hora"
                  label="Hora do Pedal"
                  prepend-inner-icon="access_time"
                  readonly
                  v-on="on"
                  outline
                  required
                  color="orange"
                  height="10px"
                ></v-text-field>
              </template>
              <v-time-picker
                v-if="modal2"
                v-model="hora"
                full-width
                format="24hr"
                color="amber lighten-1"
                header-color="amber lighten-1"
              >
                <v-spacer></v-spacer>
                <v-btn flat color="orange" @click="modal2 = false">Cancel</v-btn>
                <v-btn flat color="orange" @click="$refs.dialog2.save(hora)">OK</v-btn>
              </v-time-picker>
            </v-dialog>
          </v-flex>
          <v-flex xs12>
            <v-textarea
              outline
              name="info"
              label="Informações Adicionais"
              v-model="info"
              color="orange"
              height="250"
            ></v-textarea>
          </v-flex>
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
</template>

<script>
import { required, minLength, decimal } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      destino: "",
      niveis: ["Iniciante", "Médio", "Avançado"],
      nivelEscolhido: ["Iniciante", "Médio", "Avançado"],
      terrenos: ["Terra", "Asfalto", "Misto"],
      terrenoEscolhido: ["Terra", "Asfalto", "Misto"],
      encontro: "",
      distancia: "",
      distancy_config: {
        decimal: ",",
        thousands: ".",
        prefix: "",
        suffix: "Km",
        precision: 2,
        masked: false,
        allowBlank: true,
        min: Number.MIN_VALUE,
        max: Number.MAX_SAFE_INTEGER
      },
      date: new Date().toISOString().substr(0, 10),
      dateFormatted: this.formatDate(new Date().toISOString().substr(0, 10)),
      modal: false,
      hora: null,
      modal2: false,
      info: ""
    };
  },
  validations: {
    destino: {
      required
    },
    encontro: {
      required
    },
    distancia: {
      required,
      decimal
    }
  },
  computed: {
    destinoErrors() {
      const errors = [];
      if (!this.$v.destino.$dirty) return errors;
      !this.$v.destino.required && errors.push("Campo Obrigatório.");
      return errors;
    },
    encontroErrors() {
      const errors = [];
      if (!this.$v.encontro.$dirty) return errors;
      !this.$v.encontro.required && errors.push("Campo Obrigatório.");
      return errors;
    },
    distanciaErrors() {
      const errors = [];
      if (!this.$v.distancia.$dirty) return errors;
      !this.$v.distancia.required && errors.push("Campo Obrigatório.");
      !this.$v.distancia.decimal && errors.push("Distância deve ser decimal.");
      this.distancia < 0 && errors.push("Distância deve ser positiva.");
      return errors;
    },
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (!this.$v.$anyError) {
        alert("Formulario enviado");
      }
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [day, month, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    allowedDates(val) {
      let minDate = new Date(val);
      minDate.setDate(minDate.getDate() + 1);
      return minDate >= new Date();
    }
  }
};
</script>