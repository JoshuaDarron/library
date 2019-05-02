<template>
<div>
    <h1 class="header header-font">
        Bin
    </h1>
    <div class="divider"></div>
    <Card />
</div>
</template>



<script>
import Card from "../components/Card"

export default {
    name: "Bin",
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
