<script setup>
import { RouterLink} from 'vue-router'
</script>

<template>
 <div id="welcome">
  <h1>Hotelerio</h1>
  <h4  style="font-weight:lighter"> Welcome to Hotelerio, a comfortable and quiet hotel in Las Palmas, in a beautiful location near the shore, perfect for any kind of getaway.
  </h4>
 
<RouterLink :to="{name: 'auth'}"><button type="button" class="btn btn-primary btn-lg">Register</button></RouterLink>
</div>
<br>
<br>
<br>
<button type="button" class="btn btn-secondary">Types of rooms</button>
<br>
<button type="button" class="btn btn-secondary">Contact Info</button>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
#welcome{
  display: flex;
  align-items: center;
  flex-direction: column;
}
</style>


