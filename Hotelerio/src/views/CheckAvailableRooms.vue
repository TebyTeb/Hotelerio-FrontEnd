<template>
    <div class="checkRooms">
      <h1>Bienvenido a nuestro hotel</h1>
      <form>
        <label>
          CheckIn
          <input type="date" v-model="checkin">
        </label>
        <label>
          CheckOut
          <input type="date" v-model="checkout">
        </label>
        <button @click.prevent="searchRooms()">Search Rooms</button>
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