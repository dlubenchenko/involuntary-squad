import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vSelect from 'vue-select'
import './registerServiceWorker'
import 'vue-select/dist/vue-select.css'
import dateFilter from '@/filters/date.filter'
import VueScrollTo from 'vue-scrollto'
import components from '@/components/UI'
import Vuelidate from 'vuelidate'

import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage';


Vue.component('v-select', vSelect)
Vue.filter('date', dateFilter)
Vue.use(Vuelidate).use(VueScrollTo)

components.forEach((component) => {
	Vue.component(component.name, component)
})

Vue.config.productionTip = false

let customApp = firebase.initializeApp({
	apiKey: process.env.VUE_APP_FIREBASE,
	authDomain: "involuntary-squad.firebaseapp.com",
	databaseURL: "https://involuntary-squad-default-rtdb.firebaseio.com",
	projectId: "involuntary-squad",
	storageBucket: "involuntary-squad.appspot.com",
	messagingSenderId: "878724326346",
	appId: "1:878724326346:web:bda35620d1a1ebaaf6e533"
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
