<template>
	<div>
		<h1 class="header header-font">
			Saved
		</h1>

		<div class="divider"></div>

		<div class="row">
			<!-- LEFT COL -->
			<div class="col m12 xl7">
				<div v-for="book in books" :key="book.id">
					<Card :book="book" :color="color" v-on:card-remove="updateBooks" />
				</div>

				<ul v-if="maxCount > 5" class="pagination center-align">
					<li 
						class="waves-effect"
						v-on:click="downPage">
						<a href="#">
							<i class="material-icons">chevron_left</i>
						</a>
					</li>

					<li 
						v-for="n in maxPage" :key="n" 
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
				})
		},

		updateBooks (id) {
			const removeIndex = this.books.map(function(book) { return book.id; }).indexOf(id)
			~removeIndex && this.books.splice(removeIndex, 1)
			if (!this.books.length) this.downPage()
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
