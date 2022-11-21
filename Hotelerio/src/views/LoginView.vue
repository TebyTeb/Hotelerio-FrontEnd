<template>
  <form class="form">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="newUser.email">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="newUser.password">
  </div>
  <button type="submit" class="btn btn-primary" @click.prevent="loginUser()">Login</button>
</form>
</template>

<script>
import API from '../services/api.js';
export default {
  data() {
    return {
      newUser: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async loginUser() {
      const response = await API.login(this.newUser)
      if (response.error) {
        alert('wrong username/password')
      } else {
        this.$router.push({name: 'checkAvailableRooms'})
      }
    }
  }
};
</script>

<style scoped lang="scss">
.form {
  padding: 15px;
  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}
</style>