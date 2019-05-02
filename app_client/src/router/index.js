import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/pages/Search'
import Archive from '@/pages/Archive'
import Bookmarks from '@/pages/Bookmarks'
import Shared from '@/pages/Sharred'
import Bin from '@/pages/Bin'

Vue.use(Router)

export default new Router({
	routes: [
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
				path: '/sharred',
				name: 'Sharred',
				component: Shared
			},
			{
				path: '/bin',
				name: 'Bin',
				component: Bin
			}
	]
})
