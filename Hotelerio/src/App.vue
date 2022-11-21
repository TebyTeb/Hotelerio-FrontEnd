<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="header">
      <h3>Hotelerio</h3>
      <nav v-if="!token">
        <RouterLink to="/">Login</RouterLink> |
        <RouterLink to="/signup">Signup</RouterLink>
      </nav>
      <nav v-else>
        Welcome {{ email }} -
        <button @click="logout">Logout</button>
      </nav>
  </header>

  <RouterView />
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
      this.$router.push({name: 'login'})
    }
  },
  created () {
    this.token = localStorage.getItem('token')
    this.email = localStorage.getItem('email')
  }
}
</script>

<style scoped lang="scss">
.header {
  h3,nav {
    display: inline-block;
    margin-right: 40px;
  }
}
</style>
