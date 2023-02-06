<template>
    <div class="container">
        <div class="movie-title">
            <h1>{{films.name_russian}}</h1>
            <div class="movie-title__wrapper" @click="addToFavorites(films)">
                <div class="heart" :class="[activeClassTEST() === true ? 'active' : 'heart']"></div>
            </div>
        </div>
        <div class="card-film"> 
            <img 
                :src="films.big_poster" 
                alt="img"
                class="img-card"
            >
            <div class="card-film-information">
                <div class="card-inf card-film__card-inf">
                    <div class="block card-inf__block">
                        <span class="span_inf">Навазвание:</span> 
                        <p class="p_inf">{{films.name_russian}}</p>
                    </div>
                    <div class="block card-inf__block">
                        <span class="span_inf">Жанр: </span> 
                        <p 
                            class="p_inf"
                            v-for="p in films.genres" 
                            :key="p.id"
                        >
                        {{p.name_ru}}
                        </p>
                    </div>
                    <div class="block card-inf__block">
                        <span class="span_inf">Страна:</span> 
                        <p 
                            v-for="p in films.countries"
                            :key="p.id"
                            class="p_inf"
                        >   
                            {{p.name_ru}}
                        </p>
                    </div>
                     <div class="block card-inf__block">
                        <span class="span_inf">Рейтинг: </span> 
                        <p class="p_inf">
                            Кино Поиск: {{films.rating_kp}}
                        </p>
                        <p  class="p_inf">
                            IMDb: {{films.rating_imdb}}
                        </p>
                    </div>
                </div>
                <span class="description">
                    {{films.description}}
                </span>
                <div>
                    <dialog-v v-model:show='dialogVisible'>
                        <form-film-trailer
                            :films='films'
                        />
                    </dialog-v>
                    <div class="btn_trailer" @click='dialogVisible = true'>Трейлер</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from 'vuex'
import MovieCard from '../movieMap/MovieCard.vue'
import DialogV from '../UI/DialogV.vue'
import FormFilmTrailer from '../../components/movieMap/DialogTreiler.vue'
    export default {
    components: { MovieCard, DialogV, FormFilmTrailer },
        data() {
            return {
                dialogVisible: false,
                numerLikes: 0,
            }
        },
        mounted () {
            this.$store.dispatch('fetchApi')
        },
        methods: {
            ...mapMutations([
                'POST_ADD_TO_FAVORITES',
                'REMOVE_POST_FAVORITES'
            ]),
            addToFavorites(film){
                if(this.numerLikes === 0){
                    this.POST_ADD_TO_FAVORITES(film);  
                } else {
                    this.numerLikes = 0;
                    this.REMOVE_POST_FAVORITES(film)
                }
            },
            activeClassTEST(){
                for(let i = 0; i < this.postFavorites.length; i++){
                    if(this.films.id === this.postFavorites[i].id){
                        this.numerLikes = 1;
                        return this.postFavorites[i].active;
                    }
                }
            },
        },
        computed:{
            ...mapState([
                'post',
                'postFavorites'
            ]),
            films(){
                let result = [];
                this.post.map(item => {
                    if(item.id == this.$route.params.id){
                        result = item;
                    }
                })
                return result;
            }
        },
    }
</script>

<style scoped>

.movie-title {
    position: relative;
    display: flex;
}
.movie-title__wrapper {
    position: absolute;
    right: 25px;
}

.heart:hover {
    box-shadow: 0px 0px 70px 15px rgb(187, 53, 53);
}

.heart {
    width: 30px;
    height: 30px; 
    background-color: rgb(187, 187, 187);
    transform: rotate(45deg);
    position: relative;
    cursor: pointer;
    transition: .5s;
}
.heart::before,
.heart::after {
    content : ''; 
    display: block;
    width: 30px;
    height: 30px;
    background-color: rgb(187, 187, 187);
    border-radius: 50%; 
    position: absolute;
    transition: .5s;
}
.heart::before {
    top: -15px;
    left: 0;
}
.heart::after {
    top: 0;
    left: -15px;
}

.active {
    background-color: rgb(187, 53, 53);
}
.active::before,
.active::after {
    content : ''; 
    display: block;
    width: 30px;
    height: 30px;
    background-color: rgb(187, 53, 53);
    border-radius: 50%; 
    position: absolute;
}

.card-inf__block {
    display: flex;
    align-items: center;
}
.img-card {
    width: 350px;
}

.card-film {
    display: flex;
}


.span_inf {
    width: 130px;
    font-size: 14px;
    color: rgb(182, 182, 182);
}
.card-film__card-inf {
    display: flex;
    flex-direction: column;
}

.p_inf {
    color: rgb(223, 223, 223);
    font-size: 16px;
    margin-left: 5px;
    padding: 2px 5px;
    background-color: rgb(187, 53, 53);
    border-radius: 5px;
    margin-bottom: 5px;
}

.card-film-information {
    display: flex;
    flex-direction: column;
    margin-left: 25px;
}

.description {
    margin-top: 25px;
    color: rgb(223, 223, 223);
}

.btn_trailer {
    width: 100%;
    margin-top: 25px;
    background-color: rgb(187, 53, 53);
    text-align: center;
    padding: 15px;
    border-radius: 5px;
    color: rgb(223, 223, 223);
    cursor: pointer;
}

@media screen and (max-width: 800px) {
    .card-film {
        flex-direction: column;
    }
    .card-film-information {
       margin-left: 0px;
       margin-top: 15px;
    }
    .img-card {
        width: 250px;
    }
}


</style>