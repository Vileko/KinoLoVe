<template>
   <div>
     <Carousel :items-to-show="countSlider">
     <Slide  
      class="poster_block" 
      v-for="p in clickCallback.length> 0 ? clickCallback : ' '" 
      :key="p.id" 
      style="width: 220px"
      @click="$router.push(`/film/${p.id}`)"
    >
        <img 
          class="img_big_poster"
          :src="p.big_poster" 
          alt=""
        >
        <h3 class="title_big_poster">{{p.name_russian}}</h3>
        <div class="open_card">
          <i class="open_button_card"></i>
        </div>
        <div class="rating-films poster_block__rating-films">
          {{p.rating_kp}} / 10
        </div>
      
   
    </Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>>
   </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import MovieCard from '../movieMap/MovieCard.vue'

import { defineComponent } from 'vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default defineComponent({
  data() {
    return {
      width: 0,
      countSlider: 6,
  }},
  props: {
    clickCallback: {
      type: Array,
    }
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    
  },
  methods: {
    test(p){
     
    },
    updateWidth() {
      this.width = window.innerWidth;
      if(this.width > 1145) {
        this.countSlider = 4.4;
      }
      if(this.width < 1145) {
        this.countSlider = 4;
      } 
      if(this.width < 1045) {
        this.countSlider = 3.2;
      }
      if(this.width < 854) {
        this.countSlider = 2.4;
      }
      if(this.width < 650) {
        this.countSlider = 1.6;
      }
      if(this.width < 480) {
        this.countSlider = 1.2;
      }
      
    },
  },
  created(){
    window.addEventListener('resize', this.updateWidth)
    this.updateWidth()
  }
})

</script>

<style>
.carousel__viewport {
  width: 1100px;
}

.carousel__icon {
  color: red;
  background-color: #fff;
  border-radius: 15px;
}


.img_big_poster {
  min-width: 196px;
  height: 294px;
}


.poster_blocks {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.poster_block {
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

.poster_block:hover {
    box-shadow: 0px 0px 50px rgba(196, 28, 28, 0.5);
}

.poster_block::before{
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, transparent, rgb(0, 0, 0, .75));
}

.img_big_poster {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    border-radius: 5.3px;
}

.poster_block:hover .open_card {
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

.poster_block:hover .open_button_card {
    border: solid rgb(255, 0, 0);
    border-width: 0 7px 7px 0;
    display: inline-block;
    padding: 20px;
}

i {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
}

@media screen and (max-width: 1100px) {
    .poster_block:hover .open_card {
        display: none;
    }
}

.title_big_poster {
    padding: 0 15px 15px 10px;
    margin: 0;
    color: #fff;
    z-index: 100;
}

.rating-films {
    color: rgb(253, 253, 253);
    background-color: rgb(187, 53, 53);
    border-bottom-right-radius: 5px;
    padding: 5px;
    font-size: 12px;
}

.poster_block__rating-films {
    position: absolute;
    top: 0;
    left: 0;
}
</style>