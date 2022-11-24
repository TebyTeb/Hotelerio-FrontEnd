<template>
  <div class="container">
    <div class="row main justify-content-center align-items-center">
      <div class="col-8 col-md-6 col-lg-4">
        <form class="form-signup" >
          <h1 class="h3 mb-3 font-weight-normal">Log in</h1>

          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="text" id="inputEmail" class="form-control mb-1" autofocus=""
            v-model="newUser.email" />

          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control mb-1" 
            v-model="newUser.password" />

          <div class="button">
            <button class="btn btn-lg btn-primary btn-block mt-3" v-on:click.prevent="login">
              Log In
            </button>
          </div>
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
import { useAuthStore } from '../stores/store'

export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      },
      store: useAuthStore()
    }
  },
  methods: {
    async login() {
      const response = await API.login(this.newUser)
      if (response.error) {
        alert('wrong username/password') // No funciona
      } else {
        this.store.login(response.token, response.email)
        this.$router.push({ name: 'personal' })
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
  background-color: rgba(224, 237, 243, 0.8);
  padding: 2rem;
}

.form-signup>h1 {
  text-align: center;
}

.button, .toggle-form {
  text-align: center;
}
.toggle-form {
  margin-top: 1rem;
}
.toggle-form>a {
  color: rgb(30, 138, 134);
}
.btn-primary {
  background-color: rgb(30, 138, 134);
  border: 1px solid rgb(30, 138, 134);
}
</style>