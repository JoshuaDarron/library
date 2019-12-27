<template>
	<div id="app">
		<div class="navbar-fixed">
			<nav>
				<div class="nav-wrapper">
					<a href="#" data-target="slide-out" class="sidenav-trigger nav-button">
						<i class="large material-icons">
							menu
						</i>
					</a>
					<ul id="nav-mobile" class="right">
						<li v-if="!token">
							<a href="/login">
								Login
							</a>
						</li>
						<li v-if="!token">
							<a href="/signup">
								Signup
							</a>
						</li>
						<li v-if="token">
							<a href="/login" v-on:click="onSignout">
								Logout
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</div>

		<Dashboard v-if="path != '/login' && path != '/signup'" />
		<router-view v-else />
	</div>
</template>


<script>
import M from "materialize-css"
import 'materialize-css/dist/css/materialize.css'

import Dashboard from "./layouts/Dashboard/Dashboard"

export default {
	name: 'App',

	components: {
		Dashboard
	},

	mounted () {
		M.AutoInit()
	},

	data () {
		return {
			path: window.location.pathname,
			token: localStorage.token || null
		}
	},

	methods: {
		onSignout () {
			localStorage.removeItem('token')
		}
	}
}
</script>


<style>
.nav-wrapper {
	background-color: #3d5afe;
}
</style>
