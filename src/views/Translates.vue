<template>
  <div>
    <div class="page-title">
      <h3>Переклади причин</h3>
    </div>

    <div v-if="loading" class="center">
      <loader/>
    </div>

    <div v-else>
      <my-select @update="setLanguage" :options="languages" header="Мова"/>
      <my-autocomplete @update="setSelected" :options="reason" :label="'Почніть вводити причину'" style="margin-top: 1rem"/>

      <div class="output parser-output center" v-if="selectedTranslate.length && selectedLanguage.length">
        <p>{{ value() }}</p>
      </div>

      <div class="output parser-output center" v-else>
        <p>Оберіть мову та причину</p>
      </div>
    </div>





  </div>
</template>
<script>
import MySelect from "@/components/UI/MySelect";
import Loader from "@/components/app/Loader";
import MyAutocomplete from "@/components/UI/MyAutocomplete";
import dateFilter from "@/filters/date.filter";

export default {
  name: 'translates',
  data: () => ({
    languages: '',
    reason: '',
    loading: true,
    translates: [],
    selectedTranslate: '',
    selectedLanguage: '',
    selected: ['', ''],
    objLanguages: []
  }),
  components: {MyAutocomplete, Loader, MySelect},
  mounted:
      async function () {
        const spreadsheetId = '1bdE0Jq1vEl__DwMx_1d154UjMnx5ya7Ri1-PE6dZICg'
        await fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
            .then(res => res.text())
            .then(text => {
              const json = JSON.parse(text.substr(47).slice(0, -2))
              let arrTranslates = (Array.from(json.table.rows, e => e['c'])).map(el => Array.from(el, e => e ? e['v'] : e = ''))
              this.languages = arrTranslates[0].filter(el => el !== 'Название' && el !== null && el !== '')
              this.translates = (arrTranslates.filter(el => el[0] !== ('Название'))).map(el => el.slice(1, -4))
              this.reason = Array
                  .from((arrTranslates
                      .filter(el => el[0] !== ('Название')))
                      .map(el => el.slice(0, 1)), k => k[0])
                  .map(e => e.replace('\n', ''))
                  .map(e => e.replace('\r', ''))
                  .map(e => e.trim())

              // console.log('Languages: ', arrTranslates[0].filter(el => el !== 'Название' && el !== null && el !== ''))
              // console.log((arrTranslates.filter(el => el[0] !== ('Название'))).map(el => el.slice(1)))
              // console.log((arrTranslates.filter(el => el[0] !== ('Название'))).map(el => el.slice(0, 1)))
              // console.log(this.translates)
              // console.log(this.languages)
              // console.log(this.reason)
              // console.log(arrTranslates)
              this.translates.map((el, i) => el.map((e, j) => this.objLanguages[this.objLanguages.length] = ({
                id: this.objLanguages.length + 1,
                language: this.languages[j],
                reason: this.reason[i],
                translate: e
              })))
              console.log(this.objLanguages)
              this.loading = false
            })
      },
  methods: {
    setLanguage(e) {
      this.selectedLanguage = this.languages[e]
      // console.log(this.languages[e])
    },
    setSelected(e) {
      this.selectedTranslate = e
      // console.log(e)
    },
    value() {
      this.output = this.objLanguages.filter(e => Object.values(e).includes(this.selectedLanguage) && Object.values(e).includes(this.selectedTranslate))
      const outputLogger = `${this.output[0].language}: ${this.output[0].reason}`
      // console.log(outputLogger)
      this.valueHandler(outputLogger)
      if (this.output[0].translate.length > 1) {
        return this.output[0].translate
      }
      return 'Переклад відсутній'
    },
    async valueHandler(e) {

      try {
        await this.$store.dispatch('createInfo', {
          info: e,
          date: dateFilter(new Date(), 'datetime').toString(),
          choice: 'info/translate'
        })
      } catch (er) {}
    }
  },
}
</script>

<style>
.output {
  white-space: pre-wrap;
}
</style>