<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div id="container" class="img-fluid position-relative">
    <div id="welcome" class="card">
      <h1 class="card-title">HOTELERIO</h1>
      <p class="card-text">Welcome to Hotelerio, a comfortable and quiet hotel in Las
        Palmas, in a beautiful
        location near the shore, perfect for any kind of getaway.</p>
      <RouterLink :to="{ name: 'auth' }"><button type="button" class="btn btn-primary btn-lg">Access</button></RouterLink>
      <br>
      <RouterLink :to="{ name: 'typeOfRoom' }"><button type="button" class="btn btn-secondary">Types of rooms</button> </RouterLink>
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
  height: 350px;
}

#container {
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: auto;
}

.card-title{
  font-style: normal;
  letter-spacing: -1px;
  font-weight: 500;
  color: rgb(67, 66, 66);
}

.card{
  border: 1px solid grey;
  border-radius: 1rem;
  background-color: rgba(224, 237, 243, 0.8);
}
.btn-primary {
  background-color: rgb(30, 138, 134);
  border: 1px solid rgb(30, 138, 134);
}
.card-text {
  text-align: justify;
  font-weight: 400;
}
</style>


