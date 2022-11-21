<template>
  <main>
    
    <h1>SIGNUP</h1>
    <form class="form">
      <label>
        NAME
        <input type="text" v-model="newUser.name" />
      </label>

      <label>
        SURNAME
        <input type="text" v-model="newUser.surname"/>
      </label>

      <label>
        BIRTHDATE
        <input type="date" v-model="newUser.surname"/>
      </label>

      <label>
        ID
        <input type="text" v-model="newUser.identification"/>
      </label>

      <label>
        PHONE NUMBER
        <input type="number" v-model="newUser.identification" placeholder='+34'/>
      </label>

      <label>
        EMAIL
        <input type="email" v-model="newUser.email"/>
      </label>

      <label>
        PASSWORD
        <input type="password" v-model="newUser.password" />
      </label>

      <button @click.prevent="signupUser()">SIGNUP</button>
    </form>
  </main>
</template>

<script>
import API from '../services/api.js';
export default {
  data() {
    return {
      newUser: {
        name: '',
        surname: '',
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
        this.$router.push({name: 'checkAvailableRooms'})
      }
    }
  }
};
</script>

<style scoped lang="scss">
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