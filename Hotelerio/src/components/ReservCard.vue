<template>
  <div class="container" >
    <h5>{{count+1}}</h5>
    <h4>CheckIn: <span style="font-weight: 400;">{{ checkin }}</span></h4>
    <h4>CheckOut: <span style="font-weight: 400;">{{ checkout }}</span></h4>
    <h4>Room Type: <span style="font-weight: 400;">{{ reserv.room.typeOfRoom }}</span></h4>
  </div>
</template>

<script>
export default {
  props: {
    reserv: Object,
    count: Number
  },
  computed: {
    checkin() {
      const date = this.reserv.checkin
      const birthDate = date.split('T')[0]
      return birthDate
    },
    checkout() {
      const date = this.reserv.checkout
      const birthDate = date.split('T')[0]
      return birthDate
    }
  }
}
</script>

<style scoped>
.container {
  margin: 1rem;
  min-width: fit-content;
}
.container h5 {
  text-align: center;
  margin-bottom: 1.5rem;
}
</style>