<template>
    <div>
        <h1 class="header header-font">
            Archive
        </h1>
        <div class="divider"></div>
        <Card /> 
    </div>
</template>



<script>
import Card from "../components/Card"

export default {
    name: "Archive",
    components: {
        Card
    }
};
</script>

<style scoped>
    .header-font {
        font-weight: 300;
    }
</style>
