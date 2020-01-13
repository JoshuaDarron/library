<template>
	<div>
		<h1 class="header header-font">
			History
		</h1>

		<div class="divider"></div>

		<div class="row">
			<!-- LEFT COL -->
			<div class="col m12 xl7">
				<div v-if="preloader" class="prog-container">
					<div class="progress red">
						<div class="indeterminate red lighten-2"></div>
					</div>
				</div>


				<ul v-if="maxCount > 5" class="pagination center-align">
					<li class="waves-effect">
						<a
							href="#"
							v-on:click="downPage">
							<i class="material-icons">chevron_left</i>
						</a>
					</li>

					<li 
						v-for="n in pageButtons" :key="n" 
						v-on:click="changePage"
						:class="page === n ? 'active' : 'waves-effect'" >
						<a href="#">
							{{ n }}
						</a>
					</li>

					<li class="waves-effect">
						<a 
							href="#"
							v-on:click="upPage">
							<i class="material-icons">chevron_right</i>
						</a>
					</li>
				</ul>


				<div v-if="!books.length && !preloader" class="col s12">
					<div class="card red lighten-5">
						<div class="card-content">
						<span class="card-title">
							No History
						</span>
						<p>
							You currently have no reading history. Previously checkedout books will be shown here. Click the link below to see your saved or checkout books.
						</p>
						</div>
						<div class="card-action">
							<router-link to="/saved">
								<a class="noBook-msg" href="#">Saved</a>
							</router-link>
							<router-link to="/checkedout">
								<a class="noBook-msg" href="#">Checkedout</a>
							</router-link>
						</div>
					</div>
				</div>


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
	name: "History",
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
			color: '#ffebee red lighten-5',
			preloader: false
		}
	},

	created: function() {
		this.getDeletedBooks()
	},

	methods: {
		getDeletedBooks () {
			this.preloader = true
			api.getTypesOfBooks(this.page, '/deleted')
				.then(res => {
					this.maxPage = Math.ceil(res.data.maxCount / 5)
					this.maxCount = res.data.maxCount
					this.books = res.data.books
					this.pageButtons = this.renderPageButtons()
					this.preloader = false
				})
				.catch(err => console.error(err))
		},

		updateBooks (id) {
			const removeIndex = this.books.map(book => book._id).indexOf(id)
			~removeIndex && this.books.splice(removeIndex, 1)
			if (!this.books.length) this.downPage()
			else if (this.books.length < 5) this.getDeletedBooks()
		},

		renderPageButtons () {
			const page = this.page
			const buttons = []

			if (page + 1 > this.maxPage && page - 2 > 0) 
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

		changePage (e) {
			e.preventDefault()
			window.scrollTo(0, 0)
			this.page = parseInt(e.target.text)
			this.getDeletedBooks()
		},

		upPage (e) {
			e.preventDefault()
			if (this.maxPage != this.page) {
				++this.page
				this.getDeletedBooks()
			}
		},

		downPage (e) {
			if (e) e.preventDefault()
			if (this.page != 1) {
				--this.page
				this.getDeletedBooks()
			}
		}
	}
}
</script>


<style scoped>
@import './History.css';
</style>
