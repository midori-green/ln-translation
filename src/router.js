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
			path: '/intro',
			name: 'Intro',
			// lazy load
			component: () => import(/* webpackChunkName: "about" */ './components/Intro/index.vue'),
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
		}
	]
})
