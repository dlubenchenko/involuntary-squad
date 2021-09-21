import firebase from 'firebase/app'

export default {
	state: {
		info: {},
		infoAll: {},
	},
	mutations: {
		setInfo(state, info) {
			state.info = info
		},
		clearInfo(state) {
			state.info = {}
		},
		setInfoAll(state, infoAll) {
			state.infoAll = infoAll
		},
		clearInfoAll(state) {
			state.infoAll = {}
		},
	},
	actions: {
		async fetchInfo({ dispatch, commit }) {
			try {
				const currentUser = firebase
					.auth()
					.currentUser.email.replaceAll('@', '_')
					.replaceAll('.', '_')
				const info = (
					await firebase
						.database()
						.ref(`/users/${currentUser}`)
						.once('value')
				).val()
				const infoAll = (
					await firebase
						.database()
						.ref(`/users`)
						.once('value')
				).val()
				commit('setInfo', info)
				commit('setInfoAll', infoAll)
			} catch (e) {}
		},
		async updateInfo({ dispatch, commit, getters }, toUpdate) {
			try {
				const currentUser = firebase
					.auth()
					.currentUser.email.replaceAll('@', '_')
					.replaceAll('.', '_')
				const updateData = { ...getters.info, ...toUpdate }
				await firebase
					.database()
					.ref(`/users/${currentUser}`)
					.update(updateData)
				commit('setInfo', updateData)
			} catch (e) {
				commit('setError', e)
				throw e
			}
		},
	},
	getters: {
		info: (s) => s.info,
		infoAll: (s) => s.infoAll,
	},
}
