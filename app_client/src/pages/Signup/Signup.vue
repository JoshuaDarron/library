<template>
	<div>
        <div class="container">
            <div class="row">
                <!-- TITLE COL -->
                <div class="col s12 m7 white-text title-txt">
                    <h1 class="title-txt">
                        Welcome to the Library!
                    </h1>
                    <ul>
                        <li>
                            <h5 class="title-txt">Search our endless inventory</h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5 class="title-txt">Save books to read on your own accord</h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5 class="title-txt">Checkout books</h5>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h5 class="title-txt">Also, track your reading history</h5>
                        </li>
                    </ul>
                </div>

                <!-- FORM COL -->
                <div class="col s12 m5 center-align">
                    <div class="card indigo accent-3 center-align hoverable">
                        <div class="card-content white-text">
                            <span class="card-title">
                                Signup
                            </span>
                            <p>Signup to start tracking your reading, here at the Library!</p>

                            <form  @submit.prevent="submit">    
                                <label for="name">Full Name</label>
                                <br />
                                <input class="validate" name="name" type="text" v-model="name" />

                                <label for="email">Email</label>
                                <br />
                                <input class="validate" name="email" type="email" v-model="email" />

                                <label for="password">Password</label>
                                <br />
                                <input class="validate" name="password" type="password" v-model="password" />

                                <button type="submit" class="waves-effect waves-light btn blue lighten-5 black-text submit">
                                    <i class="material-icons left">account_circle</i>
                                    Signup
                                </button>
                            </form>
                        </div>
                        <div class="card-action">
                            <a class="white-text" href="/login">
                                Have an account?
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>


<script>
import api from "../../helpers/api.hlpr"

export default {
    name: "Signup",
    
    data () {
        return {
            email: null,
            password: null,
            name: null
        }
    },

    methods: {
        submit: function (e) {
            e.preventDefault()

            const name = this.name
            const email = this.email
            const password = this.password

            this.name = null
            this.email = null
            this.password = null

            console.log(name, email, password)
        }
    }
}
</script>


<style scoped>
@import './Signup.css';
</style>
