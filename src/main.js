import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import Paginate from "vuejs-paginate-next"

import './style/style.css'
import './style/mediaCarouselV.css'
import './style/mediaNavBar.css'

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

createApp(App)
    .component('Paginate', Paginate)
    .use(store)
    .use(router)
    .mount('#app')
