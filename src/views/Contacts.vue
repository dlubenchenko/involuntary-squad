<template>
	<div class="container">
		<div class="text-center">
			<h2 class="mt-4">Котакти</h2>
			<hr />
		</div>
		<loader v-if="loading" />
		<div v-else>
			<div>
				<h5 class="text-center mb-3 mt-4">Введіть назву/дві літери/код авіакомпанії</h5>
				<hr class="mb-4">
				<v-select
					@input="selectedAlHandler"
					class="contacts-output"
					:options="selectedAlHeader"
				></v-select>
			</div>
			<div class="mt-4" v-if="outputAl.length">
				<my-collapse class="contacts-output" :options="outputAl" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		options: [
			'Head_Office',
			'UA',
			'RU',
			'DE',
			'KZ',
			'USA',
			'EE',
			'AT',
			'RO_MD',
			'PL',
			'TR',
			'ES',
			'FR',
			'NL',
			'IL',
		],
		alHeaders: null,
		alContacts: null,
		selectedAlHeader: [],
		selectedAl: null,
		loading: true,
		outputAl: [],
	}),
	async mounted() {
		const id = { value: process.env.VUE_APP_CONTACTS }
		console.clear()

		const reason = await this.$store.dispatch('fetchGoogle', id)

		this.alContacts = this.alHeaders = await this.$store.dispatch(
			'formatGTable',
			reason.table.rows
		)
		this.alHeaders.map((e) =>
			this.selectedAlHeader.push(e.slice(0, 3).join('  / '))
		)
		this.loading = false
	},
	methods: {
		selectedAlHandler(e) {
			if (e) {
				this.selectedAl = e.split('/')
				let temp = this.alContacts.filter(
					(e) =>
						e[0].trim() === this.selectedAl[0].trim() ||
						(e[2].trim() === this.selectedAl[2].trim() &&
							e[1].trim() === this.selectedAl[1].trim())
				)
				let temp1 = []
				for (let i = 0; i < temp[0].length / 3; i++) {
					temp1[i] = temp[0].slice(i * 3, i * 3 + 3)
				}
				let temp2 = temp1.slice(1)
				temp2.forEach((e, i) => e.unshift(this.options[i]))
				this.outputAl = temp2.filter(e => e.slice(1).join('') !== '')
			}
		},
	},
}
</script>

<style>
.contacts-output {
	margin: 0 auto;
}
</style>
