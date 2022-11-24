<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/NavBar.vue'
import Footer from '../src/components/Footer.vue'
import { useAuthStore } from './stores/store'
import { def } from '@vue/shared';
</script>

<script>
export default {
  data() {
    return {
      store: useAuthStore(),
      loggedIn: true
    }
  },
}
</script>

<template>
  <main class="view" :class="{ 'bg-img-blur': store.isLoggedIn === true, 'bg-img': store.isLoggedIn === false}">
    <NavBar class="navbar" />
    <RouterView class="router-view" />
    <Footer />
  </main>
</template>

<style scoped lang="scss">
.view {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  //font-family: 'Poppins', sans-serif;
  //color: rgb(67, 66, 66);
}

.router-view {
  flex: 1 0 auto;
  margin-top: 100px;
  margin-bottom: 50px;

}

.bg-img-blur {
  background-image: url(./assets/images/reception/recepcion-blur.png);
  background-size: cover;
  background-position: center;
}

.bg-img {
  background-image: url('./assets/images/reception/reecpcion.jpg');
  background-size: cover;
  background-position: center;
}

.navbar {
  position: fixed;
  top: 0;
}
</style>

<style>
body {
  font-family: 'Poppins', sans-serif;
  color: rgb(67, 66, 66);
  /* font-size: calc(16px + 1vw);
  line-height: calc(1.1em + 0.5vw); */
}
</style>

