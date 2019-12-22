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
					<ul id="nav-mobile" class="right hide-on-med-and-down">
						<li>
							<a href="/login">
								Login
							</a>
						</li>
						<li>
							<a href="/signup">
								Signup
								</a>
							</li>
					</ul>
				</div>
			</nav>
		</div>

		<Dashboard v-if="path != '/login' && path != '/signup'" />
		<router-view v-if="path == '/login' || path == '/signup'"/>
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
			path: window.location.pathname
		}
	}
}
</script>


<style>
.nav-wrapper {
	background-color: #3d5afe;
}

.material-icons { 
	color: rgba(0, 0, 0, 0.54); 
}
</style>
