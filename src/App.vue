<template>
  <div>
    <header class="header">
      <div class="nav-bar container">
        <div>
          <p class="test__class">K<span>i</span>no<span>LoVe</span>.ru</p>
        </div>
        <nav class="menu">
          <router-link class="router menu__router" to="/">Главная</router-link>
          <router-link class="router menu__router" to="/genre/all">Жанры</router-link>
          <router-link class="router menu__router" to="/">Избранные</router-link>
        </nav>
        <div class="test__class">
          <input type="text" placeholder="Поиск">
        </div>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
import {mapMutations} from 'vuex'

  export default {
    watch: {
    '$route' (to) {
      this.POSTPLAGINATE_GENRE_URL(to.path.split('/')[2]);
      this.BTN_FILTER_ACTIVE(to.path.split('/')[2])
    }
  },
    methods: {
      ...mapMutations([
        'POSTPLAGINATE_GENRE_URL',
        'BTN_FILTER_ACTIVE'
      ]),
    },
  }
</script>

<style scoped>
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1000;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {background-color: #ddd;}

.dropdown:hover .dropdown-content {display: block;}

.dropdown:hover .dropbtn {background-color: #3e8e41;}


.header {
  display: flex;
}

input {
  width: 150px;
  border-radius: 5px;
  border: none;
  height: 24px;
  font-size: 12px;
  padding: 5px;
}

.nav-bar span {
  color: red;
}

.test__class {
  color: #fff;
  font-size: 18px;
  font-weight: 800;
}

.nav-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
}

.header {
  background-color: rgb(34 34 34 / 80%);
  box-shadow: 0 0 50px 0 rgb(0 0 0 / 50%);
}

.menu {
  display: flex;
  justify-content: center;
  color: #fff;
}

.menu a {
  color: rgb(182, 182, 182);
  
  text-decoration: none;
}

.menu a:hover {
  color: rgb(238, 238, 238);
}

.menu__router:not(:nth-child(1)){
  margin-left: 20px;
}
</style>