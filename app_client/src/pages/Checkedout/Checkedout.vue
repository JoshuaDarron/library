<template>
	<div>
		<h1 class="header header-font">
			Checkedout
		</h1>

		<div class="divider"></div>

		<div class="row">
			<!-- LEFT COL -->
			<div class="col m12 xl7">
				<div v-if="preloader" class="prog-container">
					<div class="progress blue">
						<div class="indeterminate blue lighten-2"></div>
					</div>
				</div>


				<ul v-if="maxCount > 5" class="pagination center-align">
					<li class="waves-effect">
						<a 
							v-on:click="downPage"
							href="#">
							<i class="material-icons">chevron_left</i>
						</a>
					</li>

					<li 
						v-for="n in pageButtons" :key="n" 
						v-on:click="changePage"
						:class="page === n ? 'active blue' : 'waves-effect'" >
						<a href="#">
							{{ n }}
						</a>
					</li>

					<li class="waves-effect">
						<a 
							v-on:click="upPage"
							href="#">
							<i class="material-icons">chevron_right</i>
						</a>
					</li>
				</ul>


				<div v-if="!books.length && !preloader" class="col s12">
					<div class="card light-blue lighten-5">
						<div class="card-content">
						<span class="card-title">
							No Checkedout Books
						</span>
						<p>
							You currently have no books checkedout. If you would like to check a book out, click the links below to search for books, or visit your saved books.
						</p>
						</div>
						<div class="card-action">
							<router-link to="/">
								<a class="noBook-msg" href="#">Search</a>
							</router-link>
							<router-link to="/saved">
								<a class="noBook-msg" href="#">Saved</a>
							</router-link>
						</div>
					</div>
				</div>


				<div v-for="book in books" :key="book._id">
					<Card v-if="book.isBookmarked" :book="book" :color="color" v-on:card-remove="updateBooks"  :key="book._id" />
				</div>
			</div>
		</div>
	</div>
</template>


<script>
import Card from "../../components/Card/Card"
import api from "../../helpers/api.hlpr"

export default {
	name: "Checkedout",
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
			color: 'light-blue lighten-5',
			preloader: false
		}
	},

	created: function() {
		this.getCheckedoutedBooks()
	},

	methods: {
		getCheckedoutedBooks: function () {
			this.preloader = true
			api.getTypesOfBooks(this.page, '/bookmarked')
				.then(res => {
					this.preloader = false
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
			else if (this.books.length < 5) this.getCheckedoutedBooks()
		},

		renderPageButtons () {
			const page = this.page
			const buttons = []

			if (page + 1 > this.maxPage && page - 1 > 0) 
				buttons.push(page - 2)
			if (page - 1) 
				buttons.push(page - 1)
			buttons.push(page)
			if (page + 1 <= this.maxPage) 
				buttons.push(page + 1)
			if (page + 2 <= this.maxPage && buttons.length < 3) 
				buttons.push(page + 2)

			return buttons
		},

		changePage: function (e) {
			e.preventDefault()
			window.scrollTo(0,0)
			this.page = parseInt(e.target.text)

			this.getCheckedoutedBooks()
		},

		upPage: function (e) {
			e.preventDefault()
			if (this.maxPage != this.page) {
				window.scrollTo(0,0)
				++this.page
				this.getCheckedoutedBooks()
			}
		},

		downPage: function (e) {
			if (e) e.preventDefault()
			if (this.page != 1) {
				window.scrollTo(0,0)
				--this.page
				this.getCheckedoutedBooks()
			}
		}
	}
}
</script>


<style scoped>
@import './Checkedout.css';
</style>
