<template>
<div>
	<div class="container">
		<div class="row">
			<div class="col s12 m2 l3 xl2">
				<ul id="slide-out" class="sidenav sidenav-close sidenav-fixed">
					<li>
						<div class="user-view">
							<router-link to="/profile">
								<img v-if="imageLink" class="circle" :src="imageLink">
								<img v-else class="circle" src="https://cdn4.iconfinder.com/data/icons/seo-web-blue-1/100/seo__web_blue_1_25-512.png">
							</router-link>
							<router-link to="/profile">
								<span class="black-text name">
									{{`${user.firstName} ${user.lastName}`}}
								</span>
							</router-link>
							<router-link to="/profile">
								<span class="black-text email">
									{{user.email}}
								</span>
							</router-link>
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
					data: null,
					contentType: null
				}
			},
			imageLink: null
		}
	},

	created () {
		auth.info()
			.then(res => {
				this.formatAndStoreUser(res)
				
				if (res.data.userInfo.image.data) {
					const base64Flag = 'data:image;base64,'
					const imageStr = this.arrayBufferToBase64(res.data.userInfo.image.data.data)
	
					this.imageLink = base64Flag + imageStr
				}
			})
	}, 

	methods: {
		arrayBufferToBase64 (buffer) {
			var binary = ''
			var bytes = [].slice.call(new Uint8Array(buffer))
			bytes.forEach((b) => binary += String.fromCharCode(b))
			return window.btoa(binary)
		},

        formatAndStoreUser (usr) {
            const firstName = usr.data.userInfo.firstName
			const lastName = usr.data.userInfo.lastName
			usr.data.userInfo.firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
            usr.data.userInfo.lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)

            this.user = usr.data.userInfo
        }
	}
}
</script>


<style>

</style>
