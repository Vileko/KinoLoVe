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
                'BTN_FILTER_ACTIVE'
            ]),
            sort(ar){
                if(ar.genre === ar.genre){       
                    this.POST_ADD_POST_PLAGINATE(ar.genre);
                    this.POST_GENRE_FILMS(ar.genre_engl);
                    this.$emit('pageNumber', this.page)  
                    this.BTN_FILTER_ACTIVE(ar.genre_engl)
                    console.log(ar.genre_engl)
                }
            },
        },
        computed: {
            ...mapState(['btnActiveFilter', 'showBtnFilter'])
        }
    }
</script>

<style  scoped>
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