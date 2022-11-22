<script setup>
import PersonalCard from '../components/PersonalCard.vue'
import api from '../services/api'
</script>

<template>
  <br>
  <br>
  <h1>My Profile</h1>
  <PersonalCard :profile="profile" />
  <br>
  <button @click.prevent="updateProfile">Update Profile</button>
  <button>Change Password</button>
</template>

<script>

export default {
  data() {
    return {
      profile: {}
    }
  },
  methods: {
    async updateProfile() {
    }
  },
async created() {
  this.profile = await api.getProfile(localStorage.email)
}
}
</script>

<style scoped>

</style>