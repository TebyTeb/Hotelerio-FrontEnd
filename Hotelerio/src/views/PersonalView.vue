<script setup>
import PersonalButton from '../components/PersonalButton.vue'
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
  <button class="round-4"></button>
  <button class="round-5"></button>
  <button class="round-6"></button>
</div>

  <div class="tooltip">My profile</div>
 <span><i class="bi bi-person"></i></span>
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
  flex-direction: column;
  align-items: center;
}

.parent button {
  background-color: grey;
  color: white;
  border: none;
  padding: 5px;
  font-size: 31px;
  height: 100px;
  width: 100px;
  box-shadow: 0 2px 4px darkslategray;
  cursor: pointer;
  transition: all 0.2s ease;
}

.parent button:active {
  background-color: #48abe0;
  box-shadow: 0 0 2px darkslategray;
  transform: translateY(2px);
}

.parent button:not(:first-child) {
  margin-top: 10px;
}
.round-4 {
  border-radius: 70%;
  background-image: url(../assets/images/icons/user.png);
  background-size: 100px;
  background-repeat:no-repeat;
}

.round-5 {
  border-radius: 70%;
  background-image: url(../assets/images/icons/calendar.png);
  background-size: 100px;
  background-repeat:no-repeat;
}

.round-6 {
  border-radius: 70%;
  background-image: url(../assets/images/icons/bed.png);
  background-size: 100px;
  background-repeat:no-repeat;
}
</style>
