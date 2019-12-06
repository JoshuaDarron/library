<template>
	<div>
		<div v-for="book in books" v-bind:key="book.id">
			<div class="col s6 m6 l4 xl3">
				<a class="card-link" :href="book.link" target="_blank" v-on:mouseover="mouseover">
					<div class="card">
						<div class="card-image">
							<img :src="book.image">
						</div>
						<div class="card-content">
							<p class="fadeout tooltipped card-text" data-position="bottom" data-tooltip="book.title">{{ book.shortTitle }}</p>
							<hr />
							<p class="card-text">{{ book.authors[0] }}</p>
						</div>
					</div>
				</a>
			</div>
		</div>
	</div>
</template>


<script>
import M from "materialize-css"

export default {
	name: 'Card',
	props: {
		books: Array
	},
	data() {
		return {
			active: false
		}
	},
	methods: {
		mouseover: function () {

		}
	}
}
</script>


<style scoped>
@import './Card.css';
</style>
