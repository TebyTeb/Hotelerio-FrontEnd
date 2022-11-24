<template>
  <div class="container">
    <div class="main">
      <br>
      <br>
      <h1>My Reservations</h1>
      <div v-if="reservDone === true" class="reserv-info">
        <h4>Name: <span style="font-weight: 400;">{{ profile.name }}</span></h4>
        <h4>Surname: <span style="font-weight: 400;">{{ profile.surname }}</span></h4>
        <h4>ID Num: <span style="font-weight: 400;">{{ profile.identification }}</span></h4>
        <h4>CheckIn: <span style="font-weight: 400;">{{ reservation.checkin }}</span></h4>
        <h4>CheckOut: <span style="font-weight: 400;">{{ reservation.checkout }}</span></h4>
        <h4>Room Type: <span style="font-weight: 400;">{{ reservation }}</span></h4>
      </div>
      <div class="no-reserve">
        <h4>No reservations yet</h4>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../services/api'
import { useReservationStore, useAuthStore } from '../stores/store'
export default {
  data() {
    return {

      profile: {},
      reservation: {},
    
      storeReserv: useReservationStore(),
      storeAuth: useAuthStore(),
      reservDone: false
    }
  },
  methods: {
    
  },
  async created() {
    this.profile = await api.getProfile(this.storeAuth.userEmail)
    this.reservation = await api.getReservs(this.profile._id)
  }
}
</script>

<style scoped>
.container {
  border: 1px solid grey;
  border-radius: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 2rem;
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.reserv-info {
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  justify-content: space-around;
  grid-auto-flow: row;
  flex-wrap: wrap;
  width: 65%;
}

.no-reserv {
  margin: 1rem;
  width: 65%;
  align-items: center;
  text-align: center;
}

.buttons {
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  margin-top: 2rem;
}
</style>