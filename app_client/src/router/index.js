import Vue from 'vue'
import Router from 'vue-router'

import Search from '@/pages/Search/Search'
import Home from '@/pages/Home/Home'
import Saved from '@/pages/Saved/Saved'
import Checkedout from '@/pages/Checkedout/Checkedout'
import History from '@/pages/History/History'
import Login from '@/pages/Login/Login'
import Signup from '@/pages/Signup/Signup'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Search',
			component: Search
		},
		{
			path: '/home',
			name: 'Home',
			component: Home
		},
		{
			path: '/saved',
			name: 'Saved',
			component: Saved
		},
		{
			path: '/checkedout',
			name: 'Checkedout',
			component: Checkedout
		},
		{
			path: '/history',
			name: 'History',
			component: History
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
