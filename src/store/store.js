import { createStore } from 'vuex'
import axios from "axios";

import genre from './modules/genre'
import genreSort from './modules/genreSort'

export default createStore({
    modules: {
        genre,
        genreSort,
    },
    state: {
        post: [],
        checkbox: false,
        showBtnFilter: '', //активные кнопки фильтра по классу
        homeNewFilms: [],
        homeTop10Films: [],
        postFavorites: [],  //избранное 
    },
    mutations: {
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
        initialiseStore(state) {
			if(localStorage.getItem('store')) {
                this.replaceState(
					Object.assign(state, JSON.parse(localStorage.getItem('store')))
				);
			}      
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