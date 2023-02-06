export default {
    state: {
        postPlaginate: [],
        genre: '',
        genre_ru: '',
    },
    getters: {
        POSTPLAGINATE_SORT(state, ar, rootState){
            if(rootState.checkbox === true){
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
    },
    mutations: {
        POSTPLAGINATE_GENRE_URL(state, p) {
            state.genre = p;
        },
        GENRE_RU(state, getGanreRu){
            state.genre_ru = getGanreRu;
        },
        
    },
    actions: {
        POST_GENRE_FILMS({state, rootState}){   
            if(state.genre === 'all'){
                state.postPlaginate =  rootState.post.filter(ar => ar.genres.some(a => a)); 
            } else {
                state.postPlaginate =  rootState.post.filter(ar => ar.genres.some(a => a.name_ru === state.genre_ru));
            }
        },
    }

}