import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import {
	arystan,
	docs,
	glory,
	kiwi,
	s7,
	skyUp,
	tui,
	acrParse,
} from '@/store/parser'
import parserFetch from './parserFetch'
import info from './info'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		error: null,
		'GloryHoliday': glory,
		'Kiwi': kiwi,
		'FlyArystan': arystan,
		'S7': s7,
		'SkyUP': skyUp,
		'TUI': tui,
		'DOCS': docs,
		'ACR': acrParse,
	},
	mutations: {
		setError(state, error) {
			console.log(error)
			state.error = error
		},
		clearError(state) {
			state.error = null
		},
	},
	actions: {
		async fetchAirlines() {
			const res = await fetch(
				`https://script.googleusercontent.com/a/macros/ticketstravelnetwork.com/echo?user_content_key=oE9kX62cQ91G0JaHXENzmYEp_Ml_l89_8-aiY1N_M1OVn8rfU5GwX4xpiNwttYZVnLXiqSnG1O-Bq2hJ9SrvHEdm12U2pp-lm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_nRPgeZU6HP9imV2sZjih4zgvYAWmpNMZJffnCWaVvz3JzkgaHWr9clxyUjkLCm_QS2p9D3MTOKFYRWV0mfjPLC8UOww90mLwiPgEgjIGycxlVTVci-SEy64AkrBPoXqWQslXG4EG404&lib=MyI6LAjNJ4pddlKKjgwOYgKAZcoUUyC-k`
			)
			return await res.json()
		},
	},
	getters: {
		error: (s) => s.error,
	},
	modules: {
		auth,
		info,
		parserFetch,
	},
})
