import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/pages/Search/Search'
import Home from '@/pages/Home/Home'
import Saved from '@/pages/Saved/Saved'
import Checkedout from '@/pages/Checkedout/Checkedout'
import History from '@/pages/History/History'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'

function guard(to, from, next) {
	if (localStorage.token) next()
	else next('/login')
}

Vue.use(Router)


export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Search',
			component: Search,
			beforeEnter: guard
		},
		{
			path: '/home',
			name: 'Home',
			component: Home,
			beforeEnter: guard
		},
		{
			path: '/saved',
			name: 'Saved',
			component: Saved,
			beforeEnter: guard
		},
		{
			path: '/checkedout',
			name: 'Checkedout',
			component: Checkedout,
			beforeEnter: guard
		},
		{
			path: '/history',
			name: 'History',
			component: History,
			beforeEnter: guard
		},
		{
			path: '/login',
			name: 'Login',
			component: Login
		},
		{
			path: '/signup',
			name: 'Signup',
			component: Signup
		}
	]
})
