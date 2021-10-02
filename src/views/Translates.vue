<template>
	<div class="container">
		<div class="text-center">
			<h2 class="mt-4">Переклади причин</h2>
			<hr />
		</div>
		<div class="row">
			<div class="col-lg-4 col-md-12">
				<div class="col-12 mt-3">
					<v-select :options="languages" @input="language"></v-select>
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
		languages: [],
		reason: [],
		translates: [],
		selectedReasone: null,
		output: null,
		objLanguages: [],
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

		this.reason = tempArr
			.map((e) => e.replace('\n', ' '))
			.map((e) => e.replace('\r', ''))
			.map((e) => e.trim())

		this.translates = temp.slice(1).map((e) => e.slice(1)).map(e => e.slice(0, 22))

		this.translates.map((el, i) =>
			el.map(
				(e, j) =>
					(this.objLanguages[this.objLanguages.length] = {
						id: this.objLanguages.length + 1,
						language: this.languages[j],
						reason: this.reason[i],
						translate: e,
					})
			)
		)

		// console.log(this.languages);
		// console.log(this.reason);
		// console.log(this.translates);
		console.log(this.objLanguages)
	},
	methods: {
		language(e) {
			this.selectedLanguage = e
		},
		reasone(e) {
			this.selectedReasone = e
		},
		translateOutput() {
			this.output = this.objLanguages.filter(
				(e) =>
					Object.values(e).includes(this.selectedLanguage) &&
					Object.values(e).includes(this.selectedReasone)
			)
			console.log(this.output[0])
			if (this.output[0].translate.length > 1) {
				return this.output[0].translate
			}
			return 'Переклад відсутній'
		},
	},
}
</script>

<style>
.translate-output {
	white-space: pre-wrap;
}
</style>
