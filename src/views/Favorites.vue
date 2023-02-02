<template>
    <div class="container">
        <favorites-card
            @removeFilms='removePostFilms'
            :postFilim="postFavorites"
        />
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import FavoritesCard from '../components/movieMap/FavoritesCard.vue';
import MovieCard from '../components/movieMap/MovieCard.vue';
    export default {
    components: {FavoritesCard, MovieCard},
        methods:{
            ...mapMutations([
                'REMOVE_POST_FAVORITES'
            ]),
            removePostFilms(film){
                this.REMOVE_POST_FAVORITES(film);
            }
        },
        computed: {
            ...mapState([
                'postFavorites'
            ]),
        }
    }
</script>