<template>
  <div class="container">
    <Login 
      v-if="!signup"
      @toggleForm="toggleForm" 
    />
    <Signup 
      v-else 
      @toggleForm="toggleForm"
    />
  </div>
</template>

<script>
import Login from '../components/Login.vue';
import Signup from '../components/Signup.vue';
export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      signup: false
    }
  },
  methods: {
    toggleForm: function () {
      this.signup = !this.signup;
    }
  }
}
</script>

<style scoped>
.container {
  height: 100%;
  width: 100%;
  margin: 3rem auto;
}
</style>
