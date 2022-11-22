<template>
  <header>
    <nav class="navbar navbar-expand " v-if="!token">
      <div class="container-fluid">
        <h3 class="navbar-brand">HotelerioApp</h3>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <li class="nav-item dropdown" style="list-style-type: none">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Menu
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" :href="'/'">Home</a></li>
              <li><a class="dropdown-item" :href="'/auth'">Register</a></li>
              <li><a class="dropdown-item">Types of rooms</a></li>
              <li><a class="dropdown-item">Contact Info</a></li>
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
              <li><a class="dropdown-item" :href="'/profile'">My Profile</a></li>
              <li><a class="dropdown-item">My Reservation</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" :href="'/personal'">Personal Page</a></li>
              <li><a class="dropdown-item">Types of Rooms</a></li>
              <li><a class="dropdown-item" :href="'/checkAvailableRooms'">Make a Reservation</a></li>
              <li><a class="dropdown-item">Contact Info</a></li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li><a class="dropdown-item" @click="logout">Log Out</a></li> <!-- No FUNCIONA  -->

            </ul>
          </li>
        </div>
        Welcome {{ email }}
        <button @click="logout">Logout</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      token: '',
      email: ''
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      this.token = ''
      localStorage.removeItem('email')
      this.$router.push({ name: 'auth' })
    }
  },
  beforeMount() {
    this.token = localStorage.getItem('token')
    this.email = localStorage.getItem('email')
  },
  // Escuchamos el CustomEvent creado con la funcion login/signup
  mounted() {
    window.addEventListener('localstorage-changed', (event) => {
      this.token = event.detail.token;
      this.email = event.detail.email;
    });
  },
  beforeUnmount() {
    window.removeEventListener('localstorage-changed', (event) => {
      this.token = event.detail.token;
      this.email = event.detail.email;
    });
  }
}
</script>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  width: 100%;
  flex-shrink: 0;
  background-color: grey;
}
</style>

