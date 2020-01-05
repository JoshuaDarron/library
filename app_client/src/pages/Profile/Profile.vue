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
                    <div class="btn waves-light blue lighten-5 black-text file-button">
                        <span>Image</span>
                        <input type="file" ref="fileInput" @change="upldoadFile">
                    </div>
                    <div class="file-path-wrapper">
                        <img class="circle profile-img" :src="imageLink">
                    </div>
                </div>

                <button type="submit" class="waves-effect waves-light btn blue darken-3 submit">
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
            },
            imageLink: null
		}
    },

    created () {
		auth.info()
			.then(res => {
				this.user = res.data.userInfo
				
				const base64Flag = 'data:image;base64,'
				const imageStr = this.arrayBufferToBase64(res.data.userInfo.image.data.data)

				this.imageLink = base64Flag + imageStr
			})
    },

    methods: {
        submit (e) {
            const user = {
                firstName: this.user.firstName.toLowerCase(),
                lastName: this.user.lastName.toLowerCase(),
                email: this.user.email.toLowerCase()
            }

            this.user = {
                firstName: null,
                lastName: null,
                email: null,
                image: {
                    data: null
                }
            }
        },

		arrayBufferToBase64 (buffer) {
			var binary = ''
			var bytes = [].slice.call(new Uint8Array(buffer))
			bytes.forEach((b) => binary += String.fromCharCode(b))
			return window.btoa(binary)
        },
        
        upldoadFile () {
            const files = this.$refs.fileInput.files
            if (files && files[0]) {
                const reader = new FileReader
                reader.onload = e => this.imageLink = e.target.result
                reader.readAsDataURL(files[0])
            }
        }
    }
}
</script>


<style lang="scss" scoped>
@import './Profile.css';
</style>
