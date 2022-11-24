<template>
  <div v-if="profile" class="container" >
    <div class="card">
      <div class="card-header">
        Name
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ this.profile.name }}</h5>
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
        Surname
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ this.profile.surname }}</h5>
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
        Birthdate
      </div>
      <div class="card-body">
        <h5 class="card-title">{{birth}}</h5>
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
        Phone
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ this.profile.phone }}</h5>
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
        Identification
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ this.profile.identification }}</h5>
      </div>
    </div>
    <br>
    <div class="card">
      <div class="card-header">
        Email
      </div>
      <div class="card-body">
        <h5 class="card-title">{{ this.profile.email }}</h5>
      </div>
    </div>
    <br>
  </div>
</template>

<script>
export default {
  props: {
    profile: Object
  },
  computed: {
     birth() {
      if(this.profile.birthDate){
        const date = this.profile.birthDate
      const birthDate = date.split('T')[0]
      return birthDate
      }
      
    } 
  }
}
</script>

<style scoped>

</style>