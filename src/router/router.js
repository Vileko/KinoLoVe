import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Genre from '../views/Genre.vue'
import CardFilm from '../components/movieMap/CardFilm.vue'
import Favorites from '../views/Favorites.vue'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/genre/',
            component: Genre
        },
        {
            path: '/genre/all',
            component: Genre
        },
        {
            path: '/genre/drama',
            component: Genre
        },
        {
            path: '/genre/adventure',
            component: Genre
        },
        {
            path: '/genre/comedy',
            component: Genre
        },
        {
            path: '/genre/action-movie',
            component: Genre
        },
        {
            path: '/genre/thriller',
            component: Genre
        },
        {
            path: '/genre/fantasy',
            component: Genre
        },
        {
            path: '/genre/film/:id',
            component: Home
        },
        {
            path: '/film/:id',
            component: CardFilm
        },
        {
            path: '/Favorites',
            component: Favorites
        },
    ]
})