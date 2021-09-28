import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		fetchGoogle(dispatch, id) {
			try {
				const output = fetch(
					`https://docs.google.com/spreadsheets/d/${id.value}/gviz/tq?tqx=out:json`
				)
					.then((res) => res.text())
					.then((text) => {
						const json = JSON.parse(text.substr(47).slice(0, -2))
						console.log(json.table.rows)
						console.log(json.table.cols)
					})
				return output
			} catch (e) {
				console.log(e)
			}
		},
	},
	modules: {},
})
