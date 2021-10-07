import firebase from "firebase/app";

export default {
    state: {
        info: {}
    },
    mutations: {
        setInfo(state, info) {
            state.info = info
        },
        clearInfo(state) {
            state.info = {}
        }
    },
    actions: {
        async fetchCurrentUserInfo({dispatch, commit}) {
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
                commit('setInfo', info)
            } catch (e) {

            }
        },
        async currentUserInfo({dispatch, commit, getters}, newInfo) {
            try {
                const currentUser = firebase
                    .auth()
                    .currentUser.email.replaceAll('@', '_')
                    .replaceAll('.', '_')
                const updateData = { ...getters.info, ...newInfo }
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
        async createInfo({commit, dispatch}, {info, date, choice}) {
            try {
                const currentUser = firebase.auth().currentUser.email.replaceAll('@', '_').replaceAll('.', '_')
                const infoAll = await firebase
                    .database()
                    .ref(`/users/${currentUser}/info/${choice}`)
                    .push({temp: info, date})
                return {info, date, id: infoAll.key}
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    },
    getters: {
        info: s => s.info
    }
}