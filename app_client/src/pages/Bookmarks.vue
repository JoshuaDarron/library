<template>
<div>
    <h1 class="header header-font">
        Bookmarks
    </h1>
    <div class="divider"></div>
    <Card 
        v-bind:books="books" />
</div>
</template>



<script>
import Card from "../components/Card/Card";
import api from "../helpers/API";

export default {
    name: "Bookmarks",
    components: {
        Card
    },
    data() {
        return {
            books: []
        }
    },
    created: function() {
        api.getAllBooks()
            .then(res => this.books = res.data);
    }
};
</script>

<style lang="scss" scoped>
    .header-font {
        font-weight: 300;
    }
</style>
