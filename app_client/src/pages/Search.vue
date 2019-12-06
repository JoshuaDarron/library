<template>
<div>
    <h1 class="header header-font">
        Search
    </h1>
    <div class="divider"></div>
    <Card />
</div>
</template>



<script>
import Card from "../components/Card/Card"

export default {
    name: "Home",
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
