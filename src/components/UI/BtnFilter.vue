<template>
    <div>
        <div :class="showBtnFilter" v-for="btn in button" :key="btn.id">
            <button :class="btn.genre_engl" @click="sort(btn)">{{btn.genre}}</button>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

    export default {
        data() {
            return {
                page: 1,
                genreUrl: '',
                button: [
                    {
                        id: 0,
                        genre: 'все',
                        genre_engl: 'all',
                    },
                    {
                        id: 1, 
                        genre: 'драма',
                        genre_engl: 'drama', 
                    },
                    {
                        id: 2, 
                        genre: 'приключения', 
                        genre_engl: 'adventure',
                    },
                    {
                        id: 3, 
                        genre: 'комедия', 
                        genre_engl: 'comedy', 
                    },
                    {
                        id: 4, 
                        genre: 'боевик', 
                        genre_engl: 'action-movie', 
                    },
                    {
                        id: 5, 
                        genre: 'триллер', 
                        genre_engl: 'thriller', 
                    },
                    {
                        id: 6, 
                        genre: 'фантастика', 
                        genre_engl: 'fantasy', 
                    },
                ]
            }
        },
        methods: {
            ...mapMutations([
                'GENRE_RU',
                
            ]),
            sort(ar){
                this.GENRE_RU(ar.genre)
                this.$emit('pageNumber', this.page);
                this.$emit('genreUrl', ar.genre_engl)
            },
        },
        computed: {
            ...mapState(['showBtnFilter'])
        },
        created() {
            
        },
    }
</script>

<style  scoped>
.all .all {
    background-color: rgb(187, 53, 53);
}

.drama .drama {
    background-color: rgb(187, 53, 53);
}

.adventure .adventure {
    background-color: rgb(187, 53, 53);
}

.comedy .comedy {
    background-color: rgb(187, 53, 53);
}

.action-movie .action-movie {
    background-color: rgb(187, 53, 53);
}

.thriller .thriller{
    background-color: rgb(187, 53, 53);
}

.fantasy .fantasy {
    background-color: rgb(187, 53, 53);
}

button {
    background-color: rgb(94, 91, 91);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
}
</style>