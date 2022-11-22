<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/NavBar.vue'
import Footer from '../src/components/Footer.vue'
</script>

<template>
  <NavBar />
  <div class='view'>
    <RouterView />
  </div>
  <Footer />
</template>

<style scoped lang="scss">
.view {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
