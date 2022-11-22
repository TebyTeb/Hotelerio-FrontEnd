<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '../src/components/NavBar.vue'
</script>

<template>
  <NavBar />
  <div class='view'>
    <RouterView />
  </div>
</template>

<style scoped lang="scss">
.view {
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>
