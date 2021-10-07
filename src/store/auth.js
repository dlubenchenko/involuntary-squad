import firebase from "firebase/app";

export default {
    actions: {
        async login({dispatch, commit}, {email, password}) {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password)
            } catch (e) {
                commit('setError', e)
            }

        },
        async logout({commit}) {
            try {
                await firebase.auth().signOut()
                commit('clearInfo')
            } catch (e) {
                commit('setError', e)
            }
        },
        getUid() {
            const user = firebase.auth().currentUser
            return user ? user : null
        }
    }
}