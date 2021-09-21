import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		meta: { layout: 'main' },
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/parser',
		name: 'parser',
		meta: { layout: 'main' },
		component: () => import('../views/Parser.vue'),
	},
	{
		path: '/login',
		name: 'login',
		meta: { layout: 'login' },
		component: () => import('../views/Login.vue'),
	},
	{
		path: '/refund',
		name: 'refund',
		meta: { layout: 'main' },
		component: () => import('../views/Refunds.vue'),
	},
	{
		path: '/reissue',
		name: 'reissue',
		meta: { layout: 'main' },
		component: () => import('../views/Reissue.vue'),
	},
	{
		path: '/statistic',
		name: 'statistic',
		meta: { layout: 'main' },
		component: () => import('../views/Statistic.vue'),
	},
	{
		path: '/airlines-info',
		name: 'airlines-info',
		meta: { layout: 'main' },
		component: () => import('../views/InfoAl.vue'),
	},
	{
		path: '/contacts',
		name: 'contacts',
		meta: { layout: 'main' },
		component: () => import('../views/Contacts.vue'),
	},
	{
		path: '/translates',
		name: 'translates',
		meta: { layout: 'main' },
		component: () => import('../views/Translates.vue'),
	},
	{
		path: '/helper',
		name: 'helper',
		meta: { layout: 'main' },
		component: () => import('../views/Helper.vue'),
	},
	{
		path: '/profile',
		name: 'profile',
		meta: { layout: 'main' },
		component: () => import('../views/Profile.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
