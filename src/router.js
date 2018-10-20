import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Home/index.vue'),
		},
		{
			path: '/how-it-works',
			name: 'HowItWorks',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/HowItWorks/index.vue')
		},
		{
			path: '/docs',
			name: 'Docs',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Docs/index.vue')
		},
		{
			path: '/papar',
			name: 'Papar',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Docs/index.vue')
		},
		{
			path: '/summary',
			name: 'Summary',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Docs/index.vue')
		},
		{
			path: '/overview',
			name: 'Overview',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Docs/index.vue')
		}
	]
})
