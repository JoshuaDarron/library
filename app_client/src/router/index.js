import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Archive from '@/pages/Archive'
import Bookmarks from '@/pages/Bookmarks'
import Home from '@/pages/Home'
import Bin from '@/pages/Bin'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home
		}, 
		{
			path: '/search',
			name: 'Search',
			component: Search
		},
		{
			path: '/archive',
			name: 'Archive',
			component: Archive
		},
		{
			path: '/bookmarks',
			name: 'Bookmarks',
			component: Bookmarks
		},
		{
			path: '/bin',
			name: 'Bin',
			component: Bin
		}
	]
})
