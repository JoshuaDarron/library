<template>
<div>
	<div class="container">
		<div class="row">
            <div class="col s12">
                <form @submit.prevent="submit">
                    <div class="input-field col s6">
                        <span class="profile-labels white-text" for="first-name">First Name</span>
                        <input class="validate profile-input" name="first-name" type="text" v-model="user.firstName" />
                    </div>

                    <div class="input-field col s6"> 
                        <span class="profile-labels white-text" for="last-name">Last Name</span>
                        <input class="validate profile-input" name="last-name" type="text" v-model="user.lastName" />
                    </div>

                    <div class="input-field col s12">
                        <span class="profile-labels white-text" for="email">Email</span>
                        <input class="validate profile-input" name="email" type="email" v-model="user.email" />
                    </div>

                    <div class="file-field input-field profile-file">
                        <div class="btn waves-light blue lighten-5 black-text file-button">
                            <span>Image</span>
                            <input class="custom-file-input" type="file" ref="fileInput" @change="upldoadFile">
                        </div>
                        <img class="circle profile-img" :src="imageLink">
                    </div>

                    <button type="submit" class="waves-effect waves-light btn blue darken-3 submit">
                        Save
                    </button>
                </form>
            </div>
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
				image: null
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
            const formData = new FormData()

            formData.set("firstName", this.user.firstName.toLowerCase())
            formData.set("lastName", this.user.lastName.toLowerCase())
            formData.set("email", this.user.email.toLowerCase())
            formData.append("image", this.user.image)

            this.user = {
                firstName: null,
                lastName: null,
                email: null,
                image: null
            }

            auth.update(formData)
                .then(res => console.log(res))
                .catch(err => console.error(err))
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
                this.user.image = files[0]

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
