import { createStore } from 'vuex'
import axios from "axios";

export default createStore({
    state: {
        post: [],
        filterPost: [],
        postPlaginate: [],
        mainArray: true,
        pageNumber: 1,
        ganreFilter: '',
        btnActiveFilter: false,
        genre: 'all',

        checkbox: false, //фильтр по рейтингу
        showBtnFilter: '', //для активной кнопки фильтра

        homeNewFilms: [], //новые фильмы
        homeTop10Films: [] //топ 10 фильмов
    },
    getters: {
        //когда фильм вышел в прокате
        HOME_NEW_FILMS(state){ 
            state.homeNewFilms = state.homeNewFilms.sort((a,b) => {
                return new Date(b.premiere_world) - new Date(a.premiere_world);
            }).slice(0,15)
            return state.homeNewFilms
        },
        TEST_CHECKBOX(state){
            return state.checkbox;
        },
        HOME_TOP_10_FILMS(state){
            state.homeTop10Films = state.homeTop10Films.sort((a,b) => b.rating_kp - a.rating_kp).slice(0,15);
            return state.homeTop10Films
        },
    },
    mutations: {
        SORT_TEST(state, ar){
            if(state.checkbox === true){
                return ar.sort((a,b) => b.rating_kp - a.rating_kp)
            } else {
                ar.sort(sortRandon)
                function sortRandon(){
                    return Math.random() - 0.5
                }
                
            }
        },
        CHECKBOX(state, boolean){
            return state.checkbox = boolean
        },
        FILTER_POST(state, event){
            state.ganreFilter = event;
        },
        POST_ADD_POST_PLAGINATE(state, p) {
            state.postPlaginate = state.post.filter(ar => ar.genres.some(a => a.name_ru == p))
        },
        POST_GENRE_FILMS(state, genre){
            state.genre = genre;
        },
        SET_POST(state, post){
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