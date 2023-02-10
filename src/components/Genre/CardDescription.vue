<template>
    <div class="genre">
        <div 
            class="genre__poster"
            v-for="p in clickCallback" 
            :key="p.id"
            @click="$router.push(`/film/${p.id}`)"
        >
            <img 
                class="genre__img"
                :src="p.big_poster" 
                alt=""
            >
            <h3 class="genre__title">{{p.name_russian}}</h3>
            <div class="genre__open-card">
                <i class="genre__btn"></i>
            </div>
            <div class="genre__rating-films">
                {{p.rating_kp}} / 10
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            clickCallback: {
                type: Array,
            }
        },
    }
</script>

<style scoped>
.genre {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.genre__poster {
    position: relative;
    display: flex;
    align-items: flex-end;
    width: 196px;
    height: 294px;
    z-index: 100;
    margin: 15px;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
    transition: .4s;
}

.genre__poster:hover {
    box-shadow: 0px 0px 50px rgba(196, 28, 28, 0.5);
}

.genre__poster::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgb(0, 0, 0, .75));
}

.genre__poster:hover .genre__open-card{
    position: absolute;
    align-items: center;
    justify-content: center;
    display: flex;
    width: 100%;
    height: 100%;
    background: rgb(0, 0, 0, .7);
    transition: .4s;
    backdrop-filter: blur(4px);
    
}

.genre__poster:hover .genre__btn {
    border: solid rgb(255, 0, 0);
    border-width: 0 7px 7px 0;
    display: inline-block;
    padding: 20px;
}

@media screen and (max-width: 1100px) {
    .genre__poster:hover .genre__open-card {
        display: none;
    }
}

.genre__img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 5.3px;
}

i {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}



.genre__title {
    padding: 0 15px 15px 10px;
    z-index: 100;
    margin: 0;
    color: #fff;
    z-index: 100;
}

.genre__rating-films {
    color: rgb(253, 253, 253);
    background-color: rgb(187, 53, 53);
    border-bottom-right-radius: 5px;
    padding: 5px;
    font-size: 12px;
    position: absolute;
    top: 0px;
}

</style>