<template>
  <div class="container">
    <div class="row main justify-content-center align-items-center">
      <div class="col-8 col-md-6 col-lg-4">
        <form class="form-signup">
          <h1 class="h3 mb-3 font-weight-normal">Log in</h1>

          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="text" id="inputEmail" class="form-control mb-1" placeholder="Email address" autofocus=""
            v-model="newUser.email" />

          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control mb-1" placeholder="Password"
            v-model="newUser.password" />

          <button class="btn btn-lg btn-primary btn-block mt-3" v-on:click.prevent="login">
            Log In
          </button>

          <div class="toggle-form">
            <a href="#" v-on:click="toggleForm">I want to create an account</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import API from '../services/api.js'
export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async login() {
      const response = await API.login(this.newUser)
      if (response.error) {
        alert('wrong username/password') // No funciona
      } else {
        this.$router.push({ name: 'home' })
      }
    },
    toggleForm() {
      this.$emit('toggleForm')
    }
  }
}
</script>

<style scoped>
.container {
  border: 1px solid grey;
  border-radius: 1rem;
  padding: 2rem;
}
</style>