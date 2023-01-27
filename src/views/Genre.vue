<template>
    <div class="container">
        <div class="checkbox">
            <input type="checkbox" v-model="messege" id="check">
            <label for="check">по рейтингу</label>
        </div>
        <btn-filter
            class="btn-filter"
            @pageNumber='pageNumber'
        />
        <movie-card
            :clickCallback='clickCallback'
        />
        <paginate
            v-model="page"
            :page-count="pageCount"
            :page-range="3"
            :margin-pages="2"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination'"
            :page-class="'page-item'">
        </paginate>
    </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';
import MovieCard from '../components/movieMap/MovieCard.vue';
import BtnFilter from '../components/UI/BtnFilter.vue';
import SelectV from '../components/UI/SelectV.vue';
    export default {
  components: { MovieCard, BtnFilter, SelectV },
        data(){
            return {
                page: +this.$route.query.page || 1,
                gen:  `/genre/adventure/?page=${this.page}`,
                pageSize: 8,
            }
        },
        methods: {
            ...mapMutations([
                'POST_ADD_POST_PLAGINATE',
                'POST_GENRE_FILMS',
                'CHECKBOX',
                'SORT_TEST'
            ]),
            pageNumber(ar){
                this.page = ar;
            },
        },
        computed: {
            ...mapState([
                'post',
                'postPlaginate',
                'genre',
                'checkbox'
            ]),
            messege:{
                get(){
                    return this.checkbox
                },
                set(value){
                    return this.CHECKBOX(value)
                }
            },      
            test(array){
                function randomSort(){
                    return Math.random() - 0.5;
                }
                array.sort(randomSort)
            },
            clickCallback(){
                    if(this.postPlaginate.length > 0){
                        let a = []
                        this.SORT_TEST(this.postPlaginate) 
                        for(let i = 0; i <  this.postPlaginate.length; i += this.pageSize) {
                            const chunk =  this.postPlaginate.slice(i, i + this.pageSize);
                            a.push(chunk)
                        }
                        this.$router.push(`/genre/${this.genre}?page=${this.page}`);
                        return a[this.page - 1];
                    } else {
                        this.SORT_TEST(this.post)
                        const   start = (this.page * this.pageSize) - this.pageSize,
                                end = start + this.pageSize;       
                        this.$router.push(`/genre/?page=${this.page}`);
                        return this.post.slice(start, end);
                    }
                    
            },
            pageCount(){
                if(this.postPlaginate.length > 0){
                    return Math.ceil(this.postPlaginate.length / this.pageSize);
                }  else {
                    return Math.ceil(this.post.length / this.pageSize);
                }
            }
        },
        mounted() {
            this.$store.dispatch('fetchApi');
        },
    }
</script>

<style scoped>
.page-link {
    background-color: red;
}

p {
    color: #fff;
}

img {
    width: 150px;
}

.btn-filter {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

label {
    color: #fff;
    margin-left: 5px;
}

.checkbox {
    display: flex;
    align-items: center;
}
</style>