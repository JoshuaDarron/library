<template>
<div>
	<div class="container">
		<div class="row">
            <form @submit.prevent="submit">
                <label for="first-name">First Name</label>
                <input class="validate profile-input" name="first-name" type="text" v-model="user.firstName" />

                <label for="last-name">Last Name</label>
                <input class="validate profile-input" name="last-name" type="text" v-model="user.lastName" />

                <label for="email">Email</label>
                <input class="validate profile-input" name="email" type="email" v-model="user.email" />

                <div class="file-field input-field">
                    <div class="btn  waves-light blue lighten-5 black-text submit">
                        <span>File</span>
                        <input type="file">
                    </div>
                    <div class="file-path-wrapper">
                        <input class="file-path validate" type="text">
                    </div>
                </div>

                <button type="submit" class="waves-effect waves-light btn blue lighten-5 black-text submit">
                    Save
                </button>
            </form>
		</div>
	</div>
</div>
</template>


<script>
import auth from "../../helpers/auth.hlpr"

export default {
	name: 'Profile',

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

    methods: {
        submit (e) {
            const firstName = this.firstName
            const lastName = this.lastName
            const email = this.email
            const password = this.password

            this.user = {
                firstName: null,
                lastName: null,
                email: null,
                image: null
            }

            this.firstName = null
            this.lastName = null
            this.email = null

            // auth.signup ({ firstName, lastName, email, password })
            //     .then (res => {
            //         auth.login ({ email, password })
            //             .then (res => localStorage.setItem('token', res.data.token))
            //             .then (() => window.location.href = "/")
            //             .catch (err => console.error(err))
            //     })
            //     .catch(err => console.error(err))
        }
    }
}
</script>


<style lang="scss" scoped>
@import './Profile.css';
</style>
