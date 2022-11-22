<template>

    <div class="card-header">
        Name
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ this.newUser.name }}</h5>
    </div>
    <div class="card-header">
        Surname
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ this.newUser.surname }}</h5>
    </div>
    <div class="card-header">
        Birthdate
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ this.newUser.birth }}</h5>
    </div>
    <div class="card-header">
        Phone
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ this.newUser.phone }}</h5>
    </div>
    <div class="card-header">
        Identification
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ this.newUser.identification }}</h5>
    </div>
    <div class="card-header">
        Email
    </div>
    <div class="card-body">
        <h5 class="card-title">{{ this.newUser.email }}</h5>
    </div>
</template>

<script>
export default {
    props: {
        newUser: Object
    }
}
</script>

<style scoped>

</style>