<template>
  <header>
    <nav class="navbar navbar-expand " v-if="!store.isLoggedIn">
      <div class="container-fluid">
        <h3><RouterLink :to="{ name: 'home' }" class="navbar-brand">HOTELERIO</RouterLink></h3>
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

    <nav v-else class="navbar navbar-expand ">
      <div class="container-fluid">
        <h3><RouterLink :to="{ name: 'home' }" class="navbar-brand">HOTELERIO</RouterLink></h3>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <li class="nav-item dropdown" style="list-style-type: none;">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul class="dropdown-menu">
              <li>
                <RouterLink :to="{ name: 'personal' }" class="dropdown-item">Personal Page</RouterLink>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
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
                <RouterLink :to="{ name: 'checkAvailableRooms' }" class="dropdown-item">Make a Reservation</RouterLink>
              </li>
              <li>
                <RouterLink :to="{ name: 'typeOfRoom' }" class="dropdown-item">Types of Rooms</RouterLink>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" @click="logout" style="cursor: pointer;">Log Out</a></li>
            </ul>
          </li>
        </div>
        <span>
          Welcome {{ store.userEmail }}
        </span>
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
  height: 80px;
  width: 100%;
  flex-shrink: 0;
  background-color: rgb(224, 237, 243);
  color: rgb(67, 66, 66);
}
.navbar {
  width: 100%;
}
.navbar-brand {
  font-style: normal;
  letter-spacing: -3px;
  font-weight: bold;
  font-size: 29px;
  color: rgb(30, 138, 134);
}
.nav-link {
  font-size: 22px;
}
</style>

