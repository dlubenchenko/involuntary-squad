import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from "firebase/app";

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/parser',
		name: 'Parser',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Parser.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		meta: { layout: 'login' },
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/refund',
		name: 'Refund',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Refunds.vue'),
	},
	{
		path: '/reissue',
		name: 'Reissue',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Reissue.vue'),
	},
	{
		path: '/statistic',
		name: 'Statistic',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Statistic.vue'),
	},
	{
		path: '/airlines-info',
		name: 'Airlines-info',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/InfoAl.vue'),
	},
	{
		path: '/contacts',
		name: 'Contacts',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Contacts.vue'),
	},
	{
		path: '/translates',
		name: 'Translates',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Translates.vue'),
	},
	{
		path: '/helper',
		name: 'Helper',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Helper.vue'),
	},
	{
		path: '/profile',
		name: 'Profile',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Profile.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser
	const requireAuth = to.matched.some(record => record.meta.auth)

	if (requireAuth && !currentUser) {
		next('/login?message=login')
	} else {
		document.title = `INVOL SQUAD | ${to.name}`
		next()
	}
})

export default router
