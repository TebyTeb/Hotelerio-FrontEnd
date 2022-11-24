<template>
  <div class="ppal">
    <div class="container">
      <div v-if="reservDone === false" class="main">
        <h1>Confirm your Reservation</h1>
        <div class="reserv-info">
          <h4>Name: <span style="font-weight: 400;">{{ profile.name }}</span></h4>
          <h4>Surname: <span style="font-weight: 400;">{{ profile.surname }}</span></h4>
          <h4>ID Num: <span style="font-weight: 400;">{{ profile.identification }}</span></h4>
          <h4>CheckIn: <span style="font-weight: 400;">{{ roomInfo.checkin }}</span></h4>
          <h4>CheckOut: <span style="font-weight: 400;">{{ roomInfo.checkout }}</span></h4>
          <h4>Room Type: <span style="font-weight: 400;">{{ roomInfo.type }}</span></h4>
        </div>
        <div class="buttons">
          <button class="btn btn-danger" @click="clearReserv">Cancel</button>
          <button class="btn btn-primary" @click="createReserv">Confirm</button>
        </div>
      </div>

      <div v-else class="main">
        <h1>Reservation Confirmed</h1>
        <div>
          <RouterLink :to="{ name: 'myReservations' }" class="btn btn-primary">Check Reservation</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
import { RouterLink } from 'vue-router'
import { useReservationStore, useAuthStore } from '../stores/store'
export default {
  data() {
    return {
      roomInfo: {},
      profile: {},
      reservation: {},
      createdReserv: {},
      storeReserv: useReservationStore(),
      storeAuth: useAuthStore(),
      reservDone: false
    }
  },
  methods: {
    async createReserv() {
      try {
        this.reservation = {
          room: this.roomInfo.id,
          checkin: this.roomInfo.checkin,
          checkout: this.roomInfo.checkout
        }
        const response = await api.createReserv(this.reservation)
        this.reservDone = true
        this.createdReserv = response
      } catch (error) {
        return { error: error.message }
      }
    },
    clearReserv() {
      this.reservation = {}
      this.roomInfo = {}
      this.$router.push({ name: 'checkAvailableRooms' })
    }
  },
  async created() {
    this.profile = await api.getProfile(this.storeAuth.userEmail)
    this.roomInfo = this.storeReserv.getRoomInfo
  }
}
</script>

<style scoped>
.ppal {
  display: flex;
  align-items: center;
}
.container {
  border: 1px solid grey;
  border-radius: 1rem;
  background-color: rgba(224, 237, 243, 0.8);
  padding: 2rem;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main h1 {
  margin-bottom: 2rem;
}

.reserv-info {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  justify-content: space-around;
  grid-auto-flow: row;
  flex-wrap: wrap;
  width: 70%;
}

.buttons {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-primary {
  background-color: rgb(30, 138, 134);
  border: 1px solid rgb(30, 138, 134);
}

.btn {
  margin-top: 2rem;
}
</style>