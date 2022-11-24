<script setup>
import PersonalCard from '../components/PersonalCard.vue'
import api from '../services/api'
import { useAuthStore } from '../stores/store';
</script>

<template>
  <br>
  <br>
  <h1>My Profile</h1>
  <PersonalCard :profile="profile" />
  <button @click.prevent="updateProfile">Update Profile</button>
  <button>Change Password</button>
</template>

<script>

export default {
  data() {
    return {
      store: useAuthStore(),
      profile: {}
    }
  },
  methods: {
    async updateProfile() {
    }
  },
async created() {
  this.profile = await api.getProfile(store.userEmail)
}
}
</script>

<style scoped>

</style>