<template>
    <div class="container">
        <div class="checkbox">
            <input type="checkbox" v-model="messege" id="check">
            <label for="check">по рейтингу</label>
        </div>
        <btn-filter
            class="btn-filter"
            @pageNumber='pageNumber'
            @genreUrl='genreUrl'
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
import {mapState, mapMutations, mapGetters} from 'vuex';
import MovieCard from '../components/movieMap/MovieCard.vue';
import BtnFilter from '../components/UI/BtnFilter.vue';
    export default {
  components: { MovieCard, BtnFilter },
        data(){
            return {
                page: +this.$route.query.page || 1,
                genre: [],
                newLink: '',
                oldLink: '',
                pageSize: 8,
            }
        },
        watch: {
            $route (to) {
              
                //console.log(this.newLink, this.oldLink)
            }
        },
        methods: {
            ...mapMutations([
                'POST_GENRE_FILMS',
                'CHECKBOX',
            ]),
            ...mapGetters([
                'SORT_TEST'
            ]),
            pageNumber(ar){
                this.page = ar;
            },
            genreUrl(genre_engl){
                this.genre = genre_engl;
                console.log(this.genre)
            }
            
        },
        computed: {
            ...mapState([
                'post',
                'postPlaginate',
                'checkbox',
            ]),
            
            messege:{
                get(){
                    return this.checkbox
                },
                set(value){
                    return this.CHECKBOX(value)
                }
            },      
            clickCallback(){  
                let a = []
                this.POST_GENRE_FILMS()
                for(let i = 0; i <  this.SORT_TEST().length; i += this.pageSize) {
                    const chunk =  this.SORT_TEST().slice(i, i + this.pageSize);
                    a.push(chunk)
                }
                
                this.$router.push(`${this.genre}?page=${this.page}`);
                return a[this.page - 1];
            },
            pageCount(){   
                return Math.ceil(this.postPlaginate.length / this.pageSize);
            }
        },
        mounted() {
            this.$store.dispatch('fetchApi');
        },
        created() {
         
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