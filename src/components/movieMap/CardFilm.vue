<template>
    <div class="container">
        <h1>{{films.name_russian}}</h1>
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
                        <form-film-trailer/>
                    </dialog-v>
                    <div class="btn_trailer" @click='dialogVisible = true'>Трейлер</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import MovieCard from '../movieMap/MovieCard.vue'
import DialogV from '../UI/DialogV.vue'
import FormFilmTrailer from '../../components/movieMap/DialogTreiler.vue'

    export default {
    components: { MovieCard, DialogV, FormFilmTrailer },
            data() {
                return {
                    dialogVisible: false,
                }
            },
           mounted () {
                this.$store.dispatch('fetchApi')
            },
            computed:{
                ...mapState(['post']),
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
}


</style>