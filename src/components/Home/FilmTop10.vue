<template>
    <div>
        <div class="home__block2">
            <h1>Топ 15 по версии Кино Поиск</h1>
            <carousel-v 
                :clickCallback='HOME_TOP_10_FILMS'
            />
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import CarouselV from '../UI/CarouselV.vue';
    export default {
  components: {  CarouselV },
         computed: {
            ...mapGetters([
                'HOME_TOP_10_FILMS'
            ])
        },
        
    }
</script>

<style lang="scss" scoped>

</style>