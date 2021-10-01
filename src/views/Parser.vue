<template>
	<div class="container">
		<div class="text-center">
			<h2 class="mt-4">Парсер</h2>
			<hr />
		</div>
		<main class="container">
			<div class="row">
				<div class="col-xl-3 text-center pt-5">
					<div
						class="btn-group-vertical col-xl-9 col-sm-8"
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
				<div class="col-xl" v-if="parser">
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
import {
	skyUp,
	pq1,
	pq2,
	tui2,
	s7_1,
	s7_2,
	s7_3,
	docs1,
	docs4,
	flyarystan1,
	flyarystan2,
	gh,
	kiwi1,
} from '@/temporary/parser2'
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
			{ title: 'ACR', func: 'acrParse' },
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
				this.outputHandler(e)
			}
			this.output = ''
		},
		outputHandler(e) {
			this.selected = this.parserButtons.filter(k => k.title === this.parser)[0]['func']
			this.$store.dispatch(this.selected, this.textAreaValue).then((res) => (this.output = res))
		},
		textAreaHandler(e) {
			this.textAreaValue = e
		}
	},
}
</script>

<style></style>
