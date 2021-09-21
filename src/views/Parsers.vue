<template>
  <div>
    <div class="page-title">
      <h3>Парсер</h3>
    </div>
    <div>

      <form class="form">
        <!--buttons-->
        <div class="btn-grope m4">
          <ButtonGroup
              v-for="option of parserOptions"
              :option="option"
              :key="option"
              @create-field="createParserField"
          />
        </div>

        <div class="row" v-if="showParserInput">
          <div class="input-field col s12">
            <textarea
                id="parser-input"
                class="materialize-textarea"
                v-model="parserInput"
                onscroll="true"
            ></textarea>
            <label for="parser-input">Вставити строку {{ inputLabel }}</label>
          </div>
        </div>


        <div class="col s12 center parser-output" v-if="parserOutput">
          <p v-html="parserOutput"></p>
          <p>{{ new Date() | date('datetime') }}</p>
        </div>


        <div class="btn-grope">
          <button
              class="btn waves-effect waves-light amber darken-4"
              type="submit"
              v-if="showParserInput"
              @click.prevent="parseString"
          >
            ТИЦЬ
            <i class="material-icons right">send</i>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import ButtonGroup from "@/components/app/ButtonGroup";
import {required, minLength} from 'vuelidate/lib/validators'
import dateFilter from "@/filters/date.filter";

export default {
  name: 'parser',
  data: () => ({
    parserOptions: ['Kiwi', 'GloryHoliday', 'FlyArystan', 'S7', 'SkyUP', 'TUI', 'DOCS'],
    showParserInput: false,
    showParserOutput: false,
    inputLabel: '',
    parserInput: '',
    parserOutput: '',
    result: '',
  }),
  validations: {
    parserInput: {required, minLength: minLength(10)}
  },
  components: {ButtonGroup, dateFilter},
  methods: {
    createParserField(e) {
      this.showParserInput = true
      this.inputLabel = e
      this.parserOutput = ''
      this.parserInput = ''
      return e
    },
    async parseString() {
      if (this.parserInput) {
        this.parserOutput = this.$store.state[this.inputLabel](this.parserInput)

        try {
          await this.$store.dispatch('createRecord', {
            parserInput: this.parserInput.split('\n'),
            parserOutput: this.parserOutput.split('</br>'),
            date: dateFilter(new Date(), 'datetime').toString(),
            option: this.inputLabel,
            choice: 'parser'
          })
        } catch (e) {}
      }
    }
  }
}
</script>