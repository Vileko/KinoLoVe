<template>
    <div class="container">
        <favorites-card/>
    </div>
</template>

<script>
import FavoritesCard from '../components/movieMap/FavoritesCard.vue';
import MovieCard from '../components/movieMap/MovieCard.vue';
    export default {
    components: {FavoritesCard, MovieCard},

    }
</script>