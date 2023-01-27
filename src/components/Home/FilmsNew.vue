<template>
    <div>
        <h1>Новинки</h1>
        <carousel-v 
            :clickCallback='HOME_NEW_FILMS'
        />
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HomeCardFilms from '../../components/movieMap/HomeCardFilms.vue'
import CarouselV from '../UI/CarouselV.vue';
    export default {
  components: { HomeCardFilms, CarouselV },
        computed: {
            ...mapGetters([
                'HOME_NEW_FILMS'
            ])
        },
        mounted() {
            this.$store.dispatch('fetchApi');
        },
    }
</script>

<style scoped>
</style>