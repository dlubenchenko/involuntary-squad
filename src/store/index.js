import Vue from 'vue'
import Vuex from 'vuex'
import parser from '@/store/parser'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {},
	getters: {},
	actions: {
		formatGTable({ dispatch, commit }, table) {
			return table
				.map((item) => item.c || '')
				.map((item) => item.map((it, i) => it || ''))
				.map((item) => item.map((it, i) => it.v || ''))
		},

		fetchGoogle({ dispatch, commit }, id) {
			try {
				let temp = null
				return fetch(
					`https://docs.google.com/spreadsheets/d/${id.value}/gviz/tq?tqx=out:json`
				)
					.then((res) => res.text())
					.then((text) => {
						const json = JSON.parse(text.substr(47).slice(0, -2))
						// console.log(json.table.rows)
						// console.log(json.table.cols)
						return json
					})
			} catch (e) {
				console.log(e)
			}
		},
	},
	modules: {
		parser,
	},
})
