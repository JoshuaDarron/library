<template>
	<div>
        <div class="container">
            <div class="row">
                <div class="col s12 m6 center-align">
                    <div class="card blue darken-1 center-align hoverable">
                        <div class="card-content white-text">
                            <span class="card-title">
                                Login
                            </span>
                            <p>Login to start reading an having fun!</p>
                            <form>
                                <label for="email">
                                    Email
                                </label>
                                <input name="email" type="email">

                                <label for="password">
                                    Password
                                </label>
                                <input name="password" type="password">
                                <a class="waves-effect waves-light btn blue lighten-3 black-text submit">
                                    <i class="material-icons left">account_circle</i>
                                    Login
                                </a>
                            </form>
                        </div>
                        <div class="card-action">
                            <a class="white-text" href="/signup">
                                Dont have an account?
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
	name: "Login",

}
</script>


<style scoped>
@import './Login.css';
</style>
