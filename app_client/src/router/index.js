import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search/Search'
import Home from '@/pages/Home/Home'
import Archive from '@/pages/Archive/Archive'
import Bookmarks from '@/pages/Bookmarks/Bookmarks'
import Bin from '@/pages/Bin/Bin'

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
