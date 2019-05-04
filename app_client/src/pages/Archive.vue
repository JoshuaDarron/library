<template>
    <div>
        <h1 class="header header-font">
            Archive
        </h1>
        <div class="divider"></div>
        <Card 
            v-bind:books="books" /> 
    </div>
</template>

<script>
import Card from "../components/Card";
import axios from "axios";

export default {
    name: "Archive",
    components: {
        Card
    },
    data() {
        return {
            books: []
        }
    },
    created: function() {
        axios.get("/api/books")
            .then(res => this.books = res.data);
    }
};
</script>

<style scoped>
    .header-font {
        font-weight: 300;
    }
</style>
