<template>
	<div>
		<h1 class="header header-font">
			History
		</h1>

		<div class="divider"></div>

		<div class="row">
			<!-- LEFT COL -->
			<div class="col m12 xl7">
				<div v-for="book in books" :key="book.id">
					<Card :book="book" :color="color" />
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
						v-for="n in maxPage" :key="n" 
						v-on:click="changePage"
						:class="active_el === n ? 'active' : 'waves-effect'" >
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
			active_el: 1,
			color: '#ffebee red lighten-5'
		}
	},

	created: function() {
		this.getDeletedBooks()
	},

	methods: {
		getDeletedBooks: function () {
			api.getTypesOfBooks(this.active_el, '/deleted')
				.then(res => {
					this.maxPage = Math.ceil(res.data.maxCount / 5)
					this.maxCount = res.data.maxCount
					this.books = res.data.books
				})
		},

		changePage: function (e) {
			e.preventDefault()
			window.scrollTo(0, 0)
			this.active_el = parseInt(e.target.text)
			this.getDeletedBooks()
		},

		upPage: function (e) {
			e.preventDefault()
			if (this.maxPage != this.active_el) {
				window.scrollTo(0,0)
				++this.active_el
				this.getDeletedBooks()
			}
		},

		downPage: function (e) {
			e.preventDefault()
			if (this.active_el != 1) {
				window.scrollTo(0,0)
				--this.active_el
				this.getDeletedBooks()
			}
		}
	}
}
</script>


<style scoped>
@import './History.css';
</style>
