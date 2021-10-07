<template>
	<div class="container">
		<div class="text-center">
			<h2 class="mt-4">Переклади причин</h2>
			<hr />
		</div>
    <div v-if="loading">
      <loader/>
    </div>
		<div v-else class="row">
			<div class="col-lg-4 col-md-12">
				<div class="col-12 mt-3">
          <h6>Мова:</h6>
					<v-select :options="languages" @input="language">
            <template #no-options="{ search, searching, loading }">
              Упс... немає такої мови
            </template>
          </v-select>
				</div>
				<div class="col-12 mt-3">
          <h6>Причина:</h6>
          <v-select :options="options" @input="reasonHandler">
            <template #no-options="{ search, searching, loading }">
              Упс... немає такого перекладу
            </template>
          </v-select>
				</div>
			</div>
			<div class="col-lg-8 col-md-12 translate-output">
				<p class="output text-center mt-5">{{ translateOutput }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import dateFilter from "@/filters/date.filter";

export default {
	name: 'translates',
  data: () => ({
		options: [],
		languages: [],
		reason: [],
		translates: [],
		selectedReason: null,
    selectedLanguage: '',
		output: null,
		objLanguages: [],
    loading: true,
	}),
	async mounted() {
		console.clear()
		const id = { value: process.env.VUE_APP_TRANSLATES }
		const reason = await this.$store.dispatch('fetchGoogle', id)
		const temp = await this.$store.dispatch('formatGTable', reason.table.rows)
		let tempArr = []

		temp
			.filter((e) => e[0] !== 'Название')
			.forEach((e) => {
				this.options.push(e[0])
			})

		this.languages = temp[0].filter((e) => e !== '' && !e.includes('Название'))
		temp.forEach((e) => {
			tempArr.push(e.slice(0, 1).join(''))
		})

		this.reason = tempArr.slice(1)

		this.translates = temp.slice(1).map((e) => e.slice(1)).map(e => e.slice(0, 22))

		this.translates.map((el, i) =>
			el.map(
				(e, j) =>
					(this.objLanguages[this.objLanguages.length] = {
						id: this.objLanguages.length + 1,
						language: this.languages[j].trim(),
						reason: this.reason[i],
						translate: e,
					})
			)
		)
    this.loading = false
	},
	methods: {
		language(e) {
			this.selectedLanguage = e
		},
		reasonHandler(e) {
			this.selectedReason = e
    },
    async outputHandler(info) {
      await this.$store.dispatch('createOutput', info)
    }
	},
  computed: {
    translateOutput() {
        if (this.selectedLanguage && this.selectedReason) {
          this.output = this.objLanguages.filter(
              (e) =>
                  Object.values(e).includes(this.selectedReason) &&
                  Object.values(e).includes(this.selectedLanguage)
          )
          let translateInfo = {
            agent: this.$store.getters.info.name,
            type: 'Translates',
            status: this.output ? 'OK' : 'ERROR',
            date: dateFilter(new Date, 'datetime').toString(),
            input: `${this.output[0].language}: ${this.output[0].reason}`,
            output: this.output
          }
          this.outputHandler(translateInfo)
          if (this.output[0].translate.length > 1) {
            return this.output[0].translate.replaceAll('\r', ' ').trim()
          } else {
            return 'Переклад відсутній'
          }
        } else {
          return 'Оберіть мову та причину'
        }
    },
  }
}
</script>

<style>
.translate-output {
	white-space: pre-wrap;
}
</style>
