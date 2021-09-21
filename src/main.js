import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import Vuelidate from 'vuelidate'
import VueScrollTo from 'vue-scrollto'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.filter('date', dateFilter)
Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.use(VueScrollTo)
Vue.component('v-select', vSelect)

// переробити
firebase.initializeApp({
	apiKey: 'AIzaSyAw5b58PJCXtPG60oMwbZqV0U4KI9Xu2HU',
	authDomain: 'involuntary-squad.firebaseapp.com',
	databaseURL: 'https://involuntary-squad-default-rtdb.firebaseio.com',
	projectId: 'involuntary-squad',
	storageBucket: 'involuntary-squad.appspot.com',
	messagingSenderId: '878724326346',
	appId: '1:878724326346:web:bda35620d1a1ebaaf6e533',
})

let app

firebase.auth().onAuthStateChanged(() => {
	if (!app) {
		app = new Vue({
			router,
			store,
			render: (h) => h(App),
		}).$mount('#app')
	}
})
