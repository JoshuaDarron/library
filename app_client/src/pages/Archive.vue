<template>
	<div>
		<h1 class="header header-font">
			Archive
		</h1>

		<div class="divider"></div>

		<Card
			v-bind:books="books" />

		<ul class="pagination center-align">
			<li class="disabled">
				<a href="#">
					<i class="material-icons">chevron_left</i>
				</a>
			</li>

		<li v-for="n in maxCount"
		v-bind:key="n"
		:class="active_el === n ? 'active blue lighten-1' : 'waves-effect'"
		v-on:click="onClick">
		<a href="#">{{n}}</a>
		</li>

			<li class="waves-effect">
				<a href="#">
					<i class="material-icons">chevron_right</i>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Card from "../components/Card/Card"
import api from "../helpers/API"
import axios from "axios"

export default {
	name: "Archive",
	components: {
		Card
	},

	data() {
		return {
			books: [],
			maxCount: 1,
			active_el: 1
		}
	},

	created: function() {
		api.getAllBooks(this.active_el)
			.then(res => {
				this.maxCount = Math.ceil(res.data.maxCount / 6)


				for (let book of res.data.books) {
					if (book.title.length > 23) {
						book.shortTitle = book.title.slice(0, 18)
					}
				}

				this.books = res.data.books
			})
	},

	methods: {
		onClick: function (e) {
			e.preventDefault()
			window.scrollTo(0,0)
			this.active_el = parseInt(e.target.text)

			api.getAllBooks(this.active_el)
				.then(res => {

					for (let book of res.data.books) {
						if (book.title.length > 23) {
							book.shortTitle = book.title.slice(0, 18)
						}
					}

					this.books = res.data.books
				})
		}
	}
}
</script>

<style scoped>
	.header-font {
		font-weight: 300
	}

	.active {
	background-color: #42a5f5
	}

.pagination {
	clear: left
}
</style>
