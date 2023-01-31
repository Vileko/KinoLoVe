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
                'POST_ADD_POST_PLAGINATE',
                'POST_GENRE_FILMS',
            ]),
            sort(ar){
                this.$emit('pageNumber', this.page)  
                this.$router.push(`${ar.genre_engl}`)
            },
        },
        computed: {
            ...mapState(['showBtnFilter'])
        }
    }
</script>

<style  scoped>
.all .all {
    background-color: green;
}

.drama .drama {
    background-color: green;
}

.adventure .adventure {
    background-color: green;
}

.comedy .comedy {
    background-color: green;
}

.action-movie .action-movie {
    background-color: green;
}

.thriller .thriller{
    background-color: green;
}

.fantasy .fantasy {
    background-color: green;
}

button {
    background-color: rgb(187, 53, 53);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
}
</style>