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
						{{authors}}
					</p>
				</div>
			</div>
		</div>

		<div class="right-align">
			<a class="btn-floating btn-medium waves-effect waves-light blue darken-1 hoverable"
				value="bookmark" 
				v-if="book._id && !book.isBookmarked"
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
					save
				</i>
			</a>
			<a class="btn-floating btn-medium waves-effect waves-light red hoverable" 
				value="delete" 
				v-if="book._id && !book.isDeleted" 
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


	data () {
		return {
			authors: this.book.authors.length > 0 ? this.book.authors.join(', ') : this.book.authors[0]
		}
	},


	methods: {
		close () {
			this.$destroy()
		},

		updateBook (book) {
			api
				.updateBook(
					this.book._id,
					book
				)
				.then(res => this.close())
				.catch(err => console.error(err))
		},

		createBook () {
			const book = {
				title: this.book.title,
				authors: this.book.authors,
				description: this.book.description,
				thumbnail: this.book.thumbnail,
				link: this.book.link,
				isSaved: true,
				user: localStorage.user
			}

			api.createBook(book)
				.then(res => this.close())
				.catch(err => console.error(err))
		},


		onClick (e) {
			e.preventDefault()

			const button = e.currentTarget.getAttribute('value')
			if (button === 'bookmark') {
				this.updateBook({
					isDeleted: false,
					isBookmarked: true,
					isSaved: false
				})
			} else if (button === 'archive') {
				if (!this.book._id) {
					this.createBook()
				} else {
					this.updateBook({
						isDeleted: false,
						isBookmarked: false,
						isSaved: true
					})
				}
			} else {
				this.updateBook({
					isDeleted: true,
					isBookmarked: false,
					isSaved: false
				})
			}
			this.$emit('card-remove', this.book.id || this.book._id);
		}
	}
}
</script>


<style scoped>
@import './Card.css';
</style>