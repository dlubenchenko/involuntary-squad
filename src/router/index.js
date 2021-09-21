import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase/app'

Vue.use(VueRouter)

const routes = [
	{
		path: '/login',
		name: 'Login',
		meta: { layout: 'empty' },
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/',
		name: 'Home',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/airlines-contacts',
		name: 'airlines-contacts',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/AirlinesContacts.vue'),
	},
	{
		path: '/airlines-info',
		name: 'airlines-info',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/AirlinesInfo.vue'),
	},
	{
		path: '/parsers',
		name: 'parsers',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Parsers.vue'),
	},
	{
		path: '/refunds',
		name: 'refunds',
		meta: { layout: 'main', auth: true, status: 'admin' },
		component: () => import('../views/Refunds.vue'),
	},
	{
		path: '/reissue',
		name: 'reissue',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Reissue.vue'),
	},
	{
		path: '/translates',
		name: 'translates',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Translates.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Profile.vue'),
	},
	{
		path: '/statistic',
		name: 'statistic',
		meta: { layout: 'main', auth: true, status: 'admin' },
		component: () => import('../views/Statistic.vue'),
	},
	{
		path: '/details/:id',
		name: 'details',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Details.vue'),
	},
	{
		path: '/helper',
		name: 'helper',
		meta: { layout: 'main', auth: true },
		component: () => import('../views/Helper.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	const currentUser = firebase.auth().currentUser
	const requireAuth = to.matched.some((record) => record.meta.auth)

	if (requireAuth && !currentUser) {
		next('/login?message=login')
	} else {
		next()
	}
})

export default router
