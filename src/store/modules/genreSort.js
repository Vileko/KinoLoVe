export default {
    getters: {
        HOME_NEW_FILMS(state, ar, rootState){ 
            rootState.homeNewFilms = rootState.homeNewFilms.sort((a,b) => {
                return new Date(b.premiere_world) - new Date(a.premiere_world);
            }).slice(0,15)
            return rootState.homeNewFilms;
        },
        HOME_TOP_10_FILMS(state, ar, rootState){
            rootState.homeTop10Films =  rootState.homeTop10Films.sort((a,b) => b.rating_kp - a.rating_kp).slice(0,15);
            return rootState.homeTop10Films;
        },
    },
}