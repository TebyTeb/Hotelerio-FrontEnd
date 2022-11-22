<template>
    <div class="checkRooms">
      <br>
      <br>
      <h1>Make a Reservation</h1>
      <form>
        <label>
          CheckIn
          <input type="date" v-model="checkin">
        </label>
        <label>
          CheckOut
          <input type="date" v-model="checkout">
        </label>
        <button @click.prevent="searchRooms()" type="button" class="btn btn-primary">Search Rooms</button>
      </form>
  
      <div class="rooms">
        <div class="room" v-for="(room,idx) in rooms" :key="idx">
          {{ room._id }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import API from '../services/api'
  export default {
    data() {
      return {
        checkin: '',
        checkout: '',
        rooms: []
      }
    },
    methods: {
      async searchRooms() {
        this.rooms = await API.getAvailableRooms(this.checkin, this.checkout)
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  .checkRooms{
  display: flex;
  align-items: center;
  flex-direction: column;
}
  </style>