<template>
<div>
	<div class="container">
		<div class="row">
			<div class="col s12 m2 l3 xl2">
				<ul id="slide-out" class="sidenav sidenav-close sidenav-fixed">
					<li>
						<div class="user-view">
							<a href="#user">
								<!-- <img class="circle" src="http://lorempixel.com/output/nightlife-q-g-640-480-4.jpg"> -->
								<img class="circle" :src="user.image.data">
							</a>
							<a href="#name">
								<span class="black-text name">
									{{`${user.firstName} ${user.lastName}`}}
								</span>
							</a>
							<a href="#email">
								<span class="black-text email">
									{{user.email}}
								</span>
							</a>
						</div>
					</li>
					<li>
						<div class="divider"></div>
					</li>
					<router-link to="/">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									search
								</i>
								Search
							</a>
						</li>
					</router-link>
					<!-- <router-link to="/home">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									home
								</i>
								Home
							</a>
						</li>
					</router-link> -->
					<router-link to="/checkedout">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									bookmark
								</i>
								Checkedout
							</a>
						</li>
					</router-link>
					<router-link to="/saved">
						<li>
							<a class="waves-effect"  href="#">
								<i class="material-icons">
									save
								</i>
								Saved
							</a>
						</li>
					</router-link>
					<router-link to="/history">
						<li>
							<a class="waves-effect" href="#">
								<i class="material-icons">
									history
								</i>
								History
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
import auth from "../../helpers/auth.hlpr"

export default {
	name: 'Dashboard',

	data () {
		return {
			user: {
				email: null,
				firstName: null,
				lastName: null,
				image: {
					data: null
				}
			}
		}
	},

	created () {
		auth.info()
			.then(res => {
				this.user = res.data.userInfo
				
				const base64Flag = 'data:image;base64,'
				const imageStr = this.arrayBufferToBase64(res.data.userInfo.image.data.data)

				this.user.image.data = base64Flag + imageStr
			})
	}, 

	methods: {
		arrayBufferToBase64 (buffer) {
			var binary = ''
			var bytes = [].slice.call(new Uint8Array(buffer))
			bytes.forEach((b) => binary += String.fromCharCode(b))
			return window.btoa(binary)
		}
	}
}
</script>


<style>

</style>
