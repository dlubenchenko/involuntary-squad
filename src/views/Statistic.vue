<template>
	<div>
		<div class="page-title">
			<h3>Історія запитів</h3>
		</div>

		<div class="center" v-if="loading">
			<loader />
		</div>

		<div v-else>
			<!-- <div class="history-chart">
				<canvas></canvas>
			</div> -->

			<section>
				<table class="striped">
					<thead>
						<tr>
							<th>#</th>
							<th>Система</th>
							<th>Дата</th>
							<th>Агент</th>
							<th class="center">Помилка</th>
							<!-- <th>Деталі</th> -->
						</tr>
					</thead>

					<tbody>
						<tr v-for="(el, i) of infoArr" :key="i">
							<td>{{ i + 1 }}</td>
							<td>{{ el.system }}</td>
							<td>{{ el.date | date('datetime') }}</td>
							<td>{{ el.name }}</td>
							<td class="center">
								<span
									:class="
										el.status === 'ok'
											? 'white-text badge teal'
											: 'white-text badge red'
									"
									>
                  {{ el.status === 'ok' ? 'OK' : 'ERROR' }}
                  </span>
							</td>
							<!-- <td>
            <button class="btn-small btn">
              <i class="material-icons">open_in_new</i>
            </button>
          </td> -->
						</tr>
					</tbody>
				</table>
			</section>
		</div>
	</div>
</template>

<script>
import firebase from 'firebase/app'
import Loader from '@/components/app/Loader.vue'
export default {
	components: { Loader },
	name: 'statistic',
	data: () => ({
		loading: true,
		infoAll: null,
		infoArr: [],
	}),
	async mounted() {
		await this.$store.dispatch('fetchInfo')
		this.infoAll = await this.$store.getters.infoAll
		// console.log(this.infoAll);
		for (const key1 in this.infoAll) {
			if (Object.hasOwnProperty.call(this.infoAll, key1)) {
				const element = this.infoAll[key1]
				for (const key2 in element.parser) {
					if (Object.hasOwnProperty.call(element.parser, key2)) {
						const el = element.parser[key2]
						// console.log(el);
						for (const key3 in el) {
							if (Object.hasOwnProperty.call(el, key3)) {
								const e = el[key3]
								// console.log(element.name, e);
								this.infoArr.push({
									status: key2,
									name: element.name,
									date: e.date,
									system: e.option,
								})
							}
						}
					}
				}
			}
		}
		this.infoArr
			.sort((a, b) => {
				if (a.date > b.date) {
					return 1
				}
				if (a.date < b.date) {
					return -1
				}
				// a должно быть равным b
				return 0
			})
			.reverse()
		// console.log(this.infoArr)
		this.loading = false
	},
}
</script>
