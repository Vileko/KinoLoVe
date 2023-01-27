import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import Paginate from "vuejs-paginate-next"

import './style/style.css'
import './style/mediaCarouselV.css'
import './style/mediaNavBar.css'

createApp(App)
    .component('Paginate', Paginate)
    .use(store)
    .use(router)
    .mount('#app')
