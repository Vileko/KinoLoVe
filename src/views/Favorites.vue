<template>
    <div class="container">
        <card-favorites/>
    </div>
</template>

<script>
import CardFavorites from '../components/Favorites/CardFavorites.vue';
import CardDescription from '../components/movieMap/CardDescription.vue';
    export default {
    components: {CardFavorites, CardDescription}}
</script>