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
  
      <div class="box">
        <div class="standards" v-if="standards.length !== 0">
          <p>Number of Standard Rooms available: {{standards.length}}</p>
        </div>

        <div class="doubles" v-if="doubles.length !== 0">
          <p>Number of Double Rooms available: {{standards.length}}</p>
        </div>
        
        <div class="suites" v-if="suites.length !== 0">
          <p>Number of Suite Rooms available: {{standards.length}}</p>
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
        suites: [],
        doubles: [],
        standards: []
      }
    },
    methods: {
      async searchRooms() {
        const response = await API.getAvailableRooms(this.checkin, this.checkout)
        this.suites = response.filter(el => {return el.typeOfRoom === 'Suite'})
        this.doubles = response.filter(el => {return el.typeOfRoom === 'Double'})
        this.standards = response.filter(el => {return el.typeOfRoom === 'Standard'})
      }
    }
  }
  </script>

  <style lang="scss" scoped>
  .checkRooms{
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
}
  </style>