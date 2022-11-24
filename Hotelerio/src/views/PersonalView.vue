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
    <div>
      <PersonalButton text="Make a Reservation" link="checkAvailableRooms" />
    </div>
    <br>
    <div>
      <PersonalButton text="Type of Rooms" link="home" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
