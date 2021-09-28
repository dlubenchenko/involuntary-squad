import Vue from 'vue'
import App from './App.vue'
import vSelect from 'vue-select'
import './registerServiceWorker'
import 'vue-select/dist/vue-select.css'
import dateFilter from '@/filters/date.filter'
import components from '@/components/UI'
import router from './router'
import store from './store'

Vue.component('v-select', vSelect)
Vue.filter('date', dateFilter)

components.forEach((component) => {
	Vue.component(component.name, component)
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
