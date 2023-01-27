<template>
    <div class="container">
        <div class="home">
            <films-new/>
            <p class="text_home">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi iusto autem eveniet enim optio repellendus at reprehenderit provident, quidem, voluptatibus deleniti doloribus accusamus earum voluptas soluta! Repellat esse exercitationem voluptas.</p>
            <film-top-10/>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import FilmsNew from '../components/Home/FilmsNew.vue'
import FilmTop10 from '../components/Home/FilmTop10.vue'
    export default {
    components: { FilmsNew, FilmTop10 },
        computed: {
            ...mapGetters([
                'HOME_NEW_FILMS',
                'HOME_TOP_10_FILMS'
            ]),
        },
    }
</script>

<style  scoped>


.home {
    display: flex;
    flex-wrap: wrap;
}

@media screen and (max-width: 1140px) {
  .home {
    justify-content: center;
  }
}

p {
    color: #fff;
    border: 1px solid red;
    padding: 25px;
}

.block1__films-new-10 {
    display: flex;
    flex-wrap: wrap;
}
</style>