<template>
<div class="card" style="width: 40rem;">
  <form class="row g-3">
      <div class="col-md-6">
        <label class="form-label">Name</label>
        <input type="text" class="form-control" v-model="newUser.name">
      </div>
      <div class="col-md-6">
        <label class="form-label">Surname</label>
        <input type="text" class="form-control" v-model="newUser.surname">
      </div>
      <div class="col-12">
        <label class="form-label">Phone</label>
        <input type="phone" class="form-control" v-model="newUser.phone">
      </div>

      <div class="col-md-6">
        <label class="form-label">Birthdate</label>
        <input type="date" class="form-control" v-model="newUser.birthdate">
      </div>
      <div class="col-md-6">
        <label class="form-label">ID</label>
        <input type="text" class="form-control" v-model="newUser.identification">
      </div>
      <div class="col-md-6">
    <label for="inputEmail4" class="form-label">Email address</label>
    <input type="email" class="form-control" id="inputEmail4" v-model="newUser.email">
  </div>
  <div class="col-md-6">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4" v-model="newUser.password">
  </div>
      <div class="col-12">
        <button type="submit" class="btn btn-primary" @click="signupUser">Sign up</button>
      </div>
    </form>
</div>

    
</template>

<script>
import API from '../services/api.js';
export default {
  data() {
    return {
      newUser: {
        name: '',
        surname: '',
        birthdate: '',
        phone:'',
        identification: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async signupUser() {
      const response = await API.signup(this.newUser)
      if (response.error) {
        alert('Error creating account')
      } else {
        this.$router.push({ name: 'checkAvailableRooms' })
      }
    }
  }
};
</script>

<style scoped lang="scss">
.card{
  padding: 2rem;
}
.form {
  padding: 15px;
  background-color: rgb(181, 229, 255);


  label {
    display: block;
    padding: 5px;
    margin-top: 10px;
  }
}
</style>