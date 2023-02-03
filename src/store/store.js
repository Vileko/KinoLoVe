import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        post: [],
        filterPost: [],
        postPlaginate: [],
        ganreFilter: '',
        genre: 'drama',

        checkbox: false, //фильтр по рейтингу
        showBtnFilter: '', //для активной кнопки фильтра

        homeNewFilms: [], //новые фильмы
        homeTop10Films: [], //топ 10 фильмов

        postFavorites: [],  //избранное 
    },
    getters: {
        SORT_TEST(state){
            if(state.checkbox === true){
                state.postPlaginate = state.postPlaginate.sort((a,b) => b.rating_kp - a.rating_kp);
                return state.postPlaginate;
            } else {
                state.postPlaginate = state.postPlaginate.sort((a) => a);
                return state.postPlaginate;
            }
        },
        GENRE_FILTER_ARRAY(state){
            return state.postPlaginate;
        },
        //когда фильм вышел в прокате
        HOME_NEW_FILMS(state){ 
            state.homeNewFilms = state.homeNewFilms.sort((a,b) => {
                return new Date(b.premiere_world) - new Date(a.premiere_world);
            }).slice(0,15)
            return state.homeNewFilms;
        },
        TEST_CHECKBOX(state){
            return state.checkbox;
        },
        HOME_TOP_10_FILMS(state){
            state.homeTop10Films = state.homeTop10Films.sort((a,b) => b.rating_kp - a.rating_kp).slice(0,15);
            return state.homeTop10Films;
        },
    },
    mutations: {
        initialiseStore(state) {
			if(localStorage.getItem('store')) {
                this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}
		},
        REMOVE_POST_FAVORITES(state, postFilm){
            state.postFavorites =  state.postFavorites.filter(ar => ar.id !== postFilm.id)
        },
        POST_ADD_TO_FAVORITES(state, favorites){
            const itemIndex = state.postFavorites.findIndex(value => value.id === favorites.id);
            if(itemIndex < 0){
                state.postFavorites.push(favorites);
                for(let i = 0; i <  state.postFavorites.length; i++){
                    if(favorites.id ===  state.postFavorites[i].id){
                        state.postFavorites[i].active = true;
                    }
                }
            }
        },
        CHECKBOX(state, boolean){
            return state.checkbox = boolean;
        },
        FILTER_POST(state, event){
            state.ganreFilter = event;
        },
        POSTPLAGINATE_GENRE_URL(state, p) {
            state.genre = p;
        },
        POST_GENRE_FILMS(state){     
            setTimeout(() => {
                if(state.genre === 'all'){
                    state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a));
                    
                } 
                if(state.genre === 'drama'){
                    state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a.name_ru == 'драма'));
                } 
                if(state.genre === 'adventure'){
                    state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a.name_ru == 'приключения'));
                }
                if(state.genre === 'comedy'){
                    state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a.name_ru == 'комедия'));
                }
                if(state.genre === 'action-movie'){
                    state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a.name_ru == 'боевик'));
                }
                if(state.genre === 'thriller'){
                    state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a.name_ru == 'триллер'));
                }
                if(state.genre === 'fantasy'){
                    state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a.name_ru == 'фантастика'));
                }
           }, 1000)
        },
        SET_POST(state, post){
            //post.map(ar => ar.active = false)

            state.post = post;
            state.homeNewFilms = post;
            state.homeTop10Films = post; 
        },
        BTN_FILTER_ACTIVE(state, ar){
            state.showBtnFilter = ar;
        },
    },
    actions: {
        fetchApi({commit}){
            axios
                .get('https://kinobd.ru/api/films')
                .then(response  => response.data.data)
                .then(post => {
                    commit('SET_POST', post)
                })
                .catch(error => console.log(error))
        },
    },
})