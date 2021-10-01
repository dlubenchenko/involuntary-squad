<template>
	<div class="container">
		<div class="text-center">
			<h2 class="mt-4">Переклади причин</h2>
			<hr />
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-12">
				<div class="col-12 mt-3">
					<v-select :options="reason" @input="language"></v-select>
				</div>
				<div class="col-12 mt-3">
					<v-select :options="options" @input="reasone"></v-select>
				</div>
			</div>
			<div class="col-lg-8 col-md-12 translate-output">
				<p class="output text-center">
					{{ translateOutput() }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'translates',
	data: () => ({
		options: [],
		reason: [],
    translates: null,
		selectedLanguage: null,
    selectedReasone: null,
    output: null
	}),
	async mounted() {
		const id = { value: process.env.VUE_APP_TRANSLATES }
		console.clear()
		const reason = await this.$store.dispatch('fetchGoogle', id)
		const temp = await this.$store.dispatch('formatGTable', reason.table.rows)
		this.reason = temp[0].filter((e) => e !== '' && !e.includes('Название'))
		temp
			.filter((e) => e[0] !== 'Название')
			.forEach((e) => {
				this.options.push(e[0])
			})
      this.translates = temp
		// console.log(this.translates)
	},
	methods: {
		language(e) {
			this.selectedLanguage = this.reason.indexOf(e)
		},
		reasone(e) {
			this.selectedReasone = e
		},
    translateOutput() {
      if (this.selectedLanguage && this.selectedReasone) {
        let languageNumber = this.selectedLanguage + 1
        this.output = this.translates.filter(e => e.includes(this.selectedReasone))[0][languageNumber]
        return this.output
      } else {
        return 'Оберіть мову та причину'
      }
    }
	},
}
</script>

<style>
.translate-output {
  white-space: pre-wrap;
}
</style>
