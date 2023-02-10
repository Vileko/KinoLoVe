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
                class="card-film__img-card"
            >
            <div class="card-film__information">
                <div class="card-film__card-inf">
                    <div class="card-film__block">
                        <span class="card-film__span">Навазвание:</span> 
                        <p class="card-film__p">{{films.name_russian}}</p>
                    </div>
                    <div class="card-film__block">
                        <span class="card-film__span">Жанр: </span> 
                        <p 
                            class="card-film__p"
                            v-for="p in films.genres" 
                            :key="p.id"
                        >
                        {{p.name_ru}}
                        </p>
                    </div>
                    <div class="card-film__block">
                        <span class="card-film__span">Страна:</span> 
                        <p 
                            v-for="p in films.countries"
                            :key="p.id"
                            class="card-film__p"
                        >   
                            {{p.name_ru}}
                        </p>
                    </div>
                     <div class="card-film__block">
                        <span class="card-film__span">Рейтинг: </span> 
                        <p class="card-film__p">
                            Кино Поиск: {{films.rating_kp}}
                        </p>
                        <p  class="card-film__p">
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

import {mapMutations, mapState} from 'vuex'
import CardDescription from '../Home/CardHomeFilms.vue'
import DialogV from '../UI/DialogV.vue'
import FormFilmTrailer from '../../components/movieMap/DialogTreiler.vue'
    export default {
    components: { CardDescription, DialogV, FormFilmTrailer },
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

<style lang="scss" scoped>
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

.card-film__block{
    display: flex;
    align-items: center;
}
.card-film__img-card {
    width: 350px;
}

.card-film {
    display: flex;
}

.card-film__span{
    width: 130px;
    font-size: 14px;
    color: rgb(182, 182, 182);
}
.card-film__card-inf {
    display: flex;
    flex-direction: column;
}

.card-film__p {
    color: rgb(223, 223, 223);
    font-size: 16px;
    margin-left: 5px;
    padding: 2px 5px;
    background-color: rgb(187, 53, 53);
    border-radius: 5px;
    margin-bottom: 5px;
}

.card-film__information {
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
    .card-film__information {
       margin-left: 0px;
       margin-top: 15px;
    }
    .card-film__img-card {
        width: 250px;
    }
}


</style>