import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import './assets/sass/main.sass'
import Paginate from "vuejs-paginate-next"


store.subscribe((mutation, state) => {
	localStorage.setItem(('store'), JSON.stringify(state));
});

createApp(App)
    .component('Paginate', Paginate)
    .use(store)
    .use(router)
    .mount('#app')
