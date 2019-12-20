<template>
	<div>
		<h1 class="header header-font">
			Bookmarks
		</h1>

		<div class="divider"></div>

		<div class="row">
			<!-- LEFT COL -->
			<div class="col m12 xl7">
				<div v-for="book in books" :key="book.id">
					<Card v-if="book.isBookmarked" :book="book" :color="color" />
				</div>

				<ul class="pagination center-align">
					<li class="disabled">
						<a href="#">
							<i class="material-icons">chevron_left</i>
						</a>
					</li>

					<li 
						v-for="n in maxCount" :key="n" 
						v-on:click="onClick"
						:class="active_el === n ? 'active blue' : 'waves-effect'" >
						<a href="#">
							{{ n }}
						</a>
					</li>

					<li class="waves-effect">
						<a href="#">
							<i class="material-icons">chevron_right</i>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>


<script>
import Card from "../../components/Card/Card"
import api from "../../helpers/api.hlpr"

export default {
	name: "Bookmarks",
	components: {
		Card
	},

	data() {
		return {
			books: [],
			maxCount: 1,
            active_el: 1,
            color: 'light-blue lighten-5'
		}
	},

	created: function() {
		api.getTypesOfBooks(this.active_el, '/bookmarked')
			.then(res => {
				this.maxCount = Math.ceil(res.data.maxCount / 5)

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
@import './Bookmarks.css';
</style>
