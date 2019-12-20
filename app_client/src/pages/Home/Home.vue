<template>
<div>
    <h1 class="header header-font">
        Home
    </h1>
    <hr>
</div>
</template>



<script>
import Card from "../../components/Card/Card";
import api from "../../helpers/api.hlpr";

export default {
    name: "Home",
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
@import './Home.css';
</style>
