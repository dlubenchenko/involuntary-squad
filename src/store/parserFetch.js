import firebase from 'firebase/app';

export default {
    actions: {
        async createRecord({commit, dispatch}, {parserInput, parserOutput, date, option, choice}) {
            try {
                const currentUser = firebase.auth().currentUser.email.replaceAll('@', '_').replaceAll('.', '_')
                const parser = await firebase
                    .database()
                if (!parserOutput.join(' ').includes('Некоректний вибір')) {
                    parser
                        .ref(`/users/${currentUser}/${choice}/ok`)
                        .push({input: parserInput, output: parserOutput, date, option})
                    return {parserInput, parserOutput, date, id: parser.key, option}
                }
                    parser
                        .ref(`/users/${currentUser}/${choice}/errors`)
                        .push({input: parserInput, output: parserOutput, date, option})
                    return {parserInput, parserOutput, date, id: parser.key, option}
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
                    .ref(`/users/${currentUser}/${choice}`)
                    .push({temp: info, date})
                return {info, date, id: infoAll.key}
            } catch (e) {
                commit('setError', e)
                throw e
            }
        }
    }
}