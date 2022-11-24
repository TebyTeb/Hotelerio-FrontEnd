<template>
  <div class="ppal">
    <div class="container">
      <Login v-if="!signup" @toggleForm="toggleForm" />
      <Signup v-else @toggleForm="toggleForm" />
    </div>
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
.ppal {
  display: flex;
  align-items: center;
}
.container {
  height: auto;
  width: 100%;
  margin: 3rem auto;
}
</style>
