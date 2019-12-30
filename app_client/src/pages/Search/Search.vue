<template>
<div>
    <h1 class="header header-font">
        Search
    </h1>
    <div class="divider"></div>
    <div class="row">
        <form @submit.prevent="submitForm">
            <input type="text" v-model="query"/>
        </form>
    </div>
    <div class="row">
        <div class="col m12 xl7">
            <div v-for="book in books" :key="book.id">
                <Card :book="book" :color="color" v-on:card-remove="updateBooks" />
            </div>
        </div>
    </div>
</div>
</template>


<script>
import googleApiHlpr from "../../helpers/google.hlpr"
import Card from "../../components/Card/Card"

export default {
    name: "Search",
    components: {
        Card
    },

    data() {
        return {
            books: [],
            query: null,
            color: 'light-blue lighten-5'
        }
    },

    methods: {
        submitForm: function (e) {
            const query = this.query
            this.query = null

            googleApiHlpr
                .searchGoogleInBooks(query)
                .then((res) => this.books = res.data)
        },

		updateBooks (id) {
            for (let book of this.books) {
                if (book.id === id) this.books.splice(this.books.indexOf(book), 1)
            }
			if (!this.books.length) this.downPage()
		}
    }
}
</script>

<style lang="scss" scoped>
@import './Search.css';
</style>
