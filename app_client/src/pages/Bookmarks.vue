<template>
<div>
    <h1 class="header header-font">
        Bookmarks
    </h1>
    <div class="divider"></div>
    <Card />
</div>
</template>



<script>
import Card from "../components/Card"

export default {
    name: "Bookmarks",
    components: {
        Card
    }
};
</script>

<style lang="scss" scoped>
    .header-font {
        font-weight: 300;
    }
</style>
