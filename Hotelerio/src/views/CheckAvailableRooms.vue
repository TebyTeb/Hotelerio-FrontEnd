<template>
  <div class="ppal">
    <div class="container">
      <div class="checkRooms main justify-content-center align-items-center ">
        <h1>Make a Reservation</h1>
        <form>
          <label>
            CheckIn
            <input type="date" class="form-control mb-2" v-model="checkin">
          </label>
          <label class="input">
            CheckOut
            <input type="date" class="form-control mb-2" v-model="checkout">
          </label>
          <button @click.prevent="searchRooms()" type="button" class="btn btn-primary">Search Rooms</button>
        </form>

        <div class="box" v-if="searched">
          <div class="rooms">
            <p class="name">
              Number of Standard Rooms available: {{ standards.length }}
            </p>
            <RouterLink :to="{ name: 'confirm' }">
              <button class="btn btn-secondary" :class="{ hidden: standards.length === 0 }"
                @click="sendRoom(standards[0])">
                Reserve One
              </button>
            </RouterLink>
          </div>

          <div class="rooms">
            <p class="name">
              Number of Double Rooms available: {{ doubles.length }}
            </p>
            <RouterLink :to="{ name: 'confirm' }">
              <button class="btn btn-secondary" :class="{ hidden: doubles.length === 0 }" @click="sendRoom(doubles[0])">
                Reserve One
              </button>
            </RouterLink>
          </div>

          <div class="rooms">
            <p class="name">
              Number of Suite Rooms available: {{ suites.length }}
            </p>
            <RouterLink :to="{ name: 'confirm' }">
              <button class="btn btn-secondary" :class="{ hidden: suites.length === 0 }" @click="sendRoom(suites[0])">
                Reserve One
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import API from "../services/api";
import { RouterLink } from "vue-router";
import { useReservationStore } from "../stores/store";
export default {
  data() {
    return {
      checkin: "",
      checkout: "",
      suites: [],
      doubles: [],
      standards: [],
      searched: false,
      store: useReservationStore(),
    };
  },
  methods: {
    async searchRooms() {
      const response = await API.getAvailableRooms(this.checkin, this.checkout);
      this.suites = response.filter((el) => {
        return el.typeOfRoom === "Suite";
      });
      this.doubles = response.filter((el) => {
        return el.typeOfRoom === "Double";
      });
      this.standards = response.filter((el) => {
        return el.typeOfRoom === "Standard";
      });
      this.searched = true;
    },
    sendRoom({ _id, typeOfRoom }) {
      this.store.setRoomInfo(typeOfRoom, this.checkin, this.checkout, _id);
    },
  },
};
</script>

<style lang="scss" scoped>
.ppal {
  display: flex;
  align-items: center;
}

.checkRooms {
  display: flex;
  flex-direction: column;
}

.checkRooms>h1 {
  margin-bottom: 2rem;
}

.container {
  border: 1px solid grey;
  border-radius: 1rem;
  padding: 2rem;
  background-color: rgba(224, 237, 243, 0.8);
  justify-content: center;
}

.rooms {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 1px solid grey;
  border-radius: 1rem;
}

.box {
  // display:grid;
  // grid-template-columns: 1fr 1fr;
  // grid-template-rows:1fr 1fr 1fr;
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 1rem 3rem;
}
.btn-primary {
  background-color: rgb(30, 138, 134);
  border: 1px solid rgb(30, 138, 134);
}

.btn-primary,
.input {
  margin-left: 0.5rem;
}

.hidden {
  visibility: hidden;
}
</style>
