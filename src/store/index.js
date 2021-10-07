import Vue from 'vue'
import Vuex from 'vuex'
import parser from '@/store/parser'
import auth from '@/store/auth'
import info from '@/store/info'
import output from '@/store/output'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		error: null,
	},
	mutations: {
		setError(state, error) {
			state.error = error
		},
		clearError(state) {
			state.error = null
		}
	},
	getters: {
		error: s => s.error
	},
	actions: {
		formatGTable({ dispatch, commit}, table) {
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
						const response = JSON.parse(text.substr(47).slice(0, -2))
						return response
					})
			} catch (e) {
				console.log(e)
			}
		},
	},
	modules: {
		parser, auth, info, output
	},
})
