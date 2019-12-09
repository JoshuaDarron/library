<template>
<div id="app">
	<nav>
		<div class="nav-wrapper">
			<a href="#" data-target="slide-out" class="sidenav-trigger">
				<i class="large material-icons">
					menu
				</i>
			</a>
		</div>
	</nav>

	<div class="container">
		<div class="row">
			<div class="col s12 m2 l3 xl2">
				<ul id="slide-out" class="sidenav sidenav-fixed">
					<li>
						<div class="user-view">
							<a href="#user">
								<img class="circle" src="http://lorempixel.com/output/nightlife-q-g-640-480-4.jpg">
							</a>
							<a href="#name">
								<span class="black-text name">
									John Doe
								</span>
							</a>
							<a href="#email">
								<span class="black-text email">
									jdandturk@gmail.com
								</span>
							</a>
						</div>
					</li>
					<li>
						<div class="divider"></div>
					</li>
					<router-link to="/search">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									search
								</i>
								Search
							</a>
						</li>
					</router-link>
					<router-link to="/">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									home
								</i>
								Home
							</a>
						</li>
					</router-link>
					<router-link to="/bookmarks">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									bookmark
								</i>
								Bookmarks
							</a>
						</li>
					</router-link>
					<router-link to="/archive">
						<li>
							<a class="waves-effect"  href="#">
								<i class="material-icons">
									archive
								</i>
								Archive
							</a>
						</li>
					</router-link>
					<router-link to="/bin">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									delete
								</i>
								Bin
							</a>
						</li>
					</router-link>
					<li>
						<a class="waves-effect" href="http://spears-phillips.herokuapp.com/" target="_blank">
							<i class="material-icons">
								brush
							</i>
							Developer
						</a>
					</li>
				</ul>
			</div>
			<div class="col s12 m8 l9 xl10">
				<div class="row">
					<router-view/>
				</div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import M from "materialize-css"
import 'materialize-css/dist/css/materialize.css'

export default {
	name: 'App',

	mounted() {
		M.AutoInit()
	}
}
</script>

<style>
.nav-wrapper {
	background-color: #42a5f5;
}
</style>
