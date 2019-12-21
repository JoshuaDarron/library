<template>
	<div class="row">
		<div class="card horizontal hoverable card-container" :class="color">
			<img :src="book.thumbnail">
			<div class="card-stacked">
				<div class="card-content">
					<a class="title" :href="book.link" target="_blank">
						{{ book.title }}
					</a>
					<p class="authors">
						{{ book.authors.join(', ') }}
					</p>
				</div>
			</div>
		</div>
		<div class="right-align">
			<a class="btn-floating btn-medium waves-effect waves-light blue hoverable"
				value="bookmark" 
				v-if="!book.isBookmarked"
				v-on:click="onClick">
				<i class="material-icons">
					bookmark
				</i>
			</a>
			<a class="btn-floating btn-medium waves-effect waves-light green hoverable" 
				value="archive" 
				v-if="!book.isSaved" 
				v-on:click="onClick">
				<i class="material-icons">
					archive
				</i>
			</a>
			<a class="btn-floating btn-medium waves-effect waves-light red hoverable" 
				value="delete" 
				v-if="!book.isDeleted" 
				v-on:click="onClick">
				<i class="material-icons">
					delete
				</i>
			</a>
		</div>
	</div>
</template>


<script>
import api from "../../helpers/api.hlpr"


export default {
	name: 'Card',
	props: {
		book: {
			type: Object,
			required: true
		},
		color: {
			type: String
		}
	},

	methods: {
		updateBook: function (book) {
			api
				.updateBook(
					this.book._id,
					book
				)
				.then(res => {return})
				.catch(err => console.error(err))
		},

		onClick: function (e) {
			e.preventDefault()

			const button = e.currentTarget.getAttribute('value')
			const book = {
				title: this.book.title,
				authors: this.book.authors,
				description: this.book.description,
				thumbnail: this.book.thumbnail,
				link: this.book.link,
				isBookmarked: true,
				isSaved: false,
				isDeleted: false
			}

			if (button === 'bookmark') {
				this.updateBook({
					isDeleted: false,
					isBookmarked: true,
					isSaved: false
				})
			} else if (button === 'archive') {
				this.updateBook({
					isDeleted: false,
					isBookmarked: false,
					isSaved: true
				})
			} else {
				this.updateBook({
					isDeleted: true,
					isBookmarked: false,
					isSaved: false
				})
			}
		}
	}
}
</script>


<style scoped>
@import './Card.css';
</style>