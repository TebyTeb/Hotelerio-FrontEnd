<script setup>
import { RouterLink } from 'vue-router';
</script>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<template>
  <div class="container">
    <br>
    <br>
    <h1>Personal Page</h1>
    <div class="parent">
      <RouterLink class="button round-4" :to="{name:'profile'}"> </RouterLink>
      <RouterLink class="button round-5" :to="{name:'checkAvailableRooms'}"> </RouterLink>
      <RouterLink class="button round-3" :to="{name:'myReservations'}"> </RouterLink>
      <RouterLink class="button round-6" :to="{name:'typeOfRoom'}"> </RouterLink>
    </div>
  </div>

</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

* {
  font-family: sans-serif;
}

body {
  background: grey
}

.parent {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.parent .button {
  background-color: rgb(30, 138, 134);
  color: white;
  border: none;
  padding: 5px;
  font-size: 31px;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
  margin:0  1rem;
}

.parent .button:active {
  background-color:  rgb(20, 88, 86);
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

.parent .button:not(:first-child) {
  margin-top: 10px;
}
.round-3 {
  border-radius: 70%;
  background-image: url(../assets/images/icons/calendar-check.png);
  background-size: 100px;
  background-repeat: no-repeat;
}
.round-4 {
  border-radius: 70%;
  background-image: url(../assets/images/icons/user.png);
  background-size: 100px;
  background-repeat: no-repeat;
}

.round-5 {
  border-radius: 70%;
  background-image: url(../assets/images/icons/calendar.png);
  background-size: 100px;
  background-repeat: no-repeat;
}

.round-6 {
  border-radius: 70%;
  background-image: url(../assets/images/icons/bed.png);
  background-size: 100px;
  background-repeat: no-repeat;
}
</style>
