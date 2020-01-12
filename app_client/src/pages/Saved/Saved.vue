<template>
	<div>
		<h1 class="header header-font">
			Saved
		</h1>

		<div class="divider"></div>

		<div class="row">
			<!-- LEFT COL -->
			<div class="col m12 xl7">
				<ul v-if="maxCount > 5" class="pagination center-align">
					<li 
						class="waves-effect"
						v-on:click="downPage">
						<a href="#">
							<i class="material-icons">chevron_left</i>
						</a>
					</li>

					<li 
						v-for="n in pageButtons" :key="n" 
						v-on:click="changePage"
						:class="page === n ? 'active green' : 'waves-effect'" >
						<a href="#">
							{{ n }}
						</a>
					</li>

					<li 
						v-on:click="upPage"
						class="waves-effect">
						<a href="#">
							<i class="material-icons">chevron_right</i>
						</a>
					</li>
				</ul>

				<div v-for="book in books" :key="book.id">
					<Card :book="book" :color="color" v-on:card-remove="updateBooks" :key="book._id" />
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Card from "../../components/Card/Card"
import api from "../../helpers/api.hlpr"


export default {
	name: "Saved",
	components: {
		Card
	},

	data() {
		return {
			books: [],
			maxCount: 1,
			maxPage: 1,
			pageButtons: [],
			page: 1,
			color: 'green lighten-5'
		}
	},

	created: function() {
		this.getSaveddBooks()
	},

	methods: {
		getSaveddBooks () {
			api.getTypesOfBooks(this.page, '/archived')
				.then(res => {
					this.maxPage = Math.ceil(res.data.maxCount / 5)
					this.maxCount = res.data.maxCount
					this.books = res.data.books
					this.pageButtons = this.renderPageButtons()
				})
		},

		updateBooks (id) {
			const removeIndex = this.books.map(book => book._id).indexOf(id)
			~removeIndex && this.books.splice(removeIndex, 1)
			if (!this.books.length) this.downPage()
			else if (this.books.length < 5) this.getSaveddBooks()
		},

		renderPageButtons () {
			const page = this.page
			const buttons = []

			if (page - 1) 
				buttons.push(page - 1)
			buttons.push(page)
			if (page + 1 <= this.maxPage) 
				buttons.push(page + 1)
			if (page + 2 <= this.maxPage && buttons.length < 3) 
				buttons.push(page + 2)

			return buttons
		},

		changePage (e) {
			e.preventDefault()
			window.scrollTo(0,0)
			this.page = parseInt(e.target.text)

			this.getSaveddBooks()
		},

		upPage (e) {
			e.preventDefault()
			if (this.maxPage != this.page) {
				window.scrollTo(0,0)
				++this.page
				this.getSaveddBooks()
			}
		},

		downPage (e) {
			if (e) e.preventDefault()
			if (this.page != 1) {
				window.scrollTo(0,0)
				--this.page
				this.getSaveddBooks()
			}
		}
	}
}
</script>


<style scoped>
@import './Saved.css';
</style>
