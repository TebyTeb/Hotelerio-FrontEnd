<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="container" class="img-fluid position-relative">
    <div id="welcome" class="card">
      <h1 class="card-title">HOTELERIO</h1>
      <p class="card-text" style="font-weight:lighter">Welcome to Hotelerio, a comfortable and quiet hotel in Las
        Palmas, in a beautiful
        location near the shore, perfect for any kind of getaway.</p>
      <RouterLink :to="{ name: 'auth' }"><button type="button" class="btn btn-primary btn-lg">Register</button>
      </RouterLink>
      <br>
      <button type="button" class="btn btn-secondary">Types of rooms</button>
    </div>
  </div>




</template>

<script>
export default {

}
</script>

<style scoped>
#welcome {
  grid-column-start: 2;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin:2rem;
  width: 400px;
  height: 350px
}

#container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows:auto;
  background-image: url('../assets/images/reception/reecpcion.jpg');
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 80vh;
}

.card-title{
  font-family: 'Caligo';
  src: url('../assets/fonts/font_Caligo1.0.ttf');
  font-style: normal;
  font-weight: normal;
}
.card-body {
  color: black
}
</style>


