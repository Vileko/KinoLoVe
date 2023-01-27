import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Genre from '../views/Genre.vue'
import CardFilm from '../components/movieMap/CardFilm.vue'

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
            path: '/genre/:id',
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
    ]
})