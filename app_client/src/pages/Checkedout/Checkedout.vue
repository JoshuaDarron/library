<template>
	<div>
		<h1 class="header header-font">
			Checkedout
		</h1>

		<div class="divider"></div>

		<div class="row">
			<!-- LEFT COL -->
			<div class="col m12 xl7">
				<div v-for="book in books" :key="book.id">
					<Card v-if="book.isBookmarked" :book="book" :color="color" v-on:card-remove="updateBooks" />
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
						v-for="n in maxPage" :key="n" 
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
            page: 1,
            color: 'light-blue lighten-5'
		}
	},

	created: function() {
		this.getCheckedoutedBooks()
	},

	methods: {
		getCheckedoutedBooks: function () {
			api.getTypesOfBooks(this.page, '/bookmarked')
				.then(res => {
					this.maxPage = Math.ceil(res.data.maxCount / 5)
					this.maxCount = res.data.maxCount

					this.books = res.data.books.reverse()
				})
		},

		updateBooks (id) {
			const removeIndex = this.books.map(function(book) { return book._id; }).indexOf(id)
			~removeIndex && this.books.splice(removeIndex, 1)
			if (!this.books.length) this.downPage()
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
