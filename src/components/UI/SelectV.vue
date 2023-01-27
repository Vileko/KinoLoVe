<template>
    <div>
        <select 
            v-model='modelValue'
            @change="sortFilter"
        >
            <option   disabled value="">
                Выбери
            </option>
            <option 
                    v-for="option in fliterOptions" 
                    :key="option.genre" 
                    class="select-sort"
                >
                   <div class="option-name"> {{option.genre}}</div>
                </option>   
        </select>
    </div>
</template>

<script>
import {mapMutations} from 'vuex'
    export default {
        data() {
            return {
                modelValue: '',
                fliterOptions: [
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
                ]
            }
        },
        methods: {
            ...mapMutations(['FILTER_POST']),
            sortFilter(){
                this.FILTER_POST(this.modelValue)
            }
        },

    }
</script>

<style  scoped>
.select-sort {
    display: flex;

}

.option-name {
    color: black;
}
</style>