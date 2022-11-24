<template>
  <div class="ppal">
    <div class="container">
      <div class="main">
        <h1>My Reservations</h1>
        <div v-if="reservations.length !== 0" class="reserv-info">
          <ReservCard v-for="(reserv, idx) in reservations" :key="idx" :reserv="reserv"
            :count="reservations.indexOf(reserv)" />
        </div>
        <div v-else class="no-reserve">
          <h4>No reservations yet</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ReservCard from '../components/ReservCard.vue'
import api from '../services/api'
import { useReservationStore, useAuthStore } from '../stores/store'
export default {
  components: {
    ReservCard
  },
  data() {
    return {

      profile: {},
      reservations: [],

      storeReserv: useReservationStore(),
      storeAuth: useAuthStore(),
    }
  },
  computed: {

  },
  async created() {
    this.profile = await api.getProfile(this.storeAuth.userEmail)
    this.reservations = await api.getReservs(this.profile._id)
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
@media(min-width: 800px) {
  .reserv-info {
    flex-wrap: nowrap;
    margin: 1rem 0;
  }
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