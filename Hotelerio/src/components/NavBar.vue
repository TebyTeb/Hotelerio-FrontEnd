<template>
  <header>
    <nav class="navbar navbar-expand " v-if="!store.isLoggedIn">
      <div class="container-fluid">
        <h3 class="navbar-brand">HotelerioApp</h3>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <li class="nav-item dropdown" style="list-style-type: none">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul class="dropdown-menu">
              <li><RouterLink :to="{ name: 'home' }" class="dropdown-item">Home</RouterLink></li>
              <li><RouterLink :to="{ name: 'auth' }" class="dropdown-item">Register</RouterLink></li>
              <li ><RouterLink :to="{ name: 'typeOfRoom' }" class="dropdown-item">Types of Rooms</RouterLink></li>
            </ul>
          </li>
        </div>
      </div>
    </nav>

    <nav class="navbar navbar-expand " v-else>
      <div class="container-fluid">
        <h3 class="navbar-brand">HotelerioApp</h3>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <li class="nav-item dropdown" style="list-style-type: none;">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink :to="{ name: 'profile' }" class="dropdown-item">My Profile</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'myReservations' }" class="dropdown-item">My Reservations</RouterLink>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <RouterLink :to="{ name: 'personal' }" class="dropdown-item">Personal Page</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'typeOfRoom' }" class="dropdown-item">Types of Rooms</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'checkAvailableRooms' }" class="dropdown-item">Make a Reservation</RouterLink>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" @click="logout">Log Out</a></li>
            </ul>
          </li>
        </div>
        Welcome {{ store.userEmail }}
      </div>
    </nav>
  </header>
</template>

<script>
import { useAuthStore } from '../stores/store'
import { RouterLink } from 'vue-router'

export default {
  data() {
    return {
      store: useAuthStore()
    }
  },
  methods: {
    logout() {
      this.store.logout()
      this.$router.push({ name: 'auth' })
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  z-index: 50;
  height: 50px;
  width: 100%;
  flex-shrink: 0;
  background-color: grey;
}
</style>

