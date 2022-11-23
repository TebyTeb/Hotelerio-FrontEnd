<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/NavBar.vue'
import Footer from '../src/components/Footer.vue'
</script>

<template>
  <main class="view bg-img">
    <NavBar class="navbar"/>
    <RouterView class="router-view"/>
    <Footer />
  </main>
</template>

<style scoped lang="scss">
.view {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
}
.router-view {
  flex: 1 0 auto;
  margin-top: 100px;
margin-bottom: 50px;

}
.bg-img {
  background-image: url(./assets/images/reception/recepcion-blur.png);
  background-size: cover;
  background-position: center;
}
.navbar{
  position:fixed;
  top:0;
}
</style>
