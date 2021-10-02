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
				<p class="output text-center" v-if="selectedReasone">
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
    selectedReasone: null,
    output: null
	}),
	async mounted() {
		const id = { value: process.env.VUE_APP_TRANSLATES }
		console.clear()
		const reason = await this.$store.dispatch('fetchGoogle', id)
		const temp = await this.$store.dispatch('formatGTable', reason.table.rows)
		this.reason = temp[0].filter((e) => e !== '' && !e.includes('Название'))
		console.log(this.reason);
		temp
			.filter((e) => e[0] !== 'Название')
			.forEach((e) => {
				this.options.push(e[0])
			})
      this.translates = temp.slice(1)
	  console.log(this.translates);
	},
	methods: {
		language(e) {
			this.selectedLanguage = this.reason.indexOf(e)
		},
		reasone(e) {
			this.selectedReasone = e
		},
    translateOutput() {
      let languageNumber = this.selectedLanguage + 1
      // console.log(this.selectedLanguage);
      this.output = this.translates.filter(e => e.includes(this.selectedReasone))[0]
	//   console.log(this.output);
	//   console.log(this.selectedLanguage + 1);
	//   console.log(this.output[this.selectedLanguage + 1]);
      if (this.output) {
        return this.output
      } else {
        return 'Переклад відсутній'
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
