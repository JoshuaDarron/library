<template>
<div>
    <div v-for="book in books" v-bind:key="book.id">
        <div class="card horizontal">
            <div class="card-image">
                <img :src="book.image">
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <p>
                    {{ book.title }}
                </p>
                </div>
                <div class="card-action">
                <a :href="book.link" target="_blank">
                    Google
                </a>
                </div>
            </div>
        </div>
        <a class="btn-floating btn-medium waves-effect waves-light blue">
            <i class="material-icons">
                bookmark
            </i>
        </a>
        <a class="btn-floating btn-medium waves-effect waves-light green">
            <i class="material-icons">
                share
            </i>
        </a>
        <a class="btn-floating btn-medium waves-effect waves-light red">
            <i class="material-icons">
                delete
            </i>
        </a>
    </div>
</div>
</template>

<style lang="scss" scoped>

</style>

<script>
export default {
    name: 'Card',
    props: {
            books: Array
        }
}
</script>
