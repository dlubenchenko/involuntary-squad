<template>
	<div class="container">
		<div class="text-center">
			<h2 class="mt-4">Парсер</h2>
			<hr />
		</div>
		<main class="container">
			<div class="row">
				<div class="col-lg-3 text-center pt-5">
					<div
						class="btn-group-vertical col-xl-9"
						role="group"
						aria-label="Basic example"
					>
						<my-button
							v-for="(item, i) of parserButtons"
							:key="i"
							:item="item.title"
							@buttonValue="parserHandler"
							class="pt-2 pb-2"
						/>
					</div>
				</div>
				<div class="col-lg" v-if="parser">
					<form>
						<div class="form-group mt-5">
							<my-text-area :item="parser" :value="textAreaValue" @textAreaHandler="textAreaHandler"/>

							<div class="text-center">
								<my-button
									class="mt-3 col-xl-9 col-sm-8"
									:item="confirmButton"
									@buttonValue="parserHandler"
								/>
							</div>

							<div class="mt-5 output text-center" v-if="output">
								<h5>
									<b>Результат</b>
								</h5>
								<p v-html="output"></p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
import dateFilter from "@/filters/date.filter";
export default {
	name: 'pareser',
	data: () => ({
		parserButtons: [
			{ title: 'GloryHoliday', func: 'glory' },
			{ title: 'Kiwi', func: 'kiwi' },
			{ title: 'FlyArystan', func: 'arystan' },
			{ title: 'S7', func: 's7' },
			{ title: 'SkyUp', func: 'skyUp' },
			{ title: 'TUI', func: 'tui' },
			{ title: 'DOCS', func: 'docs' },
			// { title: 'ACR', func: 'acrParse' },
		],
		confirmButton: 'ТИЦЬ',
		parser: '',
		output: '',
		enter: '',
		selected: '',
		textAreaValue: ''
	}),
	methods: {
		parserHandler(e) {
			if (e !== 'ТИЦЬ') {
				this.parser = e
				this.textAreaValue = ''
			} else {
				this.outputHandler()
			}
			this.output = ''
		},
		async outputHandler() {
      try {
        if (this.textAreaValue.length > 10) {
          this.selected = this.parserButtons.filter(k => k.title === this.parser)[0]['func']
          this.output = await this.$store.dispatch(this.selected, this.textAreaValue) + dateFilter(new Date, 'datetime').toString()
          let parserInfo = {
            agent: this.$store.getters.info.name,
            type: 'Parser',
            status: !this.output.toString().includes('Некоректний вибір') ? 'OK' : 'ERROR',
            date: dateFilter(new Date, 'datetime').toString(),
            input: this.textAreaValue,
            output: this.output
          }
          await this.$store.dispatch('createOutput', parserInfo)
        }
      } catch (e) {}

    },
		textAreaHandler(e) {
			this.textAreaValue = e
		}
	},
}
</script>

<style></style>
