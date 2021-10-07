import firebase from "firebase/app";

export default {
    actions: {
        async createOutput({commit, dispatch}, info) {
            try {
                const currentUser = firebase
                    .auth()
                    .currentUser.email.replaceAll('@', '_')
                    .replaceAll('.', '_')

                    const parser = await firebase
                        .database()
                        .ref(`/users/${currentUser}/info/${info.type}`)
                        .push(info)
                return info
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}